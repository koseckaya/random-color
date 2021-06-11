

const box = document.getElementById('box');
const colorName = document.getElementById('colorName');

box.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 255 + 1);
    let g = Math.floor(Math.random() * 255 + 1);
    let b = Math.floor(Math.random() * 255 + 1);
    let color =  `rgb(${r}, ${g}, ${b})`;
   
    colorName.innerHTML = color;

    return box.style.backgroundColor = color;

})