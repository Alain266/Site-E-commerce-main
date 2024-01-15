class Shop {
    products = [];
    deliveries = [];

    constructor(){
        this.#onInit();
    }

    async #onInit(){
        new Overlay();
        await this.#getProducts();
        await this.#getDeliveries();
        new Lines(this.products);
        new Delivery(this.deliveries);
        new Cart();
    }

    /**
     * Récupère les data du fichier json et les affiche dans la console
     * @returns {Promise}
     */
    async #getProducts() {
        const response = await fetch('../produits.json');
        const products = await response.json();
        products.forEach(product => {
            this.products.push(product);
        });
    }

    async #getDeliveries() {
        const response = await fetch('../deliveries.json');
        const deliveries = await response.json();
        deliveries.forEach(delivery => {
            this.deliveries.push(delivery);
        })
    }
}

