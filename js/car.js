const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let position = 100

class Race {
    constructor(y){
        this.x = 0
        this. y = y
        this.xOffset = 300
    }
    loadImage = function(){
        let roadImage = new Image();
        roadImage.src = 'images/road.png';
        c.drawImage(roadImage,this.xOffset,0,canvas.width/2, canvas.width);
        let carImage = new Image();
        carImage.src = 'images/police.png'
        c.drawImage(carImage,this.xOffset+position,canvas.height-carImage.height)
    }
}
let race;
function init(){
    race = new Race(100)
    race.loadImage();
}
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    race.loadImage();
}

init()
let button = document.querySelector('.play-btn')
let startScreen = document.querySelector('.start-screen')
button.addEventListener('click', function(){
    startScreen.style.display = 'none'
    init();
}
);

document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft' && position > 100)
      position -= 200 ;
    if (e.code === 'ArrowRight' && position < 500)
      position += 200;
    animate()
});