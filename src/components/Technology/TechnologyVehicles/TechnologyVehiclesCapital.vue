<template>
    <div class="capital">
        <ul>
            <li>
                <div class="capitalship_img">

                </div>
                <div class="capitalship_title">
                    Blockade Runner
                </div>
            </li>
            <li>
                <div class="capitalship_img">

                </div>
                <div class="capitalship_title">
                    Mon Cal Cruiser
                </div>
            </li>
            <li>
                <div class="capitalship_img">

                </div>
                <div class="capitalship_title">
                    <i>Executor</i>
                </div>
            </li>
            <li>
                <div class="capitalship_img">

                </div>
                <div class="capitalship_title">
                    Rebel Cruiser
                </div>
            </li>
            <li>
                <div class="capitalship_img">

                </div>
                <div class="capitalship_title">
                    Rebel Transport
                </div>
            </li>
            <li>
                <div class="capitalship_img">

                </div>
                <div class="capitalship_title">
                    Star Destroyer
                </div>
            </li>
        </ul>
        <header>Capital Ships</header>
    </div>
</template>

<script>
  export default {
    inherit: true,
    name: 'TechnologyVehiclesCapital',
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
    .capital {
        width: 640px;
        height: 480px;
        color: white;
        font-family: "Roboto", serif;
        background: url("TechnologyVehiclesCapitalMenu.jpg");
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 27%;
        display: flex;
    }
    li {
        margin: 0;
        padding: 0;
        width: 16.666666667%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    }
    li:hover {
        background: rgba(0,0,0,0);
    }
    .capitalship_img {
        height: 80%;
        width: 100%;
    }
    .capitalship_title {
        width: 100%;
        padding: 5px 0;
        text-align: center;
        font-size: 0.9em;
    }
    header {
        margin: 0;
        padding: 0;
        margin-top: 5px;
        margin-left: 10px;
        font-size: 1.6em;
    }
</style>