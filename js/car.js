const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// canvas.height / 2 - image.height / 2
class Race {
    constructor(y){
        this.x = 0
        this. y = y
        this.xOffset = 300
        this.width = canvas.width
        this.height = canvas.height

    }
    loadImage = function(){
        let position = [100,300,480]
        let roadImage = new Image();
        roadImage.src = 'images/road.png';
        let carImage = new Image();
        carImage.src = 'images/police.png'
        c.drawImage(roadImage,this.xOffset,0,this.width/2,this.width);
        c.drawImage(carImage,this.xOffset+position[2],this.height-carImage.height)
    }
}
function init(){
    road = new Race(100)
    road.loadImage();
}

init();
// animate();
let button = document.querySelector('.play-btn')
let startScreen = document.querySelector('.start-screen')
button.addEventListener('click', function(){
    startScreen.style.display = 'none'
    init();
}
);

