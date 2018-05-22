<template>
    <div class="starfighters">
        <header>Starfighters</header>
        <div class="starfighters_list">
            <ul>
                <li>
                    <div class="starfighter_img">

                    </div>
                    <div class="starfighter_title">
                        <h1>
                            A-Wing
                        </h1>
                    </div>
                </li>
                <li>
                    <div class="starfighter_img">

                    </div>
                    <div class="starfighter_title">
                        <h1>
                            B-Wing
                        </h1>
                    </div>
                </li>
                <li>
                    <div class="starfighter_img">

                    </div>
                    <div class="starfighter_title">
                        <h1>
                            X-Wing
                        </h1>
                    </div>
                </li>
                <li>
                    <div class="starfighter_img">

                    </div>
                    <div class="starfighter_title">
                        <h1>
                            Y-Wing
                        </h1>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <div class="starfighter_img">

                    </div>
                    <div class="starfighter_title">
                        <h1>
                            TIE Bomber
                        </h1>
                    </div>
                </li>
                <li>
                    <div class="starfighter_img">

                    </div>
                    <div class="starfighter_title">
                        <h1>
                            TIE Fighter
                        </h1>
                    </div>
                </li>
                <li>
                    <div class="starfighter_img">

                    </div>
                    <div class="starfighter_title">
                        <h1>
                            TIE Interceptor
                        </h1>
                    </div>
                </li>
                <li>
                    <div class="starfighter_img">

                    </div>
                    <div class="starfighter_title">
                        <h1>
                            TIE Advanced
                        </h1>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    inherit: true,
    name: 'TechnologyVehiclesStarfighters',
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
    .starfighters {
        width: 640px;
        height: 480px;
        color: white;
        font-family: "Roboto", serif;
        background: url("TechnologyVehiclesStarfightersMenu.jpg");
    }
    header
    {
        position: fixed;
            top: 150px;
            left: 670px;
        margin: auto;
        padding: 0;
        text-align: center;
        font-size: 1.2em;
    }
    .starfighters_list {
        height: 95%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    ul {
        list-style: none;
        margin: 0;
        margin-top: 14px;
        padding: 0;
        width: 15.35%;
        height: 100%;
    }
    li {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 22%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    }
    li:hover {
        background: rgba(0,0,0,0);
    }
    li:nth-child(2) {
        height: 24%
    }
    li:nth-child(3) {
        height: 24.5%
    }
    li:nth-child(4) {
        height: 26.5%
    }
    .starfighter_img {
        width: 100%;
        height: 65%;
    }
    .starfighter_title {
        width: 100%;
        padding: 4px 0;
        font-size: 0.9em;
    }
    ul:nth-child(1) h1 {
        text-align: right;
        padding-right: 10px;
    }
    ul:nth-child(2) h1 {
        padding-left: 10px;
    }
    h1 {
        margin: 0;
        padding: 0;
        padding-right: 10px;
        font-size: 1em;
        font-weight: normal;
    }
</style>