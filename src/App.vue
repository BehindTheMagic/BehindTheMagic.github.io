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
    <router-view v-show="isRouterViewVisible" class="view"></router-view>
    <div class="navbar" v-if="isNavbarVisible">
      <label><button :disabled="this.$router.currentRoute.fullPath === '/'" class="home" @click="goHome"></button>{{ $t('home') }}</label>
      <label><button :disabled="stackPrev.length === 0" class="prev" @click="goPrev"></button>{{ $t('prev') }}</label>
      <label><button :disabled="stackNext.length === 0" class="next" @click="goNext"></button>{{ $t('next') }}</label>
      <label><button :disabled="this.$router.currentRoute.fullPath === '/'" class="up" @click="goUp"></button>{{ $t('up') }}</label>
      <label><button class="controls" @click="openControls"></button>{{ $t('controls') }}</label>
      <label><button :disabled="this.$router.currentRoute.fullPath.substr(-3) === 'map'" class="map" @click="goMap"></button>{{ $t('map') }}</label>
    </div>
    <video ref="videoPlayer"
    v-show="isVideoPlayerActive"
    @keyup.esc="this.endVideoPlayer"
    @keyup.space="this.togglePlayPauseVideoPlayer"></video>
  </div>
</template>

<script>
export default {
  name: 'App',
  props: ['locale'],
  mounted () {
    window.addEventListener('keyup', this.keyupManager)
    if (this.$route.name === 'MainMenu') {
      this.$nextTick(function () {
        this.introMainMenu()
      })
    } else {
      this.isNavbarVisible = true
      this.isRouterViewVisible = true
    }
  },
  data () {
    return {
      stackPrev: [],
      stackNext: [],
      isNavbarVisible: false,
      isRouterViewVisible: false,
      isVideoPlayerActive: false
    }
  },
  methods: {
    keyupManager (e) {
      let emptyFn = function () { }
      let cases = {
        'Escape': this.isVideoPlayerActive ? this.endVideoPlayer : emptyFn,
        'Space': this.isVideoPlayerActive ? this.togglePlayPauseVideoPlayer : emptyFn,
        'ArrowLeft': this.isNavbarVisible && this.stackPrev.length !== 0 ? this.goPrev : emptyFn,
        'ArrowRight': this.isNavbarVisible && this.stackNext.length !== 0 ? this.goNext : emptyFn,
        'ArrowUp': this.isNavbarVisible && this.$router.currentRoute.fullPath !== '/' ? this.goUp : emptyFn
      }
      if (cases[e.code]) {
        cases[e.code]()
      }
    },
    goHome () {
      this.$data.stackNext = []
      this.$router.replace('/')
    },
    goPrev () {
      this.$data.stackNext.push(this.$router.currentRoute.fullPath)
      let prev = this.$data.stackPrev[this.$data.stackPrev.length - 1]
      this.$data.stackPrev[this.$data.stackPrev.length - 1] = 'TOREMOVE' // prevent history loop when watching $route
      this.$router.replace(prev)
    },
    goNext () {
      let next = this.$data.stackNext.pop()
      this.$router.replace(next)
    },
    goUp () {
      let fullPath = this.$router.currentRoute.fullPath
      let location = fullPath.substring(0, fullPath.substring(0, fullPath.length - 1).lastIndexOf('/') + 1)
      this.$router.replace(location)
      this.$data.stackNext = []
    },
    goMap () {
      this.$data.stackNext = []
      let fullPath = this.$router.currentRoute.fullPath
      this.$router.replace(fullPath + (fullPath[fullPath.length - 1] === '/' ? 'map' : '/map'))
    },
    openControls () {
      // TODO
    },
    showVideoPlayer (src, cb) {
      let callback = cb || function () { }
      let videoPlayer = this.$refs['videoPlayer']

      videoPlayer.src = src
      videoPlayer.currentTime = 0

      this.isVideoPlayerActive = true
      videoPlayer.onended = (videoPlayer) => {
        this.isVideoPlayerActive = false
        callback()
      }

      videoPlayer.play()
    },
    togglePlayPauseVideoPlayer () {
      let videoPlayer = this.$refs['videoPlayer']
      videoPlayer.paused ? videoPlayer.play() : videoPlayer.pause()
    },
    endVideoPlayer () {
      this.$refs['videoPlayer'].currentTime = this.$refs['videoPlayer'].duration
    },
    introMainMenu () {
      this.showVideoPlayer('static/intrbtm.mp4', () => {
        this.isNavbarVisible = true
        this.isRouterViewVisible = true
      })
    }
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
      this.root.locale = val
    },
    '$route' (to, from) {
      if (this.$data.stackPrev[this.$data.stackPrev.length - 1] === 'TOREMOVE') {
        this.$data.stackPrev.pop()
      } else {
        this.$data.stackPrev.push(from.fullPath)
      }
    }
  }
}
</script>


<style>
/*!
 * Web Fonts from Fontspring.com
 *
 * All OpenType features and all extended glyphs have been removed.
 * Fully installable fonts can be purchased at http://www.fontspring.com
 *
 * The fonts included in this stylesheet are subject to the End User License you purchased
 * from Fontspring. The fonts are protected under domestic and international trademark and
 * copyright law. You are prohibited from modifying, reverse engineering, duplicating, or
 * distributing this font software.
 *
 * (c) 2010-2018 Fontspring
 *
 *
 *
 *
 * The fonts included are copyrighted by the vendor listed below.
 *
 * Vendor:      FontSite Inc.
 * License URL: https://www.fontspring.com/licenses/fontsite/webfont
 *
 *
 */

@font-face {
    font-family: 'Mech';
    src: url('assets/fonts/MechMonoline-webfont.woff2') format('woff2'),
         url('assets/fonts/MechMonoline-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}
</style>

<style scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 640px; height: 480px;
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
  right:46px;
  height: 15px;

  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;

  background-color: rgba(128,128,128,0.6);
  box-shadow: inset 1px 1px 3px 0px white;
  border-radius: 8px;

  font-family: sans-serif;
  font-size: 10px;
}

.navbar label {
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
}

.navbar button {
  width: 18px;
  height: 18px;

  box-shadow: inset 0 0 0 1px black;

  border: none;

  background-color: #f0f0f0;
  border-radius: 50%;
  margin-right: 5px;
  outline: none;

  background-size: 18px 18px;
}

.navbar button:active{
  background-color: #a0a0a0;
}

.navbar button[disabled] {
  background-color: #808080;
}

video {
  position: absolute;
}
</style>
