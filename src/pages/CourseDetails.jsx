import { useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();

  const courses = {
    1: {
      name: "React Development",
      duration: "8 Weeks",
      description: "Learn React, JSX, components, props, state and hooks.",
    },

    2: {
      name: "Python Programming",
      duration: "10 Weeks",
      description: "Learn Python basics, functions, data structures and algorithms.",
    },
  };

  const course = courses[id];

  if (!course) {
    return (
      <div className="page">
        <h1>Course Not Found</h1>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>{course.name}</h1>

      <p>
        <strong>Course ID:</strong> {id}
      </p>

      <p>
        <strong>Duration:</strong> {course.duration}
      </p>

      <p>
        <strong>Description:</strong> {course.description}
      </p>
    </div>
  );
}

export default CourseDetails;