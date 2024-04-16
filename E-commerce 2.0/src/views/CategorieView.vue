<!-- Script -->
<script lang="ts">
import CategoryProductsCustom from '../components/CategoryProductsCustom.vue'
import CustomersOpinionCustom from '../components/CustomersOpinionCustom.vue'
import PartnerCustom from '../components/PartnerCustom.vue'
import SearchBarCustom from '../components/SearchBarCustom.vue'

export default {
    name: 'CategorieView',
    components: {
        CategoryProductsCustom,
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
        <CategoryProductsCustom />
        <CustomersOpinionCustom />
        <PartnerCustom />
    </main>
</template>

<!-- Style -->
<style>
</style>
