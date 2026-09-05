import { createContext, useContext } from "react";

const StudentContext = createContext();

export function StudentProvider({ children }) {
  const student = {
    name: "Priya",
    course: "B.Tech Computer Science",
    semester: "4th Semester",
  };

  return (
    <StudentContext.Provider value={student}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  return useContext(StudentContext);
}