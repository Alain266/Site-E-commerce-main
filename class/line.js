class Line {
    product;
    productElement;
    quantity;
    unitPrice;
    total;

    constructor(product) {
        this.product = product;
        this.#onInit();
    };


    /**
     * Initialisation de la classe 
     */
    #onInit() {
        this.#createLineHTML();
        this.#calculTotalProduct();
        this.#manageRemoveProductEvent();
        this.#onChangeQuantity();
        console.log('onInit - line - OK');
    }

    /**
     * Gère la suppression d'une ligne via le bouton remove
     */
    #manageRemoveProductEvent() {
        this.productElement.querySelector('.button-remove').addEventListener('click', () => {
            this.productElement.remove();
        })
    }

    /**
     * Gère le changement de prix dû à des changements sur certaines colonnes.
     * */
    #onChangeQuantity() {
        this.productElement.querySelectorAll('.influent-price-on-change').forEach((element) => {
            element.addEventListener('change', (event) => {
                this.#calculTotalProduct();
            })
        })
    }

    /**
     * Calcul le total d'une ligne dans le tableau
     * @returns {number}
     */

    #calculTotalProduct()  // Fonction calculer le total des lignes
    {
        this.quantity = this.productElement.querySelector('.input-quantity').value; // Récupère la quantité
        this.unitPrice = parseFloat(this.productElement.querySelector('.unit_price').dataset.unitPrice); // Récupère le prix
        this.total = this.quantity * this.unitPrice; // Calcul du total
        
        this.productElement.querySelector('.total_price').textContent = Currency.formatPriceToEuro(this.total); // Affiche le total
        this.productElement.querySelector('.total_price').dataset.totalPrice = this.total; // Stocke le total
    }


    /**
     * Création de la ligne
     */
    #createLineHTML() {
        const cart_products = document.querySelector('#cart tbody');
        const product_line = `
            <tr class="cart_product">
                <td>${this.product.nom} <br> <img src="${this.product.image}" class="cart_product__image"></td>
                <td class="unit_price" data-unit-price="${this.product.prix}">
                    <span class="value">${Currency.formatPriceToEuro(this.product.prix)}</span>
                </td>
                <td class="quantity">
                    <input type="number" class="influent-price-on-change input-quantity" value="1" min="1" step="1">
                </td>
                <td class="total_price" data-total-price=""></td>
                <td>
                    <ion-icon name="trash-outline" class="button-remove"></ion-icon>
                </td>
            </tr>`;
        cart_products.insertAdjacentHTML('beforeend', product_line); // Insertion += product_line;
        this.productElement = document.querySelector('.cart_product:last-child'); // Recherche de la derniere ligne
    }
}
