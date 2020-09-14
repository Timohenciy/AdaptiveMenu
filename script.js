'use strict';

(function () {
    let pageBody = document.querySelector('body');
    let mobileMenu = document.querySelector('.mobile-menu');
    let mobileMenuOpenBtn = mobileMenu.querySelector('.fa-bars');

    let firstLevelMenu = mobileMenu.querySelector('.mobile_menu-level-1');
    let secondLevelMenu = mobileMenu.querySelector('.mobile_menu-level-2');
    let thirdLevelMenu = mobileMenu.querySelector('.mobile_menu-level-3');

    let mobileMenuClosed = true;
    
    let closeAllOpenedMenus = function () {

        let firstLevelMenuElements = firstLevelMenu.children;

        for (let i = 0; i < firstLevelMenuElements.length; i++) {

            if (firstLevelMenuElements[i].children[1] != undefined && firstLevelMenuElements[i].children[1].classList.contains('open_dropdown_menu')) {
                
                let secondLevelMenuElements = firstLevelMenuElements[i].children[1].children;

                for (let j = 0; j < secondLevelMenuElements.length; j++) {
                    if (secondLevelMenuElements[j].children[1] != undefined && secondLevelMenuElements[j].children[1].classList.contains('open_dropdown_menu')) {
                        secondLevelMenuElements[j].children[1].classList.remove('open_dropdown_menu');
                    }
                }

                firstLevelMenuElements[i].children[1].classList.remove('open_dropdown_menu');
            }
        }

        mobileMenuClosed = true;
    };

    let removeOpenedMenusClasses = function (clickTargetParent) {
        let elementsCollection = clickTargetParent.parentElement.children;

        for (let element of elementsCollection) {

            let submenuElementsCollection = element.children[1].children;

            if (element != clickTargetParent && element.children[1].classList.contains('open_dropdown_menu')) {
                element.children[1].classList.remove('open_dropdown_menu');
            }

            for (let subElement of submenuElementsCollection) {

                if (subElement.children[1] && subElement.children[1].classList.contains('open_dropdown_menu')) {
                    subElement.children[1].classList.remove('open_dropdown_menu');
                }
            }
        };
    };

    mobileMenuOpenBtn.addEventListener('click', function () {
        mobileMenuOpenBtn.classList.toggle('fa-bars');
        mobileMenuOpenBtn.classList.toggle('fa-times');
        firstLevelMenu.classList.toggle('open_dropdown_menu');
        pageBody.classList.toggle('overflow_hidden-body');
        
        if (!mobileMenuClosed) {
            closeAllOpenedMenus();
        } else {
            mobileMenuClosed = false;
        }
    });

    firstLevelMenu.addEventListener('click', function (e) {

        if (e.target.classList.contains('fa-angle-down')) {
            
            e.target.previousElementSibling.classList.toggle('open_dropdown_menu');
            removeOpenedMenusClasses(e.target.parentElement);

            e.target.parentElement.scrollIntoView({block: 'start', behavior: 'smooth'});
        }
    });

}());