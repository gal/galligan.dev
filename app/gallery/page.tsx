export default async function Gallery() {
  const data = await getData() as galleryManifest;
  const images = data.images;

  return (
    <main className="pt-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image) => (
          <div>
            <img src={`https://${data.domain}/preview/${image.url}`} className="h-auto max-w-full rounded-lg" alt={image.alt} />
          </div>
        ))}
      </div>
    </main>
  )
}

interface galleryManifest {
  domain: string;
  images: { url: string, alt: string }[];
}

export async function getData() {
  try {
    const data = await fetch(`${process.env.NEXT_BASE_URL}/api/gallery`, 
      { next: { revalidate: 120 } }
    ).then((res) => res.json());
    return data as galleryManifest;
  } catch (error) {
    console.log(error);
    return [];
  }
}
