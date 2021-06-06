<template>
<div id="App">
    <span class="introRing"></span>
    <NuxtLink to="/main">
        <img v-if="$nuxt.$route.name == 'club-types' || $nuxt.$route.name == 'classic-shots'" :src="require('@/assets/img/home.svg')" class="btn--home">
    </NuxtLink>
    <NuxtLink to="/main">
        <img v-if="!$store.getters.waiting && $nuxt.$route.name == 'index'" :src="require('@/assets/img/button.svg')" class="btn--round mt-5 btn--primary enterMain">
    </NuxtLink>
    <div class="wrapper" :key="$store.getters.changeKey">
        <Nuxt v-if="ready" />
    </div>

    <v-idle @idle="onidle" :loop="true" />
</div>
</template>

<script>
export default {
    data: function () {
        return {
            animDone: false,
            ready: false,
        };
    },
    methods: {
        onidle() {
                this.$router.push('/');
        }
    },
    async mounted() {
        if (!this.ready) {
            this.ready = true;
        }
        this.$store.dispatch("resetScreen");
    },

    watch: {
        async $route() {
            await this.$store.dispatch("resetScreen");
            this.circularIntro();
        },
    },
};
</script>

<style lang="scss">
.enterMain {
    position: absolute;
    bottom: 38px;
    right: 38px;
    z-index: 9999;
}

.btn--home {
    position: absolute;
    top: 38px;
    right: 60px;
    width: 41px;
    height: 41px;
    z-index: 9999;
}
</style>
