<!-- Script -->
<script lang="ts">
export default {
    name: 'PartnerCustom',
}
</script>

<!-- Bas de page -->
<template>
    <div class="p5">
        <article> <!-- Article partenaires -->
            <section id="partenaires">
                <span>En partenariat avec :</span>
                <img src="../assets/Partenaires/ministereeco.jpg" />
                <img src="../assets/Partenaires/greenpeace.jpg" />
                <img src="../assets/Partenaires/ecologieuniverselle.jpg" />
                <img src="../assets/Partenaires/soulevementdelaterre.jpg" />
                <img src="../assets/Partenaires/acceuilpaysan.jpg" />
            </section>
        </article>
    </div>
</template>

<!-- Style -->
<style scoped>
.p5 {
    height: max-content;
    /* hauteur */
    color: rgba(255, 255, 255, 1);
    /* couleur du texte */
    margin-bottom: 75px;
    /* marge intérieure */
    background-color: rgba(0, 0, 0, 0.65);
    /* couleur de fond */
    grid-area: p5;
    box-shadow:
    0px 0px 6.4px rgba(0, 0, 0, 0.149),
    0px 0px 13.4px rgba(0, 0, 0, 0.204),
    0px 0px 22.4px rgba(0, 0, 0, 0.232),
    0px 0px 38.2px rgba(0, 0, 0, 0.259),
    0px 0px 90px rgba(0, 0, 0, 0.35)
    ;
    /* ombre */
}

#partenaires span {
    display: flex;
    /* Affiche les éléments en ligne */
    justify-content: center;
    /* Centre les éléments en ligne */
    flex-direction: column;
    /* disposition des éléments */
    width: 10em;
    /* largeur */
    height: 10em;
    /* hauteur */
    font-size: 20px;
    /* taille de la police */
}

#partenaires {
    display: flex;
    /* Affiche les éléments en ligne */
    justify-content: center;
    /* Centre les éléments en ligne */
    flex-wrap: wrap;
    /* Affiche les éléments en ligne */
    gap: 10px;
    /* marge intérieure */
    justify-content: space-around;
    /* Centre les éléments en ligne */
}

#partenaires img {
    margin: auto;
    /* marge intérieure */
    width: 8em;
    /* largeur */
    height: 8em;
    /* hauteur */
    border-radius: 25px;
    /* angle de la bordure */
}
</style>