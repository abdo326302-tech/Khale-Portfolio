import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

interface ContactProps {
  phone: string;
  email: string;
  onGetInTouchClick: () => void;
}

export default function Contact({ phone, email, onGetInTouchClick }: ContactProps) {
  return (
    <section id="contact" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center" data-testid="heading-contact">
          Contact Me
        </h2>
        <p className="text-center text-muted-foreground mb-12" data-testid="text-contact-intro">
          Let's collaborate and build something amazing together!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
          <Card className="hover-elevate" data-testid="card-phone">
            <CardContent className="p-8 text-center">
              <Phone className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground" data-testid="text-phone">{phone}</p>
            </CardContent>
          </Card>
          <Card className="hover-elevate" data-testid="card-email">
            <CardContent className="p-8 text-center">
              <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground break-all" data-testid="text-email">{email}</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <Button 
            size="lg" 
            onClick={onGetInTouchClick}
            data-testid="button-get-in-touch"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
