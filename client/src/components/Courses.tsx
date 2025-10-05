import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

interface CoursesProps {
  courses: string[];
}

export default function Courses({ courses }: CoursesProps) {
  return (
    <section className="py-16 md:py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-testid="heading-courses">
          Courses & Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {courses.map((course, index) => (
            <Card key={index} className="hover-elevate" data-testid={`card-course-${index}`}>
              <CardContent className="p-6 flex items-center gap-4">
                <GraduationCap className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="font-medium" data-testid={`text-course-${index}`}>{course}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
