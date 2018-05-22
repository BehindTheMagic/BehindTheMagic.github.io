<template>
    <div class="vehicle">
        <ul>
            <li>
                <div class="vehicle_img">

                </div>
                <div class="vehicle_title">
                    Deflector Shield
                </div>
            </li>
            <li>
                <div class="vehicle_img">

                </div>
                <div class="vehicle_title">
                    Hyperdrive
                </div>
            </li>
            <li>
                <div class="vehicle_img">

                </div>
                <div class="vehicle_title">
                    Escape Pod
                </div>
            </li>
        </ul>
        <header>Vehicle<br />Technology</header>
        <ul>
            <li>
                <div class="vehicle_title">
                    Ion Engine
                </div>
                <div class="vehicle_img">

                </div>
            </li>
            <li>
                <div class="vehicle_title">
                    Repulsorlift Engine
                </div>
                <div class="vehicle_img">

                </div>
            </li>
            <li>
                <div class="vehicle_title">
                    Tractor Beam
                </div>
                <div class="vehicle_img">

                </div>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    inherit: true,
    name: 'TechnologyDevicesVehicle',
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
    .vehicle {
        width: 640px;
        height: 480px;
        color: white;
        font-family: "Roboto", serif;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background: url("TechnologyDevicesVehicleMenu.jpg");
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 29%;
        display: flex;
    }
    li {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: 33.3333333%;
        background: rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    }
    li:hover {
        background: rgba(0,0,0,0);
    }
    .vehicle_img {
        height: 80%;
        width: 100%;
    }
    .vehicle_title {
        width: 100%;
        padding: 5px 0;
        text-align: center;
    }
    header {
        margin: 0;
        margin-top: 48px;
        padding: 10px 0;
        font-size: 1.9em;
        width: 97%;
        height: 20%;
        text-align: right;
    }
</style>