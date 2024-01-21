class Overlay {

    constructor () {
        this.#onInit();
    }


    /**
     * Initialisation de la classe
     */
    #onInit () {
        this.#overlay();
        console.log('onInit - overlay - OK');
    }

    /**
    * Overlay de chargement
    */
    #overlay() {
        window.addEventListener("load", function() { // Lorsque la page et les ressources sont totalement chargées
            var loadingOverlay = document.querySelector(".loading-overlay"); // Récupérer l'overlay de chargement
            loadingOverlay.style.display = "none"; // Cacher l'overlay de chargement
        })
    };
}