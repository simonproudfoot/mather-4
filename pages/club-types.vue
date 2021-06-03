<template>
<div class="page">
    <img :src="require('@/assets/img/background-2.png')" class="background" />
    <div class="pageContent clubSelect z-50">

        <div class="grid grid-cols-4">
            <div class="clubSelect__title col-span-1">
                <h1 class="text-primary text-7xl">Choose <br> a club</h1>
            </div>
            <div class="col-span-3">
                <div class="grid grid-cols-3">
                    <div v-for="(club, i) in $store.getters.clubTypes" class="clubSelect__club p-3" :key="i" @click="selectClub(club.name.replace(' ','_'))" :id="club.name.replace(' ','_')">
                        <img :src="require('@/assets/img/'+club.image)" :id="club.name.replace(' ','_')+'_img'">
                        <h2 class="text-primary text-4xl">{{club.name}}</h2>
                        <button class="btn--round btn--primary"></button>
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
            activeClub: {},
            selected: '',
            lastLocation: {
                top: 0,
                right: 0,
            }
        }
    },
    methods: {
        selectClub(club) {

            //  const openImage = this.$gsap.to(selected, { right: 575, x: 300, top: 300, duration: 0.4, scale: 2, delay: 0.5 })
            // if (!this.openImage.reversed()) {
            //     this.openImage.play();
            // } else {
            //     this.openImage.reverse();
            //     this.$gsap.to(this.selected.children[1], { opacity: 1 })
            //     this.$gsap.to(this.selected.children[2], { opacity: 1 })
            // }

            this.selected = document.getElementById(club)
            var opacity = null

            if (this.openImage.reversed()) {
                opacity = 0
                this.selected.style.zIndex = '1000'
                this.$gsap.to(this.selected.children[1], { opacity: 0 })
                this.$gsap.to(this.selected.children[2], { opacity: 0 })
                this.$gsap.to('.clubSelect__title', { opacity: 0, x: -50 })
                this.openImage.play()
            } else {
                opacity = 1
                this.selected.style.zIndex = '1'
                this.$gsap.to(this.selected.children[1], { opacity: 1 })
                this.$gsap.to(this.selected.children[2], { opacity: 1 })
                this.$gsap.to('.clubSelect__title', { opacity: 1, x: 0 })
                this.openImage.reverse()
            }

            this.$gsap.to('.background', { opacity: opacity })
            var children = this.selected.parentElement.children;
            var idArr = [];
            for (var i = 0; i < children.length; i++) {
                if (children[i].id !== this.selected.id) {
                    console.log(children[i].id)
                    this.$gsap.to('#' + children[i].id, { opacity: opacity })
                }
            }
        }
    },
    computed: {
        openImage() {
            return this.$gsap.to(this.selected, { right: 575, x: 300, top: 300, duration: 0.4, scale: 2, }).reverse()
        }
    },
    mounted() {
        this.$gsap.fromTo('.background', { opacity: 0 }, { opacity: 1, duration: 0.8 })
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

        img {
            height: 345px;
            widows: 345px;
        }

        button {
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
}
</style>
