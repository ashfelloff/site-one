import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "ac",
  EMAIL: "ashwxth@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "HOME",
  DESCRIPTION: "ashwath chandran's personal site. i like to create things, experience life, and learn across different mediums.",
};

export const BLOG: Metadata = {
  TITLE: "Gallery",
  DESCRIPTION: "A collection of photos from my travels and everyday life.",
};

export const WORK: Metadata = {
  TITLE: "WORK",
  DESCRIPTION: "What I've been doing. Ashwath Chandran",
};

export const PROJECTS: Metadata = {
  TITLE: "PROJECTS",
  DESCRIPTION: "A collection of my projects. Ashwath Chandran",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/ashfelloff",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/ashfelloff"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/ashwathc",
  }
];
