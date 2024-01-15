class Cart {

    constructor() {
        this.#onInit();
    }

    #onInit() {
        this.#manageDeliveryChange();
        this.#calculTotalCart();
        this.#onChangeTotalProduct();
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
        const elements = document.querySelectorAll('.total_price');

        elements.forEach((element) => {
            const observer = new MutationObserver((mutationList, observer) => {
                console.log(mutationList)
                for (let mutation of mutationList) {
                    if(mutation.type === 'attributes' && mutation.attributeName === 'data-total-price') {
                        this.#calculTotalCart();
                    }
                }
            });
            observer.observe(element, {attributes: true, attributeFilter: ['data-total-price']});
        })
    }

    #onChangeDeletedProduct() {
        const observer = new MutationObserver((mutationList, observer) => {
            for (mutation on mutationList) )
        })
    }
}