<template>
  <div id="app" v-bind:style="pageStyle">
    <!-- ここからメイン -->
    <section class="hero is-fullheight"> 
      <div class="indicate">
          <span class="mdi mdi-chevron-left" @click="pageBack"></span>  
      </div>  
      <div class="hero-body">
        <div id="main">
          <div v-if="show == 1">
            <h1 class="title is-3">クソ野郎ちゃんは          
              <span id ="typed">
              <vue-typer
              :text='[
                "みなさまから人格の一部を寄付していただくことで存在しています。",
                "あなたが吐き出すことを歓迎する。",
                "言葉を食べて翌日アップデートする。",                
                "余白の時代ですからこれくらいはやっとかないと。",              
                "かわいいお祭り。",
                "ねじれている。",
                "言っちゃいけないことはなさそうだ。",           
                "さだまらないな。",
                "脳に快楽を与える。",   
                "普段言葉にならない言葉を食べたい。",           
                "みんなの淀みが燃料になる。",
                "リサイクルする。",
                "めでたい。",
                "ぶっぱなしていきたい。",
                "集めて昇華する。",
                "ロボ...？",
                "日常で無意識に構築していた順当なボーダーを刺激したい。",
                "集合意識が動かす。",
                "カソウ供養。",
                "未知の生命体。",
                "全部フィクション、遊びであります。",
                "聖火リレーを経て、最後のお祭りへ。",
                "滞りの有化とデトックス。"
              ]'
              :repeat='Infinity'
              :shuffle='false'
              initial-action='typing'
              :pre-type-delay='70'
              :type-delay='70'
              :pre-erase-delay='2000'
              :erase-delay='550'
              erase-style='select-all'
              :erase-on-complete='false'
              caret-animation='blink'
              ></vue-typer>
              </span>
            </h1>            
          </div>
          <div v-else-if="show == 2">
            <div class="says">
              <div class="hacker-text">
                <p><vue-hacker-text text="僕には魂を操る仕事が少なすぎるから。祈りすぎて魂を破壊してまでやる仕事とはなんだろうって考えてる。" 
                speed="slow"
                @decodeFinish="changeButton"
                :probability="0.5"
                /></p>
              </div>              
            </div>
          </div>
        </div>     
      </div>
      <div class="hero-foot">
        <div v-if="isActive" class="pbutton" >
          <a class="btn btn-custom01">
            <span class="btn-custom01-front" @click="clickButton">クソ野郎ちゃんって何？</span>
          </a>
        </div> 
        <div v-else class="pbutton">
          <div class="discription" v-bind:class="{textflash: isTextFlash}">
            <p>{{ discription }}</p>            
          </div>
          <div class="pbutton" v-bind:class="{visible: isButtonVisible}">
            <button class="button is-small is-rounded" @click="repairButton">＞ リセット ＜</button>
          </div>
        </div>                   
        <div class="iconwrapper">             
            <span class="mdis mdi mdi-emoticon-devil" @click="linebot"></span> 
            <span class="mdis mdi mdi-book-open-variant" @click="note"></span>              
            <span class="mdis mdi mdi-youtube" @click="youtube"></span>               
            <span class="mdis mdi mdi-twitter" @click="twitter"></span>                              
        </div>          
        <div class="footwrapper">
          <img src="~/static/reiwacitylogo.png" alt="令和市" class="footimg" @click="note">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import ParticleBtn from "vue-particle-effect-buttons"
  export default {
    data() {
      return {
        show: 1,
        bgurl: "/bg.jpg",
        isActive: true,
        discription : "みんなから吐き出されたサンプルを食べて、クソ野郎ちゃんは学習をすすめます。",
        isButtonVisible: true,
        isTextFlash: true,
        pageStyle: {
          backgroundImage:  "url('" + this.bgurl +"')",
          backgroundRepeat: "no-repeat",
        }        
      };
    },
    updated() {
      this.pageStyle.backgroundImage = "url('" + this.bgurl +"')";
    },   
    created() {
      this.pageStyle.backgroundImage = "url('" + this.bgurl +"')";
    },
    mounted() {
      this.$adobeFonts(document)
    },     
    components: {
      ParticleBtn
    },
    methods: {       
      twitter() {
        window.open('https://twitter.com/_404_e_r_r_o_r_', '_blank');   
      },      
      note() {
        this.$swal("クソ野郎ちゃんが自動生成した文章を、人間が編集してnoteに投稿するプロジェクトを行っています。\n\n人工知能とコミュニケーションして遊んでみませんか？参加を希望される方はtwitterDMまでご連絡ください。", {
          icon: "info",
          title: "日記",
          className: "note-button",
          buttons: {
            cancel: true,            
            note: {
              text:"noteを見に行く",
              value: "note"
            },
          },
        })
        .then((value) => {
          switch(value) {
            case "note":
              window.open('https://note.com/_404_e_r_r_o_r_/m/m40a2ad85e1aa', '_blank');
              break;
            default:
              break;                      
          }
        });     
      }, 
      linebot() {
        this.$swal("令和市のLineでクソ野郎ちゃんと会話ができます。「おーいクソ野郎ちゃん」と呼びかけてみてください", {
          className: "note-button",
          buttons: {         
            note: {
              text:"Lineでクソ野郎ちゃんと戯れる",
              value: "linebot"
            },
            cancel: true,              
          },
        })
        .then((value) => {
          switch(value) {
            case "linebot":
              window.open('https://lin.ee/KDCSgMC', '_blank');
              break;
            default:
              break;                      
          }
        });     
      },       
      youtube() {
        window.open('https://youtu.be/oZt95ZWvyXY', '_blank'); 
      },
      reiwaCity() {
        window.open('https://previewer.adalo.com/7e89d6b4-efb5-435c-8ea3-3822f4a7c5c0/', '_blank');    
      }, 
      pageBack() {
        location.href = 'https://zealous-chandrasekhar-8fae19.netlify.app/';
      },
      repairButton() {
        this.isActive = !this.isActive;
        this.bgurl = "/bg.jpg";  
        this.show = 1; 
        this.isButtonVisible = !this.isButtonVisible;
        this.discription  = "みんなから吐き出されたサンプルを食べて、クソ野郎ちゃんは学習をすすめます。";          
        this.isTextFlash = !this.isTextFlash;
      },
      clickButton(){
        window.setTimeout(this.firstButton, 700);
      },
      firstButton(){
        this.bgurl = "/bg_white.jpg";  
        this.show =2; 
        this.isActive = !this.isActive;    
      },  
      changeButton() {
        this.isButtonVisible = !this.isButtonVisible;
        this.isTextFlash = !this.isTextFlash;
        this.discription  = "こんな感じで話しはじめます！もっと色々なクソ野郎ちゃんの様子を見たい人は、twitterやLineに確認しにいってね！";
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
  background-image: url("./static/bg.jpg");
  background-size: cover;
}
#main {
  width: 80vw;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
#sub {
  width: 85vw;
  position: absolute;
  text-align: center;
  top: 68%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);  
}
.indicate {
  position:absolute;
  top: 30px;
  left: 30px;
  transform: translateY(-50%) translateX(-50%);    
}
.mdi-chevron-left {
  font-size: 1.5rem;
}
.mdis {
  font-size: 2.2rem;
}

