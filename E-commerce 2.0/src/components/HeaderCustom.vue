<!-- Script -->
<script lang="ts">
import { RouterLink } from 'vue-router'
export default {
    name: 'HeaderCustom',
    components: {
        RouterLink
    },
    methods: {
        /** 
        * Afficher le menu hamburger quand on clique sur le bouton
        */
        openMenuHamburger() {
            document.getElementById("pagehamburger").style.left = "0"; // Afficher le menu
            console.log('closeMenuHamburger - OK')
        },

        /**
        * Fermer le menu hamburger quand on clique autre part que sur le bouton
        */
        closeMenuHamburger(event: MouseEvent) {
            if (!menu1.contains(event.target)) { // Si le clic n'est pas dans le menu1
                document.getElementById("pagehamburger").style.left = "-100%"; // Cacher le menu
            }
        }
    }
}
</script>

<!-- Bas de page -->
<template>
    <div id="pagehamburger" @click.capture="closeMenuHamburger">
        <nav id="menunav">
            <RouterLink to="/">Accueil</RouterLink>
            <RouterLink to="/products">Produits</RouterLink>
            <RouterLink to="/categories">Catégories</RouterLink>
            <RouterLink to="/contacts">Contacts</RouterLink>
            <RouterLink to="/panier">Panier</RouterLink>
            <RouterLink to="/connexion">Connexion</RouterLink>
        </nav>
    </div>
    <header>
        <div class="wrapper">
            <header>
                <!-- Titre du site -->
                <h1>Eco-commerce <br> <span id="slogan" class="text-1">Site d'achat en ligne éco-friendly</span><span
                        id="slogan" class="text-2">Contribuez à un avenir durable !</span></h1>
                <!-- Barre de navigation PC -->
                <nav>
                    <RouterLink to="/">Accueil</RouterLink>
                    <RouterLink to="/products">Produits</RouterLink>
                    <RouterLink to="/categories">Catégories</RouterLink>
                    <RouterLink to="/contacts">Contacts</RouterLink>
                    <RouterLink to="/panier">Panier</RouterLink>
                    <RouterLink to="/connexion">Connexion</RouterLink>
                </nav>
                <!-- Icone navigation du site version mobile -->
                <a @click="openMenuHamburger(event)">
                    <img id="menu1" class="menu" src="/icons8-menu-64(1).png" alt="Menu" />
                </a>
            </header>
        </div>
    </header>
</template>

<!-- Style -->
<style scoped>
header {
    width: 100%;
    /* largeur */
    margin-top: 0;
    /* marge intérieure */
    padding: 10px 0px 0px 0px;
    /* marge intérieure */
}

header h1 {
    margin: auto;
    /* centre le texte */
    height: 2em;
    /* hauteur */
    width: 300px;
    /* largeur */
    padding: 0px 0px 10px 0px;
    /* marge intérieure */
    color: rgba(255, 255, 255, 1);
    /* Couleur du texte */
    text-align: center;
    /* Texte centré */
    background-color: rgba(39, 105, 85, 1);
    /* Couleur de fond */
    border-radius: 50px;
    /* Arrondi du borde */
}

#slogan {
    position: absolute;
    /* position absolue */
    margin-left: 50%;
    /* marge intérieure */
    left: -120px;
    /* tire vers la gauche */
    font-size: 20px;
    /* Taille du texte */
    font-family: 'Parisienne', cursive;
    /* Police de caractères */
    font-weight: 400;
    /* Police de caractères */
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
    /* Cache le texte */
    white-space: nowrap;
    /* Cache le texte */
    display: inline-block;
    /* Affiche le texte */
    position: relative;
    /* Positionne l'animation */
    animation-duration: 20s;
    /* Duree de l'animation */
    animation-timing-function: steps(25, end);
    /* Duree de l'animation */
    animation-iteration-count: infinite;
    /* Duree de l'animation */
}

