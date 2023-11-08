let menu = document.querySelectorAll('#menu-bars');
let navbar = document.querySelectorAll('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    section.foreach(sec =>{
        let top = window.scrollY;
        let height = sec.offsetheight;
        let offset = sec.offsettop -150;
        let id = sec.getattribute('id');

        if(top => offset && top < offset + height){
            navlinks.foreach(links =>{
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            });
        };
    });
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
} 


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 7500,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    loop:true,
  });



  var swiper = new Swiper(".review-slider", {
    spaceBetween: 110,
    centeredSlides: true,
    autoplay: {
    delay: 7500,
    disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        0: {
            slidesPerview: 1,
        },
        640: {
            slidesPerview: 2,
        },
        768: {
            slidesPerview: 2,
        },
        1024: {
            slidesPerview: 4,
        },
    },
  });


  function loader(){
    document.querySelector('.loader-container').classlist.add(fade-out);

  }

  function fadeout(){
    setInterval(loader, 3000);
  }

  window.onload = fadeout;