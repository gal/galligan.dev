import Gallery from "@/components/Gallery";
import { Album } from "@/types";
import { cloudfront_url } from "@/utils/s3/client";
import { getAlbum, getProgressive } from "../albums";

export default async function AlbumPage({
  params,
}: {
  params: { slug: string };
}) {
  const album = getAlbum(params.slug);

  // const album = (await getAlbum(albumName)) as Album;
  return (
    <div className="">
      {album?.photos.map((image, i) => (
        <img
          src={getProgressive(image)}
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
