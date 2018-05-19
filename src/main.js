// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Launcher from '@/components/Launcher/Launcher.vue'
import App from '@/App.vue'
import router from './router'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

Vue.config.productionTip = false

Vue.directive('play', {
  inserted: function (el) {
    el.currentTime = 0
    el.play()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n: new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {}
  }),
  data () {
    return {
      locale: this.$i18n.locale,
      currentGlobalView: 'Launcher'
    }
  },
  methods: {
    setLocale (locale) {
      this.$data.locale = locale
      this.$i18n.locale = locale
    }
  },
  router,
  template: '<component :is="currentGlobalView" v-bind="{locale}"></component>',
  components: { Launcher, App }
})
