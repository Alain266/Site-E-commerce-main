<!-- Script -->
<script lang="ts">
import VideoCustom from '../components/VideoCustom.vue'
import IntroductionCustom from '../components/IntroductionCustom.vue'
import BestProductsCustom from '../components/BestProductsCustom.vue'
import CustomersOpinionCustom from '../components/CustomersOpinionCustom.vue'
import PartnerCustom from '../components/PartnerCustom.vue'

export default {
    name: 'HomeView',
    components: {
        VideoCustom,
        IntroductionCustom,
        BestProductsCustom,
        CustomersOpinionCustom,
        PartnerCustom
    },
    emits: ['loading'],
    methods: {
        onload (event) {
            this.$emit('loading', event)
        }
    }
}
</script>

<!-- Template -->
<template>
    <main class="container">
        <VideoCustom @loading="onload"/>
        <IntroductionCustom>
            <template #default>
                😊Bienvenue dans notre éco-boutique !
            </template>
            <template v-slot:p>
                Découvrez un univers où la nature et la durabilité sont à l'honneur. 🌱
                <br> <br>
                Parcourez nos rayons remplis de produits éco-responsables, de textiles biologiques️, et d'accessoires
                réutilisables qui ajoutent une touche de style à votre démarche écolo. 🌍
                <br> <br>
                Chaque achat contribue à notre mission de préserver notre belle planète, un geste à la fois!
                <br> <br>
                💚 Rejoignez-nous dans cette aventure vers un avenir plus vert. 🌿🛒
                <br> <br>
                #ConsommerAvecConscience #ÉcoVie #AchatResponsable
            </template>
        </IntroductionCustom>
        <BestProductsCustom />
        <CustomersOpinionCustom />
        <PartnerCustom />
    </main>
</template>

<!-- Style -->
<style scoped>
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


    /* Disposition du contenu de la page par mobile */
    @media screen and (max-width: 1080px) {
    .container{  display: grid;
        grid-template-columns: 1fr; /* Nombre de colonnes */
        grid-template-rows: max-content max-content 1fr max-content;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
            "p1"
            "p2"
            "p3"
            "p4"
            "p5";
        }
    }
</style>
