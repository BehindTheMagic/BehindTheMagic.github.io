<template>
    <div class="starship">
        <header>Starship & Planetary Weapons</header>
        <ul>
            <li>
                <div class="starship_weapons_img">

                </div>
                <div class="starship_weapons_title">
                    Antivehicle Artillery
                </div>
            </li>
            <li>
                <div class="starship_weapons_img">

                </div>
                <div class="starship_weapons_title">
                    Ion Cannon
                </div>
            </li>
            <li>
                <div class="starship_weapons_img">

                </div>
                <div class="starship_weapons_title">
                    Proton Torpedo
                </div>
            </li>
            <li>
                <div class="starship_weapons_img">

                </div>
                <div class="starship_weapons_title">
                    Anti-Infantry Battery
                </div>
            </li>
        </ul>
        <ul>
            <li>
                <div class="starship_weapons_title">
                    Superlaser
                </div>
                <div class="starship_weapons_img">

                </div>
            </li>
            <li>
                <div class="starship_weapons_title">
                    Turbolaser
                </div>
                <div class="starship_weapons_img">

                </div>
            </li>
            <li>
                <div class="starship_weapons_title">
                    Quad Laser Cannon
                </div>
                <div class="starship_weapons_img">

                </div>
            </li>
            <li>
                <div class="starship_weapons_title">
                    Laser Cannon
                </div>
                <div class="starship_weapons_img">

                </div>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    inherit: true,
    name: 'TechnologyWeaponsStarship',
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
    .starship {
        width: 640px;
        height: 480px;
        color: white;
        font-family: "Roboto", serif;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        flex-wrap: wrap;
        background: url("TechnologyWeaponsStarshipMenu.jpg");
    }
    header {
        margin: 0;
        padding: 20px;
        font-size: 1.5em;
        width: 48%;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        height: 75%;
        width: 50%;
    }
    ul:nth-child(2) {
        margin-top: 7px;
    }
    ul:nth-child(3) {
        position: fixed;
            top: 190px;
            right: 401px;
        height: 360px;
        width: 320px;
    }
    li {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        height: 24.7%;
        width: 100%;
    }
    .starship_weapons_img {
        width: 261px;
        height: 100%;
        background: rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    }
    .starship_weapons_img:hover {
        background: rgba(0,0,0,0);
    }
    .starship_weapons_title {
        width: 67%;
    }
    ul:nth-child(2) .starship_weapons_title {
        margin-left: 10px;
    }
    ul:nth-child(3) .starship_weapons_title {
        margin-right: 10px;
        text-align: right;
    }
</style>