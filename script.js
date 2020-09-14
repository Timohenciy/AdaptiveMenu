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

    let checkCurrentLevelClasses = function (clickTargetParent) {
        let elementsCollection = clickTargetParent.parentElement.children;

        for (let element of elementsCollection) {
            let submenuElementsCollection = element.children[1].children;

            for (let subElement of submenuElementsCollection) {
                if (subElement.children[1] && subElement.children[1].classList.contains('open_dropdown_menu')) {
                    subElement.children[1].classList.remove('open_dropdown_menu');
                }
            }

            if (element != clickTargetParent && element.children[1].classList.contains('open_dropdown_menu')) {
                element.children[1].classList.remove('open_dropdown_menu');
            }
        };
    };

    firstLevelMenu.addEventListener('click', function (e) {
        if (e.target.classList.contains('fa-angle-down')) {
            
            e.target.previousElementSibling.classList.toggle('open_dropdown_menu');
            checkCurrentLevelClasses(e.target.parentElement);
            
            e.target.parentElement.scrollIntoView({block: 'start', behavior: 'smooth'});
        }
    });

}());