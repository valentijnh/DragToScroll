const slider = document.querySelector('.telefoonscrollsnap');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (event) => {
    isDown = true;
    slider.classList.add('active');
    startX = event.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', () => {
    if(!isDown) return;
    event.preventDefault();
    const x = event.pageX -slider.offsetLeft;
    const walk = (x - startX) ;
    slider.scrollLeft = scrollLeft - walk;
    
});
