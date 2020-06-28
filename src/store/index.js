import Vue from 'vue';
import Vuex from 'vuex';
import {parse} from 'js-html-parser'
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        zodiac: null,
        horoscope: {},
        loading: null,
    },
    getters: {
        ZODIAC: state => state.zodiac,
        HOROSCOPE: state => state.horoscope[state.zodiac],
        LOADING: state => state.loading,
    },
    mutations: {
        SET_ZODIAC: (state, payload) => {
            state.zodiac = payload;
        },
        SET_HOROSCOPE: (state, payload) => {
            state.horoscope[state.zodiac] = payload;
        },
        SET_LOADING: (state, payload) => {
            state.loading = payload;
        }
    },
    actions: {
        GET_HOROSCOPE: async ({commit, state}, payload) => {
            commit('SET_ZODIAC', payload);
            if(state.horoscope[state.zodiac]) return;
            commit('SET_LOADING', true);
            const data = await fetch(`https://cors-anywhere.herokuapp.com/http://my.horoscope.com/astrology/free-daily-horoscope-${payload}.html`);
            const body = await data.text();
            const root = await parse(body);
            const horoscope = root.querySelector('.main-horoscope p').innerHTML;
            commit('SET_HOROSCOPE', horoscope);
            commit('SET_LOADING', false);
        }
    }
})
export default store;