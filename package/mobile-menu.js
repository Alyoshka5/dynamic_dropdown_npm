let activeMobileMenu;

function setUpWidths() {
    document.querySelectorAll('.mobile-menu').forEach(menu => {
        document.documentElement.style.setProperty('--options-width', `${menu.querySelector('.menu-options').offsetWidth}px`);
        document.documentElement.style.setProperty('--toggle-height', `${menu.querySelector('.menu-button').offsetHeight + 10}px`);
    });
};
setUpWidths();

function toggleMenuOptions(e) {
    if (!e.target.matches('.mobile-menu .menu-button') && e.target.closest('.mobile-menu .menu-options') == null) {
        if (activeMobileMenu) {
            activeMobileMenu.querySelector('.menu-options').classList.remove('show-menu-options');
            activeMobileMenu.querySelector('.mobile-menu .menu-button').classList.remove('flip-show-options');
            activeMobileMenu.querySelector('.mobile-menu .space-holder').classList.remove('grow-space-holder');
        }
        return;
    }
    
    if (e.target.matches('.mobile-menu .menu-button')) {
        activeMobileMenu = e.target.closest('.mobile-menu');
        activeMobileMenu.querySelector('.menu-options').classList.toggle('show-menu-options');
        activeMobileMenu.querySelector('.menu-button').classList.toggle('flip-show-options');
        activeMobileMenu.querySelector('.mobile-menu .space-holder').classList.toggle('grow-space-holder');
    }

    document.querySelectorAll('.mobile-menu').forEach(menu => {
        if (menu != activeMobileMenu) {
            menu.querySelector('.mobile-menu .menu-options').classList.remove('show-menu-options');
            menu.querySelector('.mobile-menu .menu-button').classList.remove('flip-show-options');
            menu.querySelector('.mobile-menu .space-holder').classList.remove('grow-space-holder');
        }
    });
}

document.addEventListener('click', toggleMenuOptions);
