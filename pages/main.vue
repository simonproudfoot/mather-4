<template>
<div class="page">
    <img :src="require('@/assets/img/background-2.png')" class="background">
    <button class="selector selector--left" @click="pageSelect('club-types')">
        <h3 class="text-5xl mb-5">Learn</h3>
        <h1 class="text-primary text-8xl">Club<br>types</h1>
        <span class="selector__button btn--primary btn--round"></span>
    </button>
    <button class="selector selector--right" @click="pageSelect('classic-shots')">
        <h3 class="text-5xl mb-5">Discover</h3>
        <h1 class="text-primary text-8xl">Classic<br>shots</h1>
        <span class="selector__button btn--primary btn--round"></span>
    </button>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            animDone: false
        }
    },
    methods: {
        pageSelect(page) {
            this.$gsap.to('.selector', { stagger: 0.2, opacity: 0, duration: 0.2 })
            this.animDone = false
            this.$gsap.to('.introRing', { delay: 0.3, xPercent: 0, scale: 0, width: 0, height: 0, opacity: 1, duration: 0.4, })
            this.$gsap.fromTo('.wrapper', {
                clipPath: 'circle(1200px at 27.5% 50%)',
            }, {
                clipPath: 'circle(0px at 50% 50%)',
                duration: 0.4,
            }).then(() => {
                this.$store.commit('ready', false)
                this.$router.push({ path: '/' + page })
            })
        }
    },
    mounted() {
        this.$gsap.fromTo('.background', { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 1 })
        this.$gsap.from('.selector, .selector ', { opacity: 0, scale: 0.8, stagger: 0.3, duration: 1.3, delay: 1.5, ease: "elastic.out(0.4)" })
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
