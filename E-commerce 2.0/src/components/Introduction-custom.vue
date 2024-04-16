<!-- Script -->
<script lang="ts">
export default {
    name: 'Introduction-custom',
}
</script>

<!-- Bas de page -->
<template>
    <div>
        <article id="intro" class="p2"> <!-- Article texte d'intro -->
            <h2>😊Bienvenue dans notre éco-boutique !</h2>
            <p>Découvrez un univers où la nature et la durabilité sont à l'honneur. 🌱
                <br> <br>
                Parcourez nos rayons remplis de produits éco-responsables, de textiles biologiques️, et d'accessoires
                réutilisables qui ajoutent une touche de style à votre démarche écolo. 🌍
                <br> <br>
                Chaque achat contribue à notre mission de préserver notre belle planète, un geste à la fois!
                <br> <br>
                💚 Rejoignez-nous dans cette aventure vers un avenir plus vert. 🌿🛒
                <br> <br>
                #ConsommerAvecConscience #ÉcoVie #AchatResponsable
            </p>
        </article>
    </div>
</template>

<!-- Style -->
<style>
.p2{ 
    height: max-content; /* hauteur */
    grid-area: p2; 
}

#intro{
    margin: auto; /* centre le texte */
    color: #FFF; /* couleur du texte */
    text-align: center; /* centre le texte */
    background-color: rgba(39, 105, 85, 0.5); /* couleur de fond */
    border-radius: 25px; /* angle de la bordure */ 
    margin: 10px; /* marge intérieure */   
}
</style>