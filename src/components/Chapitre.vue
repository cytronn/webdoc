<style lang="scss" scoped>
  $white: #fafafa;

  .chapter{
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .chapter__container{
    position: relative;
    width: 100%;
    flex-direction: row;
  }

  .chapter__header{
    width: 100%;
    height: calc(100vh - 80px);
    background-size: cover;
  }

  .header__container{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-content: flex-end;
    width: 100%;
    height: 100vh;
    h1, h2, h3{
      text-align: center;
    }
  }
  
  .header__content{
    position: absolute;
    bottom: 40vh;
    height: 30vh;
    width: 100%;
  }

  .header__bottom, .introduction__bottom{
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    bottom: 80px;
    height: calc(30vh - 80px);
    width: 100%;
    h3{
      text-align: center;
    }
  }

  .line__container{
      position: relative;
      bottom: 0;
      height: 130px;
      margin: auto;
      margin-top: 30px;
      margin-bottom: 0;
      width: 1px;
      background-color: $white;
    }
  h1, h2, h3{
    color: $white;
  }


  h1{
    font-weight: 700;
    font-size: 60px;
    text-transform: uppercase;
    margin-top: 20px;
    letter-spacing: 0.05rem;
  } 

  h2{
    font-weight: 300;
    font-style: italic;
    font-size: 20px;
  }

  p{
    font-size: 18px;
    line-height: 1.5;
    color: $white;
  }

  .chapter__storytelling{
    position: relative;
    width: 100%;
    height: calc(100vh - 80px);
  }

  .video__container{
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #111111;
    overflow: hidden;
  }

  .video{
    min-width: 100%;
    min-height: calc(100vh - 80px);
  }

  .chapter__introduction{
    display: flex;
    justify-content: center;
    background-size: cover;
    width: 100%;
    padding-bottom: 80px;
  }

  .introduction__container{
    width: 80%;
    margin-top: 25vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .first__text{
    width: 50%;

    h3.main-title{
      font-size: 48px;
      font-weight: 700;
      text-transform: uppercase;
      text-align: left;
      margin-bottom: 42px;
      letter-spacing: 0.1rem;
    }

    h3.second-title{
      font-size: 20px;
      font-style: italic;
      text-align: left;
      margin-bottom: 10px;
    }

    p + p{
      margin-top: 35px;
    }
  }

  .first__video{
    width: 100%;
    margin-top: 80px;
    video{
      width: 100%;
    }
  }

  .video__supplement{
    margin-top: 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    .video__supplement--left{
      width: 30%;
      h3.description{
        font-size: 36px;
        font-weight: 700;
        margin-bottom: 7px;
        text-transform: uppercase;
      }
      h3.source{
        font-size: 14px;
        color: $white;
      }
    }
    .video__supplement--right{
      width: 60%;
    }
  }
  
  .introduction__bottom{
    position: static;
    margin-top: 180px;
    h3{
      text-align: center;
    }
  }
  
  .chapter__citation{
    width: 100%;
    height: calc(100vh - 80px);
    background-size: cover;
  }
  .citation__container{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: space-around;
    height: calc(100vh - 80px);
    p{
      font-family: "Playfair Display";
      margin-top: 10vh;
      align-self: center;
      width: 40%;
      line-height: 1.3;
      font-size: 48px;
      text-align: center;
    }
    h3{
      font-weight: 700;
      font-size: 20px;
      text-align: center;
      text-transform: uppercase;
      margin-top: 72px;
    }
  }
  
  .chapter__end{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-size: cover;
  }

  .end__container{
    display: flex;
    flex-direction: column;
    align-items: space-around;
    height: 100vh;
  }

  .end__content{
    width: 40%;
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 20%;
    margin-top: 30vh;
    .end__title{
      font-size: 48px;
      font-weight: bold;
    }
    .description{
      font-size: 18px;
      line-height: 27px;
      margin-top: 39px;
    }
  }
  .end__button{
    margin-top: 45px;
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

  @media screen and (max-width: 960px){
    .header__bottom{
      display: none;
    }
    .first__text{
      width: 100%;
    }
    .chapter__introduction{
      padding-bottom: 40px;
    }
    .video__supplement{
      flex-direction: column;
      .video__supplement--right, .video__supplement--left{
        width: 100%
      }
      .video__supplement--right{
        margin-top: 30px
      }
    }
    .introduction__bottom{
      display: none;
    }

    .chapter__citation, .citation__container{
      height: auto;
      padding-bottom: 40px;
    }
    .citation__container p{
      font-size: 24px;
      margin-top: 50px;
    }
    .citation__container h3{
      margin-top: 20px;
    }
    .end__content{
      position: relative;
      flex-direction: column;
      height: auto;
      width: 80%;
      margin-left: 10%;
      .description{
        margin-top: 60px;
      }
      a{
        margin-top: 50px;
        width: 100%;
        margin-bottom: 20px;
      }
    }
    .end__title{
      margin-top: 0px;
    }
    button{
      position: static;
      width: 100%;
    }
  }

</style>

<template>
  <div  class="chapter">
    <div class="chapter__container">
      <main-header></main-header>
      <div class="chapter__header" :style="{ backgroundImage: `url(${headerSrc})` }">
        <div class="header__container">
          <div class="header__content">
            <h2>{{ chapterData.subtitle }}</h2>
            <h1>{{ chapterData.title }}</h1>
          </div>
          <div class="header__bottom">
            <h3>Défiler vers le bas</h3>
            <div class="line__container">
              <div class="line"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="chapter__storytelling">
        <div class="video__container">
          <video autoplay class="video" v-on:click="play('.video')">
            <source :src="fictionSrc" type="video/webm">
          </video>
        </div>
      </div>
      <div class="chapter__introduction" :style="{ backgroundImage: `url(${introSrc})` }">
        <div class="introduction__container">
          <div class="first__text">
            <h3 class="second-title">{{ chapterData.chapterIntroduction.title.secondTitle }}</h2>
            <h3 class="main-title">{{ chapterData.chapterIntroduction.title.firstTitle }}</h1>
            <p>{{ chapterData.chapterIntroduction.firstParagraph }}</p>
            <p>{{ chapterData.chapterIntroduction.secondParagraph }}</p>
          </div>
          <div class="first__video">
            <video class="docu" autoplay v-on:click="play('.docu')" >
              <source :src="realSrc" type="video/webm">
            </video>
            <div class="video__supplement">
              <div class="video__supplement--left">
                <h3 class="description">
                  {{ chapterData.chapterIntroduction.video.title}}
                </h3>
              </div>
              <div class="video__supplement--right">
                <p>{{ chapterData.chapterIntroduction.thirdParagraph }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="chapter__citation" :style="{ backgroundImage: `url(${citationSrc})` }">
        <div class="citation__container">
          <p class="citation">&laquo {{ chapterData.chapterCitation.citation.citation }} &raquo</p>
          <h3 class="author">{{ chapterData.chapterCitation.citation.author }}</h3>
        </div>  
      </div>
      <div class="chapter__end" :style="{ backgroundImage: `url(${endSrc})`}">
        <div class="end__container">
          <div class="end__content">
            <h3 class="end__title">
              {{ chapterData.chapterEnd.resume.title }}
            </h3>
            <p class="description">
              {{ chapterData.chapterEnd.resume.description }}
            </p>
            <a class="end__button" v-link="{ name: 'chapitres', params: { chapitre_name: chapterData.chapterEnd.nextChapter.url }}"><button><i class="fa fa-play fa-1x"></i><span>Chapitre suivant</span></button></a>
          </div>
        </div>
        <sources></sources>
      </div>
      <main-footer></main-footer>
    </div>
  </div>
</template>

<script>
import chapitres from '../data/chapitres.json'
import Vue from 'vue'

Vue.component('main-header', require('./Header'))
Vue.component('main-footer', require('./Footer'))
Vue.component('sources', require('./Sources'))

export default {
  data () {
    return {
      headerSrc: require('assets/img/' + chapitres[this.$route.params.chapitre_name].mainCover + '.jpg'),
      introSrc: require('assets/img/' + chapitres[this.$route.params.chapitre_name].chapterIntroduction.cover + '.jpg'),
      citationSrc: require('assets/img/' + chapitres[this.$route.params.chapitre_name].chapterCitation.cover + '.jpg'),
      endSrc: require('assets/img/' + chapitres[this.$route.params.chapitre_name].chapterEnd.cover + '.jpg'),
      fictionSrc: require('assets/videos/' + chapitres[this.$route.params.chapitre_name].videoNarration + '.webm'),
      realSrc: require('assets/videos/' + chapitres[this.$route.params.chapitre_name].chapterIntroduction.video.src + '.webm'),
      chapterData: chapitres[this.$route.params.chapitre_name]
    }
  },
  // props: ['data'],
  // data () {
  //   return {
  //     'title': 'berk'
  //   }
  // },
  ready () {
    console.log(this.$route.params.chapitre_name)
    if (this.$route.params.chapitre === 'crise-democratique') {
      this.$router.go({ path: '/chapitres/crise-democratique' })
    }
    document.title = 'Whistleblowers —– this.$route.params.chapitre_name'
  },
  methods: {
    play: function (el) {
      console.log(el)
      if (document.querySelector(el).paused) {
        document.querySelector(el).play()
      } else {
        document.querySelector(el).pause()
      }
    }
  },
  watch: {
    '$route.params': {
      handler: function () {
        this.headerSrc = require('assets/img/' + chapitres[this.$route.params.chapitre_name].mainCover + '.jpg')
        this.introSrc = require('assets/img/' + chapitres[this.$route.params.chapitre_name].chapterIntroduction.cover + '.jpg')
        this.citationSrc = require('assets/img/' + chapitres[this.$route.params.chapitre_name].chapterCitation.cover + '.jpg')
        this.endSrc = require('assets/img/' + chapitres[this.$route.params.chapitre_name].chapterEnd.cover + '.jpg')
        this.fictionSrc = require('assets/videos/' + chapitres[this.$route.params.chapitre_name].videoNarration + '.webm')
        this.realSrc = require('assets/videos/' + chapitres[this.$route.params.chapitre_name].chapterIntroduction.video.src + '.webm')
        this.chapterData = chapitres[this.$route.params.chapitre_name]
      }
    }
  }
}
</script>