window.onload = () => {
    const carouselValues = [
        { src: 'https://i.pinimg.com/originals/26/2a/ca/262aca7ca42384d90c60554c2de46c8c.jpg' },
        { src: 'https://static.wixstatic.com/media/f7fd5e_68ff1b19ba164085a48901593b70d20f~mv2.jpg/v1/fill/w_401,h_300/f7fd5e_68ff1b19ba164085a48901593b70d20f~mv2.jpg' },
        { src: 'https://i.redd.it/m2dhyuuyyp251.png' },
        { src: 'https://i.pinimg.com/originals/d2/d5/90/d2d590b36e662c993c57614b561a5fd1.jpg' },
        { src: 'https://i.imgur.com/YzdHBaa.jpg' },
        { src: 'https://i.pinimg.com/originals/83/26/ff/8326ff66743bab58bf29f1ba6509b7a3.jpg' }
    ];

    const carousel = document.getElementById('carousel');

    carouselValues.map((value, i) => {
        carousel.innerHTML += `<div class="carousel__item" 
                                    style="background-image: url('${value.src}');
                                           background-size: cover;
                                           background-repeat: no-repeat;
                                           background-position: center;
                                           order: ${i + 1};"
                                ></div>`;
    });
}

const pullRight = () => {
    const carouselItems = document.querySelectorAll('.carousel__item');

    [...carouselItems].map(carouselItem => {
        if (parseInt(carouselItem.style.order) === 1) {
            carouselItem.style.order = carouselItems.length;
            return;
        }

        carouselItem.style.order = parseInt(carouselItem.style.order) - 1;
    });
}

const pullLeft = () => {
    const carouselItems = document.querySelectorAll('.carousel__item');

    [...carouselItems].map(carouselItem => {
        if (parseInt(carouselItem.style.order) === carouselItems.length) {
            carouselItem.style.order = 1;
            return;
        }

        carouselItem.style.order = parseInt(carouselItem.style.order) + 1;
    });
}
