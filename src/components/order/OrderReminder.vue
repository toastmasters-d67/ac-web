<template>
  <section id="reminder" v-if="showReminder" class="reminder-container">
    <div class="reminder-modal">
      <div class="reminder-message">{{ message }}</div>
      <div class="reminder-buttons">
        <button class="button cancel-button" @click="dismiss">
          {{ $t("order.tickets.cancel") }}
        </button>
        <button class="button ok-button" @click="trigger">
          {{ $t("order.tickets.submit") }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps({
  showReminder: Boolean,
  message: String,
  dismiss: Function,
  trigger: Function
})
</script>

<style scoped>
.reminder-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  z-index: 9;

  .reminder-modal {
    width: 706px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    padding: 24px 40px;
    margin: 0 auto;
    z-index: 99;

    .reminder-message {
      color: black;
      font-size: 18px;
      font-weight: 500;
    }

    .reminder-buttons {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 24px;

      .button {
        position: relative;
        width: 124px;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        font-weight: 500;
        line-height: 22px;
        border: black solid 1px;
        border-radius: 70px;
        box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
        padding: 4px;
        margin-left: 24px;
        cursor: pointer;
      }

      .ok-button {
        color: white;
        background: #004165;
      }

      .cancel-button {
        color: black;
        background-color: white;
      }
    }
  }
}
</style>
