'use strict';

(function () {
    let mobileMenu = document.querySelector('.mobile-menu');
    let mobileMenuOpenBtn = mobileMenu.querySelector('.fa-bars');
    let firstLevelMenu = mobileMenu.querySelector('.mobile_menu-level-1');
    let submenuMobile = mobileMenu.querySelector('.submenu_window-mobile');

    mobileMenuOpenBtn.addEventListener('click', function () {
        mobileMenuOpenBtn.classList.toggle('fa-bars');
        mobileMenuOpenBtn.classList.toggle('fa-times');
        firstLevelMenu.classList.toggle('open_dropdown_menu');
    });

    firstLevelMenu.addEventListener('click', function (e) {
        if (e.target.classList.contains('fa-angle-down')) {
            e.target.previousElementSibling.classList.toggle('open_dropdown_menu');
            
        }
        console.log(e.composedPath());
    });

    submenuMobile.addEventListener('click', function (e) {
        console.log(e.target);
    });
}());