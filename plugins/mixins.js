import Vue from "vue";

export default {
    name: "mixins"
};
Vue.mixin({
    methods: {
        circularIntro(side) {
            var path = 'circle(850px at 50% 50%)'
            var center = 0

            if (this.$nuxt.$route.name == 'club-types') {
                path = 'circle(1300px at 27.5% 50%)'
                center = -60
            }

            this.$store.commit('setReady', true)
            document.getElementsByClassName('wrapper')[0].style.display = 'block'

            this.$gsap.fromTo('.introRing', { x: center, scale: 0, width: 0, height: 0 }, { x: center, delay: 0.1, scale: 4, width: 1000, height: 1000, opacity: 1, duration: 1 }).then(() => {
                this.animDone = true
            })
            this.$gsap.fromTo('.wrapper', {
                // webkitClipPath: `circle(0 at 50% 50%)`,
                clipPath: `circle(10 at 50%, 50%)`,
                opacity: 0,
            }, {
                //webkitClipPath: `circle(850px at 50% 50%)`,
                clipPath: path,
                duration: 1,
                delay: 0.5,
                opacity: 1,
                ease: "elastic.out(0.4)"
            })
        },
    }
})