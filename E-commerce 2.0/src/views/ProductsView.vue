<!-- Script -->
<script lang="ts">
import AllProductsCustom from '../components/AllProductsCustom.vue'
import CustomersOpinionCustom from '../components/CustomersOpinionCustom.vue'
import PartnerCustom from '../components/PartnerCustom.vue'
import SearchBarCustom from '../components/SearchBarCustom.vue'

export default {
    name: 'ProductsView',
    components: {
        AllProductsCustom,
        CustomersOpinionCustom,
        PartnerCustom,
        SearchBarCustom
    },
    emits: ['loading'],
    methods: {
        onload (event) {
            this.$emit('loading', event)
        }
    }
}
</script>

<!-- Template -->
<template>
    <main class="container">
        <SearchBarCustom />
        <AllProductsCustom />
        <CustomersOpinionCustom />
        <PartnerCustom />
    </main>
</template>

<!-- Style -->
<style>
</style>
