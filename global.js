function imgSlide(imgSrc) {
    document.querySelector('.pilus').src = imgSrc;
}

function changeColor(color) {
    const shape = document.querySelector('.shape');
    const button = document.querySelector('.order-here');
    const header = document.querySelector('span');

    shape.style.backgroundColor = color;
    button.style.backgroundColor = color;
    header.style.color = color;
    
}