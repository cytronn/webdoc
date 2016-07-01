<style lang="scss" scoped>
	$white: #fafafa;

	a{
		text-decoration: none;
	}
	.main__header{
		z-index: 10000000000000;
		position: fixed;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		top: 72px;
		width: 90%;
		margin-left: 5%;
		height: 55px;
  }

	.menu__trigger{
		overflow: hidden;
		position: relative;
		width: 180px;
		height: 55px;
		line-height: 55px;
    	text-transform: uppercase;
		font-weight: 700;
    	font-size: 14px;
		text-align: center;
		background-color: $white;
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
  }

	.chapter__number{
    margin-right: 21px;
		width: 100%;
		height: 55px;
		line-height: 55px;
		display: flex;
		justify-content: center;
		p{
			text-align: center;
			width: 55px;
			height: 55px;
			font-size: 22px;
			font-weight: 600;
			color: $white;
			background-color: rgba(196,196,196,0.13);
    }
  }

	.buttons{
		width: 150px;
		height: 55px;
		display: flex;
		justify-content: space-between;
  }

	.previous, .next{
		position: relative;
		cursor: pointer;
		width: 55px;
		height: 55px;
		text-align: center;
		line-height: 55px;
		font-size: 20px;
		font-weight: 700;
		background-color: $white;
		transition: all 0.4s ease-out;
  }

</style>

<template>
	<div class="main__header">
		<a href="/home">
			<div class="menu__trigger">
				<span>Accueil</span>
			</div>
		</a>
		<div class="chapter__number">
			<p>
				{{ chapter.number }}
			</p>
		</div>
		<div class="buttons">
			<!-- <div class="previous" v-link="{ name: 'chapitres', params: { chapitre_name: chapterData.chapterEnd.nextChapter.url }}"> <i class="fa fa-1x fa-angle-left"></i> </div> -->
			<a class="next" v-link="{ name: 'chapitres', params: { chapitre_name: nexturl }}"> <i class="fa fa-1x fa-angle-right"></i></a>
		</div>
	</div>
</template>

<script>
export default{
  props: ['nexturl', 'chapter'],
  ready () {
    console.log('this')
    if (this.nexturl) {
      console.log(this.chapter)
    }
  }
}
</script>