var gallery = document.getElementById("gallery");
var image_node = document.getElementById("img_node");
const modalContainer = document.getElementById("modal_container");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal_img");
const modalLink = document.getElementById("modal_link");

const closeModal = () => {
  modalContainer.style.display = "none";
}

const goRight = () => {
  // go to the next image if it exists
  const currentImg = modalImg.src;
  const nextImg = document.querySelector(`img[src="${currentImg}"]`).parentElement.nextElementSibling;
  if (nextImg) {
    modalImg.src = nextImg.querySelector("img").src;
    modalImg.alt = nextImg.querySelector("img").alt;
    modalLink.href = nextImg.querySelector("img").src.replace("preview", "fullsize");
  }
}

const goLeft = () => {
  const currentImg = modalImg.src;
  const prevImg = document.querySelector(`img[src="${currentImg}"]`).parentElement.previousElementSibling;
  if (prevImg) {
    modalImg.src = prevImg.querySelector("img").src;
    modalImg.alt = prevImg.querySelector("img").alt;
    modalLink.href = prevImg.querySelector("img").src.replace("preview", "fullsize");
  }
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
  // when image is clicked, open up a larger view of the image in a modal-type view
  console.log(image)

  modalContainer.style.display = "flex";
  modalImg.src = image.src;
  modalImg.alt = image.alt;
  modalLink.href = image.src.replace("preview", "fullsize");
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
    // const newImgContainer = image_node.cloneNode(true);
    // newImgContainer.id = "";
    const newImg = image_node.cloneNode("true");

    const imageSplit = image.url.split(".");
    if (imageSplit.length > 2) {
      newImg.src = image.url
    } else {
      newImg.src = "https://" + domain + "/preview/" + image.url
    }

    newImg.alt = image.alt;

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