// @param img.naturalWidth: is width of the image before resized
// @param img.naturalHeight: is height of the image before resized

const allImgs = document.querySelectorAll('.img-wrapper');
const allImgsNatural = document.querySelectorAll('.img');
const gallery = document.querySelector('.gallery');

// all element is ready loaded
document.onreadystatechange = function () {
    // check if all images are loaded
    document.readyState === 'complete' &&
        // add class to img-wrapper element outside of the img element
        allImgsNatural.forEach((img) => {
            if (img.naturalWidth > img.naturalHeight) {
                img.closest('.img-wrapper').classList.add('landscape');
            } else if (img.naturalWidth < img.naturalHeight) {
                img.closest('.img-wrapper').classList.add('portrait');
            } else {
                img.closest('.img-wrapper').classList.add('square');
            }
        });
};

// prevent right click to show context menu
document.addEventListener('contextmenu', (e) => e.preventDefault(), true);

// prevent drag element
document.addEventListener('dragstart', (e) => e.preventDefault(), true);

// scroll gallery with mouse wheel
gallery.addEventListener('wheel', (e) => {
    gallery.scrollTop = e.deltaY + gallery.scrollTop;
});
