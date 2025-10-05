import { Button } from "@/components/ui/button";
import profileImage from "@assets/generated_images/Professional_developer_headshot_portrait_421fc423.png";

interface HeroProps {
  name: string;
  title: string;
  description: string;
  onContactClick: () => void;
  onProjectsClick: () => void;
}

export default function Hero({ name, title, description, onContactClick, onProjectsClick }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src={profileImage}
          alt={name}
          className="w-40 h-40 rounded-full mx-auto mb-8 border-4 border-primary"
          data-testid="img-profile"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4" data-testid="text-name">
          {name}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-6" data-testid="text-title">
          {title}
        </p>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed" data-testid="text-description">
          {description}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            size="lg" 
            onClick={onContactClick}
            data-testid="button-contact"
          >
            Contact Me
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={onProjectsClick}
            data-testid="button-projects"
          >
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
