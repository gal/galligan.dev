import { getWebp } from "@/app/albums/albums";
import { Album } from "@/types";

interface AlbumCardProps {
  id: number;
  album: Album;
}

export default function AlbumCard(props: AlbumCardProps) {
  return (
    // <div className="flex-shrink-0 h-[500px] w-min-[300px] w-[300px] md:w-[450px] lg:w-[500px] first:ml-auto last:mr-auto">
    <div className="h-fit relative mb-0.5 w-full">
      <a href={`albums/${props.album.slug}`}>
        {/* <div> */}
          <img
            src={getWebp(props.album.cover)}
            alt={props.album.name}
            className="object-cover w-full h-full"
          />
          <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full duration-300 ease-in-out flex justify-center items-center bg-black opacity-0 hover:opacity-75">
            <h1 className="text-2xl font-semibold text-white capitalize">{props.album.name}</h1>
          </div>
        {/* </div> */}

          {/* <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/100 transition duration-500 ease-in-out hover:opacity-75 opacity-0"> */}
            {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center"> */}
              {/* <div className="relative flex flex-col items-center justify-center"> */}
                {/* <h1 className="text-2xl font-semibold text-white capitalize">
                  {props.album.name}
                </h1> */}
                {/* <h2 className="text-lg font-medium text-white">View album</h2> */}
              {/* </div> */}
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}
      </a>
    </div>
  );
}

const revalidate = 300;
