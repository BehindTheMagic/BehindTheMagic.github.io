<i18n>
  {
    "en": {
    "btnclose": "Done",
    "mainmap": "Main Map",
    "chars": "Characters",
    "tech": "Technology",
    "loca": "Locations",
    "events": "Events",
    "episode": "Episode I Preview",
    "scenes": "Scene By Scene",
    "behind": "Behind the Scenes",
    "expanded": "Expanded Universe",
    "glossary": "Glossary",
    "chars_main": "Main Characters",
    "chars_aliens": "Creatures & Aliens",
    "chars_groups": "Groups & Organizations",
    "tech_vehicles": "Vehicles",
    "tech_weapons": "Weapons",
    "tech_devices": "Devices",
    "expanded_sources": "Sources",
    "expanded_timeline": "Timeline",
    "scenes_SW": "Star Wars",
    "scenes_ESB": "The Empire Strikes Back",
    "scenes_ROJ": "Return of the Jedi",
    "scenes_lost": "Lost scenes",
    "behind_people": "People",
    "behind_processes": "Processes",
    "behind_culture": "Culture",
    "behind_companies": "Lucas Companies",
    "behind_timeline": "Timeline"
  },
  "fr": {
    "btnclose": "Sortie",
    "mainmap": "Plan général",
    "chars": "Personnages",
    "tech": "Technologie",
    "loca": "Lieux",
    "events": "Evénements",
    "episode": "Episode I",
    "scenes": "Scène par scène",
    "behind": "L'envers du décor",
    "expanded": "Univers étendu",
    "glossary": "Glossaire",
    "chars_main": "Personnages principaux",
    "chars_aliens": "Créatures et Extraterrestres",
    "chars_groups": "Groupes et Organisations",
    "tech_vehicles": "Vaisseaux et engins",
    "tech_weapons": "Armes",
    "tech_devices": "Equipement",
    "expanded_sources": "Sources",
    "expanded_timeline": "Chronologie",
    "scenes_SW": "Star Wars",
    "scenes_ESB": "L'Empire contre-attaque",
    "scenes_ROJ": "Le Retour du Jedi",
    "scenes_lost": "Scènes perdues",
    "behind_people": "Hommes et femmes",
    "behind_processes": "Procédés",
    "behind_culture": "Culture",
    "behind_companies": "Lucas et compagnies",
    "behind_timeline": "Chronologie"
  }
}
</i18n>

<template>
  <div class="mainmenu_map">
    <span>{{ $t('mainmap') }}</span>
    <router-link class="main mchars" to="characters/">{{ $t('chars') }}</router-link>
    <ul class="chars">
      <router-link class="sub" to="characters/main/">{{ $t('chars_main') }}</router-link>
      <router-link class="sub" to="characters/aliens/">{{ $t('chars_aliens') }}</router-link>
      <router-link class="sub" to="characters/groups/">{{ $t('chars_groups') }}</router-link>
    </ul>

    <router-link class="main mep1" to="episode1/">{{ $t('episode') }}</router-link>

    <router-link class="main mtech" to="technology/">{{ $t('tech') }}</router-link>
    <ul class="tech">
      <router-link class="sub" to="technology/vehicles/">{{ $t('tech_vehicles') }}</router-link>
      <router-link class="sub" to="technology/weapons/">{{ $t('tech_weapons') }}</router-link>
      <router-link class="sub" to="technology/devices/">{{ $t('tech_devices') }}</router-link>
    </ul>

    <router-link class="main mevts" to="events/">{{ $t('events') }}</router-link>

    <router-link class="main mlocs" to="locations/">{{ $t('loca') }}</router-link>

    <router-link class="main mexpd" to="expanded/">{{ $t('expanded') }}</router-link>
    <ul class="expd">
      <router-link class="sub" to="expanded/sources/">{{ $t('expanded_sources') }}</router-link>
      <router-link class="sub" to="expanded/timeline/">{{ $t('expanded_timeline') }}</router-link>
    </ul>

    <router-link class="main mscenes" to="scenes/">{{ $t('scenes') }}</router-link>
    <ul class="scenes">
      <router-link class="sub" to="scenes/SW/"><i>{{ $t('scenes_SW') }}</i></router-link>
      <router-link class="sub" to="scenes/ESB/"><i>{{ $t('scenes_ESB') }}</i></router-link>
      <router-link class="sub" to="scenes/ROJ/"><i>{{ $t('scenes_ROJ') }}</i></router-link>
      <router-link class="sub" to="scenes/lost/">{{ $t('scenes_lost') }}</router-link>
    </ul>

    <router-link class="main mbehind" to="behind/">{{ $t('behind') }}</router-link>
    <ul class="behind">
      <router-link class="sub" to="behind/people/">{{ $t('behind_people') }}</router-link>
      <router-link class="sub" to="behind/processes/">{{ $t('behind_processes') }}</router-link>
      <router-link class="sub" to="behind/culture/"><i>{{ $t('behind_culture') }}</i></router-link>
      <router-link class="sub" to="behind/companies/">{{ $t('behind_companies') }}</router-link>
      <router-link class="sub" to="behind/timeline/">{{ $t('behind_timeline') }}</router-link>
    </ul>

    <router-link class="main mglos" to="glossary/">{{ $t('glossary') }}</router-link>

    <router-link tag="button" class="btn-close close" v-bind:data-text="$t('btnclose')" to="/">X</router-link>
  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  props: ['locale'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainmenu_map{
  background-image: url("MAINMAP.jpg");
}


span{
  color: white;
  position: absolute;
  top: 36px; left: 50%; transform: translateX(-50%);
  text-align: center;
  font-family: 'Mech';
  letter-spacing: 1px;
  font-size: 30px;
}

.main {
  position: absolute;
  color: #A0F0D8;
  font-family: 'Mech';
  letter-spacing: 1px;
  font-size: 20px;
}

ul{
  position: absolute;
  padding-left: 0;
  margin: 5px;
}

.sub {
  color: #C8C8C8;
  font-family: sans-serif;
  font-size: 10px;
  display: block;
  padding: 1px 0;
}

a:hover, a:focus{
  color: white;
}


.mchars{
  top: 60px;
  left: 143px;
  padding: 5px 38px 5px 0;
}

.chars{
  top: 82px;
  left: 74px;
  text-align: right;
}

.mtech{
  top: 152px;
  left: 80px;
  padding: 5px 38px 5px 0;
}

.tech{
  top: 180px;
  left: 80px;
  text-align: right;
}

.mlocs{
  top: 258px;
  left: 90px;
  padding: 5px 58px 5px 0;
}

.mevts{
  left: 466px;
  padding: 5px 0 5px 38px;
  top: 152px;
}

.mep1 {
  left: 396px;
  padding: 5px 0 5px 38px;
  top: 60px;
}

.mscenes{
  top: 338px;
  left: 117px;
  padding: 5px 38px 5px 0;
}

.scenes{
  top: 364px;
  left: 90px;
  text-align: right;
}

.mbehind {
  left: 403px;
  padding: 5px 0 5px 38px;
  top: 338px;
}

.behind{
  left: 455px;
  top: 360px;
}

.mexpd{
  left: 462px;
  padding: 5px 0 5px 38px;
  top: 258px;
}

.expd{
  left: 510px;
  top: 280px;
}

.mglos{
  left: 295px;
  padding: 38px 0 0 0;
  top: 366px;
}

.close{
  top: 15px;
  left: 610px;
}

</style>
