interface AboutProps {
  content: string;
}

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className="py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" data-testid="heading-about">
          About Me
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed" data-testid="text-about-content">
          {content}
        </p>
      </div>
    </section>
  );
}
