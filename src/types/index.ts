import { LucideIcon } from 'lucide-react';

// Project Types
export interface Project {
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  icon: React.ReactNode;
  features: string[];
  detailedFeatures: DetailedFeature[];
  gradient: string;
  image: string;
  contentBgImage: string;
  modalImages: string[];
  projectType: string;
  duration: string;
  role: string;
  challenges: string;
  achievements: string;
  mascotTheme?: string;
  githubUrl?: string;
}

export interface DetailedFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Skill Types
export interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  color: string;
  hoverEffect: string;
  mascotImage: string;
  mascotTheme: string;
}

// Timeline Types
export interface TimelineItem {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  achievements?: string[];
  color: string;
  bgColor: string;
}

// Contact Types
export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
  gradient: string;
}

// Animation Types
export interface AnimationOptions {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
}

// Theme Types
export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
}

// Form Types
export interface FormData {
  [key: string]: string;
}

export interface FormErrors {
  [key: string]: string;
}