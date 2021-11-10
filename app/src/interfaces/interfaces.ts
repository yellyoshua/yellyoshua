export interface PageWithSlug {
  slug: string;
}

export interface Page {
  name: string;
  slug: string;
  title: string;
  content: {
    markdown?: string;
    html?: string;
    text?: string;
  } | null;
}