// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Launcher from '@/components/Launcher/Launcher.vue'
import router from './router'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

Vue.config.productionTip = false

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
      locale: this.$parent.locale
    }
  },
  router,
  template: '<router-view></router-view>',
  components: { Launcher }
})

if (performance.navigation.type === 1) {
  router.push('/')
}
