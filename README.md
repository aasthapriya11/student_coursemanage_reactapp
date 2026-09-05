---

# 📙 Practical Assignment 3 — README


```
# Practical Assignment 3 – Student Course Management Application

## Aim

To create a Student Course Management Application using React Router and Context API.

## Description

This project is a React-based Student Course Management Application.

The application contains Home, Courses, and About pages. React Router is used to implement navigation between different pages.

Dynamic course routes are implemented using `/course/:id`, allowing different course details to be displayed based on the course ID.

The Context API is used to manage shared student information across components without passing props through multiple levels.

## Technologies Used

- React.js
- JavaScript
- JSX
- React Router DOM
- Context API
- CSS
- Vite

## Features

- Home page
- Courses page
- About page
- Navigation using React Router
- Dynamic course routes
- Course route `/course/1`
- Course route `/course/2`
- Context API for shared student information
- Functional components
- JSX
- CSS styling

## Pages

### Home

Displays the shared student information such as:

- Student Name
- Course
- Semester

### Courses

Displays available courses with links to their individual course details.

### Course Details

Uses a dynamic route:

```text
/course/:id

Examples:

/course/1
/course/2
About

Provides information about the Student Course Management Application.

Context API

The Context API is used to share student information between components.

The shared information includes:

Name: Priya
Course: B.Tech Computer Science
Semester: 4th Semester
React Router

React Router is used for page navigation.

The application contains the following routes:

/               → Home
/courses        → Courses
/course/:id     → Course Details
/about          → About
Project Structure
student-course-management
│
├── public/
│
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   │
│   ├── context/
│   │   └── StudentContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Courses.jsx
│   │   ├── CourseDetails.jsx
│   │   └── About.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
How to Run
Clone the repository.
git clone <repository-url>
Open the project folder.
cd student-course-management
Install dependencies.
npm install
Start the development server.
npm run dev
Open the local URL shown in the terminal.
