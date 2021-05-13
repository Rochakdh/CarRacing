const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
c.font = "30px Arial";
let startScreen = document.querySelector('.start-screen')
let endScreen = document.querySelector('.end-screen')
let buttonStart = document.querySelector('.play-btn')
let buttonHome = document.querySelector('.home-btn')

let possileObstacle = [100,300,500]
let position = 100
let obstacleOffset = 60
let roadY = 0
let roadX = 300
let speed = 2
let playerHeight;
let score = 0

function randomItem(items)
{
    return items[Math.floor(Math.random()*items.length)]; 
}


class Race {
    constructor(y){
        this.x = randomItem(possileObstacle)
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
        if (this.x === position && Math.abs(canvas.height-playerHeight - this.y) < 160 ) {
            console.log('game over')
            score = 0
            startScreen.style.display = 'none'
            canvas.style.display = 'none'
            endScreen.style.display = 'block'
        }
    };
};
let race;
function init(){
    race = new Race(-100)
    raceSecond = new Race(-500)
    raceThird = new Race(-900)
    // race.loadImage();
}
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    scoreDisplay = 'Score :' + score
    score = score + 1
    c.fillText(scoreDisplay, 10, 100);
    race.loadImage();
    race.loadCar();
    race.drawObstacle();
    raceSecond.drawObstacle()
    raceThird.drawObstacle()
    race.collision();
    raceSecond.collision()
    raceThird.collision()
}

init()
animate()



buttonStart.addEventListener('click', function(){
    startScreen.style.display = 'none'
    endScreen.style.display = 'none'
    canvas.style.display = 'block'
    init();
}
);

buttonHome.addEventListener('click', function(){
    startScreen.style.display = 'block'
    endScreen.style.display = 'none'
    canvas.style.display = 'none'
    init();
}
);
document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft' && position > 100)
      position -= 200 ;
    if (e.code === 'ArrowRight' && position < 500)
      position += 200;
});