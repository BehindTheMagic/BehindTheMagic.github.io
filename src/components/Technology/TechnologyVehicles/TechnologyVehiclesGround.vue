<template>
    <div class="ground">
        <div class="groundcraft_list">
            <ul>
                <li>
                    <div class="groundcraft_img">

                    </div>
                    <div class="groundcraft_title">
                        AT-AT
                    </div>
                </li>
                <li>
                    <div class="groundcraft_img">

                    </div>
                    <div class="groundcraft_title">
                        Sail Barge
                    </div>
                </li>
                <li>
                    <div class="groundcraft_img">

                    </div>
                    <div class="groundcraft_title">
                        Landspeeder
                    </div>
                </li>
                <li>
                    <div class="groundcraft_img">

                    </div>
                    <div class="groundcraft_title">
                        Swoop Bike
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div class="groundcraft_title">
                        AT-ST
                    </div>
                    <div class="groundcraft_img">

                    </div>
                </li>
                <li>
                    <div class="groundcraft_title">
                        Desert Skiff
                    </div>
                    <div class="groundcraft_img">

                    </div>
                </li>
                <li>
                    <div class="groundcraft_title">
                        Sandcrawler
                    </div>
                    <div class="groundcraft_img">

                    </div>
                </li>
                <li>
                    <div class="groundcraft_title">
                        Speeder Bike
                    </div>
                    <div class="groundcraft_img">

                    </div>
                </li>
            </ul>
        </div>
        <header>Ground Craft</header>
    </div>
</template>

<script>
  export default {
    inherit: true,
    name: 'TechnologyVehiclesGround',
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
    .ground {
        width: 640px;
        height: 480px;
        color: white;
        font-family: "Roboto", serif;
    }
    .groundcraft_list {
        height: 41%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: url("TechnologyVehiclesGroundMenu.jpg");
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        width: 100%;
        height: 48%;
    }
    li {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    }
    li:hover {
        background: rgba(0,0,0,0);
    }
    .groundcraft_img {
        height: 80%;
        width: 100%;
    }
    .groundcraft_title {
        width: 100%;
        padding: 5px 0;
        text-align: center;
    }
    header {
        margin: 0;
        margin-top: 20px;
        padding: 0;
        text-align: center;
    }
</style>