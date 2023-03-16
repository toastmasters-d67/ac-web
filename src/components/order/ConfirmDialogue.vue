<template>
  <popup-modal ref="popup">
    <div class="message">{{ message }}</div>
    <div class="buttons">
      <button class="button cancel-button" @click="_cancel">
        {{ cancelButton }}
      </button>
      <button class="button ok-button" @click="_confirm">
        {{ okButton }}
      </button>
    </div>
  </popup-modal>
</template>

<script>
import PopupModal from "./PopupModal.vue";

export default {
  name: "ConfirmDialogue",
  components: { PopupModal },

  data: () => ({
    // Parameters that change depending on the type of dialogue
    message: undefined, // Main text content
    okButton: undefined, // Text for confirm button; leave it empty because we don't know what we're using it for
    cancelButton: "Go Back", // text for cancel button
    // Private variables
    resolvePromise: undefined,
    rejectPromise: undefined,
  }),
  methods: {
    show(opts = {}) {
      this.message = opts.message;
      this.okButton = opts.okButton;
      if (opts.cancelButton) {
        this.cancelButton = opts.cancelButton;
      }
      // Once we set our config, we tell the popup modal to open
      this.$refs.popup.open();
      // Return promise so the caller can get results
      return new Promise((resolve, reject) => {
        this.resolvePromise = resolve;
        this.rejectPromise = reject;
      });
    },
    _confirm() {
      this.$refs.popup.close();
      this.resolvePromise(true);
    },
    _cancel() {
      this.$refs.popup.close();
      this.resolvePromise(false);
      // Or you can throw an error
      // this.rejectPromise(new Error('User canceled the dialogue'))
    },
  },
};
</script>

<style scoped>
.message {
  font-weight: 500;
  font-size: 18px;
  color: black;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 24px;
}
.button {
  width: 124px;
  height: 48px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
  border: black solid 1px;
  border-radius: 70px;
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
</style>
