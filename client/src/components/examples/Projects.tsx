import Projects from '../Projects'

export default function ProjectsExample() {
  const projects = [
    {
      title: "Book-Hall",
      description: "A comprehensive backend solution built with modern technologies, focusing on scalability and performance optimization.",
      category: "Real-world backend solution addressing practical needs",
      technologies: ["Backend", "Node.js", "TypeScript"]
    },
    {
      title: "10+ Additional Projects",
      description: "A collection of full-stack projects demonstrating expertise in both frontend and backend development with clean code principles.",
      category: "Focused on scalability, performance, and clean architecture",
      technologies: ["Full Stack", "Angular", "Express"]
    }
  ];

  return <Projects projects={projects} />
}
