window.onload = () => {

    var pays = {
        "France": ["Lille", "Brest", "Nice", "Pau"],
        "Italie": ["Rome", "Turin", "Milan", "Venise"],
        "Allemagne": ["Munich", "Berlin", "Nuremberg", "Stuttgart"],
        "Espagne": ["Barcelone", "Valence", "Seville", "Malaga"]
    };

    document.getElementById('form').addEventListener("submit", () => {
        event.preventDefault();
        var submitted = document.getElementById('city').value;
        var country = trouverPays(submitted)
        if (country)
            alert("Bienvenue à " + submitted + " (" + country + ").");
        else
            alert("Non trouvée");
    });

    function trouverPays(submitted) {
        for (key in pays) {
            if (pays[key].includes(submitted)) {
                return key
            }
        }
        return false;
    }
}
