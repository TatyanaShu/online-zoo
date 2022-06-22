const inputs = document.querySelectorAll('.inp');
 const inputsText = document.querySelectorAll('.slider__container span')    //slider 
const slides = document.querySelectorAll('.slide')
console.log("🚀 ~ file: page1.js ~ line 4 ~ slides", slides)
//  input-range
 
 inputs.forEach((el)=> {
     el.oninput = function () {
        for (let i = 0; i < inputs.length; i++) {
            inputsText[i].innerHTML = '0'+ inputs[i].value + "/";
        }
        
 };
 })
 // first-slider

const firstSlider = document.querySelectorAll('.slide');
console.log("🚀 ~ file: page1.js ~ line 13 ~ firstSlider", firstSlider)
firstSlider.forEach((item) => {
    item.addEventListener('click', ()=>{
        let currentItem = item;
        if(!item.classList.contains('active-slide')){
            for(let i=0; i<firstSlider.length; i++) {
                if(firstSlider[i] != currentItem) {
                    firstSlider[i].classList.remove('active-slide');}
                }
                item.classList.add('active-slide')}
        }
)})

const watchSlider = document.querySelector(".slides");
const cards  = document.querySelectorAll(".slide");
let cardsArr = Array.prototype.slice.call(cards);
let currIndex=2;

function watchSlide(index) {
    if(index!==event){
        inputs[0].value=index+1;
    }
    inputsText[0].innerHTML='0'+ inputs[0].value + "/";
    cardsArr[currIndex-1].classList.remove("active-slide");

    let  width  = Math.min(Number.parseInt(getComputedStyle(cardsArr[0], null).width),Number.parseInt(getComputedStyle(cardsArr[cardsArr.length-1], null).width));
    console.log(width);
    // let gap = Number.parseInt(getComputedStyle(watchSlider, null).gap);
    // console.log(getComputedStyle(watchSlider, null).gap);
    watchSlider.style.transform = `translateX(${(-1*(width + 50)*(inputs[0].value-2))}px)`;
  
    cardsArr[inputs[0].value-1].classList.add("active-slide");
    currIndex=inputs[0].value;
}

inputs[0].addEventListener("input",watchSlide);
cards.forEach(cards=>cards.addEventListener("mousedown",(event)=>{
    for (let i = 0; i < cardsArr.length; i++) {
        if(event.target===cardsArr[i]) {watchSlide(i)};  
      }
}))


//how it works slider

const howItWorksSlider = document.querySelector('.how-it-works__slider');
const insideHowItWorksSlider = document.querySelector('.how-it-works__slide').clientWidth;
inputs[1].addEventListener('input', (e) => {
    howItWorksSlider.style.transition = '1s'
    if (e.target.value === '1') {
        howItWorksSlider.style.marginLeft = '0px';

    } else if (e.target.value === '2') {
        howItWorksSlider.style.marginLeft = `-${insideHowItWorksSlider}px`
    } else if (e.target.value === '3') {
        howItWorksSlider.style.marginLeft = `-${insideHowItWorksSlider * 2}px`
    } else if (e.target.value === '4') {
        howItWorksSlider.style.marginLeft = `-${insideHowItWorksSlider * 3}px`
    }
})

// Testimonials slider
const testimonialsSlider = document.querySelector('.testimonials__wrap');
const insideTestimonialsSlider = document.querySelector('.testimonials__item').clientWidth;
const testimonialsBtnLeft = document.querySelector('.testimonials__slider .left');
const testimonialsBtnRight = document.querySelector('.testimonials__slider .right');
inputs[3].addEventListener('input', (e) => {
    let numb = e.target.value
    testimonialsSlider.style.transition = `1s`
    testimonialsSlider.style.marginLeft = `-${numb * insideTestimonialsSlider}px`
})
testimonialsBtnLeft.addEventListener('click', (e) => {
    testimonialsSlider.style.transition = `1s`
    if (numb === 1) { return }
    else {
        numb--; 
        testimonialsSlider.style.marginLeft = `-${insideTestimonialsSlider * numb}px`
    }
})
testimonialsBtnRight.addEventListener('click', (e) => {
    testimonialsSlider.style.transition = `1s`
    if (numb === 8) { return }
    else {
        numb++;
        testimonialsSlider.value = numb;
        testimonialsSlider.style.marginLeft = `-${insideTestimonialsSlider * numb }px`
    }
})

//pets zoo slider
 
const petsSliders = document.querySelector('.pets-zoo__pictures');
const petsFrame = document.querySelector('.pets-zoo__frame');
console.log(petsFrame)
const petsWraper =  document.querySelector('pet-zoo__wraper');
const petsBntLeft = document.querySelector('.pets-zoo__frame .left');
const petsBntRight = document.querySelector('.pets-zoo__frame .right');
const petsZoo = document.querySelector('.pets-zoo');
let pet = document.querySelectorAll('.pets-zoo__slide');
console.log(pet)
let currentIndex=1, lastIndex, firstIndex=1;
let pets = Array.prototype.slice.call(pet);
let  translate=0;
const petWidth = document.querySelector('.pets-zoo__slide').clientWidth;
function petsSlider(dir){
    // petsSliders.style.transition = `1s`
    // petsSliders.style.marginLeft = `-${petWidth}px`
    let  width  = Number.parseInt(getComputedStyle(pets[0]).width);
    let count=Math.min(Math.floor((Number.parseInt(getComputedStyle(petsFrame, null).width))/(width)),Math.floor((Number.parseInt(getComputedStyle(petsZoo,null).width))/(width)));
    if(lastIndex===undefined){
        lastIndex=count;
    }
    
    if(dir!==undefined){
        if(dir=="left") 
        {
            if(inputs[2].value==1){
                inputs[2].value=8
                lastIndex=pets.length+1;
                firstIndex=lastIndex-count;
                translate =-1*(width)*count;
                petsSliders.style.transform = `translateX(${translate}px)`;
                // petsSliders.style.marginLeft = `-${petWidth}px`
            }
            else

            inputs[2].value--;
        }
        else if(inputs[2].value==8)
        {
            inputs[2].value=0
            lastIndex=count;
            firstIndex=1;
            translate =0;
            petsSliders.style.transform = `translateX(${translate}px)`;
            // petsSliders.style.marginLeft = `-${petWidth}px`
        }
        else inputs[2].value++;
    }

    inputsText[2].innerHTML = '0'+ inputs[2].value + "/";
    pets[inputs[2].value-1].classList.add("active");
    pets[currentIndex-1].classList.remove("active");


    if(inputs[2].value>lastIndex || inputs[2].value<firstIndex)
    {   
        let direction=inputs[2].value>lastIndex?-1:1;
        let step =Math.min(Math.abs(inputs[2].value-lastIndex),Math.abs(inputs[2].value-firstIndex))
        translate +=direction*(width )*step;
        petsSliders.style.transform = `translateX(${translate}px)`;
        // petsSliders.style.marginLeft = `-${petWidth}px`
        if(inputs[2].value-currentIndex>=1) {
            lastIndex=Number.parseInt(inputs[2].value); 
            firstIndex=Number.parseInt(inputs[2].value)-count+1;

        }
        else {
            lastIndex=Number.parseInt(inputs[2].value)+count-1;   
            firstIndex=Number.parseInt(inputs[2].value);
        }
    }

    currentIndex=inputs[2].value;
}
petsBntLeft.addEventListener("mousedown",()=>petsSlider("left"));
petsBntRight.addEventListener("mousedown",()=>petsSlider("right"));
inputs[2].addEventListener("input",()=>petsSlider());






