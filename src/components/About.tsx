import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Development",
      description: "React, Node.js, TypeScript, Python"
    },
    {
      icon: Palette,
      title: "Design",
      description: "UI/UX, Figma, Adobe Creative Suite"
    },
    {
      icon: Rocket,
      title: "Deployment",
      description: "Vercel, AWS, Docker, CI/CD"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate developer with 3+ years of experience building 
            modern web applications and beautiful user interfaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;