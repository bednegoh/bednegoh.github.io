import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black/95 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-[#00ffff]">Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-lg leading-relaxed text-gray-300">
              I'm Bednegoh Seme, a versatile professional with experience in software development, customer service, and project management. Currently studying computer science at Kabianga University, I've honed skills in front-end development, bug reporting, and data annotation.
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mt-4">
              With a strong background in hackathons, where I've won awards for innovative solutions, I bring creativity and problem-solving to every project. As a photographer specializing in outdoor photography, I combine my technical skills with a passion for visual storytelling.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-[#00ffff] text-black px-6 py-3 rounded-full font-semibold hover:bg-[#00ffff]/90 transition-colors"
              >
                Let's Connect
              </a>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-black/50 p-4 rounded-lg border border-[#00ffff]/20"
                >
                  <h3 className="text-[#00ffff] font-semibold mb-2">{skill.name}</h3>
                  <p className="text-gray-400 text-sm">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const skills = [
  { name: 'Front-end Development', level: 'Advanced' },
  { name: 'Photography', level: 'Professional' },
  { name: 'Project Management', level: 'Intermediate' },
  { name: 'UI/UX Design', level: 'Intermediate' },
];

export default About;