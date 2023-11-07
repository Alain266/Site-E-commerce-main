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

    tr_cart_product.querySelector('.total_price').textContent = total + '€'; // Affiche le total
    tr_cart_product.querySelector('.total_price').dataset.totalPrice = total; // Stocke le total

    return total;
}

/**
 * Calcul le total du panier
 */
function calculTotalCart() // Fonction calculer le total 
{
    let dom_total_prices = document.querySelectorAll('.cart_product .total_price'); // Récupère les prix
    let total = 0;
    dom_total_prices.forEach(function(dom_total_price) {
        total += parseFloat(dom_total_price.dataset.totalPrice);
    }); 

    // On va rajouter les options de livraisons
        total += parseFloat(document.querySelector('.delivery_option:checked').value);


    document.querySelector('#cart .total_cart').textContent = total + "€"; // Affiche le total
    return total;
}

/**
 * Initialise le code
 */
function init() // Fonction initialisation
{
    let tr_cart_products = document.querySelectorAll('.cart_product'); // Récupère les lignes
    
    tr_cart_products.forEach(function(tr_cart_product) {
        calculTotalProduct(tr_cart_product);
        tr_cart_product
          .querySelectorAll(".influent-price-on-change")
          .forEach((element) => {
            element.addEventListener("change", function (event) { // Ecoute les changements
              console.log(event.target);
              calculTotalProduct(tr_cart_product);
              calculTotalCart(); 
            });
          });
    })

    calculTotalCart(); // Calcul le total
}

init();

addEventListener('click', init);

/**
* Message d'erreur si case vide
*/

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



