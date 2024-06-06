import { defineStore } from "pinia";

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [],
    }),
    getters: {
        
    },
    actions: {
        async init() {
            await this.getProducts();
        },
        async getProducts() {
            try {
                const response = await fetch('/produits.json');
                this.products = await response.json();
            } catch (error) {
                console.error('Error fetching products:', error);
            }
            console.log('getProducts - OK')
        },
    }
})