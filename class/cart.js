class Cart {

    constructor() {
        this.#onInit();
    }


    /**
     * Initialisation du code 
     */
    async #onInit() { 
        this.#manageDeliveryChange();
        await this.#onChangeTotalProduct();
        await this.#calculTotalCart();
        console.log('onInit - cart - OK');
    }


    /**
     * Recalcul le prix du panier si changement de choix de livraison
     */
    #manageDeliveryChange() {
        document.querySelectorAll('.delivery-option').forEach((delivery_option) => {
            delivery_option.addEventListener('change', () => {
                this.#calculTotalCart();
            })
        })
        console.log('manageDeliveryChange - OK');
    }

    /**
     * Calcul le total du panier
     *
     * @returns {number}
     */
    #calculTotalCart() {
        let total = 0;

        // 1 - Calcul des lignes
        let dom_total_prices = document.querySelectorAll('.total_price')
        dom_total_prices.forEach((dom_total_price) => {
            total += parseFloat(dom_total_price.dataset.totalPrice);
        });

        // 2 - Prise en compte du choix de livraison
        if (document.querySelector('.delivery-option:checked') !== null) {
            total += parseFloat(document.querySelector('.delivery-option:checked').value);
        }
        
        document.querySelector('#cart .total_cart').textContent = Currency.formatPriceToEuro(total);

        return total;
        console.log('calculTotalCart - OK');
    }

    /**
     * Changement du total du produit
     */
    #onChangeTotalProduct() {
        document.addEventListener('DOMContentLoaded', () => {
            this.#calculTotalCart();
        });
    
        document.addEventListener('click', () => {
            this.#calculTotalCart();
        });
        console.log('onChangeTotalProduct - OK');
    }
}
