import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm flex items-center justify-center gap-1">
          © {new Date().getFullYear()} Eman Galal. Made with <Heart className="w-4 h-4 text-accent fill-accent" /> 
        </p>
        <p className="text-xs mt-2 opacity-80">
          Instructional Designer | E-learning Specialist
        </p>
      </div>
    </footer>
  );
};

export default Footer;