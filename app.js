const galleryItems = [
  {
    preview: "images/mini_deidara.jpg",
    original: "images/big_deidara.jpg",
    description: "deidara",
  },
  {
    preview: "images/mini_gaara.jpg",
    original: "images/big_gaara.jpg",
    description: "gaara",
  },
  {
    preview: "images/mini_itachi.png",
    original: "images/big_itachi.png",
    description: "itachi",
  },
  {
    preview: "images/mini_kakashi.jpg",
    original: "images/big_kakashi.jpg",
    description: "kakashi",
  },
  {
    preview: "images/mini_madara.jpg",
    original: "images/big_madara.jpg",
    description: "madara",
  },
  {
    preview: "images/mini_naruto.jpg",
    original: "images/big_naruto.jpg",
    description: "naruto",
  },
  {
    preview: "images/mini_pain.jpg",
    original: "images/big_pain.jpg",
    description: "pain",
  },
  {
    preview: "images/mini_sasuke.jpg",
    original: "images/big_sasuke.jpg",
    description: "sasuke",
  },
  {
    preview: "images/mini_dziraya.jpg",
    original: "images/big_dziraya.jpg",
    description: "dziraya",
  },
];
const jsGalleryNode = document.querySelector(".js-gallery");
galleryItems.map((item) => {
  const previewClass = item.preview;
  const originalClass = item.original;
  const descriptionClass = item.description;
  jsGalleryNode.insertAdjacentHTML(
    "afterbegin",
    `<li class="gallery__item"><a class="gallery__link" href="${originalClass}"><img class="gallery__image" src="${previewClass}" data-source="${originalClass}" alt="${descriptionClass}"/></a></li>`
  );
});
const modalNode = document.querySelector(".js-lightbox");
const lightBoxImage = document.querySelector(".lightbox__image");
const modalFunc = (event) => {
  if (event.target.tagName === "IMG") {
  event.preventDefault()
    modalNode.classList.add("is-open");
    lightBoxImage.setAttribute("src", event.target.dataset.source);
    lightBoxImage.setAttribute("alt", event.target.getAttribute("alt"));
  }
};
jsGalleryNode.addEventListener("click", modalFunc)
const closeButton = modalNode.querySelector('button[data-action="close-lightbox"]')
const modalCloseFunc = () => {
  modalNode.classList.remove("is-open")
  lightBoxImage.removeAttribute("src")
  lightBoxImage.removeAttribute("alt")
};
closeButton.addEventListener("click", modalCloseFunc)