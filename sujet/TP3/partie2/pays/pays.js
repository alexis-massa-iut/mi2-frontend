window.onload = () => {

    var pays = {
        "France": ["Lille", "Brest", "Nice", "Pau"],
        "Italie": ["Rome", "Turin", "Milan", "Venise"],
        "Allemagne": ["Munich", "Berlin", "Nuremberg", "Stuttgart"],
        "Espagne": ["Barcelone", "Valence", "Seville", "Malaga"]
    };

    document.getElementById('form').addEventListener("submit", () => {
        event.preventDefault();
        var city = document.getElementById('city').value;
        var country = trouverPays(city)
        if (country) {
            // alert("Bienvenue à " + city + " (" + country + ").");
            if (!posted(country))
                addMessage(country, city);
            else
                alert("Vous vous êtes déjà rendu en " + country + ", tant pis pour vous !");
        } else
            alert("Non trouvé");
    });

    function posted(country) {
        var div = document.getElementById(country);
        return div != null;

    }

    function addMessage(country, city) {
        var message = document.createElement("div");
        message.setAttribute("id", country);
        message.appendChild(document.createTextNode("Bienvenue en " + country + " (" + city + "). Voici d'autres villes à visiter :"));
        var list = document.createElement("ul");
        list.setAttribute("id", "list-" + country)
        pays[country].forEach(c => {
            if (c != city) {
                let li = document.createElement("li");
                li.appendChild(document.createTextNode(c));
                list.appendChild(li);
            }
        });
        message.appendChild(list);
        var messageBox = document.getElementById('message-box');
        messageBox.appendChild(message);
    }

    function trouverPays(city) {
        for (key in pays) {
            if (pays[key].includes(city)) {
                return key
            }
        }
        return false;
    }

}
