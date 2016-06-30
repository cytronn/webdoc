<style lang="scss" scoped>
	$white: #fafafa;

	.home{
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
  }

	.home__container{
		position: relative;
		width: calc(100% - 180px);
		height: calc(100vh - 90px);
		margin-top: 60px;
		flex-direction: row;
  }
	
	.video-container{
		display: flex;
		align-items: center;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #111111;
		overflow: hidden;
		&::after{
			content: "";
			position: absolute;
			width: 100%;
			height: 100vh;
		}
		video{
			min-height: 100vh;
    }
  }

	.menu{
		height: 20vh;
		width: 160px;
		a{
			display: block;
			font-size: 14px;
			font-weight: 700;
			text-transform: uppercase;
    }
  }
	
	.menu__top{
		padding-bottom: 10px;
		a{
			margin-bottom: 15px;
    }
  }
	
	.menu__middle{
		padding: 20px 0px;
		border-top: 1px solid $white;
		border-bottom: 1px solid $white;
  }

	.menu__bottom{
		color: #fafafa;
		padding-top: 10px;
		font-size: 14px;
		line-height: 1.4;
  }

	.content{
		width: 100%;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
		margin-top: 150px;
		h1{
			margin-bottom: 100px;
			position: relative;
			font-size: 96px;
			height: auto;
			font-weight: bold;
			letter-spacing: 0.1rem;
			text-transform: uppercase;
			color: $white;
			&::after{
				content: "";
				position: absolute;
				left: -10px;
				top: 44px;
				width: 415px;
				height: 15px;
				background-color: $white;
      }
    }
  }
		h2{
			font-size: 30px;
			margin-bottom: 6px;
			color: $white;
    }
  button{
    position: relative;
    overflow: hidden;
    width: 300px;
    height: 64px;
    color: #111111;
    background-color: #eee;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.4s ease;
    &::before{
      content: "";
      position: absolute;
      right: 100%;
      top: 0px;
      background-color: #353535;
      width: 100%;
      height: 100%;
      transition: all 0.4s ease;
    }
    &:hover{
      color: $white;
      &::before{
        right: 0%;
      }
    }
    span{
      position: relative;
    }
    i{
      position: relative;
      margin-right: 25px;
    }
  }
			
	.content i{
		margin-right: 25px;
  }
	a{
		color: $white;
		text-decoration: none;
  }
  
	.bottom{
		display: flex;
		flex-direction: row;
		color: $white;
		position: absolute;
		height: 20px;
		line-height: 20px;
		bottom: 0;
		right: 0;
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
    .home__container{
      position: relative;
      width: 80%;
    }
    .menu{
      display: none;
    }
    .content{
      h2{
        font-size: 20px;
      }
      h1{
        font-size: 30px;
        &:after{
          width: 100px;
          height: 5px;
        }
      }
    }
    .bottom{
      display: none;
    }
    button{
      width: 80%;
      position: fixed;
      bottom: 50px;
    }
  }
 </style>
  
<template>
	<div class="home">
		<div class="video-container" :style="{ backgroundImage: `url(${layerSrc})` }">
      <audio class="audio" autoplay loop>
        <source src="">
      </audio>
			<video autoplay muted>
		  		<source :src="videoSrc" type="video/mp4">
			</video>
		</div>
		<div class="home__container">
			<div class="menu">
				<div class="menu__top">
					<a v-link="{ path: '/legal' }">Mentions Légales</a>
					<a href="#">A propos</a>
				</div>
				<div class="menu__middle">
					<a href="#">Partager</a>
				</div>
				<div class="menu__bottom">
					Travail effectué dans le cadre d'un projet pédagogique
				</div>
			</div>
			<div class="content">
				<h2>Les lanceurs d'alerte, traîtres ou héros?</h2>
				<h1>Whistleblowers</h1>
				<a v-link="{ name: 'chapitres', params: { chapitre_name: 'les-origines' }}"><button><i class="fa fa-play fa-1x"></i><span>Découvrir l'histoire</span></button></a>

			</div>
			<div class="bottom">
				<span>Whistleblower</span>
				<div class="volume"><i v-on:click="mute()" class="fa fa-volume-up fa-1x"></i></div>
			</div>
 		</div>
   </div>
</template>

<script>
export default {
  data: function () {
    return {
      audioSource: null,
      volume: null,
      musicSrc: require('assets/music/home.mp3'),
      layerSrc: require('assets/img/layer.png'),
      videoSrc: require('assets/videos/introduction.webm')
    }
  },
  ready () {
    this.audioSource = document.querySelector('.audio')
    this.volume = document.querySelector('.volume>i')
    this.audioSource.setAttribute('src', this.musicSrc)
  },
  methods: {
    mute: function () {
      this.audioSource.volume = (this.audioSource.volume === 0) ? 1 : 0
      if (this.volume.classList.contains('fa-volume-up')) {
        this.volume.classList = 'volume fa fa-volume-off fa-1x'
      } else {
        this.volume.classList = 'volume fa fa-volume-up fa-1x'
      }
    }
  },
  watch: {
    '$route.params': {
      handler: function () {
        console.log('this')
      }
    }
  },
  beforeDestroy: function () {
    this.audioSource.pause()
  }
}
</script>
