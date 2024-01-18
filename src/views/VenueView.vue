<template>
  <article id="venue" class="venue-container">
    <Breadcrumb v-once />
    <div class="venue-box">
      <section id="map" class="venue-section">
        <img
          src="@/assets/image/home/venue-map.png"
          class="venue-map"
          alt="map"
        />
      </section>
      <section id="map" class="venue-section">
        <header class="venue-title">{{ $t("home.venue.venue") }}</header>
        <div class="venue-row">
          <i class="pi pi-phone venue-row-icon"></i>
          <span class="venue-row-text">(02) 2649-3034</span>
        </div>
        <div class="venue-row">
          <i class="pi pi-map-marker venue-row-icon"></i>
          <span class="venue-row-text">
            {{ $t("home.venue.address") }}
          </span>
        </div>
        <div class="venue-row">
          <a
            href="https://goo.gl/maps/hk4DmRVfQ2e4q5FA9"
            class="venue-row-button"
            target="_blank"
          >
            {{ $t("home.venue.show") }}
          </a>
        </div>
      </section>
      <section id="car" class="venue-section">
        <div class="venue-row">
          <div class="venue-section-button">{{ $t("venue.car.title") }}</div>
        </div>
        <div class="venue-section-direction">
          <ol>
            <li v-for="(item, key) in $tm('venue.car.steps')" :key="key">
              {{ $rt(item) }}
            </li>
          </ol>
        </div>
      </section>
      <section id="metro" class="venue-section">
        <div class="venue-row">
          <div class="venue-section-button">{{ $t("venue.metro.title") }}</div>
        </div>
        <div class="venue-section-direction">
          <span>
            {{ $t("venue.metro.content") }}
          </span>
          <ol>
            <li v-for="(item, key) in $tm('venue.metro.steps')" :key="key">
              {{ $rt(item) }}
            </li>
          </ol>
        </div>
      </section>
      <section id="bus" class="venue-section">
        <div class="venue-row">
          <div class="venue-section-button">{{ $t("venue.bus.title") }}</div>
        </div>
        <div class="venue-section-direction">
          <span>
            {{ $t("venue.bus.content") }}
          </span>
        </div>
      </section>
    </div>
  </article>
</template>

<style scoped lang="scss">
.venue-container {
  width: 100%;
  color: #004165;
  background: transparent;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  padding-bottom: 50px;

  a {
    color: #004165;
    text-decoration: none;
    border-color: transparent;
  }

  .venue-box {
    width: 87.2%;
    max-width: 915px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-color: transparent;
    margin: 0 auto;
  }

  .venue-title {
    font-size: 48px;
    font-weight: 600;
    line-height: 59px;
    margin: 0 auto;
    margin-bottom: 15px;
  }
}

.venue-section {
  text-align: left;
  margin-top: 35px;
  margin-bottom: 35px;

  .venue-map {
    width: 100%;
    aspect-ratio: 902 / 479;
    border: 3px solid #a7c4d4;
    padding: 10px;
    margin: 0 auto;
  }

  .venue-section-button {
    background: linear-gradient(267.67deg, #ddc8bf 5.3%, #a7c4d4 95.87%);
    font-size: 25px;
    line-height: 30px;
    border-radius: 30px;
    padding: 10px 30px;
    margin-bottom: 20px;
  }

  .venue-section-direction {
    width: 97.05%;
    max-width: 888px;
    color: #004165;
    font-size: 20px;
    line-height: 26px;

    li {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  .venue-row {
    display: flex;
    flex-direction: row;
    align-items: baseline;

    .venue-row-icon {
      font-size: 18px;
      margin-right: 15px;
    }

    .venue-row-text {
      font-size: 24px;
      font-weight: 400;
      line-height: 29px;
      margin-bottom: 15px;
      text-align: left;
    }

    .venue-row-button {
      background: #f5db8c;
      font-size: 20px;
      font-weight: 400;
      line-height: 24px;
      text-align: center;
      border-radius: 20px;
      padding: 5px 10px;
      gap: 10px;
    }
  }
}

@media screen and (max-width: 768px) {
  .venue-container {
    .venue-box {
      width: 87.2%;
      max-width: 915px;
      margin: 0 auto;
    }

    .venue-title {
      font-size: 15px;
      line-height: 18px;
    }
  }

  .venue-section {
    margin-top: 12px;
    margin-bottom: 12px;

    .venue-section-button {
      font-size: 12px;
      line-height: 15px;
      border-radius: 20px;
      padding: 5px 10px;
      margin-bottom: 16px;
    }

    .venue-section-direction {
      font-size: 12px;
      line-height: 129.4%;

      li {
        margin-top: 10px;
        margin-bottom: 10px;
      }
    }

    .venue-row {
      .venue-row-icon {
        font-size: 12px;
        margin-right: 5px;
      }

      .venue-row-text {
        font-size: 12px;
        line-height: 15px;
        margin-bottom: 5px;
      }

      .venue-row-button {
        font-size: 12px;
        line-height: 15px;
      }
    }
  }
}
</style>

<script>
import Breadcrumb from "@/components/app/Breadcrumb.vue";

export default {
  name: "VenueView",
  components: {
    Breadcrumb,
  },
  beforeMount() {
    window.scrollTo({ top: 0 });
  },
};
</script>
