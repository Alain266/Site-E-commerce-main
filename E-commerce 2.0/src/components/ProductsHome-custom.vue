<!-- Script -->
<script lang="ts">
export default {
    name: 'ProductsHome-custom',
}
</script>

<!-- Bas de page -->
<template>
    <div>
        <article class="p3"> <!-- Article produits -->
            <h2 id="titre1">MEILLEURES VENTES DU MOMENT</h2>
            <div id="produits">

            </div>
        </article>
    </div>
</template>

<!-- Style -->
<style>
.p3 {
    grid-area: p3;
    background-color: rgba(39, 105, 85, 0.5);
    /* couleur de fond */
    color: #FFFFFF;
    /* couleur du texte */
    backdrop-filter: blur(5px);
    /* Effet de flou */
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

#produits{
    display: flex; /* Affiche les éléments en ligne */
    justify-content: center; /* Centre les éléments en ligne */
    flex-wrap: wrap; /* Affiche les éléments en ligne */
    justify-content: space-around; /* Centre les éléments en ligne */
    padding-bottom: 50px; /* marge intérieure */
}
</style>