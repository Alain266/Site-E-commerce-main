<!-- Script -->
<script lang="ts">
import { defineComponent } from 'vue';
import ProductCardCustom from './ProductCardCustom.vue';
import {useProductsStore} from '../stores/products.ts';
import {mapStores} from 'pinia';

export default defineComponent({
    name: 'BestProductsCustom',
    async mounted() {
        await this.productsStore.init();
        console.log('onInit - OK');
    },
    emits: ['loading'],
    methods: {
    },
    computed: {
        ...mapStores(useProductsStore),
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
            <h2 id="titre1">MEILLEURES VENTES DU MOMENT</h2>
            <div id="produits">
                <ProductCardCustom v-for="product in this.productsStore.products.sort((a, b) => b.note - a.note).slice(0, 4)" :key="product.id" :product="product"/>
            </div>
        </article>
    </div>
</template>

<!-- Style -->
<style scoped>
.p3 {
    grid-area: p3;
    background-color: rgba(39, 105, 85, 0.5);
    /* couleur de fond */
    color: #FFFFFF;
    /* couleur du texte */
    backdrop-filter: blur(5px);
    /* Effet de flou */
    width: 100%;
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

#produits {
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
}

#produits{
    display: flex; /* Affiche les éléments en ligne */
    justify-content: center; /* Centre les éléments en ligne */
    flex-wrap: wrap; /* Affiche les éléments en ligne */
    justify-content: space-around; /* Centre les éléments en ligne */
    padding-bottom: 50px; /* marge intérieure */
}

.fiche-produit{
    display: flex; /* Affiche les éléments en ligne */
    flex-direction: column ; /* disposition des éléments */
    align-items: center; /* Centre les éléments en ligne */
    padding-bottom: 50px; /* marge intérieure */
    max-width: 300px;
    font-weight: bold; /* Police de caractères */
    padding: 10px; /* marge intérieure */
    margin: 10px; /* marge intérieure */
    color: #000; /* couleur du texte */
    text-align: center; /* Texte centré */
    background: rgba(255, 255, 255, 1); /* Couleur de fond */
    border-radius: 25px; /* angle de la bordure */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0  rgba(0, 0, 0, 0.19); /* Effet de flou */
    transition: transform 0.3s ease-in-out; /* Transition avec effet smooth */
}

.fiche-produit h1{
    background-color: rgba(39, 105, 85, 0.5); /* couleur de fond */
    border-radius: 25px; /* angle de la bordure */
    font-size: 20px; /* taille de la police */
    padding: 10px;
}

.fiche-produit:hover{
    transform: scale(1.05); /* Zoom au survol */
}

.fiche-produit img{
    width: 7em; /* largeur */
    height: 7em; /* hauteur */
    border-radius: 150px; /* angle de la bordure */
}

.fiche-produit div{
    margin-top: auto;
    position: relative;
    bottom: 0;
}
</style>