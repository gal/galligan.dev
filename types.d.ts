import { Image } from "sanity";

interface GalleryManifest {
  domain: string;
  images: galleryImage[];
}

interface GalleryImage {
  url: string;
  index?: number;
  alt: string;
}

interface AboutParagraph {
  body: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  keywords?: string[];
  repo?: string;
  demo?: string;
}

interface Experience {
  organization: string;
  title: string;
  start: string;
  end: string;
  description: string;
  keywords?: string[];
  url: string;
  logo: Image;
}

interface Album {
  name: string;
  slug: string;
  cover: string;
  photos: string[];
}
