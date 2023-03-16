let show = true;

let teste = document.querySelector('.teste');
let menu = document.querySelector('.menu')

menu.addEventListener('click',() => {
    teste.classList.toggle('on',show);
    
    document.querySelector('.logo').style.display = show ? 'none' : 'block';
    document.body.style.overflow = show ? 'hidden' : 'initial';

    show = !show;
})

const icon = document.querySelector('.icon');
const pes = document.querySelector('.search');

function testeClick(){
    icon.onclick = () => {
        if(pes.classList.toggle('active')){
            menu.style.display = 'none';  
        }else {
            menu.style.display = 'initial';   
                document.querySelector('.logo').style.display = 'initial';  
        }
          
         
    }
}
