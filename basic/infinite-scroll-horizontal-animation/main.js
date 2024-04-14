const scrollers = document.querySelectorAll('.scroller');

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector('.scroller__inner');

        // duplicate the scroller__inner elements
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
            const clonedItem = item.cloneNode(true);
            clonedItem.setAttribute('aria-hidden', 'true');
            scrollerInner.appendChild(clonedItem);
        });
    });
}
