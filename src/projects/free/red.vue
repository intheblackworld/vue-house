<template>
  <div class="i">
    <img src="./s1/r3.png" class="r3" />
    <img src="./s1/r2.png" class="r2" />
    <img src="./s1/r1.png" class="r1" />
  </div>
  </template>
  <style lang="scss" scoped>
    .r1{
      position: absolute;
      top: 0;
      right: 0;
      width: 80.7%;
        transform: rotate(-10deg);
        animation: an 2s linear alternate infinite;
        transform-origin: 43% 90%;
    }
  .r2{
    position: relative;
      margin: 51.6% 0 0 21%;
      width: 59.9%;
  }
  .r3{
    position: absolute;
    top: 20.8%;
      left: 0;
      width: 35.4%;
        transform: rotate(-15deg);
        animation: an 2s linear alternate infinite;
        transform-origin: 100% 95%;
  }
  @keyframes an{
      to{
        transform: rotate(0deg);
      }
  }
  
  
  </style>
  
  <script>
  export default {
    name: 'red',
    components: {},
  
    methods: {},
  }
  </script>
  