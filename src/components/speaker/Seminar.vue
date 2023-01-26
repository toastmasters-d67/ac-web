<template>
  <section class="seminar-container">
    <div class="seminar-box">
      <header class="seminar-title">Seminar</header>
      <div class="seminar-separator"></div>
      <div class="seminar-content">
        <div class="seminar-content-half">
          <div class="seminar-row">
            <span class="seminar-row-title">Topic of Seminar |</span>
            <span class="seminar-row-subtitle">{{ topic }}</span>
          </div>
          <div class="seminar-row">
            <span class="seminar-row-title">Time |</span>
            <span class="seminar-row-subtitle">{{ time }}</span>
          </div>
          <div class="seminar-row">
            <span class="seminar-row-title">Location |</span>
            <span class="seminar-row-subtitle">{{ location }}</span>
          </div>
        </div>
        <div class="seminar-content-half">
          <div class="seminar-row">
            <span class="seminar-row-title">Introduction |</span>
            <span class="seminar-row-text">
              {{ introduction }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.seminar-container {
  width: 100%;
  color: black;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  padding-top: 100px;
  padding-bottom: 100px;
  .seminar-box {
    width: 1200px;
    background: rgba(255, 255, 255, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    padding: 25px;
    margin: 0 auto;
    .seminar-title {
      font-size: 40px;
      font-weight: 400;
      line-height: 60px;
    }
    .seminar-separator {
      width: 1200px;
      border: 1px solid #979797;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .seminar-content {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      .seminar-content-half {
        width: 45%;
        display: flex;
        flex-direction: column;
      }
      .seminar-row {
        display: flex;
        flex-direction: column;
        .seminar-row-title {
          color: rgba(33, 67, 102, 0.76);
          font-size: 32px;
          line-height: 60px;
          text-align: left;
        }
        .seminar-row-subtitle {
          font-size: 32px;
          line-height: 60px;
          text-align: left;
          margin-bottom: 50px;
        }
        .seminar-row-text {
          font-size: 24px;
          line-height: 50px;
          text-align: left;
        }
      }
    }
  }
}
</style>

<script>
export default {
  name: "SpeakerSeminar",
  props: {
    topic: {
      type: String,
      default: "",
    },
    time: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    introduction: {
      type: String,
      default: "",
    },
  },
};
</script>
