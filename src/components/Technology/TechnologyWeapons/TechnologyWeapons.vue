<template>
    <div class="technology_weapons">
        <div class="weapon_category">
            <router-link to="/technology/weapons/personal">
                <div class="weapon_category_title">
                    Personal Weapons
                </div>
            </router-link>
        </div>
        <div class="weapon_category">
            <div class="weapon_category_title">
                Weapons Tests
            </div>
        </div>
        <header>Weapons</header>
        <div class="weapon_category">
            <router-link to="/technology/weapons/starship-planetary">
                <div class="weapon_category_title">
                    <h1>
                        Starship &<br /> Planetary Weapons
                    </h1>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
  export default {
    inherit: true,
    name: 'TechnologyWeapons',
    data () {
      return {
        locale: this.$parent.locale
      }
    },
    watch: {
      locale (val) {
        this.$i18n.locale = val
      }
    }
  }
</script>

<style scoped>
    .technology_weapons {
        padding: 19px;
        padding-left: 26px;
        padding-right: 60px;
        padding-bottom: 60px;
        width: 640px;
        height: 480px;
        color: white;
        font-family: "Roboto", serif;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        background: url("TechnologyWeaponsMenu.jpg") no-repeat;
    }
    .weapon_category {
        width: 43.5%;
        background: rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    }
    .weapon_category:hover {
        background: rgba(0,0,0,0);
    }
    .weapon_category:nth-child(1) {
        height: 331px;
    }
    .weapon_category:nth-child(1) .weapon_category_title {
        padding: 25px 0;
    }
    .weapon_category:nth-child(2) {
        margin-top: 15px;
        height: 68px;
    }
    .weapon_category:nth-child(2) .weapon_category_title {
        padding: 20px 0;
    }
    header {
        position: fixed;
            top: 125px;
            right: 430px;
        font-size: 50px;
        text-align: right;
    }
    .weapon_category:nth-child(4) {
        position: fixed;
            top: 217px;
            right: 470px;
        width: 278px;
        height: 332px;
    }
    .weapon_category:nth-child(4) a {
        display: flex;
        flex-direction: column-reverse;
        justify-content: flex-start;
        height: 332px;
    }
    .weapon_category:nth-child(4) .weapon_category_title {
        margin: 0;
        padding: 20px 0;
    }
    .weapon_category:nth-child(4) h1 {
        margin: 0;
        padding: 0;
        padding-bottom: 10px;
        padding-right: 15px;
        font-size: 1em;
        font-weight: normal;
        text-align: right;
    }
    .weapon_category_title {
        margin: auto;
        width: 100%;
        font-size: 1.5em;
        text-align: center;
        color: white;
    }
    a {
        margin: 0;
        padding: 0;
        text-decoration: none;
        display: block;
        width: 100%;
        height: 100%;
    }
    a:hover, a:visited, a:active {
        text-decoration: none;
    }
</style>