import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-32 right-20 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 text-center text-white animate-fade-in relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-accent" />
          <span className="text-accent font-medium tracking-wider uppercase text-sm">Welcome to my portfolio</span>
          <Sparkles className="w-5 h-5 text-accent" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
          Eman Galal
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-white/90 font-light">
          Instructional Designer | E-learning Specialist
        </p>
        <p className="text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto font-light leading-relaxed">
          Creating engaging, interactive educational experiences with expertise in storyboarding and multimedia design
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" 
            onClick={scrollToAbout}
          >
            Explore My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-white/50 text-white hover:bg-white/10 font-semibold px-8 rounded-full backdrop-blur-sm" 
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout} 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-accent transition-colors" 
        aria-label="Scroll to about section"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;