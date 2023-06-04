import Gallery from "@/components/Gallery";

export default async function GalleryPage() {
  const data = await getData() as GalleryManifest;
  const images = data.images as GalleryImage[];

  const columns: GalleryImage[][] = [[], [], [], []]
  let counter = 0;
  let index = 0;


  images.forEach((image) => {
    if (counter > 3) { counter = 0 }
    image.index = index
    columns[counter].push(image)
    counter++
    index++
  })
  return (
      <Gallery domain={data.domain} columns={columns} />
  )
}

async function getData() {
  try {
    const data = await fetch(`${process.env.NEXT_BASE_URL}/api/gallery`,
      { next: { revalidate: 120 } }
    ).then((res) => res.json());
    return data as GalleryManifest;
  } catch (error) {
    console.log(error);
    return [];
  }
}
