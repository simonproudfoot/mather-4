<template>
<div id="App">
    <span class="introRing" v-show="!animDone"></span>
    <button v-if="!$store.getters.waiting" @click="enterMain" class="btn--round mt-5 btn--primary enterMain"></button>
    <div class="wrapper">
        <Nuxt v-if="$store.getters.ready" />
    </div>
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
        circularIntro() {
            this.$store.commit('ready', true)
            this.$gsap.to('.introRing', { delay: 0.8, scale: 4, width: 800, height: 800, opacity: 1, duration: 0.5 }).then(() => {
                this.animDone = true
            })
            this.$gsap.fromTo('.wrapper', {
                // webkitClipPath: `circle(0 at 50% 50%)`,
                clipPath: `circle(0 at 50%, 50%)`,
            }, {
                //webkitClipPath: `circle(850px at 50% 50%)`,
                clipPath: `circle(850px at 50% 50%)`,
                duration: 3,
                delay: 1,
                ease: "elastic.out(0.4)"
            })
        },
        enterMain() {
            this.$gsap.to('.enterMain', { opacity: 0, duration: 0.2 })
            this.animDone = false
            this.$gsap.to('.introRing', { delay: 0.3, xPercent: 0, scale: 0, width: 0, height: 0, opacity: 1, duration: 0.4, })
            this.$gsap.fromTo('.wrapper', {
                clipPath: 'circle(1200px at 27.5% 50%)',
            }, {
                clipPath: 'circle(0px at 50% 50%)',
                duration: 0.4,
            }).then(() => {
                this.$store.commit('ready', false)
                this.$router.push({ path: '/main' })
            })

        }
    },
    mounted() {
        this.circularIntro()
    },
    watch: {
        '$route'() {
            this.circularIntro()
        },
    }
}
</script>

<style lang="scss">
.introRing {
    position: absolute;
    border: 100px #51508e solid;
    pointer-events: none;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 0;
    width: 0;
    z-index: 10;
    border-radius: 100%;
    opacity: 0;
}

.enterMain {
    position: absolute;
    bottom: 38px;
    right: 38px;
    z-index: 9999;
}
</style>
