const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let position = 100
let obstacleOffset = 60
let roadY = 0
let roadX = 300
let speed = 2
let playerHeight;

class Race {
    constructor(y){
        this.x = 100
        this. y = y
    }
    loadImage = function(){
        let roadImage = new Image();
        roadImage.src = 'images/road3.png';
        c.drawImage(roadImage,roadX,roadY-canvas.height,canvas.width/2,2*canvas.height)
        roadY += speed
        if (roadY > canvas.height){
            roadY = 0
        }
    }
    loadCar = function(){
        let carImage = new Image();
        carImage.src = 'images/police.png'
        playerHeight = carImage.height
        c.drawImage(carImage,roadX+position,canvas.height-carImage.height)
    }

    drawObstacle = () => {
        let obstacle = new Image();
        obstacle.src = 'images/car.png';
        this.y += speed;
        c.drawImage(obstacle,roadX+this.x-obstacleOffset,this.y);
        if (this.y > canvas.height + 10) {
            this.y = -400;
        }
    }

    collision = () => {
        // console.log(Math.abs(canvas.height-playerHeight - this.y))
        if (this.x === position && Math.abs(canvas.height-playerHeight - this.y) < 160 ) {
            console.log('collison')
        }
    };
};
let race;
function init(){
    race = new Race(100)
    // race.loadImage();
}
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    race.loadImage();
    race.loadCar();
    race.drawObstacle(-100);
    race.collision();
}

init()
animate()

let button = document.querySelector('.play-btn')
let startScreen = document.querySelector('.start-screen')
button.addEventListener('click', function(){
    startScreen.style.display = 'none'
    canvas.style.display = 'block'
    init();
}
);

document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft' && position > 100)
      position -= 200 ;
    if (e.code === 'ArrowRight' && position < 500)
      position += 200;
});