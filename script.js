let show = true;

let teste = document.querySelector(".teste1");
let menu = document.querySelector(".menu");

menu.addEventListener('click', () => {

  document.body.style.overflow = show ? "hidden" : "initial"

  teste.classList.toggle("on", show)

  show = !show;
})

const mails = document.getElementsByClassName("mail");
const activeImg = document.getElementsByClassName("hover");

for (var i = 0; i < mails.length; i++) {
  mails[i].addEventListener("click", function () {
    console.log(activeImg);

    if (activeImg.length >= 0) {
      activeImg[0].classList.remove("hover");
    }

    this.classList.add("hover");
    document.getElementById("featured").src = this.src;
  });
  };


  window.addEventListener("scroll", function () {
    teste.classList.toggle("sticky", scrollY > 40)
  });
    