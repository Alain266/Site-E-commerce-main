class Currency {
    constructor() {
        this.#onInit();
    }

    #onInit() {
        formatPriceToEuro();
        console.log('onInit - OK');
    }

    /**
     * Formatage de prix en euro
     * @param {number} price
     */
    static formatPriceToEuro(price) {
        price = price / 100
        return price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
        console.log('formatPriceToEuro - OK');
    }
}