import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "info";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
}) => {
  const variants = {
    primary:
      "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 border-primary-200 dark:border-primary-700",
    secondary:
      "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-600",
    success:
      "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-700",
    warning:
      "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-700",
    danger:
      "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border-red-200 dark:border-red-700",
    info: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-700",
  };

  const sizes = {
    sm: "px-1.5 xs:px-2 py-0.5 xs:py-1 text-xs",
    md: "px-2 xs:px-3 py-0.5 xs:py-1 text-xs xs:text-sm",
    lg: "px-3 xs:px-4 py-1 xs:py-2 text-sm xs:text-base",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border font-medium touch-manipulation ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
