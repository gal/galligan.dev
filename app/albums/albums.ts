import { Album } from "@/types";

export const BASE_URL = "https://d2kxt83yjeiafa.cloudfront.net/albums2";

export const getAlbum = (slug: string) => albums.find(album => album.slug === slug);

export const getSmall = (imageName: string) => BASE_URL + "/small/" + imageName + ".jpg";
export const getWebp = (imageName: string) => BASE_URL + "/webp/" + imageName + ".webp";
export const getJpg = (imageName: string) => BASE_URL + "/web/" + imageName + ".jpg";
export const getBlur = (imageName: string) => BASE_URL + "/blur/" + imageName+ ".jpg";
export const getHd = (imageName: string) => BASE_URL + "/hd/" + imageName + ".jpg";

const albums: Album[] = [
  {
    name: "Cyberpunk",
    cover: "DSC00432",
    photos: [
      "DSC00432"
    ],
    slug: "cyberpunk",
    description: "Cyberpunk aesthetic"
  },
  {
    name: "Retro",
    photos: ["DSC00294",
    ],
    cover: "DSC00294",
    slug: "retro",
    description: "There's something about the retro aesthetic that I find very appealing. I think this photo captures some interesting colors really nicely here."
  },
  {
    name: "Minimalist Nature",
    photos: [
      "DSC00278",
    ],
    cover: "DSC00278",
    slug: "minimalist-nature",
    description: "I love the minimalist aesthetic. I think minimalism surrounded by or in nature is a very interesting combination."
  },
  {
    name: "Victoria Street",
    photos: [
      "DSC00632",
      "DSC00777",
      "DSC00630",
    ],
    cover: "DSC00632",
    "slug": "victoria-street"
  },
  {
    name: "Birds",
    photos: [
      "DSC00232",
      "DSC00231",
      "DSC00268",
    ],
    cover: "DSC00232",
    slug: "cork"
  },
  {
    name: "Nature",
    photos: [
      "DSC00616",
      "DSC00103",
      "DSC01119",
    ],
    cover: "DSC00616",
    slug: "nature"
  },
  {
    name: "Stained Glass",
    photos: [
      "DSC00658",
      "DSC00650",
      "DSC00656",
      "DSC00674",
    ],
    cover: "DSC00658",
    slug: "stained-glass"
  },
  {
    name: "Monumental",
    photos: [
      "DSC00785"
    ],
    cover: "DSC00785",
    slug: "monumental"
  },
  {
    name: "Sea-side",
    photos: [
      "DSC00958",
      "DSC00954",
      "DSC00975",
    ],
    cover: "DSC00958",
    slug: "sea-side"
  },
  {
    name: "Liminal Architecture",
    photos: [
      "DSC00421",
      "DSC00705"
    ],
    cover: "DSC00421",
    slug: "liminal-architecture"
  },
  {
    name: "Perspective",
    photos: [
      "DSC00708"
    ],
    cover: "DSC00708",
    slug: "perspective"
  },
]

export default albums;