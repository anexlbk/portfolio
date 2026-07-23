export type ModeType = "tech" | "marketing" | "all";

export interface TNavLink {
  id: string;
  title: string;
  mode?: ModeType;
}

export interface TService {
  title: string;
  icon: string;
}

export interface TTechnology {
  name: string;
  icon: string;
}

export interface TExperience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export interface TTestimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

export interface TProject {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link?: string;
  live_link?: string;
}

export interface TWorkshop {
  title: string;
  description: string;
  image?: string;
}

export interface TCaseStudy {
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  image?: string;
}
