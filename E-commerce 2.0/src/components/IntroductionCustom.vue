<!-- Script -->
<script lang="ts">
export default {
    name: 'IntroductionCustom',
}
</script>

<!-- Bas de page -->
<template>
    <div>
        <article id="intro" class="p2"> <!-- Article texte d'intro -->
            <h2><slot></slot></h2>
            <br>
            <p><slot name="p">
            </slot>
            </p>
        </article>
    </div>
</template>

<!-- Style -->
<style scoped>
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
    padding: 25px;
}
</style>