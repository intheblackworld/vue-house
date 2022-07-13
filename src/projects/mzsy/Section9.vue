<template>
  <div class="section9"><!-- 
    <img src="./s1/0.jpg" alt="`${info.caseName}_bg" class="t0">  -->

  </div>
</template>

<script>
// @ is an alias to /src
import info from '@/info'
import { isPC, isMobile, isTablet } from '@/utils'

export default {
  name: 'section9',

  data() {
    return {
      info,
      isPC,
      isMobile,
      isTablet,
    }
  },

  methods: {},

  mounted() {},

  created() {},

  computed: {},
}
</script>
