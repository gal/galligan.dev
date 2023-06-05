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
  name: string;
  description: string;
  image?: string;
  keywords?: string[];
  repo?: string;
  demo?: string;
}
