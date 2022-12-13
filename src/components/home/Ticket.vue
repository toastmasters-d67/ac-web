<template>
  <section class="ticket-container">
    <header class="ticket-title">Come and join us!</header>
    <button class="ticket-button">Get your ticket</button>
  </section>
</template>

<script>
export default {
  name: "Ticket",
};
</script>
<style scoped lang="scss">
.ticket-container {
  width: 100%;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-color: transparent;
  margin: 0 auto;
  padding-bottom: 250px;
  .ticket-title {
    width: 301px;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    text-align: center;
    display: block;
  }
  .ticket-button {
    width: 202px;
    height: 48px;
    background: #ffbc58;
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
