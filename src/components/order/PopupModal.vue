<template>
  <transition name="fade">
    <div class="popup-modal" v-if="isVisible">
      <div class="window">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "PopupModal",
  data: () => ({
    isVisible: false,
  }),
  methods: {
    open() {
      this.isVisible = true;
    },
    close() {
      this.isVisible = false;
    },
  },
};
</script>

<style scoped>
/* css class for the transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.popup-modal {
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 99;
}

.window {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 40px;
  width: 706px;
  background: #fff;
  border-radius: 4px;
  margin: 0 auto;
  z-index: 99;
}
</style>
