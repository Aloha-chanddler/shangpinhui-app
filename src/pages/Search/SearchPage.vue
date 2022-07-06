<template>
  <div>
    我是search
    <p>params参数：{{$route.params.keyWord}}</p>
    <p>query参数：{{$route.query.key}}</p>
  </div>
</template>

<script>
  export default {
    name:'SearchPage'
  }
</script>

<style>

</style>