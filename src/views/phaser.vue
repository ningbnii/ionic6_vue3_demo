<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="canvas_box" ref="canvasBox">
        <div ref="myCanvas"></div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { IonPage, IonContent } from '@ionic/vue'

export default defineComponent({
  name: 'Tab3Page',
  components: {
    IonPage,
    IonContent,
  },
})
</script>

<script setup lang="ts">
import Phaser from 'phaser'
import SceneA from '@/components/Phaser'

let myCanvas = ref(null)
let canvasBox = ref(null)
console.log(myCanvas.value)

let game
onMounted(() => {
  let config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    parent: myCanvas.value,
    backgroundColor: '#2d2d2d',
    scene: [SceneA],
  }
  game = new Phaser.Game(config)
})
</script>