.mdi {
  color: white;
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.3);
}
.pbutton {
  text-align: center;
  margin-bottom: 5vh;
}
.btn-custom01-front{
  font-family: yamamotoan-stdn, sans-serif;
  font-weight: 800;
}
.imitation {
    color: #F0566E;
}
h1 {
  color: #000000 !important;
  /* font-family: 'Hannari', sans-serif; */

}
.title{
  font-family: 'vdl-yotag', sans-serif;
  font-weight: 500;
}

.iconwrapper {
  text-align: center;
  margin-bottom: 5vh;
}
.iconwrapper > span {
  margin: 0 3vw;
}
.footwrapper {
  text-align: center;
}
.hacker-text {
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  font-size: 22px;
  font-family: vdl-yotag, sans-serif;
}
.btn-cls {
  background: linear-gradient(-135deg, #7826a4, #da11ad) !important;
  border: 2px solid #fff;
  box-shadow: 0 5px 10px rbga(0, 0, 0, .1);
}
.discription {
  text-align: left;
  color: black;
  margin: 0 auto 5vh auto;
  width: 85vw;
  font-size: 1.2rem;
  font-family: vdl-tbcgothic-std, sans-serif;
}

.textflash {
  animation: flash 2s ease-out infinite;
}
@keyframes flash {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
.visible {
  visibility: hidden;
}
.footimg {
  height: 30px;
  padding: 5px 5px;
}
.vue-typer {
  /* font-family: Hannari; */
}
.vue-typer .custom.char {
  color: #D4D4BD;
  background-color: #1E1E1E;
}
.vue-typer .custom.char.selected {
  background-color: #264F78;
}
.vue-typer .custom.caret {
  width: 10px;
  background-color: #FFFFFF;
}
.vue-typer .custom.char.selected {
  color: #FFFFFF;
  text-decoration: line-through;
}
.says { 
  margin: 10px 0;
}
.says p {
  /* color: black; */
  display: inline-block;
  position: relative;
  margin: 0 10px 0 0 ;
  padding: 10px;
  border-radius: 12px;
  background: white;
}  
.says p:after {
  content: "";
  position: absolute;
  top: 3px;
  right: -19px;
  border: 8px solid transparent;
  border-left: 18px solid white;
  -webkit-transform: rotate(-35deg);
  transform: rotate(-35deg);
}  

.btn,
a.btn,
button.btn {
  font-size: 1rem;
  line-height: 1.5;
  position: relative;
  display: inline-block;
  padding: 1rem 4rem;
  user-select: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: white;
  border-radius: 0.5rem;
}
a.btn-custom01 {
  margin-bottom: 0.5rem;
  padding: 0;
  border-radius: 0.75rem;
}
a.btn-custom01:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  transition: all 0.3s;
  transform: translate3d(0, 0.75rem, -1rem);
  border: 2px solid #000;
  border-radius: inherit;
  background: #31192c;
  box-shadow: 0 0.6rem 0 0 rgba(0, 0, 0, 0.2);
}
.btn-custom01-front {
  position: relative;
  display: block;
  padding: 1rem 1.5rem 1rem 1.5rem;
  transition: all 0.3s;
  border: 2px solid #000;
  border-radius: inherit;
  background: linear-gradient(-135deg, #7826a4, #da11ad);
}
a.btn-custom01:hover {
  transform: translate(0, 0.25rem);
  background: linear-gradient(-135deg, #7826a4, #da11ad);
}
a.btn-custom01:hover:before {
  transform: translate3d(0, 0.5rem, -1rem);
  box-shadow: 0 0.35rem 0 0 rgba(0, 0, 0, 0.2);
}
a.btn-custom01:active {
  transform: translate(0rem, 0.75rem);
}
a.btn-custom01:active:before {
  transform: translate3d(0, 0, -1rem);
  box-shadow: 0 0.35rem 0 0 rgba(0, 0, 0, 0.2);
}
</style>