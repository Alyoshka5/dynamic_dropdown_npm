let activeMenu;

function toggleMenuOptions(e) {
    if (!e.target.matches('.menu .menu-button') && e.target.closest('.menu .menu-option') == null) {
        if (activeMenu) activeMenu.querySelector('.menu-options').classList.remove('show-menu-options');
        return;
    }
    
    if (e.target.matches('.menu .menu-button')) {
        activeMenu = e.target.closest('.menu');
        activeMenu.querySelector('.menu-options').classList.toggle('show-menu-options');
    }

    document.querySelectorAll('.menu').forEach(menu => {
        if (menu != activeMenu) menu.querySelector('.menu .menu-options').classList.remove('show-menu-options');
    });
}

document.addEventListener('click', toggleMenuOptions);
