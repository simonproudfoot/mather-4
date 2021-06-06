<template>
<div class="page">
    <img :src="require('@/assets/img/background-2.png')" class="background" />
    <div class="pageContent clubSelect z-50">

        <div class="clubSelect__info" style="opacity: 0">
            <img :src="require('@/assets/img/button.svg')" class="back btn--primary inline-block btn--round align-middle" @click="selectClub(selected.id)">
            <h1 class="back inline-block text-primary text-5xl pt-5 mb-5 ml-4 align-middle" @click="selectClub(selected.id)">Back</h1>
            <h1 class="info clubName text-primary text-7xl mt-12 mb-5">{{clubInfo.name}}</h1>
            <h2 class="info clubUse text-5xl mb-5">Whats is used for?</h2>
            <p class="info clubText" v-html="clubInfo.text"></p>
        </div>

        <div class="grid grid-cols-4">
            <div class="clubSelect__title col-span-1">
                <h1 class="text-primary text-7xl chooseClub">Choose <br> a club</h1>
            </div>
            <div class="col-span-3">
                <div class="grid grid-cols-3">

                    <div v-for="(club, i) in $store.getters.clubTypes" class="clubSelect__club p-3" :key="i" @click="selectClub(club.name.replace(' ','_'))" :id="club.name.replace(' ','_')">
                        <img class="thumb" :src="require('@/assets/img/'+club.image)" :id="club.name.replace(' ','_')+'_img'">
                        <h2 class="text-primary text-4xl">{{club.name}}</h2>
                        <img :src="require('@/assets/img/button.svg')" class="btn--round btn--primary">

                    </div>
                </div>

            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data: function () {
        return {
            clubOverlay: false,
            selected: '',
        }
    },
    beforeDestroy() {
        this.$gsap.to('.wrapper', {
            clipPath: 'circle(0px at 50% 50%)',
            duration: 0.4,
        })
    },
    methods: {
        selectClub(club) {
            this.selected = document.getElementById(club)
            var opacity = null
            var pEvents = ''

            if (this.openImage.reversed()) {
                opacity = 0
                pEvents = 'none'
                this.selected.style.zIndex = '1000'
                this.$gsap.to(this.selected.children[1], { opacity: 0, duration: 0.2, })
                this.$gsap.to(this.selected.children[2], { opacity: 0, duration: 0.2, delay: 0.2 })
                this.$gsap.to('.chooseClub', { opacity: 0, x: -50 })
                this.$gsap.to('.clubSelect__info', { opacity: 1, delay: 0 })
                this.$gsap.from('.clubSelect__info .info', { x: -50, opacity: 0, stagger: 0.2, delay: 0.2 })
                this.$gsap.from('.back', { opacity: 0, delay: 1 })
                this.openImage.play()
            } else {
                opacity = 1
                pEvents = 'all'
                this.selected.style.zIndex = '1'
                this.$gsap.to(this.selected.children[1], { opacity: 1, delay: 0.8 })
                this.$gsap.to(this.selected.children[2], { opacity: 1, delay: 0.6 })
                this.$gsap.to('.chooseClub', { opacity: 1, x: 0, delay: 0.5 })
                this.$gsap.to('.clubSelect__info', { opacity: 0 })
                this.openImage.reverse().then(() => {
                    this.selected = ''

                })
            }

            this.$gsap.to('.background', { opacity: opacity })
            var children = this.selected.parentElement.children;
            var idArr = [];
            for (var i = 0; i < children.length; i++) {
                if (children[i].id !== this.selected.id) {
                    console.log(children[i].id)
                    this.$gsap.to('#' + children[i].id, { opacity: opacity })
                    document.getElementById(children[i].id).style.pointerEvents = pEvents
                }
            }
        }
    },
    computed: {
        openImage() {
            return this.$gsap.to(this.selected, { right: 700, x: 300, top: 300, duration: 0.6, scale: 2.5, ease: 'inOut' }).reverse()
        },
        clubInfo() {
            return this.selected ? this.$store.getters.clubTypes.find(x => x.name == this.selected.id.replace('_', ' ')) : { name: '', text: '' }
        }
    },
    mounted() {
        this.$gsap.fromTo('.background', { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 1 })
        this.$gsap.fromTo('.pageContent', { opacity: 0 }, { opacity: 1, duration: 0.8, delay: 1 })
        this.$nextTick(() => {
            this.$gsap.fromTo('.btn--home', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.8, delay: 1 })
        })

    }
}
</script>

<style lang="scss">
.clubOverlay {
    width: $width;
    height: $height;
    z-index: 999;
    display: block;
    background-color: $dark;
    position: absolute;
    top: 0;
    left: 0;
}

.clubSelect {
    padding: 6em 8.5em;
    width: $width;
    height: $height;

    &__info {
        width: 519px;
        position: absolute;
    }

    &__title {
        padding-top: 280px;
    }

    &__club {
        position: absolute;

        &:nth-of-type(2) {
            right: 565px
        }

        &:nth-of-type(3) {
            right: 175px;
        }

        &:nth-of-type(4) {
            top: 550px;
            right: 963px
        }

        &:nth-of-type(5) {
            top: 550px;
            right: 565px
        }

        &:nth-of-type(6) {
            top: 550px;
            right: 175px;
        }

        .thumb {
            height: 345px;
            widows: 345px;
        }

        .btn--primary {
            position: absolute;
            right: 25px;
            bottom: 0;
        }

        h2 {
            margin: 0;
            position: absolute;
            top: 50%;
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            width: 145px;
            left: 66px;
            padding-top: 100px;
        }
    }

    .back.btn--primary {
        transform: rotate(180deg);
    }
}
</style>
