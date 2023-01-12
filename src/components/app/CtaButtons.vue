<template>
  <div class="cta-buttons-container">
    <div class="cta-button ticket">
      <span class="cta-button-text">Get Ticket</span>
    </div>
    <div class="cta-button contact">
      <span class="cta-button-text">Contact Us</span>
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
  bottom: 71px;
  display: flex;
  flex-direction: column;
  .cta-button {
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-color: transparent;
    border-radius: 50%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25), inset 2px 1px 10px white;
    padding-top: 5px;
    cursor: pointer;
    .cta-button-text {
      width: 59px;
      height: 40px;
      color: black;
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      text-align: center;
    }
  }
  .ticket {
    background: linear-gradient(107.49deg, #c9d9e3 23.75%, #ffd099 83.94%);
    margin-bottom: 15px;
  }
  .contact {
    background: linear-gradient(45.28deg, #d6bbea 25.9%, #e7becb 74.88%);
  }
}
/* Mobile */
@media (max-width: 768px) {
  .cta-buttons-container {
    .cta-button {
      width: 60px;
      height: 60px;
      .cta-button-text {
        top: 18px;
        font-size: 10px;
      }
    }
  }
}
</style>
