import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  isLoading = false,
  size = 'md',
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-full transition-all duration-300 hover:-translate-y-1';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#00ffff] to-[#00ccff] text-black hover:shadow-lg hover:shadow-[#00ffff]/20',
    secondary: 'bg-black/50 text-[#00ffff] border border-[#00ffff] hover:bg-[#00ffff] hover:text-black',
    outline: 'bg-transparent border-2 border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff]/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  const loadingStyles = isLoading ? 'opacity-70 cursor-wait' : '';
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${loadingStyles} ${disabledStyles} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;