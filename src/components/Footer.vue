<style lang="scss" scoped>
	// @import "../assets/css/_variables.scss";
	$white: #fafafa;

	li{
		list-style: none;
		margin-right: 20px;
		color: rgba(250,250,250,0.3);
		font-weight: 600;
	}

	li.active{
		font-weight: 700;
		font-size: 14px;
		text-transform: uppercase;
		color: $white;
	}

	.main_footer{
		z-index: 10000000000000;
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 80px;
		background-color: #353535;
	}
	
	.footer__container{
		width: 90%;
		margin-left: 5%;
		display: flex;
		height: 100%;
		line-height: 80px;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		color: $white;
	}

	.left__part{
		width: 20%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
		.legal{
			text-decoration: none;
			font-weight: 700;
			font-size: 14px;
			text-transform: uppercase;
		}

	.social__links{
		width: 20%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.chapters{
		display: flex;
		flex-direction: row;
	}
	.right__part{
			display: flex;
			flex-direction: row;
			color: $white;
			height: 20px;
			line-height: 20px;
		span:nth-child(1){
			font-size: 16px;
			font-weight: 700;
			text-transform: uppercase;
			padding-right: 15px;
			border-right: 1px solid $white;
		}
		.volume{
			width: 40px;
			height: 20px;
			text-align: center;
			cursor: pointer;
		}
	}
  	@media screen and (max-width: 960px){
    	.main_footer{
    		position: static;
      		height: auto;
      		.footer__container{
      			flex-direction: column-reverse;
      			align-items: space-between;
      		}
      		.left__part{
      			width: 100%;
      			flex-direction: column;
      			text-align: center;
      			.social__links{
      				width: 100%;
      				justify-content: space-around;
      			}
      		}
      		.right__part, .chapters{
				display: none;
      		}
    	}
	}
</style>

<template>
	<div class="main_footer">
		<div class="footer__container">
			<div class="left__part">
				<a class="legal" v-link="{ path: '/legal' }">mentions légales</a>
				<div class="social__links">
					<a href=""><i class="fa fa-facebook fa-1x"></i></a>
					<a href=""><i class="fa fa-twitter fa-1x"></i></a>
				</div>
			</div>
			<div class="chapters">
					<li class="chapter">1</li>
					<li class="chapter">2</li>
					<li class="chapter">3</li>
					<li class="chapter">4</li>
					<li class="chapter">5</li>
					<li class="chapter">6</li>
					<li class="chapter">7</li>
			</div>
			<div class="right__part">
				<span>Whistleblower</span>
				<div class="volume"><i v-on:click="mute()" class="fa fa-volume-up fa-1x"></i></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  props: ['chapter'],
  ready () {
    console.log('this')
    if (this.chapter) {
      console.log(this.chapter.id)
      document.querySelectorAll('.chapter')[this.chapter.id].classList = 'chapter active'
    }
  },
  watch: {
    '$route.params': {
      handler: function () {
  //       console.log(this.chapter.id)
        var chapters = document.querySelectorAll('.chapter')
        for (var i = 0; i < chapters.length; i++) {
          chapters[i].classList = 'chapter'
        }
        console.log((this.chapter.id + 1) % 5)
        document.querySelectorAll('.chapter')[(this.chapter.id % 5) + 1].classList = 'chapter active'
      }
    }
  }
}
</script>