<!-- Script -->
<script lang="ts">
import { defineComponent } from 'vue';
import { useProductsStore } from '../stores/products.ts';
import { mapStores } from 'pinia';

export default defineComponent({
    name: 'ContactsCustom',
    async mounted() {
        await this.productsStore.init();
        console.log('onInit - OK');
    },
    emits: ['loading'],
    methods: {
    },
    computed: {
        ...mapStores(useProductsStore),
    },
});
</script>

<!-- Bas de page -->
<template>
    <div class="p3">
        <article> <!-- Article produits -->
            <h2 id="titre1">CONTACT</h2>
            <form class="contact-form">
                <div class="form-group">
                    <label for="name">Nom :</label>
                    <input type="text" id="name" name="name" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="email">Email :</label>
                    <input type="email" id="email" name="email" class="form-control" required>
                </div>
                <div class="form-group">
                    <label for="message">Message :</label>
                    <textarea id="message" name="message" class="form-control" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Envoyer</button>
            </form>
        </article>
    </div>
</template>


<!-- Style -->
<style scoped>
article {
    margin: 20px auto;
    /* marge intérieure */
}

#titre1 {
    text-align: center;
    /* centre le texte */
    background-color: rgba(0, 0, 0, 1);
    /* couleur de fond */
    border-radius: 25px;
    /* angle de la bordure */
    width: 20em; 
    /* largeur */
    font-size: 20px; 
    /* taille de la police */
    margin: auto;
    /* marge intérieure */
    margin-bottom: 20px;
}

.p3 {
    color: #FFFFFF;
    /* couleur du texte */
    backdrop-filter: blur(5px);
    /* Effet de flou */
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

.contact-form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    min-width: 400px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

.form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.btn-primary {
    margin: 25px auto 25px auto;
    /* centre le button */
    width: 100px;
    /* largeur */
    font-weight: bold;
    /* police de caractères */
    font-size: 15px;
    /* Taille du texte */
    margin: auto;
    /* marge intérieure */
    max-width: 100px;
    /* largeur */
    min-width: 100px;
    /* largeur */
    color: white;
    /* couleur du texte */
    background-color: #000000;
    /* couleur de fond */
    transition: transform 1.5s, border-radius 3s;
    /* Transition avec effet smooth */
}

.btn-primary:hover {
    transform: scale(1.05);
    /* Zoom au survol */
    border-radius: 50px;
    /* angle de la bordure */
}

#message {
    resize: none;
}

article {
    text-align: center;
    padding: 20px;
}
</style>