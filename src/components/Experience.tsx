import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      year: 'Aug 2024 - Present',
      title: 'Instructional Designer',
      company: 'MaharaTech - ITIMooca',
      description: 'Developing comprehensive e-learning content and instructional materials. Creating engaging storyboards and interactive educational courses for diverse learner audiences.',
    },
    {
      year: 'Jan 2023 - Present',
      title: 'E-learning Specialist',
      company: 'Freelancer',
      description: 'Providing freelance instructional design and e-learning development services. Creating custom educational content using Adobe Creative Suite, Captivate, and Articulate Storyline.',
    },
  ];

  const education = [
    {
      year: 'Sep 2019 - Jul 2023',
      title: 'Bachelor of Specific Education',
      institution: 'Fayoum University',
      description: 'Department of Educational Technology. Specialized in instructional design, e-learning development, and educational multimedia production.',
    },
    {
      year: 'Professional Development',
      title: 'E-learning Specialist Certification',
      institution: 'Information Technology Institute (ITI)',
      description: 'Advanced training in e-learning development, instructional design methodologies, and modern educational technologies.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-accent pb-8 last:pb-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="w-5 h-5 text-accent" />
                  <span className="text-sm font-semibold text-accent">{exp.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-1 text-primary">{exp.title}</h3>
                <p className="text-muted-foreground font-medium mb-3">{exp.company}</p>
                <p className="text-foreground/90 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>

          <h3 className="text-3xl font-bold text-center mb-8 text-primary">Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-primary/30 pb-8 last:pb-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary/50" />
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary">{edu.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-1 text-primary">{edu.title}</h3>
                <p className="text-muted-foreground font-medium mb-3">{edu.institution}</p>
                <p className="text-foreground/90 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;