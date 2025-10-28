import { Figma, Palette, Users, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    { icon: Figma, title: "Design Tools", description: "Figma, Adobe XD, Illustrator" },
    { icon: Palette, title: "Visual Design", description: "UI Design, Prototyping, Design Systems" },
    { icon: Users, title: "User Research", description: "Interviews, Personas, User Testing" },
    { icon: Lightbulb, title: "Problem Solving", description: "Wireframing, Information Architecture" },
  ];

  const tools = [
    "Figma",
    "Adobe XD",
    "Adobe Illustrator",
    "Notion",
    "Miro",
    "Principle",
    "InVision",
    "Maze",
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate UI/UX designer dedicated to creating meaningful digital experiences 
            that bridge the gap between user needs and business goals.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-hover transition-smooth hover:-translate-y-2 border-none bg-card/80 backdrop-blur-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4">
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </Card>
          ))}
        </div>

        {/* Tools */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">Tools I Use</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-card rounded-full text-sm font-medium shadow-soft hover:shadow-hover transition-smooth hover:scale-105"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
