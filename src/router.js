import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";
import Home from "./views/Home.vue";
import Services from "./views/Services.vue";
import Contact from "./views/Contact";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/services",
            name: "services",
            component: Services
        },
        {
            path: "/contact",
            name: "contact",
            component: Contact
        }
    ]
});