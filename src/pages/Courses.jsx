import { Link } from "react-router-dom";

function Courses() {
  return (
    <div className="page">
      <h1>Available Courses</h1>

      <div className="courses">
        <div className="course-card">
          <h2>React Development</h2>
          <p>Learn React, JSX, components and hooks.</p>
          <Link to="/course/1">View Course</Link>
        </div>

        <div className="course-card">
          <h2>Python Programming</h2>
          <p>Learn Python programming and problem solving.</p>
          <Link to="/course/2">View Course</Link>
        </div>
      </div>
    </div>
  );
}

export default Courses;