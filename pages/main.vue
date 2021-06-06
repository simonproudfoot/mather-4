<template>
<div class="page">

    <img :src="require('@/assets/img/background-2.png')" class="background">
    <NuxtLink to="/club-types">
        <button class="selector selector--left">
            <h3 class="text-5xl mb-5">Learn</h3>
            <h1 class="text-primary text-8xl">Club<br>types</h1>
            <img :src="require('@/assets/img/button.svg')" class="selector__button btn--primary btn--round">
        </button>
    </NuxtLink>
    <NuxtLink to="/classic-shots">
        <button class="selector selector--right">
            <h3 class="text-5xl mb-5">Discover</h3>
            <h1 class="text-primary text-8xl">Classic<br>shots</h1>
            <img :src="require('@/assets/img/button.svg')" class="selector__button btn--primary btn--round">
        </button>
    </NuxtLink>
</div>
</template>
<script>
export default {
    mounted() {
        this.$gsap.fromTo('.background', { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 1 })
        this.$gsap.fromTo('.selector, .selector ', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, stagger: 0.3, duration: 1.3, delay: 1.5, ease: "elastic.out(0.4)" })
        this.$gsap.fromTo('.selector h1, .selector h3', { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, delay: 1.9, ease: "power2.out" })
    }
}
</script>

<style lang="scss">
.selector {
    position: absolute;
    height: 526px;
    width: 526px;
    border-radius: 100%;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    background-color: $light;
    text-align: center;

    &--left {
        left: 267px;
    }

    &--right {
        right: 267px;
    }

    &__button {
        position: absolute;
        bottom: -25px;
        left: 0;
        right: 0;
        margin: auto;
    }
}
</style>
