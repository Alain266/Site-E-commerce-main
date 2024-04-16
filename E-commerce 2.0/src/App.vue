<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import FooterCustom from './components/Footer-custom.vue'

export default {
    name: 'App',
    components: {
        FooterCustom,
        RouterLink,
        RouterView
    }
}

</script>

<template>
    <header>
        <div class="wrapper">
            <header>
                <!-- Titre du site -->
                <h1>Eco-commerce <br> <span id="slogan" class="text-1">Site d'achat en ligne éco-friendly</span><span id="slogan" class="text-2">Contribuez à un avenir durable !</span></h1> 
                <!-- Barre de navigation -->
                <nav>
                    <RouterLink to="/">Accueil</RouterLink>
                    <RouterLink to="/products">Produits</RouterLink>
                    <RouterLink to="/categories">Catégories</RouterLink>
                    <RouterLink to="/contacts">Contacts</RouterLink>
                    <RouterLink to="/panier">Panier</RouterLink>
                    <RouterLink to="/connexion">Connexion</RouterLink>
                </nav>
            </header>
        </div>
    </header>
    <RouterView />
    <FooterCustom />
</template>

<style scoped>
header{
    margin-top: 0; /* marge intérieure */
    padding: 10px 0px 0px 0px; /* marge intérieure */
}

header h1{
    margin: auto; /* centre le texte */
    margin-bottom: 10px; /* marge intérieure */
    height: 2em; /* hauteur */
    width: 300px; /* largeur */
    padding: 0px 0px 15px 0px; /* marge intérieure */
    color: rgba(255, 255, 255, 1); /* Couleur du texte */
    text-align: center; /* Texte centré */
    background-color:rgba(39, 105, 85, 1); /* Couleur de fond */
    border-radius: 50px; /* Arrondi du borde */
}

#slogan{
    position: absolute; /* position absolue */
    margin-left: 50%; /* marge intérieure */
    left: -120px; /* tire vers la gauche */
    font-size: 20px; /* Taille du texte */
    font-family: 'Parisienne', cursive; /* Police de caractères */
    font-weight: 400; /* Police de caractères */
}

.text-1 {
    animation: text1;
}

.text-2 {
    animation: text2;
}

.text-1,
.text-2 {
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    position: relative;
    animation-duration: 20s;
    animation-timing-function: steps(25, end);
    animation-iteration-count: infinite;
}

.text-1::after,
.text-2::after {
    content: "|";
    position: absolute;
    right: 0;
    animation: caret infinite;
    animation-duration: 1s;
    animation-timing-function: steps(1, end);
}

@keyframes text2 {

    0%,
    50%,
    100% {
        width: 0;
    }

    60%,
    90% {
        width: 11.65em;
    }
}

@keyframes text1 {

    0%,
    50%,
    100% {
        width: 0;
    }

    10%,
    40% {
        width: 12.3em;
    }
}

@keyframes caret {

    25%,
    100% {
        opacity: 0;
    }

    50% {
        opacity: 1;
    }
}

header nav{
    border-bottom: rgba(39, 105, 85, 1) 1px solid; /* Bordure du menu */
    border-top: rgba(39, 105, 85, 1) 1px solid; /* Bordure du menu */
    display: flex; /* Affiche les éléments en ligne */
    justify-content: center; /* Centre les éléments en ligne */
    justify-content: space-around; /* Centre les éléments en colonne */
    height: 3em; /* Hauteur */
    width: 100%; /* Largeur */
    background-color: rgba(0, 0, 0, 0.75); /* Couleur de fond */
    backdrop-filter: blur(10px); /* Effet de flou */
}

header nav a{
    margin: auto; /* centre le texte */
    color: rgb(255, 255, 255); /* Couleur du texte */
    text-decoration: none; /* Supprime le soulignement */
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 2rem;
    border-left: 1px solid var(--color-border);
}

</style>
