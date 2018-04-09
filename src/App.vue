<template>
  <div id="app">
    <router-view></router-view>
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
}
</style>
