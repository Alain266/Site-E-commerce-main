<script>
import { RouterLink } from 'vue-router'
export default {
    name: 'InscriptionView',
    data() {
        return {
            username: '',
            password: ''
        };
    },
    components: {
        RouterLink
    },
    methods: {
        submitForm() {
            // Tu peux utiliser les données username et password ici pour soumettre le formulaire
            console.log('Nom d\'utilisateur:', this.username);
            console.log('Mot de passe:', this.password);
        }
    }
};
</script>

<template>
    <article class="p3"> <!-- Article produits -->
        <h2 id="titre1">INSCRIPTION</h2>
        <form @submit.prevent="submitForm"> <!-- Formulaire du site -->
            <fieldset>
                <label for="nom">Nom d'utilisateur :</label> <!-- Label du champ --> <br>
                <input type="text" v-model="username" id="nom" required> <!-- Champ du formulaire -->
            </fieldset>
            <fieldset>
                <label for="email">Adresse e-mail :</label> <!-- Label du champ --> <br>
                <input type="email" v-model="email" id="email" required> <!-- Champ du formulaire -->
            </fieldset>
            <fieldset>
                <label for="password">Mot de passe :</label> <!-- Label du champ --> <br>
                <input type="password" v-model="password" id="password" required> <!-- Champ du formulaire -->
            </fieldset>
            <button type="submit">Enregistrer</button> <!-- Bouton du formulaire -->
        </form>
        <RouterLink to="/connexion">J'ai déjà un compte</RouterLink>
    </article>
</template>

<style scoped>
#titre1 {
    text-align: center;
    /* centre le texte */
    background-color: rgba(0, 0, 0, 1);
    /* couleur de fond */
    border-radius: 25px;
    /* angle de la bordure */
    margin: 25px auto;
    /* marge intérieure */
    width: 15em;
    /* largeur */
    font-size: 20px;
    /* taille de la police */
}

.p3 {
    display: flex;
    /* Affiche les éléments en ligne */
    justify-content: center;
    /* Centre les éléments en ligne */
    flex-direction: column;
    /* disposition des éléments */
    margin: 25px;
    /* marge intérieure */
    grid-area: p3;
    background-color: rgba(39, 105, 85, 0.5);
    /* couleur de fond */
    color: #FFFFFF;
    /* couleur du texte */
    backdrop-filter: blur(5px);
    /* Effet de flou */
    border-radius: 25px;
    /* angle de la bordure */
    box-shadow:
    0px 0px 5.4px rgba(0, 0, 0, 0.192),
    0px 0px 11px rgba(0, 0, 0, 0.271),
    0px 0px 17.5px rgba(0, 0, 0, 0.314),
    0px 0px 26.5px rgba(0, 0, 0, 0.343),
    0px 0px 42.4px rgba(0, 0, 0, 0.379),
    0px 0px 90px rgba(0, 0, 0, 0.5)
    ;
    /* ombre */
}

.p3 a {
    color: rgba(0, 0, 0, 1);
    text-decoration: none;
    text-align: center;
    margin-bottom: 25px;
}

.p3 a:hover {
    color: rgba(255, 255, 255, 1);
    /* couleur du texte */
}

.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* Nombre de colonnes */
    grid-template-rows: max-content max-content 1fr max-content;
    gap: 0px 0px;
    grid-auto-flow: row;
    /* disposition dynamique des éléments en ligne*/
    grid-template-areas:
        "p3 p3"
        "p5 p5";
}


form {
    display: flex;
    /* Affiche les éléments en ligne */
    flex-direction: column;
    /* disposition des éléments */
    align-items: center;
    /* Centre les éléments en colonne */
}

fieldset {
    width: 20em;
    /* largeur */
    display: flex;
    /* Affiche les éléments en ligne */
    justify-content: center;
    /* Centre les éléments en ligne */
    flex-direction: column;
    /* disposition des éléments */
    text-align: center;
    margin: 25px;
    /* marge intérieure */
    color: #FFFFFF;
    /* couleur du texte */
    border-radius: 25px;
    /* angle de la bordure */
}

input {
    border-radius: 15px;
    /* angle de la bordure */
    width: 15em;
    /* largeur */
    margin: auto;
}

button {
    display: flex;
    /* Affiche les éléments en ligne */
    font-weight: bold;
    /* police de caractères */
    font-size: 15px;
    /* Taille du texte */
    margin: auto;
    /* marge intérieure */
    margin-bottom:  20px;
    color: white;
    /* couleur du texte */
    background-color: #000000;
    /* couleur de fond */
    transition: transform 1.5s, border-radius 3s;
    /* Transition avec effet smooth */
}

button:hover {
    transform: scale(1.05);
    /* Zoom au survol */
    border-radius: 50px;
    /* angle de la bordure */
}
</style>