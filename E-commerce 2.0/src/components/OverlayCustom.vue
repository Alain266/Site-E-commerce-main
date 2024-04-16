<!-- Script -->
<script lang="ts">
export default {
    name: 'OverlayCustom',
    props: {
        loading: Boolean
    },
}
</script>

<!-- Bas de page -->
<template>
    <div v-if="loading" class="loading-overlay"> <!-- Overlay du chargement -->
        <div class="loading-image"></div> <!-- Image du chargement -->
    </div>
</template>

<!-- Style -->
<style scoped>
/* Overlay de chargement */
.loading-overlay {
    position: fixed; /* position fixe */
    top: 0; /* tire vers le haut */
    left: 0; /* tire vers la gauche */
    width: 100%; /* largeur */
    height: 100%; /* hauteur */
    background-color: rgba(39, 105, 85, 0.5); /* Couleur de fond semi-transparente */
    backdrop-filter: blur(5px); /* Effet de flou */
    display: flex; /* Affiche les éléments en ligne */
    justify-content: center; /* Centre les éléments en ligne */
    align-items: center; /* Centre les éléments en colonne */
    z-index: 9999; /* Assure que l'overlay est au-dessus du contenu */
    transition: opacity 3s ease; /* Animation du chargement */
}

/* Logo du site */
.loading-image {
    margin: auto; /* centre le texte */
    width: 250px; /* largeur */
    height: 250px; /* hauteur */
    background-image: url("/ecologie.png"); /* Chemin vers votre image de chargement */
    background-size: cover; /* Taille de l'image */
    animation: spin 2s linear infinite; /* Animation du chargement */
}

@keyframes spin { /* Animation du chargement */
    0% { 
        transform: rotate(0deg); /* Rotation de 0 degrés */
    }
    100% {
        transform: rotate(360deg); /* Rotation de 360 degrés */
    }
}  
</style>
