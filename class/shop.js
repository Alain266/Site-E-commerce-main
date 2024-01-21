class Shop {
    products = [];
    deliveries = [];

    constructor(){
        this.#onInit();
    }

    /**
     * Initialisation du code
    */
    async #onInit(){
        new Overlay();
        await this.#getProducts();
        await this.#getDeliveries();
        new Lines(this.products);
        new Delivery(this.deliveries);
        console.log('onInit - shop - OK');
    }

    /**
     * Récupère les data du fichier json produits et les ajoute au tableau 
     * @returns {Promise}
     */
    async #getProducts() {
        const response = await fetch('../produits.json');
        const products = await response.json();
        products.forEach(product => {
            this.products.push(product);
        });
    }

    /**
     * Récupère les data du fichier json livraisons et les ajoute au tableau 
    */
    async #getDeliveries() {
        const response = await fetch('../deliveries.json');
        const deliveries = await response.json();
        deliveries.forEach(delivery => {
            this.deliveries.push(delivery);
        })
    }
}

