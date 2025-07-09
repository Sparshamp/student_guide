/*web tech assignment 3*/

/*import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedTasksCount = tasks.filter((task) => task.completed).length;

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>To-Do List</h1>
      <TodoForm addTask={addTask} updateTask={updateTask} editingTask={editingTask} />
      <div>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onEdit={editTask}
            onDelete={deleteTask}
            onToggleComplete={toggleComplete}
          />
        ))}
      </div>
      <h3>Total Completed Tasks: {completedTasksCount}</h3>
    </div>
  );
}

export default App;*/


/*webtech assignment 3 final*/

/*import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const editTask = (task) => {
    setEditingTask(task);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed, status: task.completed ? 'Pending' : 'Completed' } : task
      )
    );
  };

  const completedTasksCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="app-container">
      <h1>To-Do List</h1>
      <TodoForm addTask={addTask} updateTask={updateTask} editingTask={editingTask} />
      <div className="task-list">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onEdit={editTask}
            onDelete={deleteTask}
            onToggleComplete={toggleComplete}
          />
        ))}
      </div>
      <h3>Total Completed Tasks: {completedTasksCount}</h3>
    </div>
  );
}

export default App;*/


/*webtech student guide website*/

/*import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const courseData = {
    "Class 5-10": (
      <div>
        <h3>School Exams</h3>
        <ul>
          <li>Navodaya for 5th</li>
          <li>NMMS</li>
          <li>Navodaya for 9th</li>
          <li>NTSE</li>
          <li>KVPY</li>
          <li>Olympiad</li>
        </ul>
      </div>
    ),
    // Add additional options here as shown in the previous code
  };

  return (
    <div className="App">
      <header>
        <h3>Student Guide</h3>
      </header>

      <main>
        <h2>Select Course</h2>
        <select onChange={handleCourseChange} value={selectedCourse}>
          <option value="" disabled>Select an option</option>
          <option value="Class 5-10">Class 5-10</option>
          
        </select>

        <div className="course-content">
          {selectedCourse ? courseData[selectedCourse] : <p>Please select a course to see details.</p>}
        </div>
      </main>
    </div>
  );
}

export default App;*/


/*web tech student guide miniproject working*/

/*import React, { useState } from 'react';
import './components/mainstyle.css';
import Home from './components/Home';
import CompetitiveExams from './components/CompetitiveExams';
import Interests from './components/Interests';
import Help from './components/Help';
import Navbar from './components/Navbar';

function App() {
  const [selectedPage, setSelectedPage] = useState('home');

  const renderPage = () => {
    switch (selectedPage) {
      case 'competitiveExams':
        return <CompetitiveExams setSelectedPage={setSelectedPage} />;
      case 'interests':
        return <Interests />;
      case 'help':
        return <Help />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar setSelectedPage={setSelectedPage} />
      <section>{renderPage()}</section>
    </div>
  );
}

export default App;
*/

