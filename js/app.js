'use strict';
let container=document.getElementById('container');
//change that to 25 after finish test 
let attempts=10;

let userAttempet=0;
let first=document.getElementById('first');
let second=document.getElementById('second');
let third=document.getElementById('third');
// index to img

let firstIndex;
let secondIndex;
let thirdIndex;

//bulid the constractor 
function Bus(name,source ){
    this.name=name;
    this.source=source;
    this.shown=0;
    Bus.mall.push(this);

}
//array
Bus.mall=[];

//obj

new Bus('bag','img/bag.jpg');//0
new Bus('banana','img/banana.jpg');//1
new Bus('bathroom','img/bathroom.jpg');//2
new Bus('boots','img/boots.jpg');//3
new Bus('breakfast','img/breakfast.jpg');//4
new Bus('bubblegum','img/bubblegum.jpg');//5

new Bus('chair','img/chair.jpg');//6


new Bus('cthulhu','img/cthulhu.jpg');//8

new Bus('dog-duck','img/dog-duck.jpg');//9
new Bus('dragon','img/dragon.jpg');//10
new Bus('pen','img/pen.jpg');//11

new Bus('pet-sweep','img/pet-sweep.jpg');//12

new Bus('scissors','img/scissors.jpg');//13

new Bus('shark','img/shark.jpg');//14

new Bus('sweep','img/sweep.png');//15
new Bus('tauntaun','img/tauntaun.jpg');//16
new Bus('unicorn','img/unicorn.jpg');//17
new Bus('usb','img/usb.gif');//18
new Bus('water','img/water-can.jpg');//19

new Bus('wine-glass','img/wine-glass.jpg');//21


console.log(Bus.mall);

function generateRandomNumber() {
    // 0 => 17
    return Math.floor(Math.random() * Bus.mall.length);
  }

//console.log( generateRandomNumber() );




//function render  three img
function renderFun(){
    firstIndex=generateRandomNumber();
    secondIndex=generateRandomNumber();
    thirdIndex=generateRandomNumber();

    //while loop to make the img different 
    while(firstIndex===secondIndex||firstIndex===thirdIndex||secondIndex===thirdIndex){
        firstIndex=generateRandomNumber();
        secondIndex=generateRandomNumber();
    }
    //console.log(Bus.mall[firstIndex].name);

    //give src to img that created in index.html
   
   //first.src=Bus.mall[firstIndex].source;
//second.src=Bus.mall[secondIndex].source;
//third.src=Bus.mall[thirdIndex].source;

    
}
document.getElementById('container').textContent="eman";
document.getElementById('first').src = "img/wine-glass.jpg";




renderFun();

