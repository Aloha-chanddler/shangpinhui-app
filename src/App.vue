<template>
  <div id="app">
    <appHeader />
    我是根组件
    <router-view></router-view>
    <appFooter v-show="$route.meta.show"/>
  </div>
</template>

<script>
import appHeader from "./components/Header";
import appFooter from "./components/Footer";
export default {
  name: "App",
  components: { appHeader, appFooter },
};
</script>

<style>

</style>
