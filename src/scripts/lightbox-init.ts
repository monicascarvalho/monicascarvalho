import PhotoSwipeLightbox from 'photoswipe/lightbox';

export function initPhotoSwipe(gallerySelector: string = '.pswp-gallery-context') {
  const elements = document.querySelectorAll(gallerySelector);
  if (!elements.length) return;

  const lightbox = new PhotoSwipeLightbox({
    gallery: gallerySelector,
    children: 'a.pswp-gallery-item',
    pswpModule: () => import('photoswipe'),
    padding: { top: 24, bottom: 24, left: 24, right: 24 },
    bgOpacity: 0.94,
    wheelToZoom: true,
    showHideAnimationType: 'zoom',
  });

  lightbox.init();
  return lightbox;
}
