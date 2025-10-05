import Courses from '../Courses'

export default function CoursesExample() {
  const courses = [
    "Backend Development with Node.js & TypeScript",
    "Frontend Development with Angular",
    "C++ & OOP Principles",
    "Database Design & Querying",
    "Data Analysis Fundamentals"
  ];

  return <Courses courses={courses} />
}
