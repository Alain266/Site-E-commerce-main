<!-- Script -->
<script lang="ts">
export default {
    name: 'CustomersOpinionCustom',
}
</script>

<!-- Bas de page -->
<template>
    <div class="p4">
        <article> <!-- Article avis clients-->
            <h2>AVIS CLIENTS</h2>
            <section id="commentaires">
                <div class="avis">
                    <p>Une mine d'or éco-friendly, je recommande !</p>
                    <p> ⭐️⭐️⭐️⭐️⭐ </p>
                    <p>-Karine</p>
                </div>
                <div class="avis">
                    <p>Une boutique éco-responsable exceptionnelle !</p>
                    <p> ⭐️⭐️⭐️⭐️⭐ </p>
                    <p>-Sophie</p>
                </div>
                <div class="avis">
                    <p>Un trésor pour les amoureux de la planète !</p>
                    <p> ⭐️⭐️⭐️⭐️⭐ </p>
                    <p>-Alain</p>
                </div>
            </section>
        </article>
    </div>
</template>

<!-- Style -->
<style scoped>
.p4{
    margin-bottom: 25px;
    height: max-content; /* hauteur */
    grid-area: p4; 
}

.p4 h2{
    color: rgba(255, 255, 255, 1); /* couleur du texte */
    text-align: center; /* Texte centré */
    background-color: rgba(0, 0, 0, 1); /* couleur de fond */
    border-radius: 25px; /* angle de la bordure */
    margin: 25px auto; /* marge intérieure */
    width: 10em; /* largeur */
    font-size: 20px; /* taille de la police */
}

#commentaires{
    display: flex; /* Affiche les éléments en ligne */
    justify-content: center; /* Centre les éléments en ligne */
    flex-wrap: wrap; /* Affiche les éléments en ligne */
    gap: 10px; /* marge intérieure */
    justify-content: space-around; /* Centre les éléments en ligne */
}

.avis{ 
    margin-bottom: 0px; /* marge intérieure */
    padding: 25px;  /* marge intérieure */
    color: rgba(255, 255, 255, 1); /* couleur du texte */
    text-align: center; /* Texte centré */
    background-color: rgba(39, 105, 85, 0.5); /* couleur de fond */
    border-radius: 150px; /* angle de la bordure */
    font-size: 20px; /* taille de la police */
    backdrop-filter: blur(5px); /* Effet de flou */
}

.avis:hover{
    transform: scale(1.05); /* Zoom au survol */
    animation: swing 1s ease-in-out infinite; /* Animation de fondu */
}

@keyframes swing {
    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(2deg);
    }
    66% {
        transform: rotate(-2deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
</style>
