const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent font-medium tracking-wider uppercase text-sm">Get to Know Me</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 text-primary">
              About Me
            </h2>
          </div>
          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-accent first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              I specialize in instructional design and storyboarding, with hands-on experience 
              in developing e-learning content and enhancing interactive educational courses. 
              My passion lies in creating engaging learning experiences that truly connect with learners.
            </p>
            <p>
              I am well-versed in the Moodle Learning Management System and proficient in a 
              comprehensive suite of creative tools including Photoshop, Illustrator, After Effects, 
              Premiere, Adobe Animate, InDesign, Captivate, and Articulate Storyline.
            </p>
            <p>
              With a Bachelor's degree in Specific Education specializing in Educational Technology 
              from Fayoum University, I bring both academic knowledge and practical expertise to 
              every project I undertake.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;