<template>
	<div class="w">
		<div class="wave"></div>
		<div class="wave"></div>
		<div class="wave"></div>
		<div class="wave"></div>
		<div class="wave"></div>
		<div class="wave"></div>
		<div class="wave"></div>
		<div class="wave"></div>
		<div class="wave"></div>
		<div class="wave"></div>
</div>
</template>
<style lang="scss" scoped>
.w{
	div{
		position: absolute;
		width: 200%;
		height: 100%;
		left: 0;
		bottom: 0; animation: wave 10s linear infinite;
		transform-origin: 50% 70%;
		&:nth-child(2){animation-delay: .5s;}
		&:nth-child(3){animation-delay: 1s;}
		&:nth-child(4){animation-delay: 1.5s;}
		&:nth-child(5){animation-delay: 2s;}
		&:nth-child(6){animation-delay: 2.5s;}
		&:nth-child(7){animation-delay: 3s;}
		&:nth-child(8){animation-delay: 3.5s;}
		&:nth-child(9){animation-delay: 4s;}
		&:nth-child(10){animation-delay: 4.5s;}
	}
	.wave{
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1860 250' preserveAspectRatio='none'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:none;stroke:url(%23SVGID_1_);%7D%0A%3C/style%3E%3ClinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='0' y1='125' x2='1860' y2='125'%3E%3Cstop offset='0' style='stop-color:%23AE8047'/%3E%3Cstop offset='0.4' style='stop-color:%23FFE1AC'/%3E%3Cstop offset='1' style='stop-color:%23AE8047'/%3E%3C/linearGradient%3E%3Cpath class='st0' d='M1860,240c-465,0-465-230-930-230S465,240,0,240'/%3E%3C/svg%3E%0A");
		background-size: 50% 100%;}

}
@keyframes wave{
    0%{
      transform: translateX(0%);
    }
    50%{
      transform: translate(-25%,-15%)scaleY(.3);
    }
    100%{
      transform: translateX(-50%);
    }
}
</style>

<script>
export default {
  name: 'w',
  components: {},

  methods: {},
}
</script>
