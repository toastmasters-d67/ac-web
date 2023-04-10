<script>
export default {
  name: "Souvenirs",
  data() {
    return {
      windowHeight: window.innerHeight,
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowHeight = window.innerWidth;
    },
    getImage(item) {
      if (item.length) {
        if (this.windowHeight > 768) {
          return require(`@/assets/image/home/souvenirs-${item}.png`);
        } else {
          return require(`@/assets/image/home/souvenirs-${item}-small.png`);
        }
      }
      return "";
    },
  },
};
</script>

<template>
  <section id="souvenirs" class="souvenirs-container">
    <header class="souvenirs-title">{{ $t("home.souvenir.title") }}</header>
    <div class="souvenirs-items">
      <div class="souvenirs-item">
        <img
          :src="getImage('bag')"
          class="souvenirs-item-image"
          alt="souvenirs-bag"
        />
        <div class="souvenirs-item-text">{{ $t("home.souvenir.bag") }}</div>
      </div>
      <div class="souvenirs-item">
        <img
          :src="getImage('towel')"
          class="souvenirs-item-image"
          alt="souvenirs-towel"
        />
        <div class="souvenirs-item-text">{{ $t("home.souvenir.towel") }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.souvenirs-container {
  width: 100%;
  color: #004165;
  background: transparent;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  padding-top: 150px;
  padding-bottom: 200px;
  .souvenirs-title {
    font-size: 48px;
    font-weight: 600;
    line-height: 59px;
    margin: 0 auto;
    margin-bottom: 15px;
  }
  .souvenirs-coming-soon {
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    letter-spacing: 0.05em;
    margin: 70px auto;
  }
}
.souvenirs-items {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  padding-top: 70px;
  gap: 5%;
  .souvenirs-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    .souvenirs-item-image {
      width: 300px;
      height: 419px;
    }
    .souvenirs-item-text {
      color: black;
      font-size: 24px;
      font-weight: 500;
      letter-spacing: 0.05em;
      line-height: 30px;
      text-align: center;
      margin-top: 30px;
    }
  }
}

@media screen and (max-width: 768px) {
  .souvenirs-container {
    .souvenirs-title {
      font-size: 15px;
      line-height: 18px;
      margin-bottom: 29px;
    }
    .souvenirs-coming-soon {
      font-size: 10px;
      line-height: 12px;
      margin: 30px auto;
    }
  }
  .souvenirs-items {
    flex-direction: column;
    padding-top: 0px;
    gap: 40px;
    .souvenirs-item {
      .souvenirs-item-image {
        width: 200px;
        height: 200px;
      }
      .souvenirs-item-text {
        font-size: 14px;
        line-height: 16px;
        margin-top: 10px;
      }
    }
  }
}
</style>
