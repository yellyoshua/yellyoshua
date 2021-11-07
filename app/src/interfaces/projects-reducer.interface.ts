
export interface Project {
  id: string;
  title: string;
  slug: string;
  sortDescription: string;
  description: {
    html?: string;
    json?: string;
    markdown?: string;
    text?: string;
  };
  isDevelopment: boolean;
  externalLink: string | null;
  backdrop: {
    url: string;
    height: number;
    width: number;
    size: number;
  } | null;
  repository: string | null;
}

export interface ProjectsReducer {
  projects: Project[]
}