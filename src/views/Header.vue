<template>
  <div class="ctx-header">
    <div class="ctx-header-flex">
      <div class="h2">VV-Manual</div>
      <div
        :class="{ 'ctx-header-button-container-responsive': hideHeaderButtonsResponsive }"
        class="ctx-header-button-container"
      >
        <HeaderButton
          Content="Developer website"
          @FunctionTrigger="OpenWebsite('https://split-vice.com')"
        />
        <HeaderButton
          Content="Developer Twitter"
          @FunctionTrigger="OpenWebsite('https://twitter.com/SplitVice_')"
        />
      </div>
      <!-- This button hiddes or displays the side navigator. -->
      <div class="ctx-header-button-burger-container">
        <HeaderButton Content="|||" @FunctionTrigger="ToggleResponsiveView" />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderButton from "../components/HeaderButton.vue";
export default {
  data() {
    return {
      hideHeaderButtonsResponsive: true,
    };
  },
  components: {
    HeaderButton,
  },
  methods: {
    OpenWebsite(URL) {
      window.open(URL, "_blank");
    },
    ToggleResponsiveView() {
      this.hideHeaderButtonsResponsive = !this.hideHeaderButtonsResponsive;
    },
  },
};
</script>

<style scoped>
/*
===================================================================================================
General.
===================================================================================================
*/
.ctx-header {
  background-color: rgb(3, 150, 28);
  color: white;
  padding-left: 15px;
  padding-top: 16px;
  padding-bottom: 10px;
  padding-right: 10px;
  user-select: none;
}
.ctx-header-flex {
  display: flex;
  justify-content: space-between;
}
.ctx-header-flex .h2 {
  margin-bottom: 0px;
}
/*
===================================================================================================
Header buttons.
===================================================================================================
*/
.ctx-header-button-container {
  display: flex;
}
/*
===================================================================================================
Header responsive burger.
===================================================================================================
*/
.ctx-header-button-burger-container {
  position: absolute;
  visibility: hidden;
}
/*
===================================================================================================
Responsive.
===================================================================================================
*/
@media screen and (max-width: 768px) {
  .ctx-header-button-container {
    background-color: rgb(3, 150, 28);
    position: absolute;
    flex-direction: column;
    right: 0;
    margin-top: 48px;
    padding-left: 25px;
    width: 100%;
  }
  .ctx-header-button-container-responsive {
    position: absolute;
    visibility: hidden;
  }
  .ctx-header-button-burger-container {
    position: relative;
    visibility: visible;
  }
}
</style>
