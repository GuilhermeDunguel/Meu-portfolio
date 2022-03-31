function openMenu () {
   const locateMenu = document.querySelector('.menu-active')
   const menuIcon = document.querySelector('#burger-icon')
   locateMenu.classList.toggle('toggle')
   if (locateMenu.classList.contains('toggle')){
      menuIcon.src = "../assets/header-icons/menu-icons/burger-menu-closed.svg"
   } else {
      menuIcon.src = "../assets/header-icons/menu-icons/burger-menu-opened.svg"
   }
} 
