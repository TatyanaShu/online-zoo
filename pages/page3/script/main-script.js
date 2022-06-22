   //change theme

 const changeCheckbox = document.querySelector('#day-night')
 const themeMain = document.querySelector('.theme');
 if(!localStorage.theme) localStorage.theme = 'light-theme'
 themeMain.className = localStorage.theme;
 changeCheckbox.addEventListener('click', function(){
    themeMain.classList.toggle('light-theme')
    themeMain.classList.toggle('dark-theme')
    localStorage.theme = themeMain.className || 'light-theme'
 });

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