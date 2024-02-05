<template>
  <section id="venue" class="venue-container">
    <header class="venue-title">{{ $t("home.venue.title") }}</header>
    <div class="venue-box">
      <span class="venue-box-name">{{ name }}</span>
      <div class="venue-box-row">
        <i class="pi pi-phone venue-box-icon"></i>
        <span class="venue-box-text"
          ><a :href="`tel:${telephone}`">{{ telephone }}</a></span
        >
      </div>
      <div class="venue-box-row">
        <i class="pi pi-map-marker venue-box-icon"></i>
        <span class="venue-box-text">{{ address }}</span>
      </div>
      <a :href="link" class="venue-box-button" target="_blank">{{
        $t("home.venue.show")
      }}</a>
      <img :src="img" class="venue-box-map" alt="map" />
    </div>
    <div class="venue-bottom-buttons">
      <router-link to="/venue" class="button-bottom">
        <img
          src="@/assets/icon/home/transportation.svg"
          class="button-icon"
          alt="transportation"
        />
        <span class="button-text">{{ $t("home.venue.transporation") }}</span>
      </router-link>
      <router-link to="/accommodation" class="button-bottom">
        <img
          src="@/assets/icon/home/accommodation.svg"
          class="button-icon"
          alt="accommodation"
        />
        <span class="button-text">{{ $t("home.venue.accommodation") }}</span>
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { useLanguageStore } from "@/stores";

const CMS_URL = import.meta.env.VITE_CMS_API;
const YEAR = import.meta.env.VITE_YEAR;
const store = useLanguageStore();

const name = ref("");
const telephone = ref("");
const address = ref("");
const img = ref("");
const link = ref("");

const getChineseData = async () => {
  try {
    const response = await axios.get(
      `${CMS_URL}/items/venue/?filter[year][_eq]=${YEAR}`
    );
    const data = response.data.data[0]; // 假設只有一條數據
    name.value = data.name;
    telephone.value = data.telephone;
    address.value = data.address;
    link.value = data.link;
    img.value = `${CMS_URL}/assets/${data.picture}`;
  } catch (error) {
    console.error(error);
  }
};

const getForigienData = async () => {
  try {
    const response = await axios.get(
      `${CMS_URL}/items/venue_translations/?filter[id][_eq]=${translation}`
    );
    const data = response.data.data[0]; // 假設只有一條數據
    name.value = data.name;
    address.value = data.address;
  } catch (error) {
    console.error(error);
  }
};

const getAllData = async () => {
  await getChineseData();
  if (store.language === "en") {
    await getForigienData();
  }
};

onMounted(getAllData);
</script>

<style scoped lang="scss">
.venue-container {
  width: 100%;
  color: #004165;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  padding-top: 150px;
  padding-bottom: 50px;

  a {
    color: #004165;
    text-decoration: none;
    border-color: transparent;
  }

  .venue-title {
    font-size: 48px;
    font-weight: 600;
    line-height: 59px;
    margin: 0 auto;
    margin-bottom: 15px;
  }

  .venue-bottom-buttons {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12.5%;

    .button-bottom {
      width: 265px;
      height: 45px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      border: 2px solid rgba(0, 65, 101, 0.5);
      padding: 8px 24px;
      gap: 8px;

      .button-icon {
        width: 20px;
      }

      .button-text {
        color: #004165;
        font-size: 22px;
        font-weight: 500;
        line-height: 27px;
        text-align: center;
      }

      .button-arrow-right {
        color: #004165;
      }
    }
  }
}

.venue-box {
  width: 87.2%;
  max-width: 915px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-color: transparent;
  margin: 0 auto;

  .venue-box-name {
    font-size: 36px;
    font-weight: 400;
    line-height: 44px;
    margin-top: 50px;
    margin-bottom: 30px;
  }

  .venue-box-row {
    display: flex;
    flex-direction: row;
    align-items: baseline;

    .venue-box-icon {
      font-size: 18px;
      margin-right: 15px;
    }

    .venue-box-text {
      font-size: 24px;
      font-weight: 400;
      line-height: 29px;
      margin-bottom: 15px;
      text-align: left;
    }
  }

  .venue-box-button {
    background: #f5db8c;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    border-radius: 20px;
    padding: 5px 10px;
    gap: 10px;
  }

  .venue-box-map {
    width: 100%;
    aspect-ratio: 902 / 479;
    margin-top: 25px;
    border: 3px solid;
    border-color: #a7c4d4;
    padding: 10px;
    margin-bottom: 60px;
  }
}

@media screen and (max-width: 768px) {
  .venue-container {
    padding-top: 100px;
    padding-bottom: 0px;

    .venue-title {
      font-size: 15px;
      line-height: 18px;
      margin-bottom: 30px;
    }

    .venue-bottom-buttons {
      justify-content: space-evenly;
      gap: 0;

      .button-bottom {
        max-width: 180px;
        width: 42.67%;
        height: 36px;
        border: 1px solid rgba(0, 65, 101, 0.5);

        .button-icon {
          width: 16px;
        }

        .button-text {
          font-size: 14px;
          line-height: 17px;
        }
      }
    }
  }

  .venue-box {
    .venue-box-name {
      font-size: 12px;
      line-height: 15px;
      margin-top: 0px;
      margin-bottom: 16px;
    }

    .venue-box-row {
      .venue-box-icon {
        font-size: 9px;
        margin-right: 8px;
      }

      .venue-box-text {
        font-size: 10px;
        line-height: 12px;
        margin-bottom: 8px;
      }
    }

    .venue-box-button {
      font-size: 10px;
      line-height: 12px;
    }

    .venue-box-map {
      border: 0.98px solid;
      padding: 3px;
      margin-top: 16px;
      margin-bottom: 16px;
    }
  }
}
</style>
