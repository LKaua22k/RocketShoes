let show = true;

let teste = document.querySelector('.teste');
let menu = document.querySelector('.menu')

menu.addEventListener('click',() => {
    teste.classList.toggle('on',show);

    show = !show;
})