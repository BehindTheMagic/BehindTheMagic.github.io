import Vue from 'vue'
import Router from 'vue-router'
import Launcher from '@/components/Launcher/Launcher.vue'
import Technology from '@/components/Technology/Technology.vue'
import TechnologyVehicles from '@/components/Technology/TechnologyVehicles/TechnologyVehicles.vue'
import TechnologyVehiclesStarfighters from '@/components/Technology/TechnologyVehicles/TechnologyVehiclesStarfighters.vue'
import TechnologyVehiclesAircraft from '@/components/Technology/TechnologyVehicles/TechnologyVehiclesAircraft.vue'
import TechnologyVehiclesGround from '@/components/Technology/TechnologyVehicles/TechnologyVehiclesGround.vue'
import TechnologyVehiclesCapital from '@/components/Technology/TechnologyVehicles/TechnologyVehiclesCapital.vue'
import TechnologyVehiclesOther from '@/components/Technology/TechnologyVehicles/TechnologyVehiclesOther.vue'
import TechnologyWeapons from '@/components/Technology/TechnologyWeapons/TechnologyWeapons.vue'
import TechnologyWeaponsPersonal from '@/components/Technology/TechnologyWeapons/TechnologyWeaponsPersonal.vue'
import TechnologyWeaponsStarship from '@/components/Technology/TechnologyWeapons/TechnologyWeaponsStarship.vue'
import TechnologyDevices from '@/components/Technology/TechnologyDevices/TechnologyDevices.vue'
import TechnologyDevicesDroid from '@/components/Technology/TechnologyDevices/TechnologyDevicesDroid.vue'
import TechnologyDevicesVehicle from '@/components/Technology/TechnologyDevices/TechnologyDevicesVehicle.vue'
import TechnologyDevicesMedical from '@/components/Technology/TechnologyDevices/TechnologyDevicesMedical.vue'
import TechnologyDevicesPersonal from '@/components/Technology/TechnologyDevices/TechnologyDevicesPersonal.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Launcher,
      beforeEnter: (to, from, next) => {
        if (performance.navigation.type === 2) {
          window.history.back()
        } else {
          next()
        }
      }
    },
    { path: '/technology', component: Technology },
    { path: '/technology/vehicles', component: TechnologyVehicles },
    { path: '/technology/vehicles/starfighters', component: TechnologyVehiclesStarfighters },
    { path: '/technology/vehicles/aircraft', component: TechnologyVehiclesAircraft },
    { path: '/technology/vehicles/groundcraft', component: TechnologyVehiclesGround },
    { path: '/technology/vehicles/capitalships', component: TechnologyVehiclesCapital },
    { path: '/technology/vehicles/othercraft', component: TechnologyVehiclesOther },
    { path: '/technology/weapons', component: TechnologyWeapons },
    { path: '/technology/weapons/personal', component: TechnologyWeaponsPersonal },
    { path: '/technology/weapons/starship-planetary', component: TechnologyWeaponsStarship },
    { path: '/technology/devices', component: TechnologyDevices },
    { path: '/technology/devices/droid', component: TechnologyDevicesDroid },
    { path: '/technology/devices/vehicle', component: TechnologyDevicesVehicle },
    { path: '/technology/devices/medical-industrial', component: TechnologyDevicesMedical },
    { path: '/technology/devices/personal', component: TechnologyDevicesPersonal }
  ]
})

export default router
