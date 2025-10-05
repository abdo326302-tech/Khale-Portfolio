import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

interface ServicePackage {
  name: string;
  description: string;
  duration: string;
  features: string[];
  techStack: string[];
  bestFor: string;
  isPopular?: boolean;
}

interface ServicesProps {
  packages: ServicePackage[];
  onDiscussClick: () => void;
}

export default function Services({ packages, onDiscussClick }: ServicesProps) {
  return (
    <section id="services" className="py-16 md:py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" data-testid="heading-services">
          Web Development Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <Card key={index} className="relative flex flex-col hover-elevate" data-testid={`card-package-${index}`}>
              {pkg.isPopular && (
                <Badge 
                  className="absolute -top-3 -right-3 bg-chart-2 text-white hover:bg-chart-2"
                  data-testid={`badge-popular-${index}`}
                >
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl" data-testid={`title-package-${index}`}>
                  {pkg.name}
                </CardTitle>
                <CardDescription data-testid={`description-package-${index}`}>
                  {pkg.description}
                </CardDescription>
                <p className="text-sm text-muted-foreground" data-testid={`duration-package-${index}`}>
                  {pkg.duration}
                </p>
              </CardHeader>
              <CardContent className="flex-1 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Core Features:</h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2" data-testid={`feature-${index}-${fIndex}`}>
                        <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Technology Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.techStack.map((tech, tIndex) => (
                      <Badge key={tIndex} variant="outline" data-testid={`tech-${index}-${tIndex}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-sm italic text-muted-foreground" data-testid={`bestfor-package-${index}`}>
                  Best for: {pkg.bestFor}
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={pkg.isPopular ? "default" : "outline"}
                  onClick={onDiscussClick}
                  data-testid={`button-discuss-${index}`}
                >
                  Discuss Your Project
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
