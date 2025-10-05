import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-testid="heading-projects">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-project-${index}`}>
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl" data-testid={`title-project-${index}`}>
                  {project.title}
                </CardTitle>
                <CardDescription data-testid={`description-project-${index}`}>
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground" data-testid={`category-project-${index}`}>
                  {project.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, tIndex) => (
                    <Badge key={tIndex} variant="secondary" data-testid={`tech-project-${index}-${tIndex}`}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
