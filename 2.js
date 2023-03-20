const thumbnails = document.getElementsByClassName('thumbnail')

const activeImg = document.getElementsByClassName('active')

const mails = document.getElementsByClassName('mail')

for (var i=0; i < thumbnails.length; i++){

    thumbnails[i].addEventListener('click', function(){
        console.log(activeImg)
        
        if (activeImg.length > 0){
            activeImg[0].classList.remove('active')
        }
        

        this.classList.add('active')
        document.getElementById('featured').src = this.src
    })
}