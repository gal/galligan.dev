// import Gallery from "@/components/Gallery";
// import manifest from './manifest.json';
// import { GalleryImage, GalleryManifest } from "@/types";
import AlbumCard from "@/components/AlbumCard";
import { Album } from "@/types";
import { getAlbums } from "@/utils/s3/client";

export default async function GalleryPage() {
  const albums = (await getAlbums()) as Album[];

  return (
    <div className="min-h-[80dvh] flex flex-nowrap items-center overflow-x-auto md:mx-16 place-self-center">
      {albums?.map((album, i) => (
        <AlbumCard id={i} key={i} album={album} />
      ))}
      {/* <AlbumCard id\3} albumCover="https://d2kxt83yjeiafa.cloudfront.net/fullsize/DSC00102.jpg" albumName="Stills" albumLink="/gallery/album3" /> */}
    </div>
  );
}

export const revalidate = 300;
