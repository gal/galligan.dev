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
    <div className="pt-20 md:px-2 columns-1 md:columns-3 gap-2">
      {album.photos.map((image, i) => (
        <img
          src={`${cloudfront_url}/albums/${album.name}/fullsize/${image}`}
          alt={image}
          className="w-full h-fit mb-2 cursor-pointer"
          key={i}
          data-index={i}
          // onClick={(e) => {
          //   setModalImg(e.currentTarget.getAttribute("src"))
          //   setCurrentIndex(parseInt(e.currentTarget.getAttribute("data-index") as string))
          // }}
        />
      ))}
    </div>
  );
}

export const revalidate = 300;
