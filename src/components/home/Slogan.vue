<script>
import axios from "axios";
const CMS_URL = import.meta.env.VITE_CMS_API;
const YEAR = import.meta.env.VITE_YEAR;
export default {
  name: "Slogan",
  data() {
    const date = "";
    const title = "";
    const slogan = "";
    const longWelcome = "";
    const shortWelcome = "";
    const img = "";
    const translation = [];

    return {
      date,
      title,
      slogan,
      longWelcome,
      shortWelcome,
      img,
      translation,
      windowHeight: window.innerHeight,
      sloganText: this.$t("home.slogan.text.desktop"),
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
    // get data from directus
    async getChineseData() {
      console.log("first request2121");
      await axios({
        url: `${CMS_URL}/items/general/?filter[year][_eq]=${YEAR}`,
        method: "get",
      })
        .then((res) => {
          Array.from(
            res.data.data.forEach((source) => {
              this.date = source.date;
              this.title = source.title;
              this.slogan = source.slogan;
              this.longWelcome = source.longwelcome;
              this.shortWelcome = source.shortwelcome;
              this.img = source.img;
              this.translation.push(source.translations[0]);
            }),
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getForigienData() {
      console.log("second request");
      Array.from(
        this.translation.forEach((translation_id) => {
          axios({
            url: `${CMS_URL}/items/general_translations/?filter[id][_eq]=${translation_id}`,
            method: "get",
          }).then((res) => {
            Array.from(
              res.data.data.forEach((source) => {
                this.date = source.date;
                this.title = source.title;
                this.slogan = source.slogan;
                this.longWelcome = source.longwelcome;
                this.shortWelcome = source.shortwelcome;
              }),
            );
          });
        }),
      );
    },
    async getAllData() {
      await this.getChineseData();
      if (this.$store.state.langu == "en") {
        this.getForigienData();
      }
    },

    handleResize() {
      this.windowHeight = window.innerWidth;
      if (this.windowHeight > 768) {
        this.sloganText = this.$t("home.slogan.text.desktop");
      } else {
        this.sloganText = this.$t("home.slogan.text.mobile");
      }
    },
    getStyle() {
      const background = import("@/assets/image/home/slogan-background.png");
      return `background: url(${background}) no-repeat center bottom/cover`;
    },
  },
};
</script>

<template>
  <section class="slogan-container">
    <img
      alt="Key Vision"
      class="slogan-kv-desktop"
      src="@/assets/image/home/key-vision.png"
    />
    <img
      alt="Key Vision 1"
      class="slogan-kv-mobile1"
      src="@/assets/image/home/key-vision-mobile1.png"
    />
    <div class="slogan-date">{{ date }}</div>
    <header class="slogan-title">{{ title }}</header>
    <div class="slogan-word">
      <span>
        {{ slogan }}
      </span>
    </div>
    <span class="slogan-text">
      {{ longWelcome }}
    </span>
    <img alt="Key Vision 2" class="slogan-kv-mobile2" :src="img" />
  </section>
</template>

<style scoped lang="scss">
.slogan-container {
  width: 100%;
  min-height: 548px;
  display: flex;
  flex-direction: column;
  color: white;
  font-style: normal;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  text-align: left;
  padding-top: 73px;
  padding-left: 57px;
  padding-bottom: 50px;
  background: #f8f0e9;

  .slogan-kv-desktop {
    position: absolute;
    max-width: 345px;
    width: 24vw;
    right: 6.4%;
    top: 300px;
  }

  .slogan-kv-mobile1 {
    display: none;
  }

  .slogan-kv-mobile2 {
    display: none;
  }

  .slogan-date {
    width: fit-content;
    color: #214366;
    font-size: 32px;
    font-weight: 600;
    line-height: 39px;
    gap: 10px;
    padding: 0px 10px;
  }

  .slogan-year {
    color: #214366;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.1em;
    line-height: 20px;
    text-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
    transform: rotate(-90deg);
  }

  .slogan-title {
    color: #214366;
    font-weight: 500;
    font-size: 32px;
    line-height: 39px;
    text-shadow: 0px 4px 4px rgba(206, 212, 218, 0.25);
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 20px;
  }

  .slogan-word {
    width: 75%;
    display: flex;
    flex-direction: column;
    background: #214366;
    font-size: 55px;
    font-weight: 600;
    line-height: 70px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .slogan-text {
    width: 63.5%;
    color: #757575;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.02em;
    line-height: 32px;
    margin-top: 15px;
  }
}

@media screen and (max-width: 1024px) {
  .slogan-container {
    .slogan-word {
      font-size: 44px;
      line-height: 60px;
    }
  }
}

@media screen and (max-width: 768px) {
  .slogan-container {
    align-items: center;
    text-align: center;
    min-height: 213px;
    padding-top: 60px;
    padding-left: 0px;
    padding-bottom: 30px;

    .slogan-kv-desktop {
      display: none;
    }

    .slogan-kv-mobile1 {
      position: absolute;
      display: block;
      top: 90px;
      left: 1.33%;
    }

    .slogan-kv-mobile2 {
      display: flex;
      align-self: flex-end;
      margin-top: 13px;
    }

    .slogan-date {
      font-size: 12px;
      line-height: 15px;
      padding: 0px 3.2px;
    }

    .slogan-year {
      width: 14px;
      font-size: 5px;
      line-height: 10px;
    }

    .slogan-title {
      font-size: 12px;
      line-height: 15px;
      padding-top: 0px;
      margin-top: 0px;
      margin-bottom: 16px;
    }

    .slogan-word {
      font-size: 20px;
      line-height: 20px;
    }

    .slogan-text {
      width: 86.49%;
      min-width: 200px;
      font-weight: 500;
      font-size: 11px;
      line-height: 15px;
      letter-spacing: 0.05em;
      margin-top: 31px;
    }
  }
}
</style>