.text-1::after,
.text-2::after {
    content: "|";
    /* Le contenu de l'animation */
    position: absolute;
    /* Positionne l'animation */
    right: 0;
    /* Positionne l'animation */
    animation: caret infinite;
    /* Lancement de l'animation */
    animation-duration: 1s;
    /* Duree de l'animation */
    animation-timing-function: steps(1, end);
    /* Duree de l'animation */
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

header nav {
    border-bottom: rgba(39, 105, 85, 1) 1px solid;
    /* Bordure du menu */
    border-top: rgba(39, 105, 85, 1) 1px solid;
    /* Bordure du menu */
    display: flex;
    /* Affiche les éléments en ligne */
    justify-content: center;
    /* Centre les éléments en ligne */
    justify-content: space-around;
    /* Centre les éléments en colonne */
    height: 3em;
    /* Hauteur */
    width: 100%;
    /* Largeur */
    background-color: rgba(0, 0, 0, 0.75);
    /* Couleur de fond */
    backdrop-filter: blur(10px);
    /* Effet de flou */
}

header nav a {
    margin: auto;
    /* centre le texte */
    color: rgb(255, 255, 255);
    /* Couleur du texte */
    text-decoration: none;
    /* Supprime le soulignement */
    font-size: 1.5em;
    /* Taille de la police */
}

/* style si l'écran est plus petit que 1080px */
@media screen and (max-width: 1080px) {
    header nav a {
        display: none
            /* N'affiche rien */
    }
}

/* Disposition du menu hamburger */
#pagehamburger {
    display: flex;
    /* Affiche les éléments en ligne */
    justify-content: center;
    /* Centre les éléments en ligne */
    position: fixed;
    /* position fixe */
    margin: 0;
    /* retire les marges */
    left: -100%;
    /* tire vers la gauche */
    width: 100%;
    /* largeur */
    height: 100%;
    /* hauteur */
    background-color: rgba(39, 105, 85, 0.5);
    /* couleur de fond */
    backdrop-filter: blur(10px);
    /* Effet de flou */
    z-index: 2;
    /* Assure que l'overlay est au-dessus du contenu */
    border-radius: 5px;
    /* angle de la bordure */
    transition: left 0.8s ease-in-out;
    /* Transition pour le déplacement horizontal */
}

/* style si l'écran est plus grand que 1080px */
@media screen and (min-width: 1080px) {
    #pagehamburger {
        display: none
            /* N'affiche rien */
    }
}

#menunav {
    position: sticky;
    /* position fixe */
    display: flex;
    /* affiche les éléments en ligne */
    justify-content: center;
    /* centre les éléments en ligne */
    flex-direction: column;
    /* disposition des éléments */
    gap: 50px;
    /* marge intérieure */
    font-size: 2em;
    /* taille de la police */
    padding: 2em;
    /* marge intérieure */
}

#menunav li {
    list-style: none;
    /* retire les puces */
}

#menunav a {
    text-decoration: none;
    /* retire le soulignement des liens */
    color: #000000;
    /* couleur du texte */
    font-size: 1em;
    /* taille de la police */
}

#menunav a:hover {
    color: rgba(255, 255, 255, 1);
    /* couleur du texte */
}

.menu {
    position: absolute;
    /* position absolue */
    top: 99px;
    /* tire vers le haut */
    right: 45%;
    /* tire vers la droite */
    width: 50px;
    /* largeur */
}

/* style si l'écran est plus grand que 1080px */
@media screen and (min-width: 1080px) {
    .menu {
        display: none
            /* N'affiche rien */
    }
}

#menu1 {
    position: absolute;
    /* position absolue */
    top: 125px;
    /* tire vers le haut */
    height: 40px;
    /* hauteur */
    width: 40px;
    /* largeur */
    right: 50px;
    /* tire vers la gauche */
    border-radius: 50%;
    /* Arrondi du borde */
}

nav {
    width: 100%;
    /* largeur */
    font-size: 12px;
    /* taille de la police */
    text-align: center;
    /* texte centre */
    margin-top: 2rem;
    /* marge intérieure */
}

nav a {
    display: inline-block;
    /* affiche les éléments en ligne */
    padding: 0 2rem;
    /* marge intérieure */
}
</style>
