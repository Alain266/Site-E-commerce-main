<!-- Script -->
<script lang="ts">
import PartnerCustom from '../components/PartnerCustom.vue';

export default {
    name: 'PanierView',
    data() {
        return {
            products: [],
            deliveries: []
        };
    },
    mounted() {
        this.onInit();
    },
    components: {
        PartnerCustom
    },
    emits: ['loading'],
    methods: {
        async onInit() {
            await this.getProducts();
            await this.getDeliveries();
        },
        async getProducts() {
            try {
                const response = await fetch('../produits.json');
                this.products = await response.json();
                console.log(this.products);
            } catch (error) {
                console.error('Erreur lors de la récupération des produits :', error);
            }
        },
        async getDeliveries() {
            try {
                const response = await fetch('../deliveries.json');
                this.deliveries = await response.json();
                console.log(this.deliveries);
            } catch (error) {
                console.error('Erreur lors de la récupération des livraisons :', error);
            }
        }
    },
    onload(event) {
        this.$emit('loading', event)
    }
}
</script>

<!-- Template -->
<template>
    <main class="container"> <!-- Main contenu -->
        <article class="p3"> <!-- Panier -->
            <h2 id="titre1">PANIER</h2> <!-- Titre du panier -->
            <div id="panier"> <!-- Panier -->
                <table id="cart"> <!-- Tableau du panier -->
                    <thead> <!-- Ligne du panier -->
                        <th>Produit</th>
                        <th>Prix</th>
                        <th>Quantité</th>
                        <th>Total</th>
                        <th>Supprimer</th>
                    </thead>
                    <tbody> <!-- Liste produits du panier -->
                    </tbody>
                    <tfoot>

                        <tr>
                            <td colspan="2">TOTAL</td>
                            <td colspan="3" class="total_cart"></td>
                        </tr>
                    </tfoot>
                </table>
                <fieldset> <!-- Formulaire du panier -->
                    <legend style="margin: auto;">Selectionnnez un mode de livraison :</legend>
                    <!-- Titre du fieldset -->
                    <div>
                        <label for="delivery-2">Domicile (12 €) <ion-icon name="storefront-outline"></ion-icon></label>
                        <input class="delivery-option" name="delivery" id="delivery-2" value="1200" type="radio">
                    </div>
                    <div>
                        <label for="delivery-1">Relais colis (5 €) <ion-icon name="home-outline"></ion-icon></label>
                        <input class="delivery-option" name="delivery" id="delivery-1" value="500" type="radio"
                            checked="">
                    </div>
                </fieldset>
                <form class="center" style="margin: 25px">
                    <label for="nom"> <ion-icon name="person-circle-outline"></ion-icon> Nom :</label>
                    <!-- Label du champ --> <br>
                    <input type="text" name="nom" id="nom" placeholder="Nom"> <!-- Champ du formulaire -->
                    <label for="rue"> <ion-icon name="navigate-circle-outline"></ion-icon> Rue :</label>
                    <!-- Label du champ --> <br>
                    <input type="text" name="rue" id="rue" placeholder="Rue" required> <!-- Champ du formulaire -->
                    <label for="cp"> <ion-icon name="map-outline"></ion-icon> Code postal :</label>
                    <!-- Label du champ --> <br>
                    <input type="text" name="cp" id="cp" placeholder="Code postal" required>
                    <!-- Champ du formulaire -->
                    <label for="ville"> <ion-icon name="business-outline"></ion-icon> Ville :</label>
                    <!-- Label du champ --> <br>
                    <input type="text" name="ville" id="ville" placeholder="Ville" required>
                    <!-- Champ du formulaire -->
                    <label for="mail"> <ion-icon name="mail-unread-outline"></ion-icon> E-mail :</label>
                    <!-- Label du champ --> <br>
                    <input type="email" name="mail" id="mail" placeholder="E-mail" required>
                    <!-- Champ du formulaire -->
                    <label for="tel"> <ion-icon name="call-outline"></ion-icon> Téléphone :</label>
                    <!-- Label du champ --> <br>
                    <input type="tel" name="tel" id="tel" placeholder="Téléphone"> <!-- Champ du formulaire -->
                    <button type="submit" id="btnBuy">Acheter</button> <!-- Bouton d'achat -->
                </form>
                <p id="commandeTotale"></p>
            </div>
        </article>
        <PartnerCustom />
    </main>
</template>

<!-- Style -->
<style scoped>

#titre1 {
    text-align: center;
    /* centre le texte */
    background-color: rgba(0, 0, 0, 1);
    /* couleur de fond */
    border-radius: 25px;
    /* angle de la bordure */
    width: 20em; 
    /* largeur */
    font-size: 20px; 
    /* taille de la police */
    margin: auto;
    /* marge intérieure */
    margin-bottom: 20px;
}

.p1 {
    margin: auto;
    /* marge intérieure */
    grid-area: p1;
    /* marge intérieure */
    color: #FFFFFF;
    /* couleur du texte */
}

