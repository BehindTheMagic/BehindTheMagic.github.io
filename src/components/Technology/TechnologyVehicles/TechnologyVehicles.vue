<template>
    <div class="technology_vehicles">
        <ul>
            <li>
                <router-link to="/technology/vehicles/starfighters">
                    <div class="vehicles_img"></div>
                    <h1>Starfighters</h1>
                </router-link>
            </li>
            <li>
                <router-link to="/technology/vehicles/aircraft">
                    <div class="vehicles_img"></div>
                    <h1>Aircraft</h1>
                </router-link>
            </li>
            <li>
                <router-link to="/technology/vehicles/groundcraft">
                    <div class="vehicles_img"></div>
                    <h1>Ground Craft</h1>
                </router-link>
            </li>
            <li>
                <router-link to="/technology/vehicles/capitalships">
                    <div class="vehicles_img"></div>
                    <h1>Capital Ships</h1>
                </router-link>
            </li>
            <li>
                <router-link to="/technology/vehicles/othercraft">
                    <div class="vehicles_img"></div>
                    <h1>Other Craft</h1>
                </router-link>
            </li>
            <li>
                <div class="vehicles_img"></div>
                <h1>Charts</h1>
            </li>
        </ul>
        <h1>Vehicles</h1>
    </div>
</template>

<script>
  export default {
    inherit: true,
    name: 'TechnologyVehicles',
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
    .technology_vehicles {
        width: 640px;
        height: 480px;
        color: white;
        font-family: "Roboto", serif;
        background-image: url("TechnologyVehiclesMenu.jpg");
    }
    .technology_vehicles > h1 {
        margin: 0;
        padding: 0;
        margin-top: 263px;
        margin-left: 500px;
        font-size: 1.7em;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        height: 137px;
        width: 100%;
        display: flex;
    }
    li {
        margin: 0;
        padding: 0;
        width: 16.6666667%;
        height: 100%;
        background: rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    }
    li:hover {
        background: rgba(0,0,0,0);
    }
    li .vehicles_img {
        height: 70%;
        width: 100%;
    }
    li h1 {
        margin: 0;
        margin-top: 12px;
        padding: 5px 0;
        width: 100%;
        max-width: 100%;
        font-size: 1em;
        font-weight: normal;
        text-align: center;
        color: rgb(174,177,174);
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