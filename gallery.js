var gallery = document.getElementById("gallery");
var image_node = document.getElementById("img_node");
const modalContainer = document.getElementById("modal_container");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal_img");
const modalLink = document.getElementById("modal_link");
var domain = "";

var imageList = [];

const current_img_index = 0;

const url = (image) => {
  return "https://" + domain + "/preview/" + image
}

const closeModal = () => {
  modalContainer.style.display = "none";
}

const goRight = () => {
  const currentIndex = parseInt(modalImg.alt);
  const newIndex = (currentIndex < imageList.length - 1) ? currentIndex + 1 : newIndex;
  const newImg = imageList[newIndex];

  modalImg.src = url(newImg.url);
  modalImg.alt = newIndex;
  modalLink.href = modalImg.src.replace("preview", "fullsize");
}

const goLeft = () => {
  const currentIndex = parseInt(modalImg.alt);
  const newIndex = currentIndex > 0 ? currentIndex - 1 : newIndex;
  const newImg = imageList[newIndex];

  modalImg.src = url(newImg.url);
  modalImg.alt = newIndex;
  modalLink.href = modalImg.src.replace("preview", "fullsize");
}

modalContainer.addEventListener("click", () => { closeModal() });
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowRight":
      goRight();
      break;
    case "ArrowLeft":
      goLeft();
      break;
    case "Escape":
      closeModal();
      break;
    default:
      break;
  }
})

const imageClicked = (image) => {
  modalContainer.style.display = "flex";
  modalImg.src = image.src;
  modalImg.alt = image.alt;
  modalLink.href = image.src.replace("preview", "fullsize");
  console.log({modalLink, modalImg})
}

const getImages = async () => {
  console.log("Downloading manifest")
  const res = await fetch("/manifest.json");
  const data = await res.json();
  console.log("Manifest downloaded")
  console.log(data)
  domain = data.domain;
  const images = data.images;

  imageList = images;

  images.forEach((image, index) => {
    const newImg = image_node.cloneNode("true");

    const imageSplit = image.url.split(".");
    if (imageSplit.length > 2) {
      newImg.src = image.url
    } else {
      newImg.src = "https://" + domain + "/preview/" + image.url
    }

    newImg.alt = index;

    gallery.appendChild(newImg);

    newImg.addEventListener("click", () => {
      imageClicked(newImg);
    });
  });

  var colcade = new Colcade('.gallery', {
    columns: '.gallery-col',
    items: '.gallery-item'
  })
}

getImages()