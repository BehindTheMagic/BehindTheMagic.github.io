import Vue from 'vue'
import Router from 'vue-router'
import MainMenu from '@/components/MainMenu/MainMenu.vue'
import MainMenuMap from '@/components/MainMenu/map/MainMenuMap.vue'
import Glossary from '@/components/Glossary/Glossary.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainMenu',
      component: MainMenu
    },
    {
      path: '/map',
      name: 'MainMenuMap',
      component: MainMenuMap
    },
    {
      path: '/glossary/',
      name: 'Glossary',
      component: Glossary
    }
  ]
})
