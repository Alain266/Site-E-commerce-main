class Lines {
    lines = [];

    constructor(lines) {
        this.lines = lines;
        this.#onInit();
    }

    /**
     * Initialisation de la classe
     */
    #onInit() {
        this.#fill_products();
        console.log('onInit - lines- OK');
    }

    /**
     * Création de la ligne du produit en html
     */
    async #fill_products() {
        this.lines.forEach((product) => {
            new Line(product)
        })
    }
}