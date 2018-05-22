<template>
    <div class="medical">
        <ul>
            <li>
                <div class="medical_title">
                    Breath Mask
                </div>
                <div class="medical_img">

                </div>
            </li>
            <li>
                <div class="medical_title">
                    Carbon-Freezing Chamber
                </div>
                <div class="medical_img">

                </div>
            </li>
            <li>
                <div class="medical_title">
                    Scan Grid
                </div>
                <div class="medical_img">

                </div>
            </li>
        </ul>
        <header>Medical &<br />Industrial<br />Technology</header>
        <ul>
            <li>
                <div class="medical_title">
                    Bacta Tank
                </div>
                <div class="medical_img">

                </div>
            </li>
            <li>
                <div class="medical_title">
                    Vaporator
                </div>
                <div class="medical_img">

                </div>
            </li>
            <li>
                <div class="medical_title">
                    Prosthetic Replacement
                </div>
                <div class="medical_img">

                </div>
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    inherit: true,
    name: 'TechnologyDevicesMedical',
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
    .medical {
        width: 640px;
        height: 480px;
        color: white;
        font-family: "Roboto", serif;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        background: url("TechnologyDevicesMedicalMenu.jpg");
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 33%;
        height: 93%;
    }
    li {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 32%;
        width: 100%;
        background: rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    }
    li:hover {
        background: rgba(0,0,0,0);
    }
    .medical_title {
        width: 100%;
        padding: 5px 0;
        text-align: center;
    }
    .medical_img {
        width: 100%;
        height: 80%;
    }
    header {
        margin: 0;
        margin-bottom: 40px;
        padding: 0;
        font-size: 1.7em;
        align-self: flex-end;
    }
</style>