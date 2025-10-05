import { Card, CardContent } from "@/components/ui/card";

interface SoftSkillsProps {
  skills: string[];
}

export default function SoftSkills({ skills }: SoftSkillsProps) {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-testid="heading-soft-skills">
          Soft Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-soft-skill-${index}`}>
              <CardContent className="p-6 text-center">
                <p className="font-medium" data-testid={`text-soft-skill-${index}`}>{skill}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
