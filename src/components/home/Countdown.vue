<template>
  <section class="countdown-container">
    <div class="countdown-item">
      <span class="countdown-unit">Days</span>
      <div class="countdown-circle">
        <span class="countdown-number">98</span>
      </div>
    </div>
    <div class="countdown-item">
      <span class="countdown-unit">Hours</span>
      <div class="countdown-circle">
        <span class="countdown-number">06</span>
      </div>
    </div>
    <div class="countdown-item">
      <span class="countdown-unit">Minutes</span>
      <div class="countdown-circle">
        <span class="countdown-number">27</span>
      </div>
    </div>
    <div class="countdown-item">
      <span class="countdown-unit">Seconds</span>
      <div class="countdown-circle">
        <span class="countdown-number">40</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Ticket",
};
</script>
<style scoped lang="scss">
.countdown-container {
  width: 100%;
  background: #e5e5e5;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  margin: 0 auto;
  padding-top: 150px;
  padding-bottom: 150px;
  div:nth-child(-n + 4) {
    margin-right: 50px;
  }
  .countdown-item {
    width: 200px;
    height: 273px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-style: normal;
    margin-top: 50px;
    margin-bottom: 50px;
    .countdown-unit {
      color: white;
      font-size: 32px;
      font-weight: 500;
      line-height: 60px;
      text-align: center;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .countdown-circle {
      position: relative;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 4px solid #bc92b7;
      border-top-color: white;
      border-left-color: white;
      border-bottom-color: white;
      // animation: spin 1s ease-in-out infinite;
      // animation: spin 60s linear infinite;
      margin: 0 auto;
      .countdown-number {
        position: absolute;
        left: 35px;
        top: 70px;
        font-size: 96px;
        font-weight: 400;
        line-height: 70px;
        text-align: censter;
        letter-spacing: 0.05em;
        background: linear-gradient(38.59deg, #de809c 11.59%, #675de2 77.61%),
          white;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        // text-shadow: 0px 6px 4px #c4c4c4;
      }
    }
  }
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
