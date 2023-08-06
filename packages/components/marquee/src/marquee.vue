<template>
  <div class="marquee-container" @mouseenter="pause" @mouseleave="resume">
    <div ref="marqueeContent" class="marquee-content" :style="marqueeContentStyles">
      <slot></slot>
    </div>
    <div class="marquee-content" :style="marqueeContentStyles">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import {computed, reactive, ref} from "vue";

const marqueeContent = ref(null)

const props = defineProps({
  speed: {
    type: Number,
    default: 20
  },
  direction: 'left' | 'right',
  delay: {
    type: String,
    default: '1s'
  }
})

const playState = ref('running')
function pause() {
  playState.value = 'paused';
}
function resume() {
  playState.value = 'running';
}

const marginLeft = computed(() => `${marqueeContent.value}px`)
console.log('marqueeContent.value',marqueeContent.value)
const duration = marginLeft / props.speed

const marqueeContentStyles = reactive({
  animationDirection: props.direction === 'right' ? 'reverse' : undefined,
  animationDuration: `${duration}s`,
  animationDelay: props.delay,
  animationPlayState: playState
})

</script>

<style scoped>
.marquee-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
}

.marquee-content {
  display: inline-block;
  animation: marquee 20s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
