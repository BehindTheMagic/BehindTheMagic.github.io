<template>
    <div class="droid">
        <header>Droid Technology</header>
        <ul>
            <li>
                <div class="droid_title">
                    Astromech Droid
                </div>
                <div class="droid_img">

                </div>
            </li>
            <li>
                <div class="droid_title">
                    Asp Droid
                </div>
                <div class="droid_img">

                </div>
            </li>
            <li>
                <div class="droid_title">
                    GNH Power Droid
                </div>
                <div class="droid_img">

                </div>
            </li>
            <li>
                <div class="droid_title">
                    Interrogator Droid
                </div>
                <div class="droid_img">

                </div>
            </li>
            <li>
                <div class="droid_title">
                    MSE Mouse Droid
                </div>
                <div class="droid_img">

                </div>
            </li>
        </ul>
        <ul>
            <li>
                <div class="droid_img">

                </div>
                <div class="droid_title">
                    Patrol Droid
                </div>
            </li>
            <li>
                <div class="droid_img">

                </div>
                <div class="droid_title">
                    Probot
                </div>
            </li>
            <li>
                <div class="droid_img">

                </div>
                <div class="droid_title">
                    Protocol Droid
                </div>
            </li>
            <li>
                <div class="droid_img">

                </div>
                <div class="droid_title">
                    Remote
                </div>
            </li>
            <li>
                <div class="droid_img">

                </div>
                <div class="droid_title">
                    Restraining Bolt
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    inherit: true,
    name: 'TechnologyDevicesDroid',
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
    .droid {
        width: 640px;
        height: 480px;
        color: white;
        font-family: "Roboto", serif;
        display: flex;
        background: url("TechnologyDevicesDroidMenu.jpg");
    }
    header {
        position: fixed;
            top: 160px;
            left: 410px;
        font-size: 1.7em;
        color: rgb(134,137,134);
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        width: 50%;
        height: 93%;
    }
    li {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        height: 20%;
        width: 100%;
    }
    ul:nth-child(3) li {
        justify-content: flex-start;
    }
    .droid_img {
        height: 100%;
        width: 40%;
        background: rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    }
    .droid_img:hover {
        background: rgba(0,0,0,0);
    }
    .droid_title {
        padding: 5px;
        text-align: right;
    }
    ul:nth-child(3) .droid_title {
        text-align: left;
    }
</style>