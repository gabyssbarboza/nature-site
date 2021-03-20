const openMenu = () => {
    const icon = document.querySelector(".fas.fa-bars");
    const nav = document.querySelector('.x-estrutura-header-menu-desk');
    const navLinks = document.querySelectorAll('.x-estrutura-header-menu-desk li')
    
    icon.addEventListener('click', () => {
        nav.classList.toggle("open-nav")

        navLinks.forEach((item, index) => {
            if(item.style.animation){
                console.log('temte animalão')
                item.style.animation = "";
            }else{
                item.style.animation = `openMenuAnimation 0.1s ease forwards ${index / 7 + 0.2}s`
            }
        })


    })
}

openMenu();

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'horizontal',
    loop: true,
  })

