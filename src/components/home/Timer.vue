<template>
  <div class="timer">
    <div class="timer-circle">
      <div class="timer-segment" :style="getStyles[0]"></div>
      <div class="timer-segment" :style="getStyles[1]"></div>
      <div class="timer-segment" :style="getStyles[2]"></div>
      <div class="timer-segment" :style="getStyles[3]"></div>
    </div>
    <div class="timer-inner"></div>
    <div class="timer-value">{{ neatNumber }}</div>
    <div class="timer-ball" :style="getBall"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  value: {
    type: Number,
    default: 0
  },
  full: {
    type: Number,
    default: 60
  }
})

const neatNumber = computed(() => neat(props.value))
const angle = computed(() => getAngle(props.value, props.full))

function neat (number: number): string {
  if (number < 0) {
    return ''
  }
  if (number < 10) {
    return `0${number.toString()}`
  }
  return number.toString()
}

function getAngle (value: number, full: number): number {
  value = +value
  const angle = Math.floor((360 * value) / full)
  return angle
}

const getStyles = computed(() => {
  const styles = []
  const quotient = Math.floor(angle.value / 90)
  const remainder = angle.value % 90
  const rotate = [3, 0, 1, 2]
  rotate.forEach((value) => {
    const key = rotate.indexOf(value)
    let skew = 0
    if (key > quotient) {
      skew = 90
    } else if (key === quotient) {
      skew = 90 - remainder
    }
    const style = `transform: rotate(${value * 90}deg) skew(${skew}deg)`
    styles.push(style)
  })
  return styles
})

const getBall = computed(() => {
  let ball = angle.value - 90
  if (ball < 0) {
    ball += 360
  }
  return `transform: rotate(${ball}deg)`
})
</script>

<style scoped lang="scss">
@font-face {
  font-family: "Archivo";
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  unicode-range: U+000-5FF;
  src:
    local("Archivo"),
    url("@/assets/fonts/Archivo/Archivo-Regular.woff2") format("woff2"),
    url("@/assets/fonts/Archivo/Archivo-Regular.woff") format("woff");
}

.timer {
  position: relative;
  display: inline-block;
  background: transparent;
  margin: 0 auto;

  .timer-circle {
    position: relative;
    width: 200px;
    height: 200px;
    background: white;
    border-radius: 50%;
    overflow: hidden;

    .timer-segment {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100vw;
      height: 100vw;
      background: linear-gradient(38.59deg, #de809c 11.59%, #675de2 77.61%),
        white;
      transform-origin: 0 0;
    }
  }

  .timer-inner {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 190px;
    height: 190px;
    background: rgba(233, 238, 235, 1);
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  .timer-value {
    position: absolute;
    left: 50%;
    top: 50%;
    background: linear-gradient(38.59deg, #de809c 11.59%, #675de2 77.61%), white;
    font-family: "Archivo";
    font-size: 96px;
    font-weight: 400;
    line-height: 80px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    transform: translateX(-50%) translateY(-50%);
  }

  .timer-ball {
    display: block;
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;
    width: 50%;
    height: 4px;
    background: transparent;
    transform-origin: 0 0;
  }

  .timer-ball:before {
    content: "";
    position: absolute;
    right: -4px;
    width: 15px;
    height: 15px;
    background: linear-gradient(218.6deg, #de809c 31%, #7c51d2 100%);
    border-radius: 50%;
    box-shadow: 0 0 20px red;
  }
}

@media screen and (max-width: 768px) {
  .timer {
    .timer-circle {
      width: 63px;
      height: 63px;
    }

    .timer-inner {
      width: 60px;
      height: 60px;
    }

    .timer-value {
      font-size: 20px;
      line-height: 30px;
    }

    .timer-ball {
      top: calc(50% - 1px);
    }

    .timer-ball:before {
      right: -3px;
      width: 8px;
      height: 8px;
    }
  }
}
</style>
