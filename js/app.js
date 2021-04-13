'use strict';
let container = document.getElementById('container');
//change that to 25 after finish test 
let attempts = 10;
let list = document.getElementById('list');
let divbtn=document.getElementById('divbtn');
let userAttempet = 0;
let first = document.getElementById('first');
let second = document.getElementById('second');
let third = document.getElementById('third');
// index to img

let firstIndex;
let secondIndex;
let thirdIndex;

//bulid the constractor 
function Bus(name, source) {
    this.name = name;
    this.source = source;
    this.shown = 0;
    this.vot = 0;
    Bus.mall.push(this);

}
//array
Bus.mall = [];

//obj

new Bus('bag', 'img/bag.jpg');//0
new Bus('banana', 'img/banana.jpg');//1
new Bus('bathroom', 'img/bathroom.jpg');//2
new Bus('boots', 'img/boots.jpg');//3
new Bus('breakfast', 'img/breakfast.jpg');//4
new Bus('bubblegum', 'img/bubblegum.jpg');//5

new Bus('chair', 'img/chair.jpg');//6


new Bus('cthulhu', 'img/cthulhu.jpg');//8

new Bus('dog-duck', 'img/dog-duck.jpg');//9
new Bus('dragon', 'img/dragon.jpg');//10
new Bus('pen', 'img/pen.jpg');//11

new Bus('pet-sweep', 'img/pet-sweep.jpg');//12

new Bus('scissors', 'img/scissors.jpg');//13

new Bus('shark', 'img/shark.jpg');//14

new Bus('sweep', 'img/sweep.png');//15
new Bus('tauntaun', 'img/tauntaun.jpg');//16
new Bus('unicorn', 'img/unicorn.jpg');//17
new Bus('usb', 'img/usb.gif');//18
new Bus('water', 'img/water-can.jpg');//19

new Bus('wine-glass', 'img/wine-glass.jpg');//21


console.log(Bus.mall);

function generateRandomNumber() {
    // 0 => 17
    return Math.floor(Math.random() * Bus.mall.length);
}

//console.log( generateRandomNumber() );




