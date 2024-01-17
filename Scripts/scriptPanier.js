/**
 * Initialise le code
 */
function init()
{
    overlay();
    openMenuHamburger();
    closeMenuHamburger();
    new Shop();
    new Cart();
}

init();

/**
 * Overlay de chargement
 */
function overlay() {
    window.addEventListener("load", function() { // Lorsque la page et les ressources sont totalement chargées
        var loadingOverlay = document.querySelector(".loading-overlay"); // Récupérer l'overlay de chargement
        loadingOverlay.style.display = "none"; // Cacher l'overlay de chargement
    })
};

/** 
 * Afficher le menu hamburger quand on clique sur le bouton
 */
function closeMenuHamburger() {
    document.getElementById("menu1").addEventListener("click", function() { // Lorsque l'utilisateur clique sur l'élément menu1
        document.getElementById("pagehamburger").style.left = "0"; // Afficher le menu
    })
};

/**
 * Fermer le menu hamburger quand on clique autre part que sur le bouton
 */
function openMenuHamburger(){
    document.addEventListener("click", function(event) { // Le clic a été effectué en dehors de l'élément menu1
        if (!menu1.contains(event.target)) { // Si le clic n'est pas dans le menu1
            document.getElementById("pagehamburger").style.left = "-100%"; // Cacher le menu
            }
        })
};


/**
* Message d'erreur si case vide
* @returns {void}
*/
function validateForm() {
    addEventListener('submit', function(event) { // Ecoute les envois du formulaire
    var nom = document.getElementById('nom').value;
    var rue = document.getElementById('rue').value;
    var cp = document.getElementById('cp').value;
    var ville = document.getElementById('ville').value;
    var mail = document.getElementById('mail').value;
    var tel = document.getElementById('tel').value;

    if (!nom || !rue || !cp || !ville || !mail) {
        event.preventDefault(); // Empêche la soumission du formulaire
        alert('Veuillez remplir tous les champs.'); // Affiche un message d'erreur
        }
    });
}