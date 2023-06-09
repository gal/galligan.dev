import { Album } from "@/types";

interface AlbumCardProps {
  id: number;
  album: Album;
}

export default function AlbumCard(props: AlbumCardProps) {
  return (
    <div className="flex-shrink-0 h-full w-min-[300px] w-[300px] md:w-[450px] lg:w-[500px] first:ml-auto last:mr-auto">
      <a href={`albums/${props.album.name}`}>
        <div className="relative w-full h-full">
          <img src={props.album.cover} alt={props.album.name} className="object-cover w-full h-[500px] min-w-[200px] hover:translate-x-[50%] hover:translate-y-[50%]  " />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 transition duration-500 ease-in-out opacity-0 hover:opacity-100">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="relative flex flex-col items-center justify-center">
                <h1 className="text-2xl font-semibold text-white capitalize">{props.album.name}</h1>
                <h2 className="text-lg font-medium text-white">View album</h2>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
