class Lines {
    lines = [];

    constructor(lines) {
        this.lines = lines;
        this.#onInit();
    }

    #onInit() {
        this.#fill_products();
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