import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Accueil',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/products',
            name: 'Products',
            component: () => import('../views/ProductsView.vue')
        },
        {
            path: '/categories',
            name: 'Categories',
            component: () => import('../views/CategorieView.vue')
        },
        {
            path: '/contacts',
            name: 'Contact',
            component: () => import('../views/ContactsView.vue')
        },
        {
            path: '/panier',
            name: 'Panier',
            component: () => import('../views/PanierView.vue')
        },
        {
            path: '/connexion',
            name: 'Connexion',
            component: () => import('../views/ConnexionView.vue')
        },
        {
            path: '/inscription',
            name: 'Inscription',
            component: () => import('../views/InscriptionView.vue')
        },
        {
            path: '/pass-recover',
            name: 'PassRecover',
            component: () => import('../views/PassRecoverView.vue')
        },
    ]
})

export default router
