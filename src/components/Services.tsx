import React, { useState } from 'react';
import { Code, Camera, Briefcase, ChevronRight, X } from 'lucide-react';
import Button from './ui/Button';

interface Service {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
  details: string;
}

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black via-black/95 to-black text-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          My Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              onClick={() => handleServiceClick(service)}
              className="bg-black/50 p-6 rounded-lg gradient-border hover-scale group animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-[#00ffff] mb-4 transform transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 gradient-text">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="text-gray-300 space-y-2">
                {service.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 transition-transform duration-300 hover:translate-x-2">
                    <ChevronRight className="w-4 h-4 text-[#00ffff]" />
                    {skill}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                size="sm"
                className="mt-4 w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  handleServiceClick(service);
                }}
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-black/95 p-6 rounded-lg max-w-2xl w-full relative border border-[#00ffff]/20">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <div className="text-[#00ffff] mb-4">{selectedService.icon}</div>
            <h3 className="text-2xl font-bold mb-4 gradient-text">{selectedService.title}</h3>
            <p className="text-gray-300 mb-6">{selectedService.details}</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {selectedService.skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-black/50 p-3 rounded border border-[#00ffff]/20 text-gray-300 flex items-center gap-2"
                >
                  <ChevronRight className="w-4 h-4 text-[#00ffff]" />
                  {skill}
                </div>
              ))}
            </div>
            <Button
              onClick={() => setSelectedService(null)}
              variant="primary"
              className="w-full"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

const services: Service[] = [
  {
    title: 'Front-End Development',
    icon: <Code size={32} />,
    description: 'Building responsive and user-friendly websites with modern technologies.',
    skills: ['HTML & CSS', 'JavaScript', 'React', 'Responsive Design', 'Performance Optimization'],
    details: 'Specializing in creating modern, responsive web applications using the latest front-end technologies. From single-page applications to complex web platforms, I focus on delivering seamless user experiences with clean, maintainable code.',
  },
  {
    title: 'Photography',
    icon: <Camera size={32} />,
    description: 'Professional outdoor and event photography services.',
    skills: ['Outdoor Photography', 'Event Coverage', 'Photo Editing', 'Lightroom', 'Photoshop'],
    details: 'Capturing moments through the lens with creativity and precision. Specializing in outdoor photography and event coverage, I combine technical expertise with artistic vision to deliver stunning visual narratives.',
  },
  {
    title: 'Project Management',
    icon: <Briefcase size={32} />,
    description: 'Managing projects from conception to completion with efficiency.',
    skills: ['Team Coordination', 'Timeline Management', 'Data Analysis', 'Remote Project Management'],
    details: 'Experienced in leading projects from ideation to delivery, ensuring efficient resource allocation and timeline management. Skilled in coordinating remote teams and delivering results that exceed expectations.',
  },
];

export default Services;