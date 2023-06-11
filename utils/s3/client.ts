import { Album } from "@/types";
import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";

const s3_client_id = process.env.NEXT_S3_CLIENT_ID || "MISSING CLIENT ID";
const s3_client_key = process.env.NEXT_S3_CLIENT_KEY || "MISSING CLIENT KEY";
const s3_bucket = process.env.NEXT_S3_BUCKET_NAME || "MISSING CLIENT BUCKET";
export const s3_client_region =
  process.env.NEXT_S3_CLIENT_REGION || "MISSING CLIENT REGION";
export const cloudfront_url =
  process.env.NEXT_CLOUDFRONT_URL || "MISSING CLOUDFRONT URL";

export const getBucketObjects = async (
  prefix: string,
  folders = false,
  delim = "/"
) => {
  const cmd = new ListObjectsV2Command({
    Bucket: s3_bucket,
    Prefix: prefix,
  });

  return (await client.send(cmd)).Contents?.map((item) => {
    return item.Key!.replace(prefix, "");
  });
};

export const getAlbum = async (album: string) => {
  const albums = await getAlbums();
  return albums.find((item) => item.slug === album);
};

export const getAlbums = async () => {
  // return await getBucketObjects('albums/', true);
  const objects = await getBucketObjects("albums/", true);
  const albums = [] as Album[];
  const albumItems = new Map<string, string[]>();
  const covers = new Map<string, string>();

  if (!objects) {
    return albums;
  }

  objects.shift();

  for (const object of objects) {
    const parts = object.split("/");
    const album = parts[0];
    if (parts.length === 1) {
      continue;
    }
    const photo = parts[1];

    if (albumItems.has(album)) {
      albumItems.get(album)!.push(photo);
    } else {
      albumItems.set(album, [photo]);
    }
  }

  for (const album of albumItems.keys()) {
    if (!covers.has(album)) {
      covers.set(album, "");
    }

    albums.push({
      name: album,
      slug: album,
      cover: cloudfront_url + "/albums/" + album + ".webp",
      photos: albumItems.get(album) || [],
    });
  }

  return albums;
};
// export const getAlbumCover = async (album: string) => {
//   const objects = await getBucketObjects(`albums/${album}/cover.jpg`)
//   // find first object that is not a folder
//   return objects?.find((item) => !item.endsWith('.jpg'))
// }

export const client = new S3Client({
  region: s3_client_region,
  credentials: {
    accessKeyId: s3_client_id,
    secretAccessKey: s3_client_key,
  },
});
