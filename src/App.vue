<template>
  <div id="app">
    <appHeader />
    我是根组件
    <appFooter />
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
