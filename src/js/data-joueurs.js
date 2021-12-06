var json_joueurs = [
    {
        "name": "Pierre Dupond",
        "image": {
            "src": "img/61389356-sandro-sukno.jpg",
            "alt": "image de P. Dupond"
        },
        "position": "Avant centre",
        "description": "Précedemment joueur au club de Nantes, arrivé dans le club en 2012."
    },
    {
        "name": "Pierre Dupont",
        "image": {
            "src": "./img/Filip_Filipović_Rio_2016.jpg",
            "alt": "image de P. Dupont"
        },
        "position": "Gardien",
        "description": "Derniere acquisition du club, un jeune dynamique et aggressif en match."
    },
    {
        "name": "Pierre Paul",
        "image": {
            "src": "file:///C:/LocalRepository/mi2-frontend/src/img/joueur-de-waterpolo-17836015.jpg",
            "alt": "image de P. Paul"
        },
        "position": "Defenseur gauche",
        "description": "Jeune athlete de 53 ans, pilier de l'équipe, un bon leader."
    },
    {
        "name": "Pierre Jacques",
        "image": {
            "src": "./img/water-polo-italie-france-bodegas.jpg",
            "alt": "image de P. Jacques"
        },
        "position": "Pivot",
        "description": "Joueur qui boit le plus la tasse, fait baisser le niveau de l'eau de 3cm par match (environ)."
    }
];

// window.onload = () => {
    
// }

/**
 * Affiche le tableau des joueurs
 * @param {Array} joueurs les joueurs à afficher
 */
function displayJoueurs(joueurs) {
    document.getElementById('data').innerHTML = '';
    joueurs.forEach(joueur => {
        
        document.getElementById('data').innerHTML += `
    <tr>
        <td class="name">${joueur.name}</td>
        <td class="image" ><img id="pic" src="${joueur.image.src}" alt="${joueur.image.alt}"></td>
        <td class="position">${joueur.position}</td>
        <td class="description">${joueur.description}</td>
        <td><button class="agrandir">Agrandir</button></td>
    </tr>`;
    });
}

document.getElementById('form').addEventListener("submit", () => {
    event.preventDefault();
    var joueur = {
        name: document.getElementById('name').value,
        image: {
            src: document.getElementById('image').value,
            alt: `Image de ${document.getElementById('name').value}`,
        },
        position: document.getElementById('position').value,
        description: document.getElementById('description').value,
    };
    json_joueurs.push(joueur);
    displayJoueurs(json_joueurs);
});