import { Album } from "@/types";

export const BASE_URL = "https://d2kxt83yjeiafa.cloudfront.net/albums2";

export const getAlbum = (slug: string) => albums.find(album => album.slug === slug);

export const getAlbumCover = (imageName: string) => BASE_URL + "/web-optimized/" + imageName;
export const getProgressive = (imageName: string) => BASE_URL + "/progressive/" + imageName;
export const getHd = (imageName: string) => BASE_URL + "/hd/" + imageName;

const albums: Album[] = [
  {
    name: "Super Liminal",
    photos: ["DSC00294.jpg",
    ],
    cover: "DSC00294.jpg",
    slug: "super-liminal"
  },
  {
    name: "Liminal Nature",
    photos: [
      "DSC00278.jpg",
    ],
    cover: "DSC00278.jpg",
    slug: "liminal-nature"
  },
  {
    name: "Victoria Street",
    photos: [
      "DSC00632.jpg",
      "DSC00777.jpg",
      "DSC00630.jpg"
    ],
    cover: "DSC00632.jpg",
    "slug": "victoria-street"
  },
  {
    name: "Birds",
    photos: [
      "DSC00232.jpg",
      "DSC00231.jpg",
      "DSC00268.jpg",
    ],
    cover: "DSC00232.jpg",
    slug: "cork"
  },
  {
    name: "Nature",
    photos: [
      ""
    ],
    cover: "DSC00616.jpg",
    slug: "nature"
  },
  {
    name: "Stained Glass",
    photos: [
      "DSC00658.jpg",
      "DSC00650.jpg",
      "DSC00656.jpg",
      "DSC00674.jpg",
    ],
    cover: "DSC00658.jpg",
    slug: "stained-glass"
  },
  {
    name: "Monumental",
    photos: [
      "DSC00785.jpg"
    ],
    cover: "DSC00785.jpg",
    slug: "monumental"
  },
  {
    name: "Sea-side",
    photos: [
      "DSC00958.jpg",
      "DSC00954.jpg",
      "DSC00975.jpg",
    ],
    cover: "DSC00958.jpg",
    slug: "sea-side"
  },
  {
    name: "Liminal Architecture",
    photos: [
      "DSC00421.jpg",
      "DSC00705.jpg"
    ],
    cover: "DSC00421.jpg",
    slug: "liminal-architecture"
  },
  {
    name: "Perspective",
    photos: [
      "DSC00708.jpg"
    ],
    cover: "DSC00708.jpg",
    slug: "perspective"
  },
]

export default albums;