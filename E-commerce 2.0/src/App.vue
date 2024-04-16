<script lang="ts">
import { RouterView } from 'vue-router'
import FooterCustom from './components/FooterCustom.vue'
import OverlayCustom from './components/OverlayCustom.vue'
import HeaderCustom from './components/HeaderCustom.vue'

export default {
    name: 'App',
    components: {
        FooterCustom,
        RouterView,
        OverlayCustom,
        HeaderCustom
    },
    data() {
        return {
            loading: false
        }
    },
    methods:
    {
        setLoading(loading: boolean) {
            console.log(loading)
            this.loading = loading
        },
    }
}
</script>

<template>
    <OverlayCustom :loading="loading" />
    <!-- Barre de navigation mobile -->
    <HeaderCustom />
    <RouterView @loading=setLoading></RouterView>
    <FooterCustom />
</template>

<style>
    html {
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
    }

</style>
