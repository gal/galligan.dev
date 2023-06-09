import Gallery from "@/components/Gallery";
import manifest from "../albums/manifest.json";
import { GalleryImage, GalleryManifest } from "@/types";

export default async function GalleryPage() {
  const data = manifest as GalleryManifest;

  const images = data.images as GalleryImage[];

  return <Gallery domain={data.domain} images={images} />;
}

export const revalidate = 300;
