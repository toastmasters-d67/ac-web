<template>
  <div class="ticket-container">
    <span class="ticket-title">Come and join us!</span>
    <button class="ticket-button">Get your ticket</button>
  </div>
</template>

<script>
export default {
  name: "Ticket",
};
</script>
<style scoped lang="scss">
.ticket-container {
  width: 296px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-color: transparent;
  margin: 0 auto;
  margin-bottom: 350px;
  .ticket-title {
    width: 301px;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    text-align: center;
    display: block;
  }
  .ticket-button {
    width: 201px;
    height: 48px;
    background-color: #f2df74;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    box-shadow: 0px 6px 12px 0px rgba(0, 0, 0, 0.15);
    border-radius: 38px;
    border-color: transparent;
    padding: 8px 24px;
    margin-top: 32px;
    margin-bottom: 50px;
    cursor: pointer;
  }
}
</style>
