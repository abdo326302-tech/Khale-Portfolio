import Services from '../Services'

export default function ServicesExample() {
  const packages = [
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

  return <Services packages={packages} onDiscussClick={() => console.log('Discuss clicked')} />
}
