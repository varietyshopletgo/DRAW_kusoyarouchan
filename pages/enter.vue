<template> 
    <section id="app" class="hero is-fullheight"> 
        <div class="hero-head"> 
            <div class="columns is-mobile top">
                <div class="column is-7 topfield">
                    <p class="name">クソ野郎ちゃん</p>
                </div>
                <div class="column is-5 topbutton">
                    <div class="button-wrapper">
                        <span class="mdi mdi-twitter">
                        </span> 
                        <span class="mdi mdi-message-text">
                        </span>                     
                        <span class="mdi mdi-play-circle">
                        </span>   
                    </div>                
                </div>
            </div>
        </div>

        <div class="hero-main">
            <div id="main">
                <div class="line-bc">
                <div class="says">
                    <p>言いたいことなんでも言っちゃえ</p>
                </div>
                <div class="says">
                    <p>あなたに変わってクソ野郎ちゃんが世界につぶやくぜ</p>
                </div>
                <div class="says">
                    <p>あなたのクソ野郎なところ、全部出しちゃっていいよ</p>
                </div>
                </div>
                <!-- <div id="message-contents">
                    <div v-for="message in messageList" class="message-wraper">
                        <div class="box" v-bind:class="{'mymessage' : isMyMessage(message)}">
                            <div class="content">
                                <p>{{message.message}}</p>
                            </div>
                        </div>
                    </div>
                </div>         -->
                <div class="call">
                    <ParticleBtn
                    :visible.sync="btnOps.visible"
                    :animating.sync="btnOps.animating"
                    :options="btnOps"
                    cls="btn-cls">
                    <!-- @click="test" -->
                    
                    おーい
                    </ParticleBtn>                    
                </div>    
                <!-- <div class="buttons">
                    <div class="inner">
                    <p class="control">
                            <ParticleBtn
                            :visible.sync="btnOps.visible"
                            :animating.sync="btnOps.animating"
                            :options="btnOps"
                            cls="btn-cls"
                            @click="test"
                            >
                            送信
                            </ParticleBtn>
                    </p>
                    <p class="control">
                            <ParticleBtn
                            :visible.sync="btnOps.visible"
                            :animating.sync="btnOps.animating"
                            :options="btnOps"
                            cls="btn-cls"
                            @click="test"
                            >
                            送信
                            </ParticleBtn> 
                    </p>
                    </div>

                                
                </div>          -->
            </div>    
        </div>  
        <div class="hero-foot">
            <div class="foot-wrapper">
                <div class="columns is-mobile">
                    <div class="column is-9">
                        <textarea class="textarea" type="text" placeholder="思っていることを吐き出してね。"v-model="word"></textarea>
                    </div>
                    <div class="column is-3 submitbutton">
                        <div class="orbit-wrapper" @click="test">
                            <div class="orbit-spinner" @click="pageBack">
                                <div class="orbit"></div>
                                <div class="orbit"></div>
                                <div class="orbit"></div>
                            </div>            
                        </div>   
                    </div>
                </div>              
            </div>

        <div>
            
        </div>          
        </div> 
    </section>  
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
      title: 'クソ野郎ちゃんはみなさまから人格の一部を寄付していただくことで成り立っています。',
      word: '',
      message:"", 
      messageList: [],
      
      btnOps: {        
        type: "circle",
        easing: "easeInOutCubic",
        duration: 300,
        size: 60,
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
      location.href = 'https://zealous-chandrasekhar-8fae19.netlify.app/';
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
    /* width: 90vw;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%); */
    }
  #granim-canvas {
    /* width: 100vw;
    height: 100vh;
    z-index: -1; */
  }  
  ul {
    margin: 0px 10px;
    background-color: aliceblue;
  }
  li {
    padding :10px;
    font-size: 16pt;
  }
  .top {
      height: 70px;
      color: white;
      background-color: #363636;

  }
  .topfield {
      text-align: center;
  }
 
  .topbutton {
        padding-top: 1.3rem;  
  }
  .button-wrapper > span {
      margin-right: 0.7rem;
  }
  .name {
    font-size: 1.2rem;
    font-weight: bold;    
    padding-top: 1rem;

  }
  .line-bc {
    margin: 0 auto 24px 0;
    padding:0 12px;
    text-align: right;
    font-size: 14px;
  }
  .call {
    margin: 0 auto 24px 0;
    padding:0 12px;
    text-align: center;
    font-size: 14px;          
  }
  .buttons {
      width:100%;

  }
  .field {
    padding:10px 10px;
  }
  .ballon {
    width: 100%;
    margin: 10px 0;
    overflow: hidden;
  }
  .chatting {
    width: 100%;
    text-align: left;
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
    margin-top: 24px;
  }
  .inner {
    display: flex;
    justify-content: space-evenly;
  } 
  .foot-wrapper {
      background-color:#363636;
  } 
  .textarea {
      margin-left: 12px;
  }

  .mdi {
    font-size: 1.8rem;
  }
.submitbutton {
    padding: 20px 0;
    color: white;
}

  .orbit-wrapper {
      position:absolute;
      bottom: 2.7rem;
      right: 2rem;
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
