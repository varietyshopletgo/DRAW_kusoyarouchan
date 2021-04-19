<template> 
  <div id="app">
    <section class="hero is-fullheight"> 
      <div class="hero-body">     
        <div id="main is-centered">
          <div class="orbit-wrapper">
            <div class="orbit-spinner" @click="pageBack">
              <div class="orbit"></div>
              <div class="orbit"></div>
              <div class="orbit"></div>
            </div>            
          </div>

          <h1 class="title is-4">{{ title }}</h1>
          <div>
            <input class="input is-danger is-forcused" type="text" placeholder="あなたの言葉を入力してください"v-model="word">
          </div>
          <div class="pbutton">          
            <ParticleBtn
            :visible.sync="btnOps.visible"
            :animating.sync="btnOps.animating"
            :options="btnOps"
            cls="btn-cls"
            @click="test"
            >
            寄付する
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
      title: 'クソ野郎ちゃんはみなさまから人格の一部を寄付していただくことで成り立っています',
      word: '',
      btnOps: {
        type: "circle",
        easing: "easeInOutCubic",
        duration: 300,
        size: 60,
        style: "stroke",
        direction: "bottom",
        particlesAmountCoefficient: 1,
        oscillationCoefficient: 1,
        color: function () {
          return Math.random() < 0.5 ? "#000000" : "#ffffff";
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

  methods: {
    test() {
      this.$swal("人格サンプルの採取が完了しました！", "今回ご提供いただいたサンプルは後日、クソ野郎ちゃんに供給されます。モニタリングをご希望の方はtwitterへどうぞ", {
        buttons: {
          catch: {
            text:"twitter",
            value: "twitter",
          },
          defeat: "了解",
        },
      })
      .then((value) => {
        switch(value) {
          case "twitter":
            window.open('https://twitter.com/_404_e_r_r_o_r_', '_blank');
            break;
          default:
            this.btnOps.visible =! this.btnOps.visible;
            break;                      
        }
      });     
    },
    pageBack() {
      this.$router.push("/"); 
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
    }
  }
}  
</script>

<style>
  #app {
    position: relative;
    background-image: url("./static/bg_word.jpg");
    background-size: cover;    
  }
  #main {
    width: 80vw;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    }
  #granim-canvas {
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }  
  ul {
    margin: 0px 10px;
    background-color: aliceblue;
  }
  li {
    padding :10px;
    font-size: 16pt;
  }
  .title {
  font-family: 'Hannari', sans-serif;    
  }
  .pbutton {
    text-align: center;
    margin-top: 2rem;
    font-family: 'Sawarabi Mincho', sans-serif;
  }
  .orbit-wrapper {

  }
  .orbit-spinner, .orbit-spinner * {
      box-sizing: border-box;
    }

  .orbit-spinner {
    height: 30px;
    width: 30px;
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
