<template>
    <div class="personal">
        <ul class="horizontal_list">
            <li>
                <div class="personal_img">

                </div>
                <div class="personal_title">
                    Comlink
                </div>
            </li>
            <li>
                <div class="personal_img">

                </div>
                <div class="personal_title">
                    Electrobinoculars
                </div>
            </li>
            <li>
                <div class="personal_img">

                </div>
                <div class="personal_title">
                    Meditation Chamber
                </div>
            </li>
        </ul>
        <ul class="vertical_list">
            <li>
                <div class="personal_img">

                </div>
                <div class="personal_title">
                    Hologram
                </div>
            </li>
            <li>
                <div class="personal_img">

                </div>
                <div class="personal_title">
                    Imperial Code Cylinder
                </div>
            </li>
        </ul>
        <header>Personal Devices</header>
    </div>
</template>

<script>
  export default {
    inherit: true,
    name: 'TechnologyDevicesPersonal',
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
        background: url("TechnologyDevicesPersonalMenu.jpg");
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .horizontal_list {
        display: flex;
        width: 100%;
        height: 29%;
    }
    .vertical_list {
        margin-top: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 33%;
        height: 61%;
    }
    li {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        width: 100%;
        background: rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    }
    li:hover {
        background: rgba(0,0,0,0);
    }
    .vertical_list li {
        height: 140px;
    }
    .personal_img {
        width: 100%;
        height: 80%;
    }
    .personal_title {
        width: 100%;
        padding: 5px 0;
        text-align: center;
    }
    header {
        margin: 0;
        padding: 0;
        font-size: 1.5em;
        position: fixed;
            bottom: 200px;
            right: 440px;
    }
</style>