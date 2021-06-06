<template>
<div id="App">
    <span class="introRing"></span>
    <NuxtLink to="/main">
        <img v-if="!$store.getters.waiting" :src="require('@/assets/img/button.svg')" class="btn--round mt-5 btn--primary enterMain">
    </NuxtLink>
    <div class="wrapper" :key="$store.getters.changeKey">
        <Nuxt v-if="ready" />
    </div>
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
    methods: {},
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
</style>
