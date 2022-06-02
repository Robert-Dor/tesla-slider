
let init = () => {
    let container = document.getElementsByClassName('jumbo-slider__container')[0],
        slides = document.getElementsByClassName('jumbo-slider__slide'),
        circles = document.getElementsByClassName('jumbo-slider__circle'),
        links = document.getElementsByClassName('jumbo-slider__link'),
        current = 1,
        time = 6000;

    // add animation class to slide
    window.onload = () => {
        slides[0].classList.add('jumbo-slider__slide--active');
        links[current - 1].classList.add('jumbo-slider__link--active');
        circles[current - 1].classList.add('jumbo-slider__circle--active');
    }
    

    // update elipses and link
    let updateNav = (current) => {
        // console.log(`update current: ${current}`)
        for (let index = 0; index < slides.length; index++) {
            links[index].classList.remove('jumbo-slider__link--active');
            circles[index].classList.remove('jumbo-slider__circle--filled');
        }
        links[current - 1].classList.add('jumbo-slider__link--active');
        circles[current - 1].classList.add('jumbo-slider__circle--filled');
    }
    let startSliding = () => {
        setInterval(() => {
            // console.log(`current: ${current}`)

            // remove active from the first slide and add it to the second slide so that it becomes the first slide with the class activated.
            slides[1].classList.add('jumbo-slider__slide--active')
            slides[0].classList.remove('jumbo-slider__slide--active')
            // clone the first slide and place on the last space.
            container.appendChild(slides[0].cloneNode([true]));
            // then reove the first slide after is has been cloned.
            container.removeChild(slides[0]);

            // console.log(`slides: ${slides.length}`)
            if (current < slides.length) {
                current++
                updateNav(current)
            } else {
                current = 1
                updateNav(current)
            }
            

        }, time);
    }
    startSliding();
}

init();