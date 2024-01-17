class Currency {
    constructor() {
        this.#onInit();
    }

    #onInit() {
        formatPriceToEuro(price);
    }

    /**
     * Formatage de prix en euro
     * @param {number} price
     */
    static formatPriceToEuro(price) {
        price = price / 100
        return price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
    }
}