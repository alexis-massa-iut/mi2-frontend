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
        "description": "Joueur qui boit le plus la tasse. A cause de lui, tout le monde a pieds à partir de la 5ème mi-temps."
    }
];

window.addEventListener("load", () => {
    displayJoueurs(json_joueurs);
});

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
        <td class="image"><img id="pic" src="${joueur.image.src}" alt="${joueur.image.alt}"></td>
        <td class="position">${joueur.position}</td>
        <td class="description">${joueur.description}</td>
        <td>
            <button class="action" onclick="modifierJoueur(\'${joueur.name}\')">Modifier</button>
            <button class="action" onclick="retirerJoueur(\'${joueur.name}\')">Retirer</button>
        </td>
    </tr>`;
    });
}

/**
 * Crée un objet joueur avec les informations du formulaire
 * Ajoute le joueur au tableau
 * Met à jour le tableau (affichage)
 */
document.getElementById('form-ajouter').addEventListener("submit", () => {
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

/**
 * Récupère le champ name (caché)
 * Parcourt le tableau des joueurs et retire si le nom correspond
 * /!\ Si plusieurrs joueurs ont le même nom, ils seront tous retirés /!\
 * Met à jour le tableau (affichage)
 * @param {String} name nom du joueur à retirer
 */
function retirerJoueur(name) {
    for (let i = 0; i < json_joueurs.length; i++) {
        if (json_joueurs[i].name == name) json_joueurs.splice(i, 1);
    }
    displayJoueurs(json_joueurs);
};

/**
 * Modifier un joueur
 * @param {String} old_name le joueur à modifier
 */
function modifierJoueur(old_name){
    for (let i = 0; i < json_joueurs.length; i++) {
        if (json_joueurs[i].name == old_name) {
            json_joueurs[i] = {
                name: prompt("Nouveau nom : ", json_joueurs[i].name),
                image: {
                    src: prompt("Nouvelle image : ", json_joueurs[i].image.src),
                    alt: `Image de ${this.name}`
                },
                position: prompt("Nouveau poste : ", json_joueurs[i].position),
                description: prompt("Nouvelle description : ", json_joueurs[i].description)
            }
        }
    }
    displayJoueurs(json_joueurs);
}