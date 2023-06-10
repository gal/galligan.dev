import Gallery from "@/components/Gallery";
import { Album } from "@/types";
import { cloudfront_url, getAlbum } from "@/utils/s3/client";

export default async function AlbumPage({
  params,
}: {
  params: { slug: string };
}) {
  const albumName = params.slug;

  const album = (await getAlbum(albumName)) as Album;
  return (
    <div className="md:px-2 columns-1 md:columns-3 gap-2">
      {album.photos.map((image, i) => (
        <img
          src={`${cloudfront_url}/albums/${album.name}/${image}`}
          alt={image}
          className="w-full h-fit mb-2"
          key={i}
          data-index={i}
        />
      ))}
    </div>
  );
}

export const revalidate = 300;
