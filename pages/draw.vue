<template>
  <div class="columns is-gapless is-centered">     
    <!-- ここからメインキャンバス -->
    <div class="column">
      <MainCanvas
        ref="main"
        @add-layer="onAddLayer"
        @select-layer="onSelectLayer"
      />
    </div>
    <!-- ここから筆跡ボタン開始 -->
    <div class="column">
        <p class="buttons">
          <button 
          class="button is-primary" 
          @click="addPict">
          筆跡を追加する
          </button>
        </p>
    </div>  
    <!-- ここからレイヤー -->
    <div class="column">
      <div>
        <label class="label">レイヤー</label>
        <ul class="layers">
          <li v-if="layers.length < 1">なし</li>
          <li
            v-for="layer in rLayers"
            :key="layer.name"
            draggable="true"
            :class="layerClass(layer)"
          >
            <p>{{ layer.name }}</p>
              <span
                class="mdi mdi-plus-circle"
                @click="onZoom(layer, zoomScale)"
              ></span>
              <span
                class="mdi mdi-minus-circle"
                @click="onZoom(layer, -zoomScale)"
              ></span>
              <span
                class="mdi mdi-rotate-left"
                @click="onRotate(layer, -rotateAmount)"
              ></span>
              <span
                class="mdi mdi-rotate-right"
                @click="onRotate(layer, rotateAmount)"
              ></span>
              <span
                class="mdi mdi-close-circle"
                @click="onDelete(layer)"
              ></span>
          </li>
        </ul>
      </div>
    </div>
    <hr />

    <!-- ここからダウンロード     -->
    <div class="column">
      <div class="download">   
        <a
          ref="download"
          download="kusoyarou-gahaku.png"
        >
          <button
            class="button is-primary is-large"
            @click="download">
            ＞＞＞画像を保存＜＜＜
          </button>
        </a>
      </div>    
      <!-- ここからアップロード     -->
      <div class="upload">       
        <button
          class="button is-primary is-large"
          @click="upload">
          ＞＞＞画像を投稿＜＜＜
        </button>
      </div>  
      <div class="back">       
        <button
          class="button is-primary is-large"
          @click="pageBack">
          TOPに戻る
        </button>
      </div>               
    </div>
  </div>
</template>

<script>
  import MainCanvas from "~/components/MainCanvas";
  import firebase from "~/plugins/firebase"
  if (process.browser) {
  console.log(PIXI)
  }

  export default {
    data() {
      return {
        face: 0,
        selectedLayer: null,
        layers: [],
        zoomAmount: 10,
        rotateAmount: 30,
      };
    },
    computed: {
      zoomScale() {
        return this.zoomAmount / 100.0;
      },
      rLayers() {
        return this.layers.reverse();
      }
    },

    methods: {
　　　　pageBack() {
        this.$router.push("/"); 
        },          
      onAddImage(e) {
        const fileObj = e.target.files[0];
        if (!fileObj || !fileObj.type.match("image.*")) {
          return;
        }
        this.readAsBase64Image(fileObj);
      },
      readAsBase64Image(fileObj) {
        const reader = new FileReader();
        reader.onload = e => {
          this.$refs.main.addImage(e.target.result);
        };
        reader.readAsDataURL(fileObj);
      },
      onAddLayer(sprite) {
        this.layers.push(sprite);
        this.selectedLayer = sprite.name;
      },
      onZoom(sprite, amount) {
        sprite.scale.x += amount;
        sprite.scale.y += amount;
      },
      onRotate(sprite, amount) {
        sprite.angle += amount;
      },
      onDelete(sprite) {
        this.$refs.main.remove(sprite);
        this.layers.splice(this.layers.indexOf(sprite), 1);
      },
      addPict() {
        this.$refs.main.addPict();
      },
      download() {
        const data = this.$refs.main.$el.toDataURL("image/png");
        this.$refs.download.setAttribute("href", data);
      },
      upload() {
        let date = new Date();
        let Y =date.getFullYear();
        let M = ("00" + (date.getMonth()+1)).slice(-2);
        let D = ("00" + date.getDate()).slice(-2);
        let h = ("00" + date.getHours()).slice(-2);
        let m = ("00" + date.getMinutes()).slice(-2);
        let s = ("00" + date.getSeconds()).slice(-2);
        let timestamp = Y + M + D + h + m + s + '.png';        
          // 画像ファイルをbase64で取得
        var data = this.$refs.main.$el.toDataURL("image/png");        
        var storage = firebase.storage();
        var ref = storage.ref().child(timestamp);
        ref.putString(data, 'data_url').then(snapshot =>{
          console.log('錬成した人体は無事に送信されました')
        });
      },
      onSelectLayer(sprite) {
        console.log(sprite);
        this.selectedLayer = sprite.name;
      },
      layerClass(layer) {
        return {
          selected: layer.name === this.selectedLayer
        };
      },
    },
    components: {
      MainCanvas,
    },
    mounted() {
      window.twemoji.parse(document.body);
    }
  };
</script>

<style>
  input[type="file"] {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  .input-zoom {
    width: 50px;
  }

  .main {
    border: 1px solid #ccc;
  }

  .layers {
    border: 1px solid #ccc;
    padding: 5px;
  }

  .layers:empty {
    padding: 10px;
  }

  .layers li {
    border: 1px dotted #ccc;
    padding: 5px;
    font-size: 1.2rem;
  }

  .layers li + li {
    margin-top: 5px;
  }

  .mdi {
    font-size: 1.5rem;
  }

  .mdi-plus-circle {
    color: blue;
  }

  .mdi-minus-circle {
    color: green;
  }

  .mdi-close-circle {    
    margin-left: 1rem;
    color: red;
  }

  .w100 {
    width: 100%;
  }

  .mt-1 {
    margin-top: 10px;
  }

  .button{
    margin: 1rem auto;
  }
  .download, .upload, .back{
    text-align: center;
  }

  .selected {
    background: #eef;
  }
</style>
