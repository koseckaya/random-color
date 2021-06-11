const colors = ['red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow']
const box = document.getElementById('box');

box.addEventListener('click', ()=>{
    let index = Math.floor(Math.random() * colors.length +1);

    return box.style.backgroundColor = `${colors[index]}`;
});