(function (){
    let position = 0;
    const slideToShow = 2;
    const slideToScroll = 1;
    const container = document.querySelector('.slider__container');
    const track = document.querySelector('.slider__track');
    const btnPrev = document.querySelector('.btn__prev');
    const btnNext = document.querySelector('.btn__next');
    const items = document.querySelectorAll('.slider__item');
    const itemsCount = items.length;
    const itemWidth = container.clientWidth / slideToShow;
    const movePosition = slideToScroll * itemWidth;

    items.forEach((item) => {
        item.style.minWidth = `${itemWidth - 70}px`;
    });

    btnNext.addEventListener('click', () => {
        const itemsLeft = itemsCount - (Math.abs(position) + slideToShow * itemWidth) / itemWidth;

        position -= itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtns();
    });

    btnPrev.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= slideToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtns();
    })

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    }
    const checkBtns= () => {
        btnPrev.ariaDisabled = position === 0;
        btnNext.ariaDisabled = position <= -(itemsCount - slideToShow) * itemWidth;
    }
})();