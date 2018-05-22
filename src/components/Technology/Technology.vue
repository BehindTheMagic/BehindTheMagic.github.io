<template>
    <div class="technology">
        <header>Technology</header>
        <video autoplay loop id="technology_menu">
            <source src="./TechnologyMenu.mp4" type="video/mp4">
        </video>
        <ul>
            <li id="vehicles">
                <router-link to="/technology/vehicles" class="tech_category">
                    <div class="tech_category_title">
                        <h1>Vehicles</h1>
                    </div>
                    <div class="tech_category_img" id="tech_category_vehicles">

                    </div>
                </router-link>
            </li>
            <li id="weapons">
                <router-link to="/technology/weapons" class="tech_category">
                    <div class="tech_category_title">
                        <h1>Weapons</h1>
                    </div>
                    <div class="tech_category_img" id="tech_category_weapons">

                    </div>
                </router-link>
            </li>
            <li id="devices">
                <router-link to="/technology/devices" class="tech_category">
                    <div class="tech_category_title">
                        <h1>Devices</h1>
                    </div>
                    <div class="tech_category_img" id="tech_category_devices">

                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    inherit: true,
    name: 'Technology',
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
    .technology {
        width: 640px;
        height: 480px;
        color: white;
        font-family: "Roboto", serif;
        background-image: url("TechnologyMenu.jpg");
    }
    video#technology_menu {
        position: fixed;
        margin: auto;
        margin-left: 120px;
        width: auto; height: auto; z-index: -100;
        background: no-repeat;
        background-size: cover;
    }
    header {
        margin: 18px 0;
        margin-bottom: 0;
        padding: 0;
        width: 94%;
        text-align: right;
        font-size: 1.8em;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
    }
    li {
        margin: 0;
        padding: 0;
    }
    a {
        margin: 0;
        padding: 0;
        text-decoration: none;
    }
    a:hover, a:visited, a:active {
        text-decoration: none;
    }
    .tech_category {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 133px;
        transition: all 0.3s ease;
        color: rgb(165,164,168);
    }
    .tech_category:hover {
        color: white;
    }
    .tech_category_title {
        width: 18%;
    }
    .tech_category_title h1 {
        margin: 0;
        padding: 0;
        width: 100%;
        font-size: 1.3em;
        font-weight: normal;
        text-align: center;
    }
    .tech_category_img {
        width: 80%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    #vehicles h1 {
        transform: translateY(-9px);
    }
    #weapons h1 {
        transform: translateY(-12px);
    }
    #devices h1 {
        transform: translateY(-14px);
    }
</style>
