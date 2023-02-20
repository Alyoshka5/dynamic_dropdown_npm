const container = document.querySelector('.container');
const prevButton = document.querySelector('.img-button.prev-img');
const nextButton = document.querySelector('.img-button.next-img');
const slideCircles = document.querySelectorAll('.slide-circle');

let imgAmmount = container.querySelectorAll('.slider-image').length;
let imgCounter = 1;

function changeSlide(slideDirection) {
    if (slideDirection == 'right') {
        if (imgCounter == imgAmmount) transitionSlide(1);
        else transitionSlide(imgCounter + 1);
    } else if (slideDirection == 'left') {
        if (imgCounter == 1) transitionSlide(imgAmmount);
        else transitionSlide(imgCounter - 1);
    } else {
        transitionSlide(parseInt(this.getAttribute('data-img-link')));
    }
}

function transitionSlide(circleNum) {
    let containerTranslateValue = new WebKitCSSMatrix(getComputedStyle(container).transform).m41;
    if (circleNum == imgCounter || containerTranslateValue % 600 != 0) return;
    clearInterval(slideInterval);
    let translateChange = (imgCounter - circleNum) * 600;
    
    let transitionDuration = `${0.6 * Math.abs(imgCounter - circleNum)}s`;
    container.style.transitionDuration = transitionDuration;
    document.querySelector('.slide-circle.active-circle').classList.remove('active-circle');
    let slideCircle = document.querySelector(`.slide-circle[data-img-link='${circleNum}']`);
    slideCircle.style.transitionDuration = transitionDuration;
    slideCircle.classList.add('active-circle');

    container.style.transform = `translateX(${containerTranslateValue + translateChange}px)`;
    imgCounter = circleNum;
    timedSlide();
}

function timedSlide() {
    slideInterval = setInterval(() => {
        changeSlide('right');
    }, 5000)
}

timedSlide();
nextButton.addEventListener('click', () => {changeSlide('right')});
prevButton.addEventListener('click', () => {changeSlide('left')});
slideCircles.forEach(slideCircle => slideCircle.addEventListener('click', changeSlide));
