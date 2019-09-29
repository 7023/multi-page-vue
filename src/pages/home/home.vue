<template>
    <div id="app">
       <index></index>
    </div>
</template>

<script>
import index from './views/home'
export default {
  name: 'app',
  components: { index }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/base.scss";
</style>
