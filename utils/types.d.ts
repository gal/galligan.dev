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
