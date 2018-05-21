<i18n>
  {
    "en": {
    "chars": "Characters",
    "tech": "Technology",
    "loca": "Locations",
    "events": "Events",
    "episode": "Episode I Preview",
    "scenes": "Scene By Scene",
    "behind": "Behind the Scenes",
    "expanded": "Expanded Universe",
    "glossary": "Glossary"
  },
  "fr": {
    "chars": "Personnages",
    "tech": "Technologie",
    "loca": "Lieux",
    "events": "Evénements",
    "episode": "Episode I",
    "scenes": "Scène par scène",
    "behind": "L'envers du décor",
    "expanded": "Univers étendu",
    "glossary": "Glossaire"
  }
}
</i18n>

<template>
  <div class="mainmenu">
    <nav>
      <router-link to="characters/"><div>{{ $t('chars') }}</div></router-link>
      <router-link to="technology/"><div>{{ $t('tech') }}</div></router-link>
      <router-link to="locations/"><div>{{ $t('loca') }}</div></router-link>
      <router-link to="events/"><div>{{ $t('events') }}</div></router-link>
      <router-link to="episode1/"><div>{{ $t('episode') }}</div></router-link>
      <hr>
      <router-link to="scenes/"><div>{{ $t('scenes') }}</div></router-link>
      <router-link to="behind/"><div>{{ $t('behind') }}</div></router-link>
      <router-link to="expanded/"><div>{{ $t('expanded') }}</div></router-link>
      <hr>
      <router-link to="glossary/"><div>{{ $t('glossary') }}</div></router-link>
    </nav>
    <video v-if="!this.$parent.isVideoPlayerActive" v-play src="@/components/MainMenu/MAINANIM.mp4" loop></video>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  props: ['locale', 'isNavbarVisible'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainmenu {
  background-image: url("MAINMENU.jpg");
}

video{
    position: absolute;
    top:102px; left:257px;
}

nav{
  position: absolute;
  top: 20px;
  width: 260px;
}
hr{
  width: 220px;
  background-color: white;
  margin-left: 28px; margin-right: 14px;
}

a {
  text-decoration:none;
}

a div{
  width: 235px;
  height: 37px;
  margin-left: 20px;
  margin-bottom: 8px;
  margin-right: 5px;
  color: white;

  border: 1px solid rgba(255, 255, 255, 0.7);
  background-color: rgba(0, 0, 0, 0.7);

  /* Round button border */
  border-radius: 50px;
  letter-spacing: 1px;
  font-family: 'Mech';
  font-size: 20px;
  line-height: 37px;
  text-align: center;
}

a:hover > div, a:focus > div {
  background-color:rgba(0, 0, 0, 0.9);
  border-color: white;
}

</style>
