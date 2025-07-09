import React, { useState } from 'react';
import './App.css'; // Import your CSS file here

function App() {
  // State to keep track of the selected course or exam
  const [selectedCourse, setSelectedCourse] = useState('');

  // Function to handle course selection
  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  // Data for different courses/exams
  const courseData = {
    "Class 5-10": (
      <div>
        <h3>School Exams</h3>
        <p>Details for competitive exams for students in Class 5-10.</p>
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
    "Diploma": (
      <div>
        <h3>Diploma Exams</h3>
        <p>Information for students in diploma courses.</p>
        <ul>
          <li>Polytechnic Entrance Exam</li>
          <li>Diploma CET</li>
        </ul>
      </div>
    ),
    "PU-Science": (
      <div>
        <h3>PU Science Exams</h3>
        <p>Details for competitive exams for PU Science students.</p>
        <ul>
          <li>KCET</li>
          <li>JEE Mains</li>
          <li>JEE Advanced</li>
          <li>NEET</li>
          <li>KVPY</li>
          <li>Olympiad</li>
        </ul>
      </div>
    ),
    "PU-Commerce": (
      <div>
        <h3>PU Commerce Exams</h3>
        <p>Details for competitive exams for PU Commerce students.</p>
        <ul>
          <li>CUET</li>
          <li>CA Foundation</li>
          <li>CPT</li>
          <li>CMA Foundation</li>
        </ul>
      </div>
    ),
    "UG courses": (
      <div>
        <h3>Undergraduate Exams</h3>
        <p>Details for competitive exams for UG courses.</p>
        <ul>
          <li>PG-CET</li>
          <li>KMAT</li>
          <li>GATE</li>
          <li>KAS</li>
          <li>CAT</li>
          <li>MAT</li>
          <li>UPSC</li>
        </ul>
      </div>
    ),
    "Competitive Exams": (
      <div>
        <h3>General Competitive Exams</h3>
        <p>Information about various general competitive exams.</p>
        <ul>
          <li>UPSC Civil Services</li>
          <li>SSC Exams</li>
          <li>Bank PO Exams</li>
          <li>Railway Recruitment Board Exams</li>
        </ul>
      </div>
    )
  };

  return (
    <div className="App">
      <header>
        <h3>Student Guide</h3>
        <nav>
          <a href="#home">Home</a>
          <a href="#interests">Interests</a>
          <a href="#help">Help</a>
        </nav>
      </header>

      <main>
        <h2>Select Course</h2>
        <select onChange={handleCourseChange} value={selectedCourse}>
          <option value="" disabled>Select an option</option>
          <option value="Class 5-10">Class 5-10</option>
          <option value="Diploma">Diploma</option>
          <option value="PU-Science">PU-Science</option>
          <option value="PU-Commerce">PU-Commerce</option>
          <option value="UG courses">UG Courses</option>
          <option value="Competitive Exams">Competitive Exams</option>
        </select>

        <div className="course-content">
          {selectedCourse ? courseData[selectedCourse] : <p>Please select a course to see details.</p>}
        </div>
      </main>
    </div>
  );
}

export default App;
