<template>
<div class="i">
  <img src="./s1/y3.png" class="y3" />
  <img src="./s1/y2.png" class="y2" />
  <img src="./s1/y1.png" class="y1" />
</div>
</template>
<style lang="scss" scoped>
  .y1{
    position: absolute;
    top: 0;
    left: 0;
    width: 88.5%;
      transform: rotate(10deg);
      animation: an 2s linear alternate infinite;
      transform-origin: 55% 90%;
  }
.y2{
  position: relative;
    margin: 54.6% 21% 0 0;
  width: 57.7%;
}
.y3{
  position: absolute;
    top: 23.5%;
    right: 0;
    width: 34.8%;
      transform: rotate(15deg);
      animation: an 2s linear alternate infinite;
      transform-origin: 0% 95%;
}
@keyframes an{
    to{
      transform: rotate(0deg);
    }
}


</style>

<script>
export default {
  name: 'yellow',
  components: {},

  methods: {},
}
</script>
