<template> 
  <div id="app">
    <section class="hero is-fullheight"> 
      <div class="indicate">
        <span class="mdi mdi-emoticon-devil" @click="pageBack"></span>  
      </div>      
      <div class="hero-body">     
        <div id="main">
          <div class="orbit-wrapper">
            <div class="orbit-spinner" @click="pageBack">
              <div class="orbit"></div>
              <div class="orbit"></div>
              <div class="orbit"></div>
            </div>            
          </div>
          <h1 class="title is-4">{{ title }}</h1>
          <div class="line-bc">
            <div class="says">
              <p>言いたいことなんでも言っちゃえ</p>
            </div>
            <div class="says">
              <p>言葉を食べてクソ野郎ちゃんが世界に放つぜ</p>
            </div>
            <div class="says">
              <p>あなたのクソ野郎なところ、全部出しちゃっていいよ</p>
            </div>
          </div>
          <div>
            <textarea class="textarea is-danger" type="text" placeholder="思っていることを吐き出してね。"v-model="word"></textarea>
          </div>
          <div class="pbutton">          
            <ParticleBtn
            :visible.sync="btnOps.visible"
            :animating.sync="btnOps.animating"
            :options="btnOps"
            cls="btn-cls"
            @click="test"
            >
            送信
            </ParticleBtn>
          </div>
        </div>
      </div>  
    </section>  
  </div>
</template>

<script>
import ParticleBtn from "vue-particle-effect-buttons";
const axios = require('axios');
let url = "https://kusoyarouchan-default-rtdb.firebaseio.com/records";

export default{
  components: {
    ParticleBtn
  },  
  data() {
    return{
      title: 'クソ野郎ちゃんはみなさまから人格の一部を寄付していただくことで存在しています。',
      word: '',
      btnOps: {        
        type: "circle",
        easing: "easeInOutCubic",
        duration: 800,
        size: 60,
        canvasPadding: 300,
        direction: "bottom",
        particlesAmountCoefficient: 0.5,
        oscillationCoefficient: 1,
        color: function () {
          return Math.random() < 0.5 ? "#f20000" : "#ffffff";
        },
        onComplete: () => {
          console.log("完了した");
          if(this.btnOps.visible == false){
            this.addData();
          } 
        },
        onBegin: () => {
          console.log("はじまりやした...");
        },
        visible: true,
        animating: false
      }      
    }
  },
  mounted() {
    this.$adobeFonts(document)
  },
  methods: {
    test() {
      this.$swal("サンプル採取が完了しました！", "貢献に感謝します。\n\nご提供いただいたサンプルはクソ野郎ちゃんが美味しくいただきます。翌日以降反映されます。成長したクソ野郎ちゃんの姿をtwitterやLineでご確認ください。", {
        icon: "success",
        dangerMode: true,
        buttons: {
          catch: {
            text:"さらに詳しく",
            value: "twitter"
          },
          cancel: "OK",
        },
      })
      .then((value) => {
        switch(value) {
          case "twitter":
            location.href = 'https://zealous-chandrasekhar-8fae19.netlify.app/word';
            break;
          default:
            this.btnOps.visible =! this.btnOps.visible;
            break;                      
        }
      });     
    },  
    pageBack() {
      location.href = 'https://zealous-chandrasekhar-8fae19.netlify.app/word';
      // this.$router.push("/"); 
    },      
    addData() {
      let date = new Date();
      let Y =date.getFullYear();
      let M = ("00" + (date.getMonth()+1)).slice(-2);
      let D = ("00" + date.getDate()).slice(-2);
      let h = ("00" + date.getHours()).slice(-2);
      let m = ("00" + date.getMinutes()).slice(-2);
      let s = ("00" + date.getSeconds()).slice(-2);
      let timestamp = Y + M + D + h + m + s;
      let add_url = url + '/' + timestamp + '.json';
      let data = {
        'word': this.word
      };
      axios.put(add_url, data).then((re)=>{
        this.word = '';
      });
      this.test();
    },
    getData() {

    },
  }
}  
</script>

<style>

  html {
    visibility: hidden;
  }
  html.wf-active {
    visibility: visible;
  }
  #app {
    position: relative;
    background-image: url("./static/bg_word.jpg");
    background-size: cover;    
  }
  #main {
    width: 90vw;
  }
  .hero-body {
    padding: 24px 24px !important;
  }
  .indicate {
    position:absolute;
    top: 30px;
    left: 30px;
    transform: translateY(-50%) translateX(-50%);    
  }
  .mdi {
    font-size: 1.5rem;
    color: white;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.3);
  }  
  .orbit-wrapper {
    margin-bottom: 5vh;
  }    
  .title {
    font-family: ab-kirigirisu, sans-serif;  
    color: white;   
    text-align: center;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  }
  .swal-title{
    font-family: ab-kirigirisu, sans-serif;  
  }
  .line-bc {
    margin: 0 auto 24px 0;
    text-align: right;
    font-size: 14px;
  }
  .says { 
    margin: 10px 0;
  }
  .says p {
    display: inline-block;
    position: relative;
    margin: 0 10px 0 0 ;
    padding: 8px;
    border-radius: 12px;
    background: #30e852;
    font-size: 12px;
  }  
  .says p:after {
    content: "";
    position: absolute;
    top: 3px;
    right: -19px;
    border: 8px solid transparent;
    border-left: 18px solid #30e852;
    -webkit-transform: rotate(-35deg);
    transform: rotate(-35deg);
  }  
  .pbutton {
    text-align: center;
    margin-top: 12px;
    font-size: 1.5rem;
    font-family: ab-kirigirisu, sans-serif;  
    
  }
  .btn-cls{
    background: #f20000 !important;
    padding: 10px 48px !important;
  }
  .swal-button--catch{
    padding: 7px, 19px;
    border-radius: 2px;
    background: linear-gradient(to right, #F13F79, #FFC778);
    font-size: 12px;
    /* border: 1px solid #fa1f1f; */
    /* text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.3); */
  }

  /* orbit-icon */
  .orbit-spinner, .orbit-spinner * {
      box-sizing: border-box;
  }

  .orbit-spinner {
    height: 35px;
    width: 35px;
    margin: 0 auto;
    border-radius: 50%;
    perspective: 800px;
  }

  .orbit-spinner .orbit {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .orbit-spinner .orbit:nth-child(1) {
    left: 0%;
    top: 0%;
    animation: orbit-spinner-orbit-one-animation 1200ms linear infinite;
    border-bottom: 3px solid #ffffff;
  }

  .orbit-spinner .orbit:nth-child(2) {
    right: 0%;
    top: 0%;
    animation: orbit-spinner-orbit-two-animation 1200ms linear infinite;
    border-right: 3px solid #ffffff;
  }

  .orbit-spinner .orbit:nth-child(3) {
    right: 0%;
    bottom: 0%;
    animation: orbit-spinner-orbit-three-animation 1200ms linear infinite;
    border-top: 3px solid #ffffff;
  }

  @keyframes orbit-spinner-orbit-one-animation {
    0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
  }

  @keyframes orbit-spinner-orbit-two-animation {
    0% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
  }

  @keyframes orbit-spinner-orbit-three-animation {
    0% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
  } 

</style>
