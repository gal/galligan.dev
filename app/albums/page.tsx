// import Gallery from "@/components/Gallery";
// import manifest from './manifest.json';
// import { GalleryImage, GalleryManifest } from "@/types";
import AlbumCard from "@/components/AlbumCard";
import albums from "./albums";
import { Album } from "@/types";
import { getAlbums } from "@/utils/s3/client";

export default async function GalleryPage() {
  // const albums = (await getAlbums()) as Album[];
  

  return (
    <div className="columns-1 md:columns-2 lg:columns-4 gap-0.5 max-w-full">
      {albums.map((album, i) => (
        <AlbumCard id={i} key={i} album={album} />
      ))}
    </div>
  );
}

export const revalidate = 300;
  