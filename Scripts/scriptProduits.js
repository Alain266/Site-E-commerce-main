/**
 * Initialise le code
 */
async function init()
{   
    
    overlay();
    openMenuHamburger();
    closeMenuHamburger();
    getProducts();
    await fill_products();
}

init();

/**
 * Récupère les data du fichier json et les affiche dans la console
 * @returns {Promise}
 */
async function getProducts() {
    const response = await fetch('../produits.json');
    const products = await response.json();
    return products;
}

/**
 * Formatage de prix en euro
 * @param {number}
 */
function formatPriceToEuro (price) {
    price = price / 100
    return price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
}

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
 * Création des meilleures ventes du moment
 */
async function fill_products () {

    const cart_products = document.querySelector('#produits');
    const products =await getProducts();

    for (let i=0; i<products.length; i++) {
        const product = products[i];
        const product_line = `<div class="fiche-produit">
                <img src="${product.image}">
                <h1>${product.nom}</h1>
                <p>${product.description}</p>
                <p>Prix : ${formatPriceToEuro(product.prix)}</p>
                <button>Acheter</button>
            </div>
        </div>`
        
        cart_products.innerHTML += product_line;
    }
}
