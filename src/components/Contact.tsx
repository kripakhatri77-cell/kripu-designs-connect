import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "hover:text-primary" },
    { icon: Github, label: "GitHub", href: "#", color: "hover:text-foreground" },
    { icon: Mail, label: "Email", href: "mailto:kripu@example.com", color: "hover:text-secondary" },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-soft">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground">
            I'm actively seeking UI/UX design internship opportunities. Let's create something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8 border-none shadow-soft">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="rounded-xl"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  required
                  className="rounded-xl"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  className="rounded-xl min-h-32"
                />
              </div>
              <Button type="submit" className="w-full rounded-full" size="lg">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Info Card */}
          <div className="space-y-6">
            <Card className="p-8 border-none shadow-soft">
              <h3 className="text-xl font-semibold mb-4">Get My Resume</h3>
              <p className="text-muted-foreground mb-6">
                Download my resume to learn more about my experience and skills.
              </p>
              <Button variant="outline" className="w-full rounded-full" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </Card>

            <Card className="p-8 border-none shadow-soft">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center transition-smooth hover:scale-110 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
