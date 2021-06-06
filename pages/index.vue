<template>
<div class="page">
    <div v-if="$store.getters.waiting" class="action">
        <h1 class="text-5xl action__text">
            <span class="text-primary">Tap to</span> begin
        </h1>
        <img  :src="require('@/assets/img/button.svg')" @click="enter" class="m-auto btn--round mt-5 btn--primary">
    </div>
    <video class="background" ref="introVideo">
        <source :src="require('@/assets/video/intro.mp4')" type="video/mp4" />
    </video>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            introDone: false
        }
    },

    methods: {

        enter() {
            this.introDone = true
            this.$gsap.to('.action .btn--round', { scale: 0.1, opacity: 0, duration: 0.8, ease: "elastic.out(0.4)" })
            this.$gsap.to('.action__text', { opacity: 0, duration: 0.8, ease: 'power2.out' })
            this.$gsap.to('.background', { opacity: 1, duration: 0.8 })
            setTimeout(() => {
                this.$store.commit('setWaiting', false)
            }, 800);
            this.$gsap.set('.introRing', { xPercent: 27.5, })
            this.$gsap.to('.wrapper', {
                //webkitClipPath: `circle(900px at 50% 50%)`,
                clipPath: 'circle(1300px at 27.5% 50%)',
                duration: 1.5,
            })
            this.$refs.introVideo.play()
        }
    },

    mounted() {
        this.circularIntro()
        this.$gsap.from('.btn--round', { scale: 0, opacity: 0, delay: 1, duration: 2, stagger: 0.1, ease: "elastic.out(0.4)" })
        this.$gsap.from('.action__text', { scale: 1.4, opacity: 0, delay: 1.5, duration: 0.8, stagger: 0.1, ease: 'power2.out' })
        this.$gsap.from('.background', { opacity: 0, duration: 0.8, delay: 1.8 })
        setTimeout(() => {
            this.$gsap.to('.action .btn--round', { scale: 1.2, opacity: 0.9, yoyo: true, repeat: -1, duration: 1, delay: 2, ease: 'power2.inOut' })
        }, 1000);

    }
}
</script>

<style lang="scss">
.action {
    margin: 0;
    position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 1;
}

.background {
    position: relative;
    height: 100%;
    width: 100%;
    opacity: 0.2;
}
</style>
