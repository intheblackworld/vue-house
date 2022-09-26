<template>
  <div>
    <div class="bears"></div>
    <img src="./s1/bear0.png" class="bear0" />
    <div class="bears"></div>
    <img src="./s1/bear1.png" class="bear1" />
    <div class="bear_body">
      <img src="./s1/bear2.png" class="bear2" />
      <img src="./s1/bear3.png" class="bear3" />
      <img src="./s1/bear4.png" class="bear4" />
      <div class="bear_head">
        <img src="./s1/bear5.png" class="bear5" />
        <img src="./s1/bear6.png" class="bear6" />
        <img src="./s1/bear7.png" class="bear7" />
        <img src="./s1/bear8.png" class="bear8" />
        <img src="./s1/bear9.png" class="bear9" />
        <img src="./s1/bear10.png" class="bear10" />
        <img src="./s1/bear11.png" class="bear11" />
        <img src="./s1/bear12.png" class="bear12" />
      </div>
      <img src="./s1/bear13.png" class="bear13" />
    </div>
  </div>
  </template>
  <style lang="scss" scoped>
.bear0{position: relative;width: 100%;opacity: 0;}
.bears{
  width: 70%;
  height: 7%;
  position: absolute;
  bottom: -2%;
  left: 20%;
  background: radial-gradient(50% 50% at 50% 50%, #0002 0%, #0000 100%);
}
  
@keyframes an{
    to{
      transform: rotate(0deg);
    }
}
  
.bear1{
    bottom:0%;
    left: 27%;
    width:53.9%;
    position: absolute;
  }
.bear_body{
    top: 0;left: 0;
    height:89.3%;
    width:100%;
    position: absolute;
      animation: an 2s ease-in-out alternate infinite;
      transform: rotate(8deg);
      transform-origin: 60% 95%;
  }
.bear2{
    bottom: 23.3%;
    left: 63.1%;
    width: 36.9%;
    position: absolute;
      transform:rotate(33deg) translate(-10%,10%);
      animation: an 2s ease-in-out alternate infinite;
      transform-origin: 0% 80%;
  }
.bear3{
    bottom: 23.5%;
    left: 61.5%;
    width: 17.2%;
    position: absolute;
      transform:rotate(30deg) translateX(-5%);
      animation: an 2s ease-in-out alternate infinite;
      transform-origin: 0% 80%;
  }
.bear4{
  bottom: 0%;
    left: 32.5%;
    width: 44.3%;
    position: absolute;
  }
.bear_head{
    top: 0;
    left: 4.9%;width:79.5%;
      animation: an 2s ease-in-out alternate infinite;
      transform: rotate(6deg);
      transform-origin: 60% 95%;
    position: absolute;}
.bear5{
    top: 23.5%;
    left: -6%;
    width: 23.3%;
    position: absolute;
      transform:rotate(-15deg) ;
      animation: an 2s ease-in-out alternate infinite;
      transform-origin: 100% 80%;
  }
.bear6{
    top: 12%;
    right: 19.6%;
    width: 19.3%;
    position: absolute;
      transform:rotate(15deg) ;
      animation: an 2s ease-in-out alternate infinite;
      transform-origin: 0% 80%;
  }
.bear7{
  top: 0;
    left: 0;
    width: 100%;
    position: relative;
  }
.bear8{
    top: 57%;
    left: 56.3%;
    width: 22.1%;
    position: absolute;
      transform:rotate(-9deg) translate(0%, 10%);
      animation: an 2s ease-in-out alternate infinite;
  }
.bear9{
    top: 42.8%;
    left: 19.8%;
    width: 12.1%;
    position: absolute;
      transform: translate(10%,20%);
      animation: an 2s ease-in-out alternate infinite;
  }
.bear10{
    top: 33%;
    right: 15.6%;
    width:6.9%;
    position: absolute;
  }
.bear11{
    top: 34.4%;
    left: 13.5%;
    width:93.9%;
    position: absolute;
      transform: translate(-1%,0%);
      animation: an 2s ease-in-out alternate infinite;
  }
.bear12{
    top: 52.3%;
    left: 33.7%;
    width: 54.2%;
    position: absolute;
      animation: an 2s ease-in-out alternate infinite;
      transform: rotate(1deg)translate(-4%,-3%);
  }
.bear13{
    bottom: 16.8%;
    left: 32%;
    width: 24.2%;
    position: absolute;
      animation: an 2s ease-in-out alternate infinite;
      transform: rotate(15deg)translateY(5%);
      transform-origin: 15% 50%;
  }
  </style>
  
  <script>
  export default {
    name: 'red',
    components: {},
  
    methods: {},
  }
  </script>
  