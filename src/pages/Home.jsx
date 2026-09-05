import { useStudent } from "../context/StudentContext";

function Home() {
  const student = useStudent();

  return (
    <div className="page">
      <h1>Welcome to Student Course Management</h1>

      <h2>Student Information</h2>

      <p>
        <strong>Name:</strong> {student.name}
      </p>

      <p>
        <strong>Course:</strong> {student.course}
      </p>

      <p>
        <strong>Semester:</strong> {student.semester}
      </p>
    </div>
  );
}

export default Home;