<!-- Script -->
<script lang="ts">
import ContactsCustom from '../components/ContactsCustom.vue'
import PartnerCustom from '../components/PartnerCustom.vue'
export default {
    name: 'ContactsView',
    components: {
        ContactsCustom,
        PartnerCustom,
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
        <ContactsCustom />
        <PartnerCustom />
    </main>
</template>

<!-- Style -->
<style>
</style>
