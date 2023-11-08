/**
 * Initialise le code
 */
function init()
{
    overlay();
    openMenuHamburger();
    closeMenuHamburger();
}

init();

// Overlay de chargement
function overlay() {
    window.addEventListener("load", function() { // Lorsque la page et les ressources sont totalement chargées
        var loadingOverlay = document.querySelector(".loading-overlay"); // Récupérer l'overlay de chargement
        loadingOverlay.style.display = "none"; // Cacher l'overlay de chargement
    })
};

//Afficher le menu hamburger quand on clique sur le bouton
function closeMenuHamburger() {
    document.getElementById("menu1").addEventListener("click", function() { // Lorsque l'utilisateur clique sur l'élément menu1
        document.getElementById("pagehamburger").style.left = "0"; // Afficher le menu
    })
};

//Fermer le menu hamburger quand on clique autre part que sur le bouton
function openMenuHamburger(){
    document.addEventListener("click", function(event) { // Le clic a été effectué en dehors de l'élément menu1
        if (!menu1.contains(event.target)) { // Si le clic n'est pas dans le menu1
            document.getElementById("pagehamburger").style.left = "-100%"; // Cacher le menu
            }
        })
};

