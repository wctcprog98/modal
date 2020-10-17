


let openBtn = document.getElementById('open');
let closeBtn = document.getElementById('close-button');
let overlay = document.getElementById('overlay');
let contact = document.getElementById('contactBtn');

openBtn.addEventListener('click', function () {
    overlay.style.opacity = '1'; 
    contact.style.opacity = '0'; 
})

closeBtn.addEventListener('click', function () {
    overlay.style.opacity = '0';
    contact.style.opacity = '1'; 

})

