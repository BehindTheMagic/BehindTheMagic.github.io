<template>
    <div class="personal">
        <ul>
            <li>
                <div class="personal_weapons_img">

                </div>
                <div class="personal_weapons_title">
                    Blaster
                </div>
            </li>
            <li>
                <div class="personal_weapons_img">

                </div>
                <div class="personal_weapons_title">
                    Bowcaster
                </div>
            </li>
            <li>
                <div class="personal_weapons_img">

                </div>
                <div class="personal_weapons_title">
                    E-Web Repeating Blaster
                </div>
            </li>
            <li>
                <div class="personal_weapons_img">

                </div>
                <div class="personal_weapons_title">
                    Gaderffii
                </div>
            </li>
            <li>
                <div class="personal_weapons_img">

                </div>
                <div class="personal_weapons_title">
                    Lightsaber
                </div>
            </li>
        </ul>
        <ul>
            <li>
                <div class="personal_weapons_title">
                    Thermal Detonator
                </div>
                <div class="personal_weapons_img">

                </div>
            </li>
            <li>
                <div class="personal_weapons_title">
                    Vibro-Ax
                </div>
                <div class="personal_weapons_img">

                </div>
            </li>
            <li>
                <div class="personal_weapons_title">
                    Ionization Blaster
                </div>
                <div class="personal_weapons_img">

                </div>
            </li>
            <li>
                <div class="personal_weapons_title">
                    Force Pike
                </div>
                <div class="personal_weapons_img">

                </div>
            </li>
            <li>
                <div class="personal_weapons_title">
                    Blaster Rifle
                </div>
                <div class="personal_weapons_img">

                </div>
            </li>
        </ul>
        <header>Personal Weapons</header>
    </div>
</template>

<script>
  export default {
    inherit: true,
    name: 'TechnologyWeaponsPersonal',
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
    .personal {
        width: 640px;
        height: 480px;
        color: white;
        font-family: "Roboto", serif;
        display: flex;
        justify-content: space-between;
        background: url("TechnologyWeaponsPersonalMenu.jpg") no-repeat;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        height: 91%;
        width: 48%;
    }
    li {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
        height: 20%;
        width: 100%;
    }
    .personal_weapons_img {
        width: 50%;
        height: 100%;
        background: rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    }
    .personal_weapons_img:hover {
        background: rgba(0,0,0,0);
    }
    .personal_weapons_title {
        width: 67%;
    }
    ul:nth-child(1) .personal_weapons_title {
        margin-left: 10px;
    }
    ul:nth-child(2) .personal_weapons_title {
        margin-right: 10px;
        text-align: right;
    }
    ul:nth-child(2) .personal_weapons_img {
        border-right: none;
    }
    header {
        position: fixed;
            bottom: 260px;
            left: 540px;
        font-size: 1.8em;
        color: rgb(134,137,134);
    }
</style>