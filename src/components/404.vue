<style lang="scss" lang>
  
  $white: #fafafa;

	.error__container{
		width: 100%;
		height: 100vh;
    background-size: cover;
	}

	.error{
		width: 100%;
		margin-top: 40vh;
		height: 50vh;
		display: flex;
		flex-direction: column;
		align-items: center;
      p{
        font-size: 48px;
        font-weight: 600;
        color: $white;
      }
      a{
        display: block;
        margin-top: 100px;
        width: 300px;
        height: 64px;
        line-height: 64px;
        text-align: center;
        color: #111111;
        background-color: #eee;
        position: relative;
        overflow: hidden;
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
          font-weight: 700;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
        }
        i:{
          position: relative;
          margin-right: 25px;
        }
      }
    }    

</style>
<template>
		<div class="error__container" :style="{ backgroundImage: `url(${bgSrc})` }">
			<div class="error">
				<p>La page n'existe pas 👽</p>     
				<a v-link="{ path: '/' }"><button><span>Retourner à l'accueil</span></button></a>
			</div>
		</div>
</template>

<script>
export default {
  data: function () {
    return {
      bgSrc: require('assets/img/404.jpg')
    }
  }
}
</script>