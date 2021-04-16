<template>
  <div id="app">
    <nav-bar />
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
            :erase-delay='250'
            erase-style='select-all'
            :erase-on-complete='false'
            caret-animation='blink'
            ></vue-typer>
            </span>
          </h1>
        </div>     
        <div class="buttons">
          <p>説明文説明文説明文</p>
          <div>
          <button class="button">肉体をつくる</button>            
          </div>
          <div>
          <button class="button">精神をつくる</button>
          </div>          
        </div>
      </div> 

    </section>
  </div>
</template>

<script>
  import NavBar from '~/components/NavBar.vue';
  import Particles from '~/components/Particles.vue';
  export default {
    components: {
      NavBar,
      Particles
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
.buttons {
  margin: 0 auto;
  color: white;
}
h1 {
  color: #000000 !important;
  font-family: 'Dosis', sans-serif;
}
.vue-typer {
  font-family: monospace;
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
  background-color: #3F51B5;
}
.vue-typer .custom.char.selected {
  color: #607D8B;
  background-color: transparent;
  text-decoration: line-through;
}
</style>