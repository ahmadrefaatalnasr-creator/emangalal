import { Lightbulb, Palette, Video, Layers, BookOpen, MonitorPlay, Wand2, PenTool } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skills = [
    {
      icon: Lightbulb,
      title: 'Instructional Design',
      description: 'Storyboarding, Course Development, Learning Objectives',
    },
    {
      icon: PenTool,
      title: 'Adobe Creative Suite',
      description: 'Photoshop, Illustrator, InDesign, After Effects, Premiere',
    },
    {
      icon: Wand2,
      title: 'E-learning Tools',
      description: 'Adobe Captivate, Articulate Storyline, Adobe Animate',
    },
    {
      icon: Video,
      title: 'Motion Graphics',
      description: 'After Effects, Animation, Video Editing, Premiere Pro',
    },
    {
      icon: Layers,
      title: 'LMS Platforms',
      description: 'Moodle, Learning Management Systems, Course Deployment',
    },
    {
      icon: BookOpen,
      title: 'Content Development',
      description: 'Interactive Courses, Educational Materials, Multimedia Content',
    },
    {
      icon: Palette,
      title: 'Visual Design',
      description: 'Graphic Design, UI/UX for Learning, Brand Consistency',
    },
    {
      icon: MonitorPlay,
      title: 'Interactive Media',
      description: 'Animations, Simulations, Engaging Digital Experiences',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-primary">
                        {skill.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;