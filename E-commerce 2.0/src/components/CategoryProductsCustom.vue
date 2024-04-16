<!-- Script -->
<script lang="ts">
import { defineComponent } from 'vue';
import ProductCardCustom from './ProductCardCustom.vue';
import { useProductsStore } from '../stores/products.ts';
import { mapStores } from 'pinia';

export default defineComponent({
    name: 'CategoryProductsCustom',
    async mounted() {
        await this.productsStore.init();
        console.log('onInit - OK');
    },
    emits: ['loading'],
    methods: {
    },
    computed: {
        ...mapStores(useProductsStore),
        category1(): Product[] {
            const category = 'VETEMENTS ECO-RESPONSABLES';
            return this.productsStore.products.filter(product => product.categorie === category);
        },
        category2(): Product[] {
            const category = 'ARTICLES POUR VOTRE ECO-MAISON';
            return this.productsStore.products.filter(product => product.categorie === category);
        },
        category3(): Product[] {
            const category = 'PRODUITS DE SOIN NATURELS';
            return this.productsStore.products.filter(product => product.categorie === category);
        },
    },
    components: {
        ProductCardCustom
    }
});
</script>

<!-- Bas de page -->
<template>
    <div class="p3">
        <article> <!-- Article produits -->
            <h2 id="titre1">CATEGORIES</h2>
            <ol id="liste">
                <article class="p2"> <!-- Catégorie 1 -->
                    <h2 class="titre1" id="cat1">ECO-RESPONSABLES 🍀</h2>
                    <div class="produits">
                        <ProductCardCustom v-for="product in category1" :key="product.id" :product="product" />
                    </div>
                </article>
                <article class="p2"> <!-- Catégorie 2 -->
                    <h2 class="titre1" id="cat2">PRODUITS DE SOIN NATURELS 🌺</h2>
                    <div class="produits">
                        <ProductCardCustom v-for="product in category2" :key="product.id" :product="product" />
                    </div>
                </article>
                <article class="p2"> <!-- Catégorie 3 -->
                    <h2 class="titre1" id="cat3">ARTICLES POUR VOTRE ECO-MAISON 🏡</h2>
                    <div class="produits">
                        <ProductCardCustom v-for="product in category3" :key="product.id" :product="product" />
                    </div>
                </article>
            </ol>
        </article>
    </div>
</template>

<!-- Style -->
<style scoped>
.titre1 {
    margin: 20px auto;
    color: #FFFFFF;
    /* couleur du texte */
    text-align: center;
    /* centre le texte */
    border-radius: 25px;
    /* angle de la bordure */
    width: 25em;
    /* largeur */
    font-size: 20px;
    /* taille de la police */
}

h2 {
    font-size: 15px;
    /* Taille du texte */
    text-align: center;
    /* Texte centré */
}

ol {
    height: 100%;
    /* hauteur */
    padding: 0;
    /* marge extérieure */
    width: 90%;
    /* largeur */
    margin: auto;
    /* marge intérieure */
    text-align: center;
    /* Texte centré */
    list-style-type: none;
    /* Supprime les puces */
    display: flex;
    /* Affiche les éléments en ligne */
    flex-wrap: wrap;
    /* Affiche les éléments en ligne */
    justify-content: center;
    /* Centre les éléments en ligne */
    gap: 25px;
    /* marge intérieure */
}

.p3 {
    color: #FFFFFF;
    /* couleur du texte */
    backdrop-filter: blur(5px);
    /* Effet de flou */
    width: 100%;
    padding-top: 1px;
    /* marge intérieure */
    padding-bottom: 25px;
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

.p2 {
    background-color: rgba(39, 105, 85, 0.5);
    /* couleur de fond */
    color: #000000;
    /* couleur du texte */
    border: 1px solid #000000;
    /* bordure */
    border-radius: 25px;
    /* angle de la bordure */
}

.produits {
    display: flex;
    /* Affiche les éléments en ligne */
    justify-content: center;
    /* Centre les éléments en ligne */
    flex-wrap: wrap;
    /* Affiche les éléments en ligne */
    justify-content: space-around;
    /* Centre les éléments en ligne */
    padding-bottom: 50px;
    /* marge intérieure */
    width: 100%;
    /* largeur */
}

#titre1 {
    text-align: center;
    /* centre le texte */
    background-color: rgba(0, 0, 0, 1);
    /* couleur de fond */
    border-radius: 25px;
    /* angle de la bordure */
    margin: 25px auto;
    /* marge intérieure */
    width: 20em;
    /* largeur */
    font-size: 20px;
    /* taille de la police */
}

</style>