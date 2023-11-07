/**
 * Calcul le total d'une ligne dans le tableau
 * @param {Element} tr_cart_product
 * @returns {number}
 */

function calculTotalProduct(tr_cart_product)
{
    let quantity = tr_cart_product.querySelector('.quantity input').value;
    let unit_price = parseFloat(tr_cart_product.querySelector('.unit_price').dataset.unitPrice);
    let total = quantity * unit_price;

    tr_cart_product.querySelector('.total_price').textContent = total + '€';
    tr_cart_product.querySelector('.total_price').dataset.totalPrice = total;

    return total;
}

/**
 * Calcul le total du panier
 */
function calculTotalCart()
{
    let dom_total_prices = document.querySelectorAll('.cart_product .total_price')
    let total = 0;
    dom_total_prices.forEach(function(dom_total_price) {
        total += parseFloat(dom_total_price.dataset.totalPrice);
    });

    document.querySelector('#cart .total_cart').textContent = total + "€";
}

/**
 * Initialise le code
 */
function init()
{
    let tr_cart_products = document.querySelectorAll('.cart_product');
    tr_cart_products.forEach(function(tr_cart_product) {
        calculTotalProduct(tr_cart_product);
        tr_cart_product
          .querySelectorAll(".influent-price-on-change")
          .forEach((element) => {
            element.addEventListener("change", function (event) {
              console.log(event.target);
              calculTotalProduct(tr_cart_product);
              calculTotalCart();
            });
          });
    })

    calculTotalCart();
}

init();
