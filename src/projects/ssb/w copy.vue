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
		&:nth-child(2){
		width: 210%;
		height: 90%;
		bottom: 4%;
		}
		&:nth-child(3){			
		width: 220%;
		height: 80%;
		bottom: 8%;
		}
		&:nth-child(4){			
		width: 230%;
		height: 70%;
		bottom: 12%;
		}
		&:nth-child(5){			
		width: 240%;
		height: 60%;
		bottom: 16%;
		}
		&:nth-child(6){			
		width: 250%;
		height: 50%;
		bottom: 20%;
		}
		&:nth-child(7){			
		width: 260%;
		height: 40%;
		bottom: 24%;
		}
		&:nth-child(8){			
		width: 270%;
		height: 30%;
		bottom: 28%;
		}
		&:nth-child(9){			
		width: 280%;
		height: 20%;
		bottom: 32%;
		}
	}
	.wave{
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1860 250' preserveAspectRatio='none'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:none;stroke:url(%23SVGID_1_);%7D%0A%3C/style%3E%3ClinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='0' y1='125' x2='1860' y2='125'%3E%3Cstop offset='0' style='stop-color:%23AE8047'/%3E%3Cstop offset='0.4' style='stop-color:%23FFE1AC'/%3E%3Cstop offset='1' style='stop-color:%23AE8047'/%3E%3C/linearGradient%3E%3Cpath class='st0' d='M1860,240c-465,0-465-230-930-230S465,240,0,240'/%3E%3C/svg%3E%0A");
		background-size: 50% 100%;}

}
@keyframes wave{
    to{
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
