import React from 'react';
import { CheckCircle } from 'lucide-react';
import Button from './Button';
import { ValidationErrors } from '../../utils/validation';

interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  };
  errors: ValidationErrors;
  isSubmitting: boolean;
  isSuccess: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onReset: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  errors,
  isSubmitting,
  isSuccess,
  onSubmit,
  onChange,
  onReset,
}) => {
  const inputClasses = (error?: string) => `
    w-full bg-black/50 border ${error ? 'border-red-500' : 'border-[#00ffff]/20'} 
    rounded-lg px-4 py-3 focus:border-[#00ffff] outline-none 
    transition-all duration-300 focus:shadow-lg focus:shadow-[#00ffff]/20
  `;

  if (isSuccess) {
    return (
      <div className="bg-[#00ffff]/10 p-6 rounded-lg text-center">
        <CheckCircle className="w-16 h-16 text-[#00ffff] mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2 gradient-text">Message Sent Successfully!</h3>
        <p className="text-gray-400 mb-4">Thank you for reaching out. I'll get back to you soon.</p>
        <Button onClick={onReset} variant="secondary">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={onChange}
            className={inputClasses(errors.name)}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={onChange}
            className={inputClasses(errors.email)}
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
            onChange={onChange}
            className={inputClasses(errors.phone)}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={onChange}
            className={inputClasses(errors.subject)}
          />
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
        </div>
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={onChange}
          rows={6}
          className={inputClasses(errors.message)}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>
      <Button type="submit" isLoading={isSubmitting} className="w-full">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;