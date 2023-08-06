<script setup lang="ts">
import {createNamespace} from "@vue3-marquee/utils/create";
import VMarquee from "@vue3-marquee/components/marquee/src/marquee.vue";
import {imageList, textList} from "@vue3-marquee/components/marquee/src/list";
import {ref} from "vue";

const loadedImages = ref(0)

</script>

<template>
  <div class="play-content">
    <h1>Vue3 Mini Marquee</h1>
    <p>一款轻量级的Vue3跑马灯组件</p>
    <h2>鸣谢</h2>
    <v-marquee :speed="20" direction="left">
      <div class="imageList">
        <img class="marquee-img" v-for="(item, index) in imageList" :key="index" :src="item" alt="">
      </div>
    </v-marquee>
    <v-marquee :speed="20" direction="right">
      <div class="imageList">
        <p class="marquee-img" v-for="(item, index) in textList" :key="index">{{ item }}</p>
      </div>
    </v-marquee>
  </div>
</template>

<style scoped lang="less">
.play-content {
  h1 {
    font-family: "Helvetica Neue", serif;
    font-weight: 700;
    font-size: 80px;
    line-height: 98px;
    color: #2E353B;
    font-style: italic;
    text-align: center;
  }

  P {
    font-size: 32px;
    color: #000;
    text-align: center;
    font-weight: bold;
  }

  h2 {
    text-align: center;
    color: #757E8F;
    font-weight: bold;
  }
}

.imageList {
  display: flex;
  .marquee-img {
    height: 64px;
    margin-right: 100px;
  }
}

</style>
