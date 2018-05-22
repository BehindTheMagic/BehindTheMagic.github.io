<template>
    <div class="aircraft">
        <ul>
            <li>
                <div class="aircraft_img">

                </div>
                <div class="aircraft_title">
                    Ewok Hang Glider
                </div>
            </li>
            <li>
                <div class="aircraft_img">

                </div>
                <div class="aircraft_title">
                    Snowspeeder
                </div>
            </li>
            <li>
                <div class="aircraft_img">

                </div>
                <div class="aircraft_title">
                    T-16 Skyhopper
                </div>
            </li>
            <li>
                <div class="aircraft_img">

                </div>
                <div class="aircraft_title">
                    Twin-Pod Cloud Car
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    inherit: true,
    name: 'TechnologyVehiclesAircraft',
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
    .aircraft {
        width: 640px;
        height: 480px;
        color: white;
        font-family: "Roboto", serif;
        background: url("TechnologyVehiclesAircraftMenu.jpg");
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 24%;
        display: flex;
    }
    li {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 25%;
        height: 100%;
        background: rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    }
    li:hover {
        background: rgba(0,0,0,0);
    }
    .aircraft_img {
        height: 80%;
        width: 100%;
    }
    .aircraft_title {
        width: 100%;
        padding: 5px 0;
        text-align: center;
    }
</style>