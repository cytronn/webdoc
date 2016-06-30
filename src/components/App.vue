<template>
	  	<router-view class="app-router animated"
      transition="fade" transition-mode="out-in"></router-view>
</template>

<style lang="sass">

	@import "../assets/css/reset.css"
	@import "../assets/css/_variables.sass"
	@import "~animate.css/animate.css"
	
	@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,300,300italic,600");
	@import url("https://fonts.googleapis.com/css?family=Playfair+Display");

	body
		display: flex
		justify-content: center
		font-family: 'Source Sans Pro', sans-serif

	.fadeIn, .fadeOut
		animation-duration: .5s

</style>