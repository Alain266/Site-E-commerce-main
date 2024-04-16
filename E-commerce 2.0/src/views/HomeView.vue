<!-- Script -->
<script lang="ts">
import VideoCustom from '../components/Video-custom.vue'
import IntroductionCustom from '../components/Introduction-custom.vue'
import ProductsHomeCustom from '../components/ProductsHome-custom.vue'

export default {
    name: 'HomeView',
    components: {
        VideoCustom,
        IntroductionCustom,
        ProductsHomeCustom
    }
}

</script>

<!-- Template -->
<template>
    <main class="container">
        <VideoCustom />
        <IntroductionCustom />
        <ProductsHomeCustom />
    </main>
</template>

<!-- Style -->
<style>
    /* Disposition du contenu de la page par grille */
    .container{  display: grid;
    grid-template-columns: 1fr 1fr; /* Nombre de colonnes */
    grid-template-rows: max-content max-content 1fr max-content;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        "p1 p2"
        "p3 p3"
        "p4 p4"
        "p5 p5";
    }
</style>
