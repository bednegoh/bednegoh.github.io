interface BaseProject {
  id: number;
  title: string;
  description: string;
  category: 'coding' | 'photography';
}

export interface CodingProject extends BaseProject {
  category: 'coding';
  image: string;
  tags: string[];
  github?: string;
  liveUrl?: string;
}

export interface PhotographyProject extends BaseProject {
  category: 'photography';
  url: string;
  location: string;
}

export type Project = CodingProject | PhotographyProject;