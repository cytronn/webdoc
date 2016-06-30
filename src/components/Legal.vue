<style lang="scss" scoped>
	$white: #fafafa;
	
	.legal{
    color: $white;
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		.legal__container{
			display: flex;
			flex-direction: column;
      justify-content: center;
			width: 40%;
		}
		h1{
			text-align: center;
			font-size: 48px;
			font-weight: 700;
			text-transform: uppercase;
			margin-bottom: 60px
		}	
		h2{
			text-align: center;
			font-style: italic;
			font-size: 20px;
			margin-bottom: 30px;
		}
		.legal__content{
			h3{
				font-size: 24px;
				font-weight: 700;
				margin-bottom: 20px;
			}
			p.contenu, p.publication{
				font-size: 18px;
				line-height: 1.3;
				margin-top: 20px;
			}
			h3.publication{
				margin-top: 30px;
				font-size: 24px;
				font-weight: 700;
			}
		}
    button{
      display: block;
      margin-top: 45px;
      width: 300px;
      height: 64px;
      color: #111111;
      background-color: #eee;
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      cursor: pointer;
    }
  }

</style>

<template>
	<div class="legal" :style="{ backgroundImage: `url(${bg})` }">
		<div class="legal__container">
			<div class="legal__head">
				<h2>Whistleblower</h2>
				<h1>Mentions legales</h1>
			</div>
			<div class="legal__content">
				<h3 class="contenu">Contenu</h3>
				<p class="contenu">Ce projet ayant été réalisé dans le cadre de la pédagogie d'HETIC, nous n'avons pas acquis les droits concernants les fichiers présents sur le site.</p>
				<h3 class="publication" >Publication</h3>
				<p class="publication">L'équipe 20 de la semaine intensive 'webdocumentaire'</p>
			</div>
			<a v-link="{ path: '/' }"><button>Retour</button></a>
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      bg: require('assets/img/new.jpg')
    }
  }
}
</script>