class Cart {

    constructor() {
        this.#onInit();
    }

        #onInit() {
        this.#manageDeliveryChange();
        this.#onChangeTotalProduct();
        this.#calculTotalCart();
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
    }

    #onChangeTotalProduct() {
        document.addEventListener('click', () => {
            this.#calculTotalCart();
        })
    }


    #onChangeDeletedProduct() {
        console.log('TEST OK détecté');

        const targetElement = document; // Remplacez 'example' par l'ID de l'élément que vous souhaitez observer
    
        const observer = new MutationObserver((mutationList, observer) => {
            for (let mutation of mutationList) {
                // Traitement des changements
                console.log('Changement détecté :', mutation);
            }
        });
    
        observer.observe(targetElement, { attributes: true, childList: true, subtree: true });
    }
}
