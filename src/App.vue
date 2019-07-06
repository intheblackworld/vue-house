<template>
  <div id="app">
    <AstrictMask />
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>

<script>
import AstrictMask from '@/components/AstrictMask'

export default {
  name: 'App',
  components: {
    AstrictMask,
  }
}
</script>
