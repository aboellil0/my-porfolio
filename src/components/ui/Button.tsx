import React from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (
    e?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  disabled?: boolean;
  className?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  disabled = false,
  className = "",
  target,
  rel,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none touch-manipulation min-h-[44px]";

  const variants = {
    primary:
      "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl",
    secondary:
      "bg-gradient-to-r from-dark-700 to-dark-800 hover:from-dark-800 hover:to-dark-900 text-white shadow-lg hover:shadow-xl",
    outline:
      "bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50",
    ghost: "bg-transparent text-white hover:bg-white/10",
  };

  const sizes = {
    sm: "px-3 xs:px-4 py-2 text-xs xs:text-sm rounded-lg",
    md: "px-4 xs:px-6 py-2.5 xs:py-3 text-sm xs:text-base rounded-lg xs:rounded-xl",
    lg: "px-6 xs:px-8 py-3 xs:py-4 text-base xs:text-lg rounded-lg xs:rounded-xl",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {Icon && <Icon className="h-5 w-5 mr-2" />}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;
