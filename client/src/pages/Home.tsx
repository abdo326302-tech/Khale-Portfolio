import Hero from "@/components/Hero";
import About from "@/components/About";
import TechnicalSkills from "@/components/TechnicalSkills";
import SoftSkills from "@/components/SoftSkills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Courses from "@/components/Courses";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const technicalSkillCategories = [
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

  const softSkills = [
    "Leadership",
    "Problem Solving",
    "Presentation Skills",
    "Public Speaking",
    "Communication Skills"
  ];

  const servicePackages = [
    {
      name: "Starter Package",
      description: "Basic web presence",
      duration: "1–2 weeks",
      features: [
        "Responsive Frontend Development",
        "Basic Optimization & Security",
        "Deployment & Hosting Support",
        "Post-Launch Support"
      ],
      techStack: ["HTML/CSS", "JavaScript"],
      bestFor: "Small businesses needing basic online presence"
    },
    {
      name: "Professional Package",
      description: "Complete business platform",
      duration: "3–5 weeks",
      features: [
        "Angular Frontend Development",
        "Node.js & Express Backend",
        "Basic CRUD Operations",
        "SQL/NoSQL Database Integration",
        "API Development",
        "Custom Booking Platform",
        "Basic Dashboards",
        "Complete Post-Launch Support"
      ],
      techStack: ["Angular", "Node.js", "Express", "SQL/NoSQL"],
      bestFor: "Growing businesses needing full-featured platforms",
      isPopular: true
    },
    {
      name: "Premium Package",
      description: "Scalable web application",
      duration: "5–8 weeks",
      features: [
        "Advanced Angular Frontend",
        "Node.js & TypeScript Backend",
        "Advanced Database Integration",
        "Comprehensive API Development",
        "Data Analysis Features",
        "Advanced Security & Optimization",
        "Premium Dashboards",
        "Optional Retainer Support"
      ],
      techStack: ["Angular", "TypeScript", "Node.js", "Advanced DB"],
      bestFor: "Enterprises needing scalable, feature-rich applications"
    }
  ];

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

  const courses = [
    "Backend Development with Node.js & TypeScript",
    "Frontend Development with Angular",
    "C++ & OOP Principles",
    "Database Design & Querying",
    "Data Analysis Fundamentals"
  ];

  return (
    <div className="min-h-screen">
      <Hero
        name="Mohamed Mahmoud Khalil"
        title="Full Stack Developer"
        description="200+ hours of hands-on experience building scalable and efficient web applications. Successfully completed 10+ backend and frontend projects, always focusing on clean code, high performance, and best practices."
        onContactClick={() => scrollToSection('contact')}
        onProjectsClick={() => scrollToSection('projects')}
      />
      <About
        content="With a solid foundation in C++, OOP, Databases, and Data Analysis, I bring a problem-solving mindset and deliver end-to-end solutions. My goal is to learn continuously, collaborate effectively, and build impactful software projects that deliver measurable results."
      />
      <TechnicalSkills skillCategories={technicalSkillCategories} />
      <SoftSkills skills={softSkills} />
      <Services packages={servicePackages} onDiscussClick={() => scrollToSection('contact')} />
      <Projects projects={projects} />
      <Courses courses={courses} />
      <Contact
        phone="01010594143"
        email="mohamedmahmoudkhalil0@gmail.com"
        onGetInTouchClick={() => window.open(`mailto:mohamedmahmoudkhalil0@gmail.com`, '_blank')}
      />
      <Footer onExploreClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}
