import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-black via-black/95 to-black text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left animate-slide-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
              Bednegoh Seme Ogiki
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-400">
              Software Engineer | Photographer | Remote Job Enthusiast
            </p>
            <p className="text-lg mb-8 text-gray-300">Based in Kenya</p>
            
            <div className="flex gap-4 justify-center md:justify-start mb-8">
              <SocialLink href="https://linkedin.com" icon={<Linkedin />} />
              <SocialLink href="https://github.com" icon={<Github />} />
              <SocialLink href="mailto:contact@example.com" icon={<Mail />} />
            </div>
            
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-[#00ffff] to-[#00ccff] text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#00ffff]/20 transition-all duration-300 hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="flex-1 relative animate-fade-in">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#00ffff] animate-float hover-scale">
              <img
                src="https://avatars.githubusercontent.com/u/160637199?v=4"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 flex items-center justify-center rounded-full border border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#00ffff]/20"
  >
    {icon}
  </a>
);

export default Hero;