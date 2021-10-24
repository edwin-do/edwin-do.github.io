<template>
  <div id="app">
    <intro></intro>
    <about></about>
    <experience></experience>
    <skills></skills>
    <connect></connect>
  </div>
</template>

<script>
import Intro from "./components/Intro.vue";
import About from "./components/About.vue";
import Experience from "./components/Experience.vue";
import Skills from "./components/Skills.vue";
import Connect from "./components/Connect.vue";

export default {
  name: "App",
  components: {
    Intro,
    About,
    Experience,
    Skills,
    Connect,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
