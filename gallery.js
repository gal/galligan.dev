var gallery = document.getElementById("gallery");
var image_node = document.getElementById("img_container_node");
const modalContainer = document.getElementById("modal_container");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal_img");

const closeModal = () => {
  modalContainer.style.display = "none";
}

modalContainer.addEventListener("click", () => {closeModal()});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    console.log("esc pressed")
    closeModal();
  }
})


const imageClicked = (image) => {
  // when image is clicked, open up a larger view of the image in a modal-type view
  console.log(image)

  modalContainer.style.display = "block";
  modalImg.src = image.src;
  modalImg.alt = image.alt;
}

const getImages = async () => {
  console.log("Downloading manifest")
  const res = await fetch("/manifest.json");
  const data = await res.json();
  console.log("Manifest downloaded")
  console.log(data)
  const domain = data.domain;
  const images = data.images;

  images.forEach((image) => {
    const newImgContainer = image_node.cloneNode(true);
    newImgContainer.id = "";
    const newImg = newImgContainer.querySelector("img");
    
    const imageSplit = image.url.split(".");
    if (imageSplit.length > 2) {
      newImg.src = image.url
    } else {
      newImg.src = "https://" + domain + "/preview/" + image.url
    }

    newImg.alt = image.alt;

    gallery.appendChild(newImgContainer);

    newImg.addEventListener("click", () => {
      imageClicked(newImg);
    });
  });
}

getImages()