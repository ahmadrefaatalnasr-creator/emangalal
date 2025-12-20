import { Mail, MapPin, Linkedin, Phone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'eg1218@fayoum.edu.eg',
      link: 'mailto:eg1218@fayoum.edu.eg'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '01017126590',
      link: 'tel:+201017126590'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Al-Fayoum, Egypt'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/eman-galal-68a169283/'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Interested in collaborating or learning more about my work? I'd love to hear from you!
        </p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="border-none shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold mb-2 text-primary">{item.label}</h3>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors"
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{item.value}</p>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8" 
              onClick={() => window.open('mailto:eg1218@fayoum.edu.eg')}
            >
              <Mail className="mr-2 w-5 h-5" />
              Send me an email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;