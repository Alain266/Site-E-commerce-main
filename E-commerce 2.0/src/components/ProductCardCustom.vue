<!-- Script -->
<script lang="ts">
export default {
    name: 'ProductCard-custom',

    props: ['product'],

    methods: {
        formatPriceToEuro(price: number) {
            console.log('formatPriceToEuro - OK')
            return price/100 + '€';
        }
    }
}
</script>

<!-- Bas de page -->
<template>
    <div class="fiche-produit">
        <img :src="product.image">
        <h1>{{product.nom}}</h1>
        <p>{{product.description}}</p>
        <div>
            <p>Prix : {{this.formatPriceToEuro(product.prix)}}</p>
            <button id="btnBuy" @click="$emit('add-product', product)">Acheter</button>
        </div>
    </div>
</template>

<!-- Style -->
<style scoped>
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
    box-shadow:
    0px 0px 6.9px rgba(0, 0, 0, 0.11),
    0px 0px 14.1px rgba(0, 0, 0, 0.154),
    0px 0px 22.5px rgba(0, 0, 0, 0.179),
    0px 0px 34.1px rgba(0, 0, 0, 0.199),
    0px 0px 54.7px rgba(0, 0, 0, 0.225),
    0px 0px 116px rgba(0, 0, 0, 0.3)
    ;
    /* ombre */
}

.fiche-produit div{
    margin-top: auto;
}

#btnBuy{
    margin: 25px auto 25px auto;
    /* centre le button */
    width: 100px;
    /* largeur */
    font-weight: bold;
    /* police de caractères */
    font-size: 15px;
    /* Taille du texte */
    margin: auto;
    /* marge intérieure */
    max-width: 100px;
    /* largeur */
    min-width: 100px;
    /* largeur */
    color: white;
    /* couleur du texte */
    background-color: #000000; 
    /* couleur de fond */
    transition: transform 1.5s, border-radius 3s;
    /* Transition avec effet smooth */
}

#btnBuy:hover{
    transform: scale(1.10);
    /* Zoom au survol */
    border-radius: 50px;
    /* angle de la bordure */
}

</style>
