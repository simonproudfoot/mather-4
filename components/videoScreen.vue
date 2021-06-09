<template>
<div class="videoScreen" :style="{'background-image': 'url(' + require('@/assets/img/background-2.png') + ')'}">

    <video ref="videoScreen" class="video" autoplay v-if="$store.getters.currentVideo" :key="refresh">
        <source :src="require('@/assets/video/'+$store.getters.currentVideo)" type="video/mp4">
    </video>
</div>
</template>

<script>
export default {
    data: function () {
        return {
            refresh: 0,
        }
    },
    watch: {
        '$store.getters.currentVideo'() {
            this.refresh++
        }
    }
}
</script>

<style lang="scss">
.videoScreen {
    position: fixed;
    top: 0;
    left: $width;
    height: $height;
    width: $width;
    background-color: #000;
    background-size: cover;

}
</style>
