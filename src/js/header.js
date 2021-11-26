const menus = [
    { link: './index.html', title: 'Accueil' },
    { link: './joueurs.html', title: 'Joueurs' },
    {
        link: './perso.html', title: 'Espace perso', submenu: [
            { link: '#', title: 'Connexion' },
            { link: '#', title: 'Mes informations' },
            { link: '#', title: 'Messagerie' },
            { link: '#', title: 'Historique' }
        ]
    },
    { link: './ambiance_match.html', title: 'Ambiance' },
    { link: './moments_forts.html', title: 'Moments' },
    { link: './contact.html', title: 'Contact' }
]; 
window.onload = () => {
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
    console.log(header);

}

// TEMPLATE a
/**
 * Créer un élément de menu
 * @param {Object} item item de menu
 */
function createA(item) {
    let a = document.createElement('a');
    a.id = '';
    a.className = 'menuitem';
    a.href = item.link;
    if (item.submenu) {
        a.className += ' dropdown-btn';
        let div = document.createElement('div');
        div.className = 'dropdown menuitem';
        item.submenu.forEach(subitem => {
            div.appendChild(createA(subitem));
        });
    }

    var h2 = document.createElement('h2');
    h2.appendChild(document.createTextNode(item.title));
    a.appendChild(h2);

    return a;
}