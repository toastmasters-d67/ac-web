<template>
  <div class="cta-buttons-container">
    <div class="cta-buttons-button">
      <img
        alt=""
        src="@/assets/image/home/cta-background-1.png"
        class="cta-buttons-background"
      />
      <span class="cta-buttons-text">Get<br />Ticket</span>
    </div>
    <div class="cta-buttons-button">
      <img
        alt=""
        src="@/assets/image/home/cta-background-2.png"
        class="cta-buttons-background"
      />
      <span class="cta-buttons-text">Contact<br />Us</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CtaButtons",
};
</script>

<style scoped lang="scss">
.cta-buttons-container {
  position: fixed;
  right: 2.5%;
  bottom: 100px;
  display: flex;
  flex-direction: column;
  .cta-buttons-button {
    width: calc(46px + 3.76vw);
    height: calc(46px + 3.76vw);
    position: relative;
    border-color: transparent;
    .cta-buttons-background {
      width: 100%;
      height: 100%;
      position: relative;
      border-color: transparent;
    }
    .cta-buttons-text {
      left: 0;
      top: calc(13.77px + 1.13vw);
      position: absolute;
      text-align: center;
      width: 100%;
      color: rgba(0, 0, 0, 1);
      font-size: calc(7.89px + 0.56vw);
      /* Prevent text to be selected */
      -webkit-user-select: none; /* Safari */
      -ms-user-select: none; /* IE 10 and IE 11 */
      user-select: none; /* Standard syntax */
    }
  }
}
</style>
