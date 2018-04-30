<i18n>
{
  "en": {
    "start": "Start Star Wars: Behind The Magic"
  },
  "fr": {
    "start": "Lancer Star Wars: Le Mythe et sa Magie"
  }
}
</i18n>

<template>
  <div class="launcher">
    <img class="splash" alt="splashscreen" src="@/components/Launcher/splash.png">
    <audio ref="audio-r2beep" src="@/components/Launcher/r2beep.mp3"></audio>
    <form>
      <label><input v-model="locale" type="radio" value="en"><img alt="English" src="@/components/Launcher/English.svg"></label>
      <label><input v-model="locale" type="radio" value="fr"><img alt="Français" src="@/components/Launcher/French.svg"></label>
    </form>
    <button ref="btn-start" @click="start">{{ $t('start') }}</button>
  </div>
</template>

<script>
export default {
  inherit: true,
  name: 'Launcher',
  data () {
    return {
      locale: this.$parent.locale
    }
  },
  methods: {
    start () {
      let that = this
      this.$refs['btn-start'].disabled = true
      this.$refs['audio-r2beep'].onended = function () {
        that.$parent.$data.currentView = 'App'
      }
      this.$refs['audio-r2beep'].play()
    }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.launcher{
  width: 310px;
  margin: 0 auto;
}

input {
  display: none;
}

.splash, form, button {
  width: 100%;
  padding: 0;
}

.splash {
  height: auto;
}

form {
  display: inline-flex;
  justify-content: space-evenly;
}

label {
  cursor: pointer;
  display: inline-block;
  height: 36px;
  width: auto;
}

label img{
  width: inherit;
  height: inherit;
}

input:checked + img {
  box-shadow: 0px 0px 10px white;
}
</style>
