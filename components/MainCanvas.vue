<template>
  <canvas class="main-canvas"></canvas>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.1.3/pixi.min.js"></script>
<script>
let LAYER_ID = 0;
//キャンバスの大きさ
const WIDTH = 600;
const HEIGHT = 600;

export default {
  data() {
    return {
      charaSprite: null,
      layerMask: null,
      layerContainer: null,
      baseTextures: [
        PIXI.Texture.from("mask.png")
      ],
      drawTextures: [
        PIXI.Texture.from("blue-01.png"),
        PIXI.Texture.from("blue-02.png"),
        PIXI.Texture.from("blue-03.png"),
        PIXI.Texture.from("blue-04.png"),
        PIXI.Texture.from("blue-05.png"),
        PIXI.Texture.from("blue-06.png"),
        PIXI.Texture.from("blue-07.png"),
        PIXI.Texture.from("orange-01.png"),
        PIXI.Texture.from("orange-02.png"),
        PIXI.Texture.from("orange-03.png"),
        PIXI.Texture.from("orange-04.png"),
        PIXI.Texture.from("orange-05.png"),
        PIXI.Texture.from("orange-06.png"),
        PIXI.Texture.from("orange-07.png"),
        PIXI.Texture.from("orange-08.png"),
        PIXI.Texture.from("mix-01.png"),
        PIXI.Texture.from("mix-02.png"),
        PIXI.Texture.from("mix-03.png")      
] 
    };
  },

  mounted() {
    this.app = new PIXI.Application({
      width: window.innerWidth,
      height: window.innerWidth,
      backgroundColor: 0xffffff,
      view: this.$el,
      preserveDrawingBuffer: true
    });
    this.layerContainer = new PIXI.Container();
    // let base = this.loadBaseImage();
    let overlay = this.loadOverlayImage();
    this.app.stage.addChild(this.layerContainer, overlay);
  },
  methods: {
    // 服のしわとかを乗算で被せるレイヤー(ここに画用紙らしさを乗せる？)
    loadOverlayImage() {
      let sprite = new PIXI.Sprite.from("paper_texture.png");
      sprite.width = this.app.renderer.width;
      sprite.height = this.app.renderer.height;
      sprite.blendMode = PIXI.BLEND_MODES.MULTIPLY;
      return sprite;
    },

    // ベースレイヤー
    // loadBaseImage() {
    //   let sprite = new PIXI.Sprite.from(this.baseTextures[0]);
    //   sprite.width = this.app.renderer.width;
    //   sprite.height = this.app.renderer.height;
    //   this.charaSprite = sprite;
    //   return sprite;
    // },

    // 追加筆跡レイヤー
    addPict() {
      let pictNo = Math.floor( Math.random() * this.drawTextures.length);
      let sprite = new PIXI.Sprite.from(this.drawTextures[pictNo]);
      sprite.x = this.app.renderer.width / 2;
      sprite.y = this.app.renderer.height / 2;
      sprite.anchor.x = sprite.anchor.y = 0.5;
      sprite.scale.x = 0.5;
      sprite.scale.y = 0.5;
      sprite.blendMode = PIXI.BLEND_MODES.MULTIPLY;      
      sprite.name = "画像" + LAYER_ID++;
      this.subscribe(sprite);
      this.layerContainer.addChild(sprite);
      this.$emit("add-layer", sprite);
    },


    // 追加画像レイヤー
    addImage(path) {
      let sprite = PIXI.Sprite.from(path, { crossOrigin: true });
      // sprite.parentLayer = this.imgLayer;
      sprite.x = this.app.renderer.width / 2;
      sprite.y = this.app.renderer.height / 2;
      sprite.anchor.x = sprite.anchor.y = 0.5;
      sprite.name = "画像" + LAYER_ID++;
      this.subscribe(sprite);
      this.layerContainer.addChild(sprite);
      this.$emit("add-layer", sprite);
    },
    // テキストレイヤー
    addText(obj) {
      let sprite = new PIXI.Text(obj.text, {
        fontSize: obj.size,
        fill: obj.color,
        fontFamily: obj.font
      });
      sprite.x = this.app.renderer.width / 2;
      sprite.y = this.app.renderer.height / 2;
      sprite.anchor.x = sprite.anchor.y = 0.5;
      sprite.name = obj.text;
      this.subscribe(sprite);
      this.layerContainer.addChild(sprite);
      this.$emit("add-layer", sprite);
    },

    //ベース変更
    changeFace(id) {
      this.charaSprite.texture = this.baseTextures[id];
    },

    //削除
    remove(sprite) {
      this.layerContainer.removeChild(sprite);
    },

    //移動操作関係
    subscribe(obj) {
      obj.interactive = true;
      obj
        .on("pointerdown", this.onDragStart)
        .on("pointerup", this.onDragEnd)
        .on("pointerupoutside", this.onDragEnd)
        .on("pointermove", this.onDragMove)
        // オブジェクトがポインタにくっ付いて離れない現象を軽減させる
        .on("click", this.onDragEnd);
    },
    onDragStart(event) {
      if (!event.target.dragging) {
        event.target.data = event.data;
        event.target.dragging = true;
        event.target.alpha = 0.7;
        event.target.dragPoint = event.data.getLocalPosition(
          event.target.parent
        );
        event.target.dragPoint.x -= event.target.x;
        event.target.dragPoint.y -= event.target.y;
        this.$emit("select-layer", event.target);
      }
    },
    onDragEnd(event) {
      if (event.target.dragging) {
        event.target.dragging = false;
        event.target.alpha = 1;
        // set the interaction data to null
        event.target.data = null;
      }
    },
    onDragMove(event) {
      if (event.target && event.target.dragging) {
        const newPosition = event.target.data.getLocalPosition(
          event.target.parent
        );
        event.target.x = newPosition.x - event.target.dragPoint.x;
        event.target.y = newPosition.y - event.target.dragPoint.y;
      }
    }
  }
};
</script>

<style>
.main-canvas {
  margin: 2rem 0;
  border: 1px solid #ccc;
}
</style>
