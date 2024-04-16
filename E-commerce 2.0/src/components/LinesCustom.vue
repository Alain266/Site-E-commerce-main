<script lang="ts">
import { defineComponent } from 'vue';
import Currency from './CurrencyCustom.vue';

export default defineComponent({
    name: 'LinesCustom',
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
            const unitPrice = parseFloat(this.product.prix);
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
    <tr class="cart_product">
        <td>{{ product.nom }} <br> <img :src="product.image" class="cart_product__image"></td>
        <td class="unit_price" :data-unit-price="product.prix">
            <span class="value">{{ formatPrice(product.prix) }}</span>
        </td>
        <td class="quantity">
            <input type="number" class="influent-price-on-change input-quantity" v-model.number="quantity" min="1"
                step="1">
        </td>
        <td class="total_price" :data-total-price="total">{{ formatPrice(total) }}</td>
        <td>
            <ion-icon name="trash-outline" class="button-remove" @click="removeProduct"></ion-icon>
        </td>
    </tr>
</template>

