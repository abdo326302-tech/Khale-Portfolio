import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  category: string;
  skills: string[];
}

interface TechnicalSkillsProps {
  skillCategories: SkillCategory[];
}

export default function TechnicalSkills({ skillCategories }: TechnicalSkillsProps) {
  return (
    <section id="skills" className="py-16 md:py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-testid="heading-skills">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-skill-${index}`}>
              <CardHeader>
                <CardTitle className="text-xl" data-testid={`title-skill-category-${index}`}>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" data-testid={`badge-skill-${index}-${skillIndex}`}>
                      {skill}
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
