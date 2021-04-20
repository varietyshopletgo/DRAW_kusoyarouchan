<template>
  <div id="app">
    <!-- ここからメイン -->
    <section class="hero is-fullheight"> 
      <div class="hero-body">
        <div id="main">
          <h1 class="title is-3">クソ野郎ちゃんは          
            <span id ="typed">
            <vue-typer
            :text='[
              "みなさまから人格の一部を寄付していただくことで成り立っています。",
              "適当なタイミングでつぶやくよ。",
              "かわいいお祭り。",
              "体内に乗り込んで操縦するタイプの令和市民。",
              "中に乗れる。",
              "余白の時代ですからこれくらいはやっとかないと。",
              "市民というか公共施設。",
              "さだまらないな。",
              "みんなの淀みが燃料的な感じになる。",
              "みんなの淀みを集めて吐き出して、燃えて聖歌になる。",
              "めでたい。",
              "溜め込んだものを一気に放出する日があって、それを祭りのキャンプファイヤーのように眺める。",
              "出現は特定の日だけで、錬成は日々できる。",
              "集めて燃やす。",
              "リサイクルする。",
              "ロボ...？",
              "街を破壊してそうでしてない。",
              "集合的意識が動かすもの。",
              "カソウ供養。",
              "コックリさん的な人力回るプール。",
              "未知の生命体。",
              "儀式。",
              "フィクションと割り切ると自由にできていいね。",
              "全部ただのお話、遊びであります。",
              "聖火リレーを経て、最後のお祭りへ。",
              "滞りの有化とデトックス。",
              "腹話術のようにキャラに喋らせることで、浄化されていく思いもあるのではないか。",
              "言っちゃいけないことはなさそうだ。"
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
        <div id="sub">
          <div class="pbutton">
            <ParticleBtn
            :visible.sync="btnOps2.visible"
            :animating.sync="btnOps2.animating"
            :options="btnOps2"
            cls="btn-cls"
            >
            精神を錬成する
            </ParticleBtn>
          </div>          
          <div class="pbutton">
            <ParticleBtn
            :visible.sync="btnOps1.visible"
            :animating.sync="btnOps1.animating"
            :options="btnOps1"
            cls="btn-cls"
            >
            肉体を錬成する
            </ParticleBtn>
          </div>

          <div class="imitation"><router-link to ="/draw">・</router-link></div> 
       </div> 
     </div>
    </section>
  </div>
</template>

<script>
  import NavBar from '~/components/NavBar.vue';
  import Particles from '~/components/Particles.vue';
  import ParticleBtn from "vue-particle-effect-buttons"

  export default {
    data() {
      return {
        btnOps1: {
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
            console.log("下の点から行けないこともない");
            this.popUp();
          },
          onBegin: () => {
            console.log("まだできてないんだよな");
          },
          visible: true,
          animating: false
        },
       btnOps2: {
          type: "rectangle",
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
            console.log("しゅるしゅるしゅる");
            location.href = 'https://zealous-chandrasekhar-8fae19.netlify.app/word';
          },
          onBegin: () => {
            console.log("ぼわん");
          },
          visible: true,
          animating: false
        },        
      }
    },    
    components: {
      NavBar,
      Particles,
      ParticleBtn
    },
    methods: {
        popUp(){
            this.$swal("ただいま工事中です","開演までお待ちください", "info");
            if(this.btnOps1.visible == false){
            this.btnOps1.visible =! this.btnOps1.visible;
            };
        }
    }

  }

</script>

<style>
html, body {
    height: 100%;
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
  width: 80vw;
  position: absolute;
  text-align: center;
  top: 68%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);  
}

.pbutton {
  margin-bottom: 1rem;
}
.imitation {
    color: #F0566E;
}
h1 {
  color: #000000 !important;
  font-family: 'Hannari', sans-serif;
}
.vue-typer {
  font-family: Hannari;
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
</style>