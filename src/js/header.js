const menus = [
    { link: './index.html', title: 'Accueil', page: 'index.html' },
    { link: './joueurs.html', title: 'Joueurs', page: 'joueurs.html' },
    {
        link: './perso.html', title: 'Espace perso', page: 'perso.html', submenu: [
            { link: './perso.html#connexion', title: 'Connexion' },
            { link: './perso.html#mes-infos', title: 'Mes informations' },
            { link: './perso.html#messagerie', title: 'Messagerie' },
            { link: './perso.html#historique', title: 'Historique' }
        ]
    },
    { link: './ambiance_match.html', title: 'Ambiance', page: 'ambiance_match.html' },
    { link: './moments_forts.html', title: 'Moments', page: 'moments_forts.html' },
    { link: './contact.html', title: 'Contact', page: 'contact.html' }
];

window.addEventListener("load", () => {
    var headers = document.getElementsByTagName('header');
    var header = headers[0];
    var nav = document.createElement('nav');
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'css/header.css';
    nav.appendChild(css);

    // CONTAINER
    var container = document.createElement('div');
    container.id = 'main-menu';
    container.className = 'menu-container';
    nav.appendChild(container);

    // TITRE MENU
    var title = document.createElement('h2');
    title.className = 'menu-title';
    title.appendChild(document.createTextNode('Menu'));
    container.appendChild(title);

    menus.forEach(item => {
        container.appendChild(createA(item));
    });


    nav.appendChild(container);
    header.appendChild(nav);

});

// TEMPLATE a
/**
 * Créer un élément de menu
 * @param {Object} item item de menu
 */
function createA(item) {
    let a = document.createElement('a');
    a.id = window.location.href.includes(item.page) ? 'current' : '';
    a.href = item.link;
    var h2 = document.createElement('h2');
    h2.appendChild(document.createTextNode(item.title));
    if (item.submenu) {
        a.className += 'dropdown-btn menuitem';
        let div = document.createElement('div');
        div.className = 'dropdown';
        div.appendChild(h2);
        let submenu = document.createElement('div');
        submenu.id = 'submenu-perso';
        submenu.className = 'dropdown-content';
        item.submenu.forEach(subitem => {
            submenu.appendChild(createA(subitem));
        });
        div.appendChild(submenu)
        a.appendChild(div);
    } else {
        a.className = 'menuitem';
        a.appendChild(h2);
    }

    return a;
}