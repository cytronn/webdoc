<style lang="scss" scoped>
	$white: #fafafa;

	.sources{
		margin-bottom: 90px;
		width: 100%;
		height: auto;
		padding-bottom: 0px;
		background-color: $white;
		transform: translateY(-350px);
		transition: 0.3s ease-out;
		&.hidden{
			transform: translateY(-170px);
			i{
				transform: rotate(-90deg);
			}
		}
	}
	.sources__container{
		width: 90%;
		margin-left: 5%;
	}

	.title{
		display: inline-block;
		text-transform: uppercase;
		height: 93px;
		line-height: 93px;
		font-size: 14px;
		font-weight: bold;
		cursor: pointer;
		i{
			transition: 0.4s ease-out;
			margin-left: 20px;
		}
	}
	.content__sources{
		height: 180px;
		padding: 20px 0px;
	}

  @media screen and (max-width: 960px){
    .sources{
      display:none
    }
  }

</style>

<template>
	<div class="sources hidden">
		<div class="sources__container">
			<h3 class="title" v-on:click="hide()">Voir nos sources <i class="fa fa-1x fa-angle-down"></i></h3>	
			<div class="content__sources">
				<div class="source">
					<img src="https://unsplash.it/120/120" alt="" class="source__thumb">
					<h3 class="source__title">Titre</h3>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default{
  ready () {
    this.sources = document.querySelector('.sources')
  },
  methods: {
    hide: function () {
      if (this.sources.classList.contains('hidden')) {
        this.sources.classList.remove('hidden')
      } else {
        this.sources.classList.add('hidden')
      }
    }
  }
}
</script>
