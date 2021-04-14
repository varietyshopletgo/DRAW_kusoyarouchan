<template>
  <div>
    <div class="columns is-centered">
      <div class="column">
        <MainCanvas
          ref="main"
          @add-layer="onAddLayer"
          @select-layer="onSelectLayer"
        />
      </div>
      <div class="column">
        <label class="label">色</label>
        <div>
          <p class="buttons">
            <button class="button is-primary is-large" @click="addPict">
              <span class="icon">
                <i class="fas fa-bold"></i>
              </span>
            </button>
            <button class="button is-primary is-large">
              <span class="icon">
                <i class="fas fa-bold"></i>
              </span>
            </button>
            <button class="button is-primary is-large">
              <span class="icon">
                <i class="fas fa-bold"></i>
              </span>
            </button>
            <button class="button is-primary is-large">
              <span class="icon">
                <i class="fas fa-bold"></i>
              </span>
            </button>
            <button class="button is-primary is-large">
              <span class="icon">
                <i class="fas fa-bold"></i>
              </span>
            </button>
            <button class="button is-primary is-large">
              <span class="icon">
                <i class="fas fa-bold"></i>
              </span>
            </button>
          </p>
          <!-- <ul class="stamps">
            <li
              v-for="(stamp, i) in stamps"
              :key="i"
            ><a @click="addStamp">{{stamp}}</a></li>
          </ul> -->
        </div>
        <hr/>
        <div>
          <label class="label">レイヤー(この機能いる？)</label>
          <ul class="layers">
            <li v-if="layers.length < 1">なし</li>
            <li
              v-for="layer in rLayers"
              :key="layer.name"
              draggable="true"
              :class="layerClass(layer)"
            >
              <p>{{ layer.name }}</p>
              <div>
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
              </div>
            </li>
          </ul>
          <div class="mt-1">
            <label>ズーム量(%)</label>
            <input
              class="is-inline-block"
              style="width: 60px"
              type="number"
              v-model.number="zoomAmount"
            />
            <label>回転量(°)</label>
            <input
              class="is-inline-block"
              style="width: 60px"
              type="number"
              v-model.number="rotateAmount"
            />
            <label>表情(キャンバス)</label>
            <select
              v-model="face"
              style="width: 80px"
              @change="changeFace"
            >
              <option value="0">🙂</option>
              <option value="1">😄</option>
              <option value="2">😧</option>
            </select>
          </div>
        </div>
        <hr/>
        <label class="w100 button is-primary is-large">
          画像を追加する
          <input
            class="select-image-button"
            type="file"
            accept="image/*"
            @change="onAddImage"
          >
        </label>        
      </div>
    </div>
    <div class="columns column">
      <a
        ref="download"
        download="dasa-t.png"
      >
        <button
          class="button is-primary is-large"
          @click="download"
        >＞＞＞画像をダウンロード＜＜＜
        </button>
      </a>
    </div>
  </div>
</template>

<script>
  import MainCanvas from "~/components/MainCanvas";
  import stampsJson from "~/store/stamps.json";
  import InputTextForm from "~/components/InputTextForm";
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
        stamps: stampsJson
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
      onAddText(obj) {
        this.$refs.main.addText(obj)
      },
      addStamp(e) {
        this.$refs.main.addImage(e.target.src);
      },
      addPict() {
        this.$refs.main.addPict();
      },
      download() {
        const data = this.$refs.main.$el
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        this.$refs.download.setAttribute("href", data);
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
      changeFace(event) {
        console.log(event);
        this.$refs.main.changeFace(event.target.value);
      }
    },
    components: {
      MainCanvas,
      InputTextForm
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

  .stamps {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .stamps li {
    padding: 2px;
  }

  .stamps a {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px;
    display: inline-block;
    width: 100px;
  }

  .selected {
    background: #eef;
  }
</style>
