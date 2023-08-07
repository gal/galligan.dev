import AlbumCard from "@/components/AlbumCard";
import albums from "./albums";

export default async function GalleryPage() {
  return (
    <div className="columns-1 md:columns-2 lg:columns-4 gap-5 max-w-full">
      {albums.map((album, i) => (
        <AlbumCard id={i} key={i} album={album} />
      ))}
    </div>
  );
}

export const revalidate = 300;
