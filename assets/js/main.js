function showMenu(toggle, menu){
    const toggleMenu = document.getElementById(toggle);
    const sideMenu = document.getElementById(menu);
    
    if(toggleMenu && sideMenu){
        toggleMenu.addEventListener("click", function(){
            sideMenu.classList.toggle("active-menu");
        })
    }
}
showMenu("header-toggle", "header-menu");

const swiper = new Swiper(".mainscreen_container", {
    loop: true,
    effect: "cube",
    grabCursor: true,
    direction: "horizontal",
    keyboard:{
        enable: true,
    },
    autoplay:{
        delay: 3500,
        disableOnInteraction: false,
    },
    speed: 3000,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    navigation:{
        prevEl: ".arrow-left",
        nextEl: ".arrow-right"
    },
})