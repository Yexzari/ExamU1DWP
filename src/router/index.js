import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter)

const routes = [
    {
        path:'*',
        component: ()=> import("../views/ErrorPages.vue")
    },
    {
        path:'/index',
        component: ()=> import("../components/index.vue")
    },
    
    {
        path:'/',
        component: ()=> import("../components/Inicio.vue"),
        children:[
            {
                path: "/index",
                name: "index",
                component: () => import("../components/index.vue")
            },
            {
                path: "/Paginacion",
                name: "Paginacion",
                component: () => import("../components/Paginacion.vue")
            },
            {
                path: "/Formulario",
                name: "Formulario",
                component: () => import("../components/Formulario.vue")
            },
        ]
    }

]
const router = new VueRouter({ routes })
export default router;