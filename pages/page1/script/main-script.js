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

