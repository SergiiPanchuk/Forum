(function (){
    let position = 0;
    let slideToShow = 1;
    const slideToScroll = 1;
    const container = document.querySelector('.slider__container');
    const track = document.querySelector('.slider__track');
    const btnPrev = document.querySelector('.btn__prev');
    const btnNext = document.querySelector('.btn__next');
    const items = document.querySelectorAll('.slider__item');
    const itemsCount = items.length;
    let itemWidth = container.clientWidth / slideToShow;
    let movePosition = slideToScroll * itemWidth;

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
    });

    function checkBtns() {
        btnPrev.ariaDisabled = position === 0;
        btnNext.ariaDisabled = position <= -(itemsCount - slideToShow) * itemWidth;
    };
   function size() {
        if (window.innerWidth > 766) {
            slideToShow = 2;
            itemWidth = container.clientWidth / slideToShow;
            movePosition = slideToScroll * itemWidth;
            items.forEach((item) => {
                item.style.minWidth = `${itemWidth - 70}px`;
            });
            setPosition();
        }else {
            items.forEach((item) => {
            item.style.minWidth = `${itemWidth - 70}px`;
            setPosition();
            });
        }
        
    };
    window.addEventListener('resize', size());

    function setPosition() {
        track.style.transform = `translateX(${position}px)`;
    };
})();