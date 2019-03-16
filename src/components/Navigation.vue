<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
            <router-link :to="{ name: 'home' }" tag="a" class="navbar-brand js-scroll-trigger">HeyJan</router-link>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ml-auto">
                    <li class="nav-item">
                        <router-link :to="{ name: 'home' }" tag="a" class="nav-link js-scroll-trigger">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'about' }" tag="a" class="nav-link js-scroll-trigger">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'services' }" tag="a" class="nav-link js-scroll-trigger">Services</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'contact' }" tag="a" class="nav-link js-scroll-trigger">Contact</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/login" tag="a" class="nav-link js-scroll-trigger">Login</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navigation"
    }
</script>

<style scoped>

</style>