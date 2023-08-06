import Image from "next/image";
import Gallery from "@/components/Gallery";
import { Album } from "@/types";
import { cloudfront_url } from "@/utils/s3/client";
import { getAlbum, getHd, getJpg, getSmall, getWebp } from "../albums";
import ShareBtn from "@/components/ShareBtn";

export default async function AlbumPage({
  params,
}: {
  params: { slug: string };
}) {
  const album = getAlbum(params.slug);

  // const album = (await getAlbum(albumName)) as Album;
  return (
    <div className="relative">

      <div className="md:fixed md:  max-w-sm top-20 left-0 p-20 md:p-8">
        <div className="relative">
          <h1 className="font-extrabold text-lg">
            {album?.name}
          </h1>
          <p className="font-semibold">
            {album?.description}
          </p>
          {/* <ShareBtn album={album} /> */}
        </div>
      </div>

      {album?.photos.map((image, i) => (
        <div className="relative" key={i}>
          <picture>
            <source srcSet={getWebp(image)} />
            <source srcSet={getSmall(image)} media="(orientation: portrait)" />
            <img
              src={getJpg(image)}
              alt={image}
              className="w-full h-fit mb-2"
              key={i}
              data-index={i}
              loading={i > 0 ? "lazy" : "eager"} />
          </picture>
          {/* <img
            src={getUrl(image)}
            alt={image}
            className="w-full h-fit mb-2"
            key={i}
            data-index={i}
            loading={i > 0 ? "lazy" : "eager"}
          /> */}
          {/* <Image
            fill
            src={getUrl(image)}
            alt={album.name}
            // width="0" height="0"
            // sizes="100vw`"
            className="w-full"
          /> */}
          <nav className="absolute bottom-0 right-0 p-4 bg-black/60">
            <a href={getHd(image)}>View full image</a>
          </nav>
        </div>
      ))}
    </div>
  );
}

export const revalidate = 300;
