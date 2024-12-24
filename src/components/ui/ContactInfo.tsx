import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactInfoItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const contactInfo: ContactInfoItem[] = [
  {
    icon: <Mail size={24} />,
    label: 'Email',
    value: 'bednegohseme@gmail.com',
  },
  {
    icon: <Phone size={24} />,
    label: 'Phone',
    value: '+254 754 182 515 ',
  },
  {
    icon: <MapPin size={24} />,
    label: 'Location',
    value: 'Kenya',
  },
];

const ContactInfo = () => {
  return (
    <div className="animate-slide-in">
      <h3 className="text-2xl font-semibold mb-6 gradient-text">Get in Touch</h3>
      <div className="space-y-6">
        {contactInfo.map((item) => (
          <div 
            key={item.label} 
            className="flex items-start gap-4 p-4 rounded-lg bg-black/50 hover:bg-black/70 transform hover:scale-105 transition-all duration-300"
          >
            <div className="text-[#00ffff]">{item.icon}</div>
            <div>
              <h4 className="font-semibold gradient-text">{item.label}</h4>
              <p className="text-gray-400">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;