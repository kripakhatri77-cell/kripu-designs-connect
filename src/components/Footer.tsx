import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          Designed with <Heart className="w-4 h-4 text-primary fill-primary" /> by Kripu
          <span className="mx-2">•</span>
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
