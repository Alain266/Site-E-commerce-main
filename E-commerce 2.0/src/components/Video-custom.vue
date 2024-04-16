<!-- Script -->
<script lang="ts">
export default {
    name: 'Video-custom',
}
</script>

<!-- Bas de page -->
<template>
    <div>
        <article class="p1">
            <iframe id="video" src="https://www.youtube.com/embed/C8AQxyMSOgo" title="TotalPollution : le sale jeu des énergies fossiles" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen alt="Vidéo youtube Greenpeace"></iframe> <!-- Vidéo youtube Greenpeace -->
        </article>
    </div>
</template>

<!-- Style -->
<style>
    .p1{
    grid-area: p1; /* placement du contenu dans la grille */
    height: 100%; /* hauteur */
}

#video{
    width: 100%; /* largeur */
    height: 100%; /* hauteur */
}
</style>