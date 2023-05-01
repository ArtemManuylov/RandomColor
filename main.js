const randomBtn = document.querySelector('.random-btn');
const body = document.querySelector('body');
const colorText = document.querySelector('.color-text');

randomBtn.addEventListener('click',() => {
    let bgColor = random();

    body.style.backgroundColor = bgColor;
    colorText.textContent = bgColor;

});





function random(){
    let letters = '0123456789ABCDEF'
    let color = '#';

    for (let i = 0; i < 6; i ++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};



