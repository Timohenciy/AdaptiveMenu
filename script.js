'use strict';

(function () {
    let mobileMenu = document.querySelector('.mobile-menu');
    let mobileMenuOpenBtn = mobileMenu.querySelector('.fa-bars');
    let firstLevelMenu = mobileMenu.querySelector('.mobile_menu-level-1');

    mobileMenuOpenBtn.addEventListener('click', function () {
        mobileMenuOpenBtn.classList.toggle('fa-bars');
        mobileMenuOpenBtn.classList.toggle('fa-times');
        firstLevelMenu.classList.toggle('open_dropdown_menu');
    });

    firstLevelMenu.addEventListener('click', function (e) {
        if (e.target.classList.contains('fa-angle-down')) {
            // console.log(e.target.previousElementSibling);
            e.target.nextElementSibling.classList.toggle('open_dropdown_menu');
        }

    });
}());