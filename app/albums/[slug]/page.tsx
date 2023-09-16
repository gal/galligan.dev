import { Album } from "@/types";
import { getAlbum, getHd, getJpg } from "../albums";
import ShareBtn from "@/components/ShareBtn";

export default async function AlbumPage({
  params,
}: {
  params: { slug: string };
}) {
  const album = getAlbum(params.slug) as Album;
  return (
    <div className="">
      <div className="md:fixed md:z-50 md:max-w-sm top-20 left-0 px-6 py-12 md:p-8">
        <div>
          <h1 className="font-extrabold text-lg">
            {album?.name}
          </h1>
          <p className="font-semibold">
            {album?.description}
          </p>
          <ShareBtn album={album} />
        </div>
      </div>

      {album?.photos.map((image, i) => (
        <div className="" key={i}>
          <div className="relative space-y-5">
            <img
              src={getJpg(image)}
              alt={image}
              className="w-full h-fit"
              key={i}
              data-index={i}
              loading={i > 0 ? "lazy" : "eager"} />
            <nav className="absolute bottom-0 right-0 p-4 bg-black/60">
              <a href={getHd(image)} className="text-lg">View full image</a>
            </nav>
          </div>
        </div>
      ))}
    </div>
  );
}

export const revalidate = 300;
