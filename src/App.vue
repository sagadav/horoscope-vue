<template>
  <div id="app">
      <h2>Pick your class!!!</h2>
    <Input/>
      <Horoscope></Horoscope>
  </div>
</template>

<script>
import Input from './components/Input'
import Horoscope from './components/Horoscope'
export default {
  name: 'App',
  components: {
      Input,
      Horoscope,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
    width: 724px;
    margin: auto;
}
.zodiac {
    text-transform: capitalize;
}
@media(max-width: 750px) {
    .container {
        width: 100%;
    }
}
</style>
