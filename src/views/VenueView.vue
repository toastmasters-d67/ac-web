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
        <header class="venue-title">Kuanhe Exhibition Hall</header>
        <div class="venue-row">
          <i class="pi pi-phone venue-row-icon"></i>
          <span class="venue-row-text">(02) 2649-3034</span>
        </div>
        <div class="venue-row">
          <i class="pi pi-globe venue-row-icon"></i>
          <span class="venue-row-text">
            No. 237-6, Section 1, Datong Rd, Xizhi District, New Taipei City
          </span>
        </div>
        <div class="venue-row">
          <a
            href="https://goo.gl/maps/hk4DmRVfQ2e4q5FA9"
            class="venue-row-button"
            target="_blank"
          >
            Show on Google Maps
          </a>
        </div>
      </section>
      <section id="car" class="venue-section">
        <div class="venue-row">
          <div class="venue-section-button">By Car</div>
        </div>
        <div class="venue-section-direction">
          <ol>
            <li>
              Get off National Highway No.1 at the Xizhi Interchange, turn right
              at Section 2 of Datong Road, and go straignt to reach No. 237 on
              Section 1 of Datong Road.
            </li>
            <li>
              Get off National Highway No.3 at the Xintai 5th Road Interchange,
              turn left at Xintai 5th Road, turn right at Section 1 of Datong
              Road, and make a u-turn at the second traffic light, and then go
              straight to reach Kuanhe.
            </li>
          </ol>
        </div>
      </section>
      <section id="metro" class="venue-section">
        <div class="venue-row">
          <div class="venue-section-button">By Metro</div>
        </div>
        <div class="venue-section-direction">
          <span>
            Take Taipei Metro Bannan Line or Wenhu Line to reach Nangang
            Exhibition Center Station.
          </span>
          <ol>
            <li>Take a taxi to reach Kuanhe which costs around NT$100.</li>
            <li>
              Go to exit no. 6 and take a bus (B21, B22, B23, 919, 605 817, 668)
              to South Zhangshuwan Station, and then walk to reach Kuanhe.
            </li>
          </ol>
        </div>
      </section>
      <section id="bus" class="venue-section">
        <div class="venue-row">
          <div class="venue-section-button">By Bus</div>
        </div>
        <div class="venue-section-direction">
          <span>
            Take 605, 668, 817, or Keelung Bus to South Zhangshuwan Station, and
            then walk to reach Kuanhe.
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
  background: #e5e5e5;
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
    width: 888px;
    height: 154px;
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
