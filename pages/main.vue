<template>
<div class="page">
    <img :src="require('@/assets/img/background-2.png')" class="background">

    <button class="selector selector--left">
        <h3 class="text- text-5xl mb-5">Learn</h3>
        <h1 class="text-primary text-7xl">Club<br>types</h1>

    </button>

    <button class="selector selector--right">
           <h3 class="text- text-5xl mb-5">Discover</h3>
        <h1 class="text-primary text-7xl">Classic<br>shots</h1>
    </button>

</div>
</template>

<script>
export default {
    data: function () {
        return {

        }
    },
    methods: {

    },
    mounted() {
        this.$gsap.fromTo('.background', { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 1 })
        this.$gsap.from('.selector', { opacity: 0, scale: 0.8, stagger: 0.3, duration: 1.3, delay: 1.5, ease: "elastic.out(0.4)" })
        this.$gsap.from('.selector h1, .selector h3', { opacity: 0, y: 20, stagger: 0.2, duration: 0.8, delay: 1.9, ease: "power2.out" })
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

    &--left {
        left: 267px;
    }

    &--right {
        right: 267px;
    }
}
</style>
