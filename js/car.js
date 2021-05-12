const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.height = innerHeight
canvas.width = innerWidth
// class Race {
//     constructor(x){

//     }
// }
// init();
// animate();
let button = document.querySelector('.play-btn')
let startScreen = document.querySelector('.start-screen')
button.addEventListener('click', function(){
    startScreen.style.display = 'none'
}
);