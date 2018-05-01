<i18n>
{
  "en": {
    "home": "Home",
    "prev": "Previous",
    "next": "Next",
    "up": "Up Level",
    "controls": "Controls",
    "map": "Map"
  },
  "fr": {
    "home": "Menu",
    "prev": "Précédent",
    "next": "Suivant",
    "up": "Retour",
    "controls": "Options",
    "map": "Plan"
  }
}
</i18n>

<template>
  <div id="app">
    <video ref="videoPlayer"></video>
    <router-view></router-view>
    <div class="navbar">
      <label><button disabled class="home"></button>{{ $t('home') }}</label>
      <label><button disabled class="prev"></button>{{ $t('prev') }}</label>
      <label><button disabled class="next"></button>{{ $t('next') }}</label>
      <label><button disabled class="up"></button>{{ $t('up') }}</label>
      <label><button class="controls"></button>{{ $t('controls') }}</label>
      <label><button class="map"></button>{{ $t('map') }}</label>
    </div>
  </div>
</template>

<script>
export default {
  inherit: true,
  name: 'App',
  data () { return { locale: this.$i18n.locale } }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 640px; height: 480px;
  border: 1px solid gray;
  position: relative;
}

.view {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
}

.navbar {
  position: absolute;
  top: 456px;
  left: 46px;
  right: 46px;
  height: 15px;

  display: inline-flex;
  justify-content: space-evenly;

  background-color: rgba(128,128,128,0.6);
  box-shadow: inset 1px 1px 3px 0px white;
  border-radius: 8px;

  font-family: sans-serif;
  font-size: 10px;
}

.navbar button {
  width: 15px;
  height: 15px;
  vertical-align: middle;

  background-color: #f0f0f0;
  border-radius: 50%;
  border: 1px solid black;
  margin-right: 2px;
  outline: none;
}

.navbar button:active{
  background-color: #a0a0a0;
}

.navbar button[disabled] {
  background-color: #808080;
}
</style>
