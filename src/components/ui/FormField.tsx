import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'textarea';
  placeholder?: string;
  required?: boolean;
  icon?: LucideIcon;
  value: string;
  onChange: (name: string, value: string) => void;
  error?: string;
  rows?: number;
  className?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  icon: Icon,
  value,
  onChange,
  error,
  rows = 4,
  className = ''
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange(name, e.target.value);
  };

  const baseInputClasses = `
    w-full px-4 py-3 ${Icon ? 'pl-12' : ''} 
    bg-white dark:bg-dark-800 
    border border-gray-300 dark:border-dark-600 
    rounded-xl text-dark-800 dark:text-white 
    placeholder-gray-400 dark:placeholder-dark-400
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
    transition-all duration-300
    ${error ? 'border-red-500 focus:ring-red-500' : ''}
    ${isFocused ? 'shadow-lg' : 'shadow-sm'}
  `;

  return (
    <div className={`relative ${className}`}>
      <label className="block text-sm font-semibold text-dark-800 dark:text-white mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      
      <div className="relative">
        {Icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
            <Icon className={`h-5 w-5 ${isFocused ? 'text-primary-500' : 'text-gray-400 dark:text-dark-400'} transition-colors duration-300`} />
          </div>
        )}
        
        {type === 'textarea' ? (
          <textarea
            name={name}
            value={value}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            required={required}
            rows={rows}
            className={baseInputClasses}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            required={required}
            className={baseInputClasses}
          />
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-sm text-red-500 animate-fade-in">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;