document.addEventListener('DOMContentLoaded', function () {
    //first glide
    const glide = new Glide('.glide', {
        type: 'carousel',
        perView: 3,
        gap: 30,
        autoplay: 3000,
        animationDuration: 800,
        hoverpause: true,
        dragThreshold: 20,
        peek: {
            before: 20,
            after: 20
        },
        breakpoints: {
            1200: {
                perView: 3,
                peek: { before: 10, after: 10 }
            },
            1024: {
                perView: 2,
                gap: 20
            },
            768: {
                perView: 2,
                gap: 15
            },
            600: {
                perView: 1,
                gap: 10,
                peek: 0
            }
        }
    });

    glide.on(['mount.after', 'run'], () => {
        const slides = document.querySelectorAll('.glide__slide');
        slides.forEach(slide => slide.classList.remove('is-active'));

        const activeIndex = glide.index;
        const perView = glide.settings.perView;
        const centerIndex = activeIndex + Math.floor(perView / 2);

        if (slides[centerIndex]) {
            slides[centerIndex].classList.add('is-active');
        }
    });

    glide.mount();

    //second glide
    const customGlide = new Glide('.custom-glide', {
        type: 'carousel',
        perView: 3,
        gap: 20,
        autoplay: 4000,
        animationDuration: 700,
        hoverpause: true,
        breakpoints: {
            1024: {
                perView: 2,
                gap: 15
            },
            768: {
                perView: 1,
                gap: 10
            }
        }
    });

    const backIcon = document.querySelector('.back-icon');
    const forwardIcon = document.querySelector('.forward-icon');

    if (backIcon && forwardIcon) {
        backIcon.addEventListener('click', () => customGlide.go('<'));
        forwardIcon.addEventListener('click', () => customGlide.go('>'));
    }

    customGlide.mount();
});
