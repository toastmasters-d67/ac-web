<template>
  <Breadcrumb v-once />
  <header class="accommodation-title">{{ $t("accommodation.title") }}</header>
  <article id="accommodation" class="accommodation-container">
    <div class="accommodation-area">{{ $t("accommodation.xizhi") }}</div>
    <div class="accommodation-item">
      <img
        src="@/assets/image/accommodation/fushin-large.png"
        alt="Taipei Fushin Hotel"
        class="accommodation-image-large"
      />
      <div class="accommodation-content">
        <div class="accommodation-content-title">
          <div class="accommodation-name">
            {{ $t("accommodation.hotels[0].name") }}
          </div>
          <div class="accommodation-price">
            {{ $t("accommodation.hotels[0].price") }}
          </div>
        </div>
        <div class="accommodation-transportation">
          <div class="accommodation-transportation-title">
            <img
              src="@/assets/image/accommodation/icon-transportation-large.svg"
              alt="transportation-icon"
            />
            <p>{{ $t("accommodation.transportation-location") }}</p>
          </div>
          <ul>
            <li>{{ $t("accommodation.hotels[0].transportation[0]") }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="accommodation-area">{{ $t("accommodation.nangang") }}</div>
    <div class="accommodation-item">
      <img
        src="@/assets/image/accommodation/may-large.png"
        alt="May Rooms Taipei"
        class="accommodation-image-large"
      />
      <div class="accommodation-content">
        <div class="accommodation-content-title">
          <div class="accommodation-name">
            {{ $t("accommodation.hotels[1].name") }}
          </div>
          <div class="accommodation-price">
            {{ $t("accommodation.hotels[1].price") }}
          </div>
        </div>
        <div class="accommodation-transportation">
          <div class="accommodation-transportation-title">
            <img
              src="@/assets/image/accommodation/icon-transportation-large.svg"
              alt="transportation-icon"
            />
            <p>{{ $t("accommodation.transportation-location") }}</p>
          </div>
          <ul>
            <li>{{ $t("accommodation.hotels[1].transportation[0]") }}</li>
            <li>{{ $t("accommodation.hotels[1].transportation[1]") }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="accommodation-item">
      <img
        src="@/assets/image/accommodation/uline-large.png"
        alt="Uline Motel"
        class="accommodation-image-large"
      />
      <div class="accommodation-content">
        <div class="accommodation-content-title">
          <div class="accommodation-name">
            {{ $t("accommodation.hotels[2].name") }}
          </div>
          <div class="accommodation-price">
            {{ $t("accommodation.hotels[2].price") }}
          </div>
        </div>
        <div class="accommodation-transportation">
          <div class="accommodation-transportation-title">
            <img
              src="@/assets/image/accommodation/icon-transportation-large.svg"
              alt="transportation-icon"
            />
            <p>{{ $t("accommodation.transportation-location") }}</p>
          </div>
          <ul>
            <li>{{ $t("accommodation.hotels[2].transportation[0]") }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="accommodation-item">
      <img
        src="@/assets/image/accommodation/place-large.png"
        alt="The Place Taipei"
        class="accommodation-image-large"
      />
      <div class="accommodation-content">
        <div class="accommodation-content-title">
          <div class="accommodation-name">
            {{ $t("accommodation.hotels[3].name") }}
          </div>
          <div class="accommodation-price">
            {{ $t("accommodation.hotels[3].price") }}
          </div>
        </div>
        <div class="accommodation-transportation">
          <div class="accommodation-transportation-title">
            <img
              src="@/assets/image/accommodation/icon-transportation-large.svg"
              alt="transportation-icon"
            />
            <p>{{ $t("accommodation.transportation-location") }}</p>
          </div>
          <ul>
            <li>{{ $t("accommodation.hotels[3].transportation[0]") }}</li>
            <li>{{ $t("accommodation.hotels[3].transportation[1]") }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="accommodation-item">
      <img
        src="@/assets/image/accommodation/forward-large.png"
        alt="Forward Hotel Nangang"
        class="accommodation-image-large"
      />
      <div class="accommodation-content">
        <div class="accommodation-content-title">
          <div class="accommodation-name">
            {{ $t("accommodation.hotels[4].name") }}
          </div>
          <div class="accommodation-price">
            {{ $t("accommodation.hotels[4].price") }}
          </div>
        </div>
        <div class="accommodation-transportation">
          <div class="accommodation-transportation-title">
            <img
              src="@/assets/image/accommodation/icon-transportation-large.svg"
              alt="transportation-icon"
            />
            <p>{{ $t("accommodation.transportation-location") }}</p>
          </div>
          <ul>
            <li>{{ $t("accommodation.hotels[4].transportation[0]") }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="accommodation-item">
      <img
        src="@/assets/image/accommodation/greenworld-large.png"
        alt="Green World NanGang"
        class="accommodation-image-large"
      />
      <div class="accommodation-content">
        <div class="accommodation-content-title">
          <div class="accommodation-name">
            {{ $t("accommodation.hotels[5].name") }}
          </div>
          <div class="accommodation-price">
            {{ $t("accommodation.hotels[5].price") }}
          </div>
        </div>
        <div class="accommodation-transportation">
          <div class="accommodation-transportation-title">
            <img
              src="@/assets/image/accommodation/icon-transportation-large.svg"
              alt="transportation-icon"
            />
            <p>{{ $t("accommodation.transportation-location") }}</p>
          </div>
          <ul>
            <li>{{ $t("accommodation.hotels[5].transportation[0]") }}</li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
.accommodation-title {
  font-size: 32px;
  color: #004165;
  text-align: left;
  padding: 1rem;
  margin-left: 5%;
}
.accommodation-container {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 100px;
  padding-bottom: 100px;

  .accommodation-area {
    font-size: 24px;
    color: #004165;
    text-align: left;
    margin-bottom: 28px;
  }
  .accommodation-item {
    display: flex;
    background: rgba(255, 255, 255, 0.4);
    padding: 30px;
    margin-bottom: 70px;
    .accommodation-image-large {
      width: 450px;
      height: 270px;
      margin-right: 50px;
    }
    .accommodation-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      .accommodation-content-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .accommodation-name {
          font-size: 24px;
          text-align: left;
        }
        .accommodation-price {
          font-size: 20px;
          text-align: right;
        }
      }
      .accommodation-transportation {
        text-align: left;
        .accommodation-transportation-title {
          display: flex;
          img {
            height: 36px;
            width: 36px;
            margin-right: 10px;
            align-self: self-end;
          }
          p {
            font-size: 24px;
            margin-bottom: 0;
          }
        }
        ul {
          padding-inline-start: 15px !important;
          li {
            font-size: 20px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .accommodation-title {
    font-size: 18px;
    margin-bottom: 0px;
    margin-left: 2.5%;
    padding: 1rem;
  }
  .accommodation-container {
    padding-top: 0px;
    padding-bottom: 50px;
    margin-right: 2.5%;
    margin-left: 2.5%;
    .accommodation-area {
      font-size: 16px;
      padding: 1rem;
    }
    .accommodation-item {
      flex-direction: column;
      padding: 16px;

      .accommodation-image-large {
        width: 100%;
        height: auto;
        margin-bottom: 28px;
      }
      .accommodation-content {
        .accommodation-content-title {
          min-width: 0px;
          flex-direction: column;
          .accommodation-name {
            font-size: 20px;
            align-self: flex-start;
            margin-bottom: 10px;
          }
          .accommodation-price {
            font-size: 14px;
            align-self: flex-start;
          }
        }
        .accommodation-transportation {
          .accommodation-transportation-title {
            img {
              width: 16px;
              height: 16px;
            }
            p {
              font-size: 14px;
            }
          }
          ul {
            margin-top: 0;
            li {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
</style>

<script>
import Breadcrumb from "@/components/app/Breadcrumb.vue";

export default {
  name: "AccommodationView",
  components: {
    Breadcrumb,
  },
  beforeMount() {
    window.scrollTo({ top: 0 });
  },
};
</script>
