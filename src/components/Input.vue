<template>
    <div class="input-grid">
        <button v-bind:disabled="LOADING" v-on:click="setZodiac('aries')"
             class="item">Aries</button>
        <button v-bind:disabled="LOADING" v-on:click="setZodiac('taurus')" class="item">Taurus</button>
        <button v-bind:disabled="LOADING" class="item" v-on:click="setZodiac('gemini')">Gemini</button>
        <button v-bind:disabled="LOADING" class="item" v-on:click="setZodiac('cancer')">Cancer</button>
        <button v-bind:disabled="LOADING" class="item" v-on:click="setZodiac('leo')">Leo</button>
        <button v-bind:disabled="LOADING" class="item" v-on:click="setZodiac('virgo')">Virgo</button>
        <button v-bind:disabled="LOADING" v-on:click="setZodiac('libra')" class="item">Libra</button>
        <button v-bind:disabled="LOADING" v-on:click="setZodiac('scorpio')" class="item">Scorpio</button>
        <button v-bind:disabled="LOADING" v-on:click="setZodiac('sagittarius')" class="item">Sagittarius</button>
        <button v-bind:disabled="LOADING" v-on:click="setZodiac('capricorn')" class="item">Capricorn</button>
        <button v-bind:disabled="LOADING" v-on:click="setZodiac('aquarius')" class="item">Aquarius</button>
        <button v-bind:disabled="LOADING" v-on:click="setZodiac('pisces')" class="item">pisces</button>
    </div>
</template>
<style scoped>
    .input-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
    }
    .input-grid .item {
        padding: 15px 30px;
        border: 1px solid;
        cursor: pointer;
    }
    .input-grid .item button {
        text-transform: capitalize;
    }
    @media(max-width: 750px) {
        .input-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    @media(max-width: 500px) {
        .input-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media(max-width: 750px) {
        .input-grid {
            grid-template-columns: repeat(3, 1fr);
        }
    }
    @media(max-width: 320px) {
        .input-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
<script>
    import {mapGetters} from 'vuex';
    export default {
        computed: mapGetters(['LOADING']),
        methods: {
            setZodiac(zodiac) {
                this.$store.dispatch('GET_HOROSCOPE', zodiac)
            }
        }
    }
</script>
