import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import Button from './ui/Button';
import { validateForm, ValidationErrors } from '../utils/validation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black via-black/95 to-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
          Contact Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="animate-slide-in">
            <h3 className="text-2xl font-semibold mb-6 gradient-text">Get in Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div 
                  key={item.label} 
                  className="flex items-start gap-4 p-4 rounded-lg bg-black/50 hover:bg-black/70 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-[#00ffff] animate-float">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold gradient-text">{item.label}</h4>
                    <p className="text-gray-400">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
            {isSuccess ? (
              <div className="bg-[#00ffff]/10 p-6 rounded-lg text-center">
                <CheckCircle className="w-16 h-16 text-[#00ffff] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 gradient-text">Message Sent Successfully!</h3>
                <p className="text-gray-400 mb-4">Thank you for reaching out. I'll get back to you soon.</p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  variant="secondary"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full bg-black/50 border ${errors.name ? 'border-red-500' : 'border-[#00ffff]/20'} rounded-lg px-4 py-3 focus:border-[#00ffff] outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#00ffff]/20`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full bg-black/50 border ${errors.email ? 'border-red-500' : 'border-[#00ffff]/20'} rounded-lg px-4 py-3 focus:border-[#00ffff] outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#00ffff]/20`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-black/50 border ${errors.phone ? 'border-red-500' : 'border-[#00ffff]/20'} rounded-lg px-4 py-3 focus:border-[#00ffff] outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#00ffff]/20`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full bg-black/50 border ${errors.subject ? 'border-red-500' : 'border-[#00ffff]/20'} rounded-lg px-4 py-3 focus:border-[#00ffff] outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#00ffff]/20`}
                    />
                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                  </div>
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full bg-black/50 border ${errors.message ? 'border-red-500' : 'border-[#00ffff]/20'} rounded-lg px-4 py-3 focus:border-[#00ffff] outline-none transition-all duration-300 focus:shadow-lg focus:shadow-[#00ffff]/20`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  className="w-full"
                >
                  Send Message
                </Button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const contactInfo = [
  {
    icon: <Mail size={24} />,
    label: 'Email',
    value: 'contact@example.com',
  },
  {
    icon: <Phone size={24} />,
    label: 'Phone',
    value: '+254 XXX XXX XXX',
  },
  {
    icon: <MapPin size={24} />,
    label: 'Location',
    value: 'Kenya',
  },
];

export default Contact;