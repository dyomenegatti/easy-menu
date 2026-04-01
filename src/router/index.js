import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import Dashboard from "../views/DashboardView.vue";
import DashboardHomeView from "../views/DashboardHomeView.vue";
import ProductsView from "../views/ProductsView.vue";

const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        children: [
            {
                path: '',
                name: 'DashboardHome',
                component: DashboardHomeView
            },
            {
                path: 'products',
                name: 'Products',
                component: ProductsView
            }
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;