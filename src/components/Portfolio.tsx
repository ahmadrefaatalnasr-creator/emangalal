import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'Interactive Moodle Course Design',
      description: 'Designed and developed a comprehensive e-learning course on Moodle LMS featuring interactive quizzes, multimedia content, and engaging learning paths.',
      category: 'LMS Development',
      tools: 'Moodle, Adobe Captivate',
    },
    {
      title: 'Motion Graphics for Education',
      description: 'Created animated explainer videos and motion graphics for educational content using After Effects and Premiere Pro with custom illustrations.',
      category: 'Motion Graphics',
      tools: 'After Effects, Premiere, Illustrator',
    },
    {
      title: 'Articulate Storyline Module',
      description: 'Built an interactive training module with branching scenarios, custom characters, and gamification elements for enhanced learner engagement.',
      category: 'E-learning Development',
      tools: 'Articulate Storyline, Photoshop',
    },
    {
      title: 'Digital Storyboard Collection',
      description: 'Developed detailed storyboards and visual scripts for educational video courses, ensuring smooth narration flow and visual consistency.',
      category: 'Instructional Design',
      tools: 'InDesign, Illustrator, Adobe Animate',
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Portfolio
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects showcasing innovative instructional design and e-learning development
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-primary to-primary/70 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold px-4 py-2 bg-accent rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-primary">
                  {project.title}
                </h3>
                <p className="text-foreground/90 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {project.tools}
                  </span>
                  {(project as any).link && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-accent hover:text-accent/80"
                      onClick={() => window.open((project as any).link, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;