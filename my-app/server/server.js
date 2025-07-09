/*//for student guide website...
const jwt = require('jsonwebtoken');
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Failed to connect to MongoDB:', err);
});

// User Schema (including username)
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// User Model
const User = mongoose.model('User', userSchema);

// SignUp Route (now includes username)
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists with this email or username.' });
    }

    // Hash the password before saving to DB
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully!' });
});

// SignIn Route (now verifies username and password)
app.post('/signin', async (req, res) => {
    const { username, email, password } = req.body;

    // Check if user exists by username or email
    const user = await User.findOne({ $or: [{ username }, { email }] });
    if (!user) {
        return res.status(400).json({ message: 'Account doesn\'t exist with this username or email.' });
    }


    // Compare entered password with the stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Your credentials are incorrect.' });
    }


    res.status(200).json({ message: 'Signed in successfully!' });
});


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
*/

//for decentralised hospital management system
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
const PORT = 5000; // Running server & frontend on the same port
const MONGO_URI = 'mongodb://localhost:27017/network';

app.use(cors());
app.use(express.json());

// **MongoDB Connection using Mongoose**
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// **Mongoose Schemas**
const PatientSchema = new mongoose.Schema({
    firstName: String, lastName: String, dateOfBirth: String,
    gender: String, email: String, phone: String, address: String,
    medicalHistory: String, password: String, grantedDoctors: [String]
});
const DoctorSchema = new mongoose.Schema({
    name: String, licenseNumber: String, hospital: String,
    email: String, password: String, accessRequests: [String]
});
const MedicalRecordSchema = new mongoose.Schema({
    patientEmail: String, doctorEmail: String, ipfsHash: String, timestamp: Date
});

const Patient = mongoose.model('Patient', PatientSchema);
const Doctor = mongoose.model('Doctor', DoctorSchema);
const MedicalRecord = mongoose.model('MedicalRecord', MedicalRecordSchema);

// **Signup & Login Endpoints**
async function hashPassword(password) { return await bcrypt.hash(password, 10); }

app.post('/api/patient/signup', async (req, res) => {
    const { firstName, lastName, dateOfBirth, gender, email, phone, address, medicalHistory, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'All fields are required' });

    const existingUser = await Patient.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await hashPassword(password);
    const newUser = new Patient({ firstName, lastName, dateOfBirth, gender, email, phone, address, medicalHistory, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'Signup successful!' });
});

app.post('/api/patient/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await Patient.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) return res.status(401).json({ message: 'Invalid credentials' });

    res.status(200).json({ message: 'Login successful', user });
});

app.post('/api/doctor/signup', async (req, res) => {
    const { name, licenseNumber, hospital, email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'All fields are required' });

    const existingUser = await Doctor.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already exists' });

    const hashedPassword = await hashPassword(password);
    const newUser = new Doctor({ name, licenseNumber, hospital, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: 'Signup successful!' });
});

app.post('/api/doctor/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await Doctor.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) return res.status(401).json({ message: 'Invalid credentials' });

    res.status(200).json({ message: 'Login successful', user });
});

// **Access Request Handling**
app.post('/api/doctor/request-access', async (req, res) => {
    const { doctorEmail, patientEmail } = req.body;
    const doctor = await Doctor.findOne({ email: doctorEmail });
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });

    doctor.accessRequests.push(patientEmail);
    await doctor.save();
    res.status(200).json({ message: 'Access request sent to patient' });
});

app.post('/api/patient/grant-access', async (req, res) => {
    const { patientEmail, doctorEmail } = req.body;
    const patient = await Patient.findOne({ email: patientEmail });
    if (!patient) return res.status(404).json({ message: 'Patient not found' });

    if (!patient.grantedDoctors.includes(doctorEmail)) {
        patient.grantedDoctors.push(doctorEmail);
        await patient.save();
    }
    res.status(200).json({ message: 'Access granted to doctor' });
});

app.post('/api/patient/revoke-access', async (req, res) => {
    const { patientEmail, doctorEmail } = req.body;
    const patient = await Patient.findOne({ email: patientEmail });
    if (!patient) return res.status(404).json({ message: 'Patient not found' });

    patient.grantedDoctors = patient.grantedDoctors.filter(email => email !== doctorEmail);
    await patient.save();
    res.status(200).json({ message: 'Access revoked' });
});

// **Medical Records Storage (IPFS/Filecoin)**
app.post('/api/doctor/upload-record', async (req, res) => {
    const { patientEmail, doctorEmail, ipfsHash } = req.body;

    const patient = await Patient.findOne({ email: patientEmail });
    if (!patient || !patient.grantedDoctors.includes(doctorEmail)) {
        return res.status(403).json({ message: 'Access denied' });
    }

    const newRecord = new MedicalRecord({ patientEmail, doctorEmail, ipfsHash, timestamp: new Date() });
    await newRecord.save();
    res.status(201).json({ message: 'Medical record stored' });
});

app.get('/api/patient/records/:email', async (req, res) => {
    const { email } = req.params;
    const records = await MedicalRecord.find({ patientEmail: email });
    res.status(200).json(records);
});

// **Serving React Frontend**
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// **Start Server**
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