//function render  three img
function renderFun() {

    
    firstIndex = generateRandomNumber();
    secondIndex = generateRandomNumber();
    thirdIndex = generateRandomNumber();
    //while loop to make the img different 
    while (firstIndex === secondIndex || firstIndex === thirdIndex || secondIndex === thirdIndex) {
        firstIndex = generateRandomNumber();
        secondIndex = generateRandomNumber();

    }
    //document.getElementById('first').setAttribute('src',Bus.mall[firstIndex].source);

    // console.log(Bus.mall[firstIndex].source);
    console.log(first, second, third);

    //give src to img that created in index.html

    first.src = Bus.mall[firstIndex].source;
    second.src = Bus.mall[secondIndex].source;
    third.src = Bus.mall[thirdIndex].source;

   
         if(Bus.mall[firstIndex].name ==='bag'|| Bus.mall[secondIndex].name ==='bag'||Bus.mall[thirdIndex].name ==='bag'){
            Bus.mall[0].shown++;
         }
         else  if(Bus.mall[firstIndex].name ==='banana'|| Bus.mall[secondIndex].name ==='banana'||Bus.mall[thirdIndex].name ==='banana')
         { Bus.mall[1].shown++;

         }
         else  if(Bus.mall[firstIndex].name ==='bathroom'|| Bus.mall[secondIndex].name ==='bathroom'||Bus.mall[thirdIndex].name ==='bathroom')
         { Bus.mall[2].shown++;

         }
         else  if(Bus.mall[firstIndex].name ==='boots'|| Bus.mall[secondIndex].name ==='boots'||Bus.mall[thirdIndex].name ==='boots')
         { Bus.mall[3].shown++;

         }
         else  if(Bus.mall[firstIndex].name ==='breakfast'|| Bus.mall[secondIndex].name ==='breakfast'||Bus.mall[thirdIndex].name ==='breakfast')
         { Bus.mall[4].shown++;

         }
         else  if(Bus.mall[firstIndex].name ==='bubblegum'|| Bus.mall[secondIndex].name ==='bubblegum'||Bus.mall[thirdIndex].name ==='bubblegum')
         { Bus.mall[5].shown++;

         }
         else  if(Bus.mall[firstIndex].name ==='chair'|| Bus.mall[secondIndex].name ==='chair'||Bus.mall[thirdIndex].name ==='chair')
         { Bus.mall[6].shown++;

         }
         else  if(Bus.mall[firstIndex].name ==='cthulhu'|| Bus.mall[secondIndex].name ==='cthulhu'||Bus.mall[thirdIndex].name ==='cthulhu')
         { Bus.mall[7].shown++;

         }
         else  if(Bus.mall[firstIndex].name ==='dog-duck'|| Bus.mall[secondIndex].name ==='dog-duck'||Bus.mall[thirdIndex].name ==='dog-duck')
         { Bus.mall[8].shown++;

         }
         else  if(Bus.mall[firstIndex].name ==='dragon'|| Bus.mall[secondIndex].name ==='dragon'||Bus.mall[thirdIndex].name ==='dragon')
         { Bus.mall[9].shown++;

         }
         else  if(Bus.mall[firstIndex].name ==='pen'|| Bus.mall[secondIndex].name ==='pen'||Bus.mall[thirdIndex].name ==='pen')
         { Bus.mall[10].shown++;

         }
         else  if(Bus.mall[firstIndex].name ==='pet-sweep'|| Bus.mall[secondIndex].name ==='pet-sweep'||Bus.mall[thirdIndex].name ==='pet-sweep')
         { Bus.mall[11].shown++;

         }
         else  if(Bus.mall[firstIndex].name ==='scissors'|| Bus.mall[secondIndex].name ==='scissors'||Bus.mall[thirdIndex].name ==='scissors')
         { Bus.mall[12].shown++;

         }
         else  if(Bus.mall[firstIndex].name ==='shark'|| Bus.mall[secondIndex].name ==='shark'||Bus.mall[thirdIndex].name ==='shark')
         { Bus.mall[13].shown++;

         }
         else  if(Bus.mall[firstIndex].name ==='sweep'|| Bus.mall[secondIndex].name ==='sweep'||Bus.mall[thirdIndex].name ==='sweep')
         { Bus.mall[14].shown++;

         }
         else  if(Bus.mall[firstIndex].name ==='tauntaun'|| Bus.mall[secondIndex].name ==='tauntaun'||Bus.mall[thirdIndex].name ==='tauntaun')
         { Bus.mall[15].shown++;

         }

         else  if(Bus.mall[firstIndex].name ==='unicorn'|| Bus.mall[secondIndex].name ==='unicorn'||Bus.mall[thirdIndex].name ==='unicorn')
         { Bus.mall[16].shown++;

         }
         else  if(Bus.mall[firstIndex].name ==='usb'|| Bus.mall[secondIndex].name ==='usb'||Bus.mall[thirdIndex].name ==='usb')
         { Bus.mall[17].shown++;

         }
         else  if(Bus.mall[firstIndex].name ==='water'|| Bus.mall[secondIndex].name ==='water'||Bus.mall[thirdIndex].name ==='water')
         { Bus.mall[18].shown++;

         }
         else  if(Bus.mall[firstIndex].name ==='wine-glass'|| Bus.mall[secondIndex].name ==='wine-glass'||Bus.mall[thirdIndex].name ==='wine-glass')
         { Bus.mall[19].shown++;

         }







     
  


for(let i=0 ;i<10;i++){
switch(Bus.mall[i].name){
    case 'bag':
        Bus.shown++;
        break;
case 'banana':
    Bus.shown++;
    break;


}}

    }

 renderFun();

//add event to div
container.addEventListener('click',clickFun);

function clickFun(event) {
    console.log(event.target.id);

    userAttempet++;

    //console.log(userAttempet);
      
    

    console.log(userAttempet);
   

    if (userAttempet <= attempts) {

        if (event.target.id === 'first') {
            Bus.mall[firstIndex].vot++;

        }
        else if (event.target.id == 'second') {
            Bus.mall[secondIndex].vot++;



        }
        else if (event.target.id == 'third') {
            Bus.mall[thirdIndex].vot++;

        }
        console.log(Bus.mall);
        renderFun();
    }

    else {

        let btn = document.createElement('button');
        btn.value="result";
        btn.style.fontSize = "30px";
        divbtn.appendChild(btn);
        
        
      btn.addEventListener('click',listFun);
      function listFun(){
      for(let i=0;i<Bus.mall.length;i++){
          let liElement=document.createElement('li');
          list.appendChild(liElement);
          liElement.textContent=`${Bus.mall[i].name} had  ${Bus.mall[i].vot} vote  , and was seen ${Bus.mall[i].shown++} time `;
      }
        
    }

    }

    
}





 

   


   
