<template>
    <div class="other">
        <ul>
            <li>
                <div class="othercraft_img">

                </div>
                <div class="othercraft_title">
                    Imperial Shuttle
                </div>
            </li>
            <li>
                <div class="othercraft_img">

                </div>
                <div class="othercraft_title">
                    Landing Craft
                </div>
            </li>
            <li>
                <div class="othercraft_img">

                </div>
                <div class="othercraft_title">
                    Death Star
                </div>
            </li>
            <li>
                <div class="othercraft_img">

                </div>
                <div class="othercraft_title">
                    Death Star II
                </div>
            </li>
        </ul>
        <header>Other Craft</header>
        <ul>
            <li>
                <div class="othercraft_title">
                    <i>Slave I</i>
                </div>
                <div class="othercraft_img">

                </div>
            </li>
            <li>
                <div class="othercraft_title">
                    <i>Millennium Falcon</i>
                </div>
                <div class="othercraft_img">

                </div>
            </li>
            <li>
                <div class="othercraft_title">
                    <i>Outrider</i>
                </div>
                <div class="othercraft_img">

                </div>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    inherit: true,
    name: 'TechnologyVehiclesOther',
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
    .other {
        width: 640px;
        height: 480px;
        color: white;
        font-family: "Roboto", serif;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 40%;
        display: flex;
    }
    ul:nth-child(1) {
        background: url("TechnologyVehiclesOtherTop.jpg") no-repeat;
    }
    ul:nth-child(3) {
        background: url("TechnologyVehiclesOtherBot.jpg") no-repeat;
    }
    li {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        background: rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    }
    li:hover {
        background: rgba(0,0,0,0);
    }
    ul:nth-child(1) li {
        width: 25%;
        height: 99%
    }
    ul:nth-child(3) li {
        width: 33.33333333%;
        margin-top: 2px;
    }
    .othercraft_img {
        height: 80%;
        width: 100%;
    }
    .othercraft_title {
        width: 100%;
        padding: 5px 0;
        text-align: center;
    }
    header {
        margin: 0;
        padding: 10px 0;
        font-size: 1.9em;
        width: 97%;
        text-align: right;
    }
</style>