.p3 {
    margin: auto;
    /* marge intérieure */
    grid-area: p3;
    /* marge intérieure */
    color: #FFFFFF;
    /* couleur du texte */  
    margin-bottom: 20px;
    /* marge intérieure */
    margin-top: 20px;
    /* marge intérieure */
    width: 80%;
    color: #FFFFFF;
    /* couleur du texte */
    backdrop-filter: blur(5px);
    /* Effet de flou */
    padding: 20px;
    /* marge intérieure */
    box-shadow:
    0px 0px 5.4px rgba(0, 0, 0, 0.192),
    0px 0px 11px rgba(0, 0, 0, 0.271),
    0px 0px 17.5px rgba(0, 0, 0, 0.314),
    0px 0px 26.5px rgba(0, 0, 0, 0.343),
    0px 0px 42.4px rgba(0, 0, 0, 0.379),
    0px 0px 90px rgba(0, 0, 0, 0.5)
    ;
    /* ombre */
}

#panier {
    margin: auto;
    /* marge intérieure */
    display: flex;
    /* Affiche les éléments en ligne */
    justify-content: center;
    /* Centre les éléments en ligne */
    flex-direction: column;
    /* disposition des éléments */
    grid-area: p4;
    /* marge intérieure */
    background-color: rgba(39, 105, 85, 0.5);
    /* couleur de fond */
    color: #ffffff;
    /* couleur du texte */
    backdrop-filter: blur(5px);
    /* Effet de flou */
    border-radius: 5px;
    /* angle de la bordure */
    border: solid 3px rgba(255, 255, 255, 0.5);
    /* Bordure du menu */
    width: 50%;
    /* largeur */
}

.quantity input {
    width: 35px;
    /* largeur */
    border-radius: 5px;
    /* angle de la bordure */
    text-align: center;
    /* centre le texte */
    color: black;
    /* couleur du texte */
}

form {
    text-align: center;
    display: flex;
    /* Affiche les éléments en ligne */
    flex-direction: column;
    /* disposition des éléments */
}

form input {
    margin: 0px auto 50px auto;
    /* centre le button */
    width: 150px;
    /* largeur */
    border-radius: 10px;
    /* angle de la bordure */
    text-align: center;
    /* centre le texte */
}

.button-remove {
    margin: 25px auto 25px auto;
    /* centre le button */
    width: 25px;
    /* largeur */
    font-weight: bold;
    /* police de caractères */
    font-size: 15px;
    /* Taille du texte */
    border-radius: 5px;
    /* angle de la bordure */
    background-color: rgba(255, 255, 255, 0.5);
    /* couleur de fond */
    color: rgba(0, 0, 0, 1);
    /* couleur du texte */
    border: solid 1px rgba(255, 255, 255, 0.5);
    /* Bordure du menu */
}

.button-remove:hover {
    width: 50%;
    /* largeur */
    background-color: rgba(255, 255, 255, 0.5);
    /* couleur de fond */
    color: rgba(0, 0, 0, 1);
    /* couleur du texte */
    border: solid 1px rgba(255, 255, 255, 0.5);
    /* Bordure du menu */
    border-radius: 50px;
    /* angle de la bordure */
    transform: scale(0.95);
    /* Zoom au survol */
}

#btnBuy {
    margin: 25px auto 25px auto;
    /* centre le button */
    width: 100px;
    /* largeur */
    font-weight: bold;
    /* police de caractères */
    font-size: 15px;
    /* Taille du texte */
    margin: auto;
    max-width: 100px;
    min-width: 100px;
    color: white;
    background-color: #000000;
    transition: transform 1.5s, border-radius 3s;
    /* Transition avec effet smooth */
}

#btnBuy:hover {
    transform: scale(1.05);
    /* Zoom au survol */
    border-radius: 50px;
    /* angle de la bordure */
}

#panier th {
    border: solid 1px rgba(255, 255, 255, 0.5);
    /* Bordure du menu */
    border-radius: 0px 0px 0px 0px;
    /* Bordure du menu */
}

#panier td {
    text-align: center;
    /* centre le texte */
    border: solid 1px rgba(255, 255, 255, 0.5);
    /* Bordure du menu */
}

#panier img {
    width: 100px;
    /* largeur */
    height: 100px;
    /* hauteur */
}

.cart_product__image {
    margin: auto;
    width: 100px;
    /* largeur */
    height: 100px;
    /* hauteur */
    border-radius: 50px;
    /* angle de la bordure */
}

#panier fieldset {
    max-width: 400px;
    /* largeur */
    margin: auto;
    /* marge intérieure */
    margin-top: 25px;
    /* marge intérieure */
    display: flex;
    /* Affiche les éléments en ligne */
    flex-direction: column;
    /* disposition des éléments */
    justify-content: center;
    /* Centre les éléments en ligne */
    text-align: center;
    /* centre le texte */
    gap: 25px;
    /* gap entre les éléments */
}

#panier fieldset legend {
    text-align: center;
    /* centre le texte */
    font-weight: bold;
    /* police de caractères */
}

/* Disposition du contenu de la page par grille */
.container {
    display: grid;
    /* Affiche les éléments en ligne */
    grid-template-columns: 1fr 1fr;
    /* Nombre de colonnes */
    grid-template-rows: max-content max-content 1fr max-content;
    gap: 0px 0px;
    /* marge intérieure */
    grid-auto-flow: row;
    /* disposition dynamique des éléments en ligne*/
    grid-template-areas:
        "p1 p1"
        "p3 p3"
        "p5 p5";
}
</style>