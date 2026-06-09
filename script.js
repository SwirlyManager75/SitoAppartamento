const photoBase = "immagini appartamento/";

const photos = [
  { file: "16818c43-0265-4c4c-b3c8-14c930b3ca42-FILEminimizer-870x420.jpg", caption: "Soggiorno con area relax" },
  { file: "351c48ab-d574-4eb9-ab77-48a501651779-FILEminimizer-870x420.jpg", caption: "Camera matrimoniale" },
  { file: "3a416aa1-7ea8-40f8-bbf1-b13a9b282e38-FILEminimizer-870x420.jpg", caption: "Cucina abitabile" },
  { file: "3bdd2407-d0d2-4489-b1b1-e33c24370557-FILEminimizer-870x420.jpg", caption: "Balcone esterno" },
  { file: "453835c8-de76-4d8a-942e-76102119cdae-FILEminimizer-870x420.jpg", caption: "Bagno principale" },
  { file: "58796428-541b-4741-99de-3ff9932a5382-FILEminimizer-870x420.jpg", caption: "Zona giorno prospetto" },
  { file: "5c070908-257e-4e7c-a948-8fc959f60ac6-FILEminimizer-870x420.jpg", caption: "Disimpegno elegante" },
  { file: "60110b88-a7a7-42bb-b20e-f5739546b5c5-FILEminimizer-870x420.jpg", caption: "Corridoio e ingresso" },
  { file: "82f3c4cb-fd68-4544-9258-0889c99d50be-FILEminimizer-870x420.jpg", caption: "Ingresso appartamento" },
  { file: "87da8675-ff57-4764-9641-3f006046dac2-FILEminimizer-870x420.jpg", caption: "Camera matrimoniale con balcone" },
  { file: "9f203376-e1bf-4b9d-9bce-4cc14d1fd1e4-FILEminimizer-870x420.jpg", caption: "Affaccio esterno" },
  { file: "ac94dd4c-a2cb-426f-a228-bcd6027a2120-FILEminimizer-870x420.jpg", caption: "Cucina vista tavolo" },
  { file: "b5271743-26f2-4cce-ac0c-958e752011f2-FILEminimizer-870x420.jpg", caption: "Ampie armadiature" },
  { file: "b7a92951-be23-487d-b225-3742295a80d5-FILEminimizer-870x420.jpg", caption: "Bagno di servizio" },
  { file: "e69fab8a-4a55-47ef-add6-c31bf3773ac9-FILEminimizer-870x420.jpg", caption: "Soggiorno con balcone" }
];

const heroImage = document.getElementById("heroImage");
const heroStrip = document.getElementById("heroStrip");
const galleryGrid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

let activeIndex = 0;

function toPath(file) {
  return encodeURI(`${photoBase}${file}`);
}

function setHero(index) {
  activeIndex = index;
  heroImage.src = toPath(photos[index].file);
  heroImage.alt = photos[index].caption;
  [...heroStrip.querySelectorAll(".hero-thumb")].forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });
}

function openLightbox(index) {
  lightboxImage.src = toPath(photos[index].file);
  lightboxImage.alt = photos[index].caption;
  lightboxCaption.textContent = photos[index].caption;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}

photos.slice(0, 4).forEach((photo, index) => {
  const thumbButton = document.createElement("button");
  thumbButton.className = "hero-thumb";
  thumbButton.setAttribute("type", "button");
  thumbButton.setAttribute("aria-label", `Mostra ${photo.caption}`);
  thumbButton.innerHTML = `<img src="${toPath(photo.file)}" alt="${photo.caption}">`;
  thumbButton.addEventListener("click", () => setHero(index));
  heroStrip.appendChild(thumbButton);
});

photos.forEach((photo, index) => {
  const item = document.createElement("button");
  item.className = "gallery-item";
  item.setAttribute("type", "button");
  item.innerHTML = `
    <img src="${toPath(photo.file)}" alt="${photo.caption}" loading="lazy">
    <span>${photo.caption}</span>
  `;
  item.addEventListener("click", () => openLightbox(index));
  galleryGrid.appendChild(item);
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

lightboxClose.addEventListener("click", closeLightbox);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

setHero(0);

const revealElements = document.querySelectorAll(".reveal, .reveal-delay");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => observer.observe(el));
