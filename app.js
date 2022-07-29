let bg = document.getElementsByTagName('header'); 
let array = ['./assets/images/diapo1', './assets/images/diapo2','./assets/images/diapo3','./assets/images/diapo4'];
let i = 1;
setInterval(changeBG, 15000);

function changeBG() {
    bg[0].style.backgroundImage =  `url(./assets/images/diapo${i}.jpg)` 
    i++
    if( i== array.length){
        i = 1;
    }    
}