import { Button } from "@/components/ui/button";

interface FooterProps {
  onExploreClick: () => void;
}

export default function Footer({ onExploreClick }: FooterProps) {
  return (
    <footer className="py-8 px-6 border-t">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        <p className="text-sm text-muted-foreground" data-testid="text-footer-credit">
          Made by <span className="font-medium text-foreground">Mohamed Mahmoud Khalil</span>
        </p>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onExploreClick}
          data-testid="button-explore"
        >
          Explore More
        </Button>
      </div>
    </footer>
  );
}
