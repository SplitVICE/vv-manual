<template>
  <span>
    <SideNavigator />
    <div class="ctx-home">
      <span v-if="ShowIf({ view: 'home' })">
        <div class="h1">VV-Manual</div>
        Welcome. This is a template of VV-Manual.
        <br />
        You can create manuals with this Vue CLI application.
      </span>
      <span v-if="ShowIf({ view: 'sub home 1' })">
        <div class="h1">Sub home 1</div>
        Lorem home 1
        <br /><br />
      </span>
      <span v-if="ShowIf({ view: 'sub home 2' })">
        <div class="h1">Sub home 2</div>
        Lorem home 2
        <br />
        <a target="_blank" href="http://google.com">Google</a>
      </span>
      <span v-if="ShowIf({ view: 'sub home 3' })">
        <div class="h1">Sub home 3</div>
        Not another Lorem example!
      </span>
      <span v-if="ShowIf({ view: 'about' })">
        <div class="h1">About</div>
        Made by SPLIT VICE
        <br />
        Thank you for checking out.
        <br />
        <img
          width="100"
          src="https://i.imgur.com/MVCBBah.png"
          alt="split vice logo"
        />
      </span>
      <span v-if="ShowIf({ view: 'home', version: '1.0.0' })">
        <div class="h1">Home 1.0.0</div>
        This is home version 1.0.0
      </span>
      <span v-if="ShowIf({ view: 'about', version: '1.0.0' })">
        <div class="h1">About 1.0.0</div>
        Made by SPLIT VICE
        <br />
        Thank you for checking out.
        <br />
        <img
          width="100"
          src="https://i.imgur.com/MVCBBah.png"
          alt="split vice logo"
        />
      </span>
    </div>
  </span>
</template>

<script>
import { mapState } from "vuex";
import SideNavigator from "./SideNavigator";
export default {
  computed: {
    ...mapState(["CurrentView", "Version"]),
  },
  methods: {
    // Returns true if passed view parameter equals with current view.
    ShowIf({ view, version = this.Version.array[0] }) {
      return (
        this.CurrentView == view && this.Version.selectedVersion == version
      );
    },
  },
  components: {
    SideNavigator,
  },
};
</script>

<style>
/*
===================================================================================================
General rules.
===================================================================================================
*/
.ctx-home {
  height: calc(100vh - 80px);
  margin-top: 8px;
  margin-left: 320px;
  overflow-y: scroll;
}
/*
===================================================================================================
Responsive.
===================================================================================================
*/
@media screen and (max-width: 768px) {
  .ctx-home {
    margin-top: 8px;
    margin-left: 10px;
    overflow-y: scroll;
  }
}
</style>
