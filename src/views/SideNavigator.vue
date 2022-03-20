<template>
  <span>
    <!-- Uses visible class from Bootstrap. -->
    <div class="ctx-nav" :class="{ visible: sidebarResponsive }">
      <select
        @change="ChangeVersion"
        v-model="Version.selectedVersion"
        class="ctx-nav-select"
      >
        <option v-for="item in Version.array" :key="item.id">
          {{ item }}
        </option>
      </select>
      <br />
      <span v-if="Version.selectedVersion == Version.array[0]">
        <SideNavigatorButton Content="Home" View="home" @click="ToggleRes" />
        <SideNavigatorButton
          Content="Sub home 1"
          View="sub home 1"
          class="mg1"
          @click="ToggleRes"
        />
        <SideNavigatorButton
          Content="Sub home 2"
          View="sub home 2"
          class="mg2"
          @click="ToggleRes"
        />
        <SideNavigatorButton
          Content="Sub home 3"
          View="sub home 3"
          class="mg3"
          @click="ToggleRes"
        />
        <SideNavigatorButton Content="About" @click="ToggleRes"/>
      </span>
      <span v-if="Version.selectedVersion == '1.0.0'">
        <SideNavigatorButton Content="Home" View="home" @click="ToggleRes"/>
        <SideNavigatorButton Content="About" View="about" @click="ToggleRes"/>
      </span>
    </div>
    <div
      @click="ToggleRes"
      class="ctx-nav-show-responsive"
    >
      >
    </div>
  </span>
</template>

<script>
import SideNavigatorButton from "../components/SideNavigatorButton";
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
  data() {
    return {
      sidebarResponsive: false,
    };
  },
  methods: {
    ChangeVersion() {
      this.UpdateCurrentView("home");
      this.UpdateVersion(Version.selectedVersion);
    },
    ...mapActions(["UpdateVersion", "UpdateCurrentView"]),
    // Toggles responsive view.
    ToggleRes(){
      this.sidebarResponsive = !this.sidebarResponsive
    }
  },
  computed: { ...mapState(["Version"]) },
  components: { SideNavigatorButton },
};
</script>

<style>
/*
===================================================================================================
General side navigator.
===================================================================================================
*/
.ctx-nav {
  background-color: rgb(2, 117, 41);
  position: absolute;
  height: calc(100vh - 64px);
  padding: 8px 0px 0px 20px;
  width: 300px;
  overflow-y: scroll;
  user-select: none;
}
.ctx-nav-select {
  width: 70%;
  margin-bottom: 10px;
  border: 0;
}
.mg1 {
  margin-left: 20px;
}
.mg2 {
  margin-left: 40px;
}
.mg3 {
  margin-left: 60px;
}
/*
===================================================================================================
Responsive button shower.
===================================================================================================
*/
.ctx-nav-show-responsive {
  position: absolute;
  background-color: rgba(2, 117, 40, 0.39);
  color: white;
  padding: 0px 4px 5px 4px;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  visibility: hidden;
}
/*
===================================================================================================
Responsive.
===================================================================================================
*/
@media screen and (max-width: 768px) {
  .ctx-nav {
    visibility: hidden;
  }
  .ctx-nav-show-responsive {
    visibility: visible;
  }
}
@media screen and (max-width: 380px) {
  .ctx-nav {
    width: 100%;
  }
}
/*
===================================================================================================
Scroll bar.
===================================================================================================
*/
/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #cacaca;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(20, 110, 12);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>