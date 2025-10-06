document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.featured-product-split').forEach((section) => {
    const mainImage = section.querySelector('.fps-carousel__image');
    const thumbnails = section.querySelectorAll('.fps-carousel__thumbnail');
    const prevBtn = section.querySelector('.fps-carousel__arrow--prev');
    const nextBtn = section.querySelector('.fps-carousel__arrow--next');
    let active = 0;

    const update = (index) => {
      thumbnails.forEach((t) => t.classList.remove('is-active'));
      thumbnails[index].classList.add('is-active');
      mainImage.src = thumbnails[index].dataset.large;
      active = index;
    };

    thumbnails.forEach((thumb, i) => thumb.addEventListener('click', () => update(i)));

    prevBtn?.addEventListener('click', () => update((active - 1 + thumbnails.length) % thumbnails.length));
    nextBtn?.addEventListener('click', () => update((active + 1) % thumbnails.length));
  });
});
