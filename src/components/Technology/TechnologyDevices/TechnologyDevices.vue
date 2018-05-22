<template>
    <div class="technology_devices">
        <ul>
            <li>
                <router-link to="/technology/devices/droid">
                    <div class="device_category_img">

                    </div>
                    <div class="device_category_title">
                        Droid Technology
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/technology/devices/vehicle">
                    <div class="device_category_img">

                    </div>
                    <div class="device_category_title">
                        Vehicle Technology
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/technology/devices/medical-industrial">
                    <div class="device_category_img">

                    </div>
                    <div class="device_category_title">
                        Medical / Industrial
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/technology/devices/personal">
                    <div class="device_category_img">

                    </div>
                    <div class="device_category_title">
                        Personal Devices
                    </div>
                </router-link>
            </li>
        </ul>
        <header>Devices</header>
    </div>
</template>

<script>
  export default {
    inherit: true,
    name: 'TechnologyDevices',
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
    .technology_devices {
        width: 640px;
        height: 480px;
        color: white;
        font-family: "Roboto", serif;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        background: url("TechnologyDevicesMenu.jpg") no-repeat;
    }
    li {
        margin: 0;
        padding: 0;
        display: block;
        height: 197px;
        width: 25%;
        background: rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    }
    li:hover {
        background: rgba(0,0,0,0);
    }
    .device_category_img {
        height: 80%;
    }
    .device_category_title {
        padding: 8px 0;
        text-align: center;
        color: white;
    }
    header {
        margin: 0;
        padding: 0;
        margin-top: 30px;
        margin-left: 20px;
        font-size: 1.7em;
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