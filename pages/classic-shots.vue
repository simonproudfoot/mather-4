<template>
<div class="page">
    <img :src="require('@/assets/img/background-2.png')" class="background" />

    <div v-show="questionStage == 1" class="pageContent shotSelect z-50">

        <div class="grid grid-cols-4">
            <div class="shotSelect__title col-span-1">
                <h1 class="text-primary text-7xl chooseshot">Choose <br> a classic <br>shot</h1>
            </div>
            <div class="col-span-3">
                <div ref="shot" class="grid grid-cols-3">
                    <div v-for="(shot, i) in $store.getters.classicShots" class="shotSelect__shot p-3" :key="i" @click="selectQuestion(i)" :class="'shot-'+i">
                        <img class="thumb" :src="require('@/assets/img/'+shot.thumb)">
                        <h2 class="text-3xl"><small class="textxl">{{shot.yearLocation}}</small><br>{{shot.name}}</h2>
                        <span class="gradient"></span>
                        <img :src="require('@/assets/img/button.svg')" class="btn--round btn--primary">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-show="questionStage == 2" class="pageContent clubSelect z-50">
        <div class="clubSelect__info" style="opacity: 0">
            <img :src="require('@/assets/img/button.svg')" class="back btn--primary inline-block btn--round align-middle" @click="selectClub(selected.id)">
            <!-- <h1 class="back inline-block text-primary text-5xl pt-5 mb-5 ml-4 align-middle" @click="selectClub(selected.id)">Back</h1>
                <h1 class="info clubName text-primary text-7xl mt-12 mb-5"></h1>
                <h2 class="info clubUse text-5xl mb-5">Whats is used for?</h2> -->
            <p class="info clubText"></p>
        </div>
        <div class="grid grid-cols-4">
            <div class="clubSelect__title col-span-1">
                <h1 class="text-primary text-7xl chooseClub">Which club <br> should be <br>used?</h1>
            </div>
            <div class="col-span-3">
                <div class="grid grid-cols-3">
                    <div v-for="(club, i) in $store.getters.clubTypes" class="clubSelect__club p-3" :key="i" @click="answerQuestion(club.scenerio, club.name)">
                        <img class="thumb" :src="require('@/assets/img/'+club.image)" :id="club.name.replace(' ','_')+'_img'">
                        <h2 class="text-primary text-4xl">{{club.name}}</h2>
                        <img :src="require('@/assets/img/button.svg')" class="btn--round btn--primary">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="questionStage == 3" class="pageContent answer z-50">

        <div class="answer__content">
            <h1 class="text-primary text-7xl" v-if="isCorrect">Correct</h1>
            <h1 class="text-primary text-7xl" v-else>Incorrent</h1>
            <p class="pt-10" v-html="answerContent"></p>

        </div>
        <div class="answer__nav">
        
            <h1 class="text-primary text-5xl mr-2" v-if="isCorrect" @click="resetQ">Continue</h1>
            <h1 class="text-primary text-5xl mr-2" v-else @click="resetQ">Try again</h1>
                <img :src="require('@/assets/img/button.svg')" class="btn--round btn--primary" @click="resetQ">
        </div>
        <img class="clubImage" :src="require('@/assets/img/'+answerImage)">
    </div>

</div>
</template>

<script>
export default {
    data: function () {
        return {
            shotOverlay: false,
            questionStage: 1,
            scenerio: null,
            selected: '',
            isCorrect: null
        }
    },
    beforeDestroy() {
        this.$gsap.to('.wrapper', {
            clipPath: 'circle(0px at 50% 50%)',
            duration: 0.4,
        })
    },
    methods: {
        resetQ() {
            this.questionStage = 1
            this.$store.commit('setCurrentVideo', '')
        },
        answerQuestion(scen, name) {
            // change this if reordeing 
            this.questionStage++
            if (scen == this.scenerio) {
                this.isCorrect = true
            } else {
                this.isCorrect = false
            }
            var v = this.$store.getters.clubTypes.find(x => x.scenerio === this.scenerio)
            var s = 'scenerio_' + scen

            this.$store.commit('setCurrentVideo', '')
            this.$store.commit('setCurrentVideo', v[s].video)

        },
        selectQuestion(x) {
            var scenerio = x + 1
            this.$store.commit('setCurrentVideo', '')
            this.questionStage++
            this.scenerio = scenerio
            var q = this.$store.getters.classicShots.find(x => x.scenerio === this.scenerio).video

            this.$store.commit('setCurrentVideo', q)
        },

    },
    computed: {
        shotInfo() {
            return this.selected ? this.$store.getters.shotTypes.find(x => x.name == this.selected.id.replace('_', ' ')) : { name: '', text: '' }
        },
        correctClub() {
            // change this if the order
            if (this.scenerio) {
                return this.$store.getters.clubTypes.find(x => x.scenerio === this.scenerio)
            }
        },
        answerContent() {
            var v = this.$store.getters.clubTypes.find(x => x.scenerio === this.scenerio)
            var s = 'scenerio_' + this.scenerio
            return v[s].text
        },
        answerImage() {
            return this.$store.getters.clubTypes.find(x => x.scenerio === this.scenerio).image

        },
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
.shotOverlay {
    width: $width;
    height: $height;
    z-index: 999;
    display: block;
    background-color: $dark;
    position: absolute;
    top: 0;
    left: 0;
}

.shotSelect {
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

    &__shot {
        position: relative;

        .thumb {
            height: 345px;
            width: 345px;
            border-radius: 225px;
            position: relative;
        }

        .gradient {
            height: 345px;
            width: 345px;
            border-radius: 225px;
            position: relative;
            z-index: 0;
            position: absolute;
            background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, #1A1E40 100%);
            height: 345px;
            width: 345px;
            top: 12px;
            left: 12px;
        }

        .btn--primary {
            position: absolute;
            right: 25px;
            bottom: 0;
        }

        h2 {
            margin: 0;
            position: absolute;
            bottom: 90px; //  transform: translateY(100%);
            width: 229px;
            left: 65px;
            z-index: 1;
            padding-top: 53px;
        }
    }
}

.answer {
    &__content {
        top: 50%;
        transform: translateY(-80%);
        left: 180px;
        z-index: 1000;
        position: absolute;
        width: 600px;
    }

    &__nav {
        position: absolute;
        bottom: 195px;
        width: 600px;
        height: 100px;
        left: 180px;

        * {
            display: inline-block;
            vertical-align: middle;
        }
    }

    .clubImage {
        top: 50%;
        transform: translateY(-50%);
        right: 180px;
        z-index: 1000;
        position: absolute;
        width: 800px;
    }
}
</style>
