<!-- Script -->
<script lang="ts">
export default {
    name: 'SearchBarCustom',

    methods: {
        search() { //fonction de recherche
            let input = document.getElementById('searchbar').value // recupère la valeur de l'input
            input = input.toLowerCase(); // met la valeur en minuscule
            let produit = document.getElementsByClassName('fiche-produit'); // recupère la classe

            for (i = 0; i < produit.length; i++) { // pour chaque élément dans la classe fiche-produit
                if (!produit[i].innerHTML.toLowerCase().includes(input)) { // si l'élément ne contient pas la valeur de l'input
                    produit[i].style.display = "none"; // cache l'élément
                }
                else {
                    produit[i].style.display = "list-item"; // sinon affiche l'élément  
                }
            }
        }
    }
}
</script>

<!-- Bas de page -->
<template>
    <div class="container">
        <div class="p1">
            <input type="text" placeholder="Rechercher..." class="search" id="searchbar" />
            <!-- Bar de recherche -->
        </div>
    </div>
</template>

<!-- Style -->
<style scoped>
.search {
    grid-area: p1;
    margin: 20px 0px 20px 0px; 
    /* marge intérieure */
    width: 15em;
    /* largeur */
    height: 1.5em;
    /* hauteur */
    background-color: rgba(39, 105, 85, 0.5);
    /* couleur de fond */
    color: #FFFFFF;
    /* couleur du texte */
    backdrop-filter: blur(5px);
    /* Effet de flou */
    border-radius: 25px;
    /* angle de la bordure */
}

.p1 {
    display: flex; /* Affiche les éléments en ligne */
    justify-content: center; /* Centre les éléments en ligne */
}
</style>