/*
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './components/mainstyle.css'; // Assuming mainstyle.css is in components folder

// Component Imports
import Home from './components/Home'; // From the first App.js
import CompetitiveExams from './components/CompetitiveExams';
import Interests from './components/Interests';
import Help from './components/Help';
import UGCoursesPage from './components/UGCoursesPage'; // From the second App.js
import EngineeringPage from './components/EngineeringPage';
import BCAPage from './components/BcaPage';
import Medical from './components/MedicalPage';

function Navigation({ setSelectedPage }) {
  const navigate = useNavigate();

  const handleCourseChange = (e) => {
    const selectedCourse = e.target.value;
    if (selectedCourse) {
      navigate(selectedCourse); // Navigate using React Router
      setSelectedPage(null); // Reset dynamic rendering logic
    }
  };

  return (
    <header className="navbar">
      <Link to="/" onClick={() => setSelectedPage('home')}>HOME</Link>
      <div>
        <span>SELECT COURSE</span>
        <select onChange={handleCourseChange}>
          <option value="" disabled>Select option</option>
          <option value="/class5-10">Class 5-10</option>
          <option value="/diploma">Diploma</option>
          <option value="/puscience">PU-Science</option>
          <option value="/pucommerce">PU-Commerce</option>
          <option value="/ug-courses">UG Courses</option>
          <option value="/competitiveexams">Competitive Exams</option>
        </select>
      </div>
      <Link to="/interests">INTERESTS</Link>
      <Link to="/help">HELP</Link>
    </header>
  );
}

function App() {
  const [selectedPage, setSelectedPage] = useState('home'); // For dynamic rendering

  const renderDynamicPage = () => {
    switch (selectedPage) {
      case 'competitiveExams':
        return <CompetitiveExams setSelectedPage={setSelectedPage} />;
      case 'interests':
        return <Interests />;
      case 'help':
        return <Help />;
      default:
        return <Home />;
    }
  };

  return (
    <Router>
      <div className="App">
   
        <Navigation setSelectedPage={setSelectedPage} />

       
        {selectedPage && (
          <section>
            {renderDynamicPage()}
          </section>
        )}

      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/class5-10" element={<h1>Class 5-10 Page</h1>} />
          <Route path="/diploma" element={<h1>Diploma Page</h1>} />
          <Route path="/puscience" element={<h1>PU Science Page</h1>} />
          <Route path="/pucommerce" element={<h1>PU Commerce Page</h1>} />
          <Route path="/ug-courses" element={<UGCoursesPage />} />
          <Route path="/competitiveexams" element={<CompetitiveExams setSelectedPage={setSelectedPage} />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/help" element={<Help />} />
          <Route path="/engineering" element={<EngineeringPage />} />
          <Route path="/bca" element={<BCAPage />} />
          <Route path="/medical" element={<Medical />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
*/

//miniproject final 
/*import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import './project/mainstyle.css';
// In index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './project/SignUp';
import LogIn from './project/LogIn';
import Home from './project/Home';
import Class510 from './project/Class510';
import PUC from './project/PUC';
import UgCourses from './project/UgCourses';
import Engineering from './project/Engineering';
import Medical from './project/Medical';
import Bca from './project/Bca'
import CompetitiveExams from './project/CompetitiveExams';
import Interests from './project/Interests';
import Help from './project/Help';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem('isLoggedIn') === 'true' // Initialize from localStorage
    );

    // Update localStorage whenever isLoggedIn changes
    useEffect(() => {
        localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LogIn setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/home" element={isLoggedIn ? <Home /> : <LogIn setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/class510" element={<Class510 />} />
                <Route path="/puc" element={<PUC />} />
                <Route path="/ugCourses" element={<UgCourses />} />
                <Route path="/engineering" element={<Engineering />} />
                <Route path="/medical" element={<Medical />} />
                <Route path="/bca" element={<Bca />} />
                <Route path="/competitiveExams" element={<CompetitiveExams />} />
                <Route path="/interests" element={<Interests />} />
                <Route path="/help" element={<Help />} />
            </Routes>
        </Router>
    );
}

export default App;
*/

import React, { useState } from 'react';
// import './AccessLogs1.css';
import HealthChainLogin from './codeblitz/index.js';
import DoctorAuth from './codeblitz/DoctorAuth.js';
import PatientLogin from './codeblitz/patientlogin.js';
import PatientRegistration from './codeblitz/patientSignup.js'
import AccessLogs from './codeblitz/AccessLogs.js'
import DoctorDashboard from './codeblitz/hdashboard.js'
import PatientDashboard from './codeblitz/pdashboard.js'
import {BrowserRouter, Routes,Route} from 'react-router-dom'


function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HealthChainLogin/>}></Route>
          <Route path='/doctersignup' element={<DoctorAuth/>}></Route>
          <Route path='/patientlogin' element={<PatientLogin/>}></Route>
          <Route path='/patientsignup' element={<PatientRegistration/>}></Route>
          <Route path='/AccessLogs' element={<AccessLogs/>}></Route>
          <Route path='/DoctorDashboard' element={<DoctorDashboard/>}></Route>
          <Route path='/PatientDashboard' element={<PatientDashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
  
}

export default App;