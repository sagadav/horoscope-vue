<template>
    <div class="container horoscope">
        <p class="horoscope-zodiac zodiac">{{ZODIAC}}</p>
        <p v-if="LOADING">LOADING</p>
        <p v-if="!LOADING" v-html="HOROSCOPE"></p>
    </div>
</template>
<style scoped>
    .horoscope {
        margin-top: 35px;
    }
    .horoscope-zodiac {
        font-size: 35px;
    }
</style>
<script>
    import {mapGetters} from 'vuex';
    export default {
        computed: mapGetters(['HOROSCOPE', 'ZODIAC', 'LOADING']),
    }
</script>