<!-- Script -->
<script lang="ts">
import { defineComponent } from 'vue';
import ProductCardCustom from './ProductCardCustom.vue';
import {useProductsStore} from '../stores/products';
import {mapStores} from 'pinia';

export default defineComponent({
    name: 'AllProductsCustom',
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
            <h2 id="titre1">TOUS NOS PRODUITS</h2>
            <div id="produits">
                <ProductCardCustom v-for="product in productsStore.products" :key="product.id" :product="product"/>
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
    padding-top: 1px;
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
</style>