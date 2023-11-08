
/**
 * Initialise le code
 */
async function init()
{
    await fill_products();
    initCartProducts();
    calculTotalCart();
    manageDeliveryChange();
    validateForm();
    getProducts();
}

init();

/**
 * Calcul le total d'une ligne dans le tableau
 * @param {Element} tr_cart_product
 * @returns {number}
 */

function calculTotalProduct(tr_cart_product)  // Fonction calculer le total des lignes
{
    let quantity = tr_cart_product.querySelector('.quantity input').value; // Récupère la quantité
    let unit_price = parseFloat(tr_cart_product.querySelector('.unit_price').dataset.unitPrice); // Récupère le prix
    let total = quantity * unit_price; // Calcul du total

    tr_cart_product.querySelector('.total_price').textContent = formatPriceToEuro(total); // Affiche le total
    tr_cart_product.querySelector('.total_price').dataset.totalPrice = total; // Stocke le total

    return total;
}

/**
 * Calcul le total du panier
 *
 * @returns {number}
 */
function calculTotalCart()
{
    let total = 0;

    // 1 - Calcul des lignes
    let dom_total_prices = document.querySelectorAll('.cart_product .total_price')
    dom_total_prices.forEach(function(dom_total_price) {
        total += parseFloat(dom_total_price.dataset.totalPrice);
    });

    // 2 - Prise en compte du choix de livraison
    if (document.querySelector('.delivery-option:checked') !== null) {
        total += parseFloat(document.querySelector('.delivery-option:checked').value);
    }
    
    document.querySelector('#cart .total_cart').textContent = formatPriceToEuro(total);

    return total;
}

/**
 * Gère tous les évenements d'un produit du panier dans le tableau
 * @param {Element} tr_cart_product
 */
function manageProductEvent(tr_cart_product)
{
manageInfluentPriceOnChangeEvents(tr_cart_product);
manageRemoveProductEvent(tr_cart_product);
}

/**
 * Gère le changement de prix dû à des changements sur certaines colonnes.
 * @param {Element} tr_cart_product
 * */
function manageInfluentPriceOnChangeEvents(tr_cart_product){
    tr_cart_product.querySelectorAll('.influent-price-on-change').forEach( (element) => {
        element.addEventListener('change', function(event) {
            calculTotalProduct(tr_cart_product);
            calculTotalCart();
        })
    })
}

/**
 * Gère la suppression d'une ligne via le bouton remove
 * @param {Element} tr_cart_product
 */
function manageRemoveProductEvent(tr_cart_product) {
    tr_cart_product.querySelector('.remove').addEventListener('click', function(e) {
        tr_cart_product.remove();
        calculTotalCart();
    })
}

/**
 * Lance la logique de code pour les produits du panier
 */
function initCartProducts()
{
    let tr_cart_products = document.querySelectorAll('.cart_product');
    tr_cart_products.forEach(function(tr_cart_product) {
        calculTotalProduct(tr_cart_product);
        manageProductEvent(tr_cart_product);
    })
}


/**
 * Recalcul le prix du panier si changement de choix de livraison
 */
function manageDeliveryChange(){
    document.querySelectorAll('.delivery-option').forEach((delivery_option) => {
        delivery_option.addEventListener('change', function(e) {
            calculTotalCart();
        })
    })
}

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
 * Création de la ligne du produit 
 */
async function fill_products () {
    const cart_products = document.querySelector('#cart tbody');
    await getProducts()
        .then((products) => {
            products.forEach((product) => {
                const product_line = `
                    <tr class="cart_product">
                        <td>${product.nom}</td>
                        <td class="unit_price" data-unit-price="${product.prix}">
                            <span class="value">${formatPriceToEuro(product.prix)}</span>
                        </td>
                        <td class="quantity">
                            <input type="number" class="influent-price-on-change" value="0" min="0">
                        </td>
                        <td class="total_price" data-total-price=""></td>
                        <td>
                            <button class="remove">X</button>
                        </td>
                    </tr>`;
                cart_products.innerHTML += product_line;
            })
    })  
}

/**
 * Formatage de prix en euro
 * @param {number}
 */

function formatPriceToEuro (price) {
    price = price / 100
    return price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
}

