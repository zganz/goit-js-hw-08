// Add imports above this line
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
// Change code below this line

let imagesHtml = "";

galleryItems.forEach(function(element){
  let item = `
  <a class="gallery__item" href="${element.original}">
  <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
</a>`;
imagesHtml += item;

});
const galleryEl = document.querySelector(".gallery")
galleryEl.insertAdjacentHTML("beforeend", imagesHtml);


let lightbox = new SimpleLightbox('.gallery a', {
    'captionsData': 'alt',
    'captionDelay': 250
});
