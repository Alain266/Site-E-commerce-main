<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CurrencyCustom',
    props: {
        product: Object // Propriété pour passer le produit à afficher
    },
    data() {
        return {
            quantity: 1, // Initialisation de la quantité à 1
            total: 0 // Initialisation du total à 0
        };
    },
    mounted() {
        this.calculateTotalProduct();
    },
    methods: {
        calculateTotalProduct() {
            const unitPrice = parseFloat(this.product.price);
            this.total = this.quantity * unitPrice;
        },
        removeProduct() {
            this.$emit('remove'); // Émet un événement pour signaler la suppression du produit
        },
        formatPrice(price: number) {
            return Currency.formatPriceToEuro(price);
        }
    }
});
</script>

<template>
    <div>
        <h2>{{ product.name }}</h2>
        <p>Price: {{ formatPrice(product.price) }}</p>
        <p>Quantity: <input type="number" v-model="quantity" @change="calculateTotalProduct"></p>
        <p>Total: {{ formatPrice(total) }}</p>
        <button @click="removeProduct">Remove</button>
    </div>
</template>

<style scoped>

</style>