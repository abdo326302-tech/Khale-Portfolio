import TechnicalSkills from '../TechnicalSkills'

export default function TechnicalSkillsExample() {
  const skillCategories = [
    {
      category: "Backend",
      skills: ["Node.js", "TypeScript", "Express"]
    },
    {
      category: "Frontend",
      skills: ["Angular", "HTML", "CSS", "JavaScript"]
    },
    {
      category: "Programming",
      skills: ["C++", "OOP", "Data Structures"]
    },
    {
      category: "Databases",
      skills: ["SQL", "NoSQL"]
    },
    {
      category: "Other Skills",
      skills: ["API Design", "Data Analysis"]
    }
  ];

  return <TechnicalSkills skillCategories={skillCategories} />
}
