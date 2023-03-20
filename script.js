let show = true;

let teste = document.querySelector('.teste');
let menu = document.querySelector('.menu')

function menuClick(){
    menu.onclick = () => {
        teste.classList.toggle('on',show);

        document.body.overflow = show ? 'hidden' : 'initial';
    
        show = !show;
    }
}

const icon = document.querySelector('.icon');
const pes = document.querySelector('.search');

function testeClick(){
    icon.onclick = () => {
        if(pes.classList.toggle('active')){
            document.querySelector('.logo').style.display = 'none';
        }else {
            menu.style.display = 'initial';   
            document.querySelector('.logo').style.display = 'block';  
        }
        
         
    }


}

const mails = document.getElementsByClassName('mail')
const activeImg = document.getElementsByClassName('active')


for (var i = 0; i < mails.length ; i++){

    mails[i].addEventListener('click', function(){
        console.log(activeImg)

        if (activeImg.length > 0) {
            activeImg[0].classList.remove('active')
        }

        this.classList.add('active')
        document.getElementById('featured').src = this.src
    })
    
}