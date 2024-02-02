<script lang="ts">
import largeBag from "@/assets/image/home/souvenirs-bag.png";
import smallBag from "@/assets/image/home/souvenirs-bag-small.png";
import largeTowel from "@/assets/image/home/souvenirs-towel.png";
import smallTowel from "@/assets/image/home/souvenirs-towel-small.png";
import axios from "axios";
import { reactive } from "vue";
const CMS_URL = import.meta.env.VITE_CMS_API;
const YEAR = import.meta.env.VITE_YEAR;
export default {
  name: "Souvenirs",
  data() {
    const name = "";
    const img = [];
    const translation = [];
    let souvenirs = reactive([]);
    return {
      windowHeight: window.innerHeight,
      name,
      img,
      translation,
      souvenirs,
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },

  mounted() {
    this.getAllData();
  },
  methods: {
    handleResize() {
      this.windowHeight = window.innerWidth;
    },
    getImage(item) {
      if (item === "bag") {
        return this.windowHeight > 768 ? largeBag : smallBag;
      }
      if (item === "towel") {
        return this.windowHeight > 768 ? largeTowel : smallTowel;
      }
      return "";
    },

    async getChineseData() {
      await axios({
        url: `${CMS_URL}/items/souvenirs/?filter[year][_eq]=${YEAR}`,
        method: "get",
      })
        .then((res) => {
          Array.from(
            res.data.data.forEach((source) => {
              const item = {
                name: source.name,
                img: `${CMS_URL}/assets/${source.picture}`,
              };
              this.img.push(`${CMS_URL}/assets/${source.picture}`);
              if (this.$store.state.langu == "tw") {
                this.souvenirs.push(item);
              }
              this.translation.push(source.translations[0]);
            })
          );
        })
        .catch((error) => {
          console.log(error);
        });
      this.souvenirs.name = [];
    },

    getForigienData() {
      Array.from(
        this.translation.forEach((translation_id) => {
          axios({
            url: `${CMS_URL}/items/souvenirs_translations/?filter[id][_eq]=${translation_id}`,
            method: "get",
          }).then((res) => {
            Array.from(
              res.data.data.forEach((source) => {
                const item = {
                  name: source.name,
                  img: this.img[translation_id - 1],
                };
                this.souvenirs.push(item);
              })
            );
          });
        })
      );
    },
    async getAllData() {
      await this.getChineseData();
      if (this.$store.state.langu == "en") {
        this.getForigienData();
      }
    },
  },
};
</script>

<template>
  <section id="souvenirs" class="souvenirs-container">
    <header class="souvenirs-title">{{ $t("home.souvenir.title") }}</header>

    <div class="souvenirs-items">
      <div
        class="souvenirs-item"
        v-for="(souvenir, key) in souvenirs"
        :key="key"
      >
        <img
          :src="souvenir.img"
          class="souvenirs-item-image"
          alt="souvenirs-bag"
        />
        <div class="souvenirs-item-text">{{ souvenir.name }}</div>
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
