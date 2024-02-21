import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

imagemin(["public/images/full/*"], {
  destination: "public/images/preview",
  plugins: [imageminWebp({ preset: "photo", quality: 15 })],
}).then(() => {
  console.log("Done!");
});
