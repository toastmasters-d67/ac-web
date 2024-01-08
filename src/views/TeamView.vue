<template>
  <Breadcrumb v-once />
  <figure class="our-team-background-image">
    <img
      src="@/assets/image/our-team/background-image-right.png"
      class="our-team-background-image-right"
      alt="background-image-right"
    />
  </figure>
  <article id="our-team" class="our-team-container">
    <span class="our-team-title">
      {{ $t("team.title[0]") }}
      <span class="our-team-title-highlight1">
        {{ $t("team.title[1]") }}
      </span>
      {{ $t("team.title[2]") }}
      <span class="our-team-title-highlight2">
        {{ $t("team.title[3]") }}
      </span>
      {{ $t("team.title[4]") }}
      <span class="our-team-title-highlight3">
        {{ $t("team.title[5]") }}
      </span>
    </span>
    <span class="our-team-description">
      {{ $t("team.description") }}
    </span>
    <div class="our-team-team">
      <span class="our-team-team-name">
        {{ $t("team.team.coordinator") }}
      </span>
      <div class="our-team-members">
        <div class="our-team-member two-positions">
          <img
            :src="getImage('kevin-lin')"
            class="our-team-member-image"
            alt="Kevin Lin"
          />
          <div class="our-team-member-profile">
            <span class="our-team-member-name">Kevin Lin</span>
            <span class="profile-two-positions-text">
              {{ $t("team.team.coordinator") }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="our-team-team">
      <span class="our-team-team-name">{{ $t("team.team.design") }}</span>
      <div class="our-team-members">
        <div class="our-team-member">
          <img
            :src="getImage('zoie-chen')"
            class="our-team-member-image"
            alt="Zoie Chen"
          />
          <div class="our-team-member-profile">
            <span class="our-team-member-name">Zoie Chen</span>
            {{ $t("team.position.uiux") }}
          </div>
        </div>
        <div class="our-team-member">
          <img
            :src="getImage('jerrick-liang')"
            class="our-team-member-image"
            alt="Jerrick Liang"
          />
          <div class="our-team-member-profile">
            <span class="our-team-member-name">Jerrick Liang</span>
            {{ $t("team.position.uiux") }}
          </div>
        </div>
        <div class="our-team-member">
          <img
            :src="getImage('ya-ting-liao')"
            class="our-team-member-image"
            alt="Ya-Ting Liao"
          />
          <div class="our-team-member-profile">
            <span class="our-team-member-name">Ya-Ting Liao</span>
            {{ $t("team.position.uiux") }}
          </div>
        </div>
      </div>
    </div>
    <div class="our-team-team">
      <span class="our-team-team-name">{{ $t("team.team.pm") }}</span>
      <div class="our-team-members">
        <div class="our-team-member">
          <img
            :src="getImage('leah-kao')"
            class="our-team-member-image"
            alt="Leah Kao"
          />
          <div class="our-team-member-profile">
            <span class="our-team-member-name">Leah Kao</span>
            {{ $t("team.position.pm") }}
          </div>
        </div>
        <div class="our-team-member">
          <img
            :src="getImage('human-icon')"
            class="our-team-member-image"
            alt="Doreen Huang"
          />
          <div class="our-team-member-profile">
            <span class="our-team-member-name">Doreen Huang</span>
            {{ $t("team.position.pm") }}
          </div>
        </div>
      </div>
    </div>
    <div class="our-team-team">
      <span class="our-team-team-name">{{ $t("team.team.engineer") }}</span>
      <div class="our-team-members">
        <div class="our-team-member two-positions">
          <img
            :src="getImage('kevin-lin')"
            class="our-team-member-image"
            alt="Kevin Lin"
          />
          <div class="our-team-member-profile">
            <span class="our-team-member-name">Kevin Lin</span>
            <span class="profile-two-positions-text">
              {{ $t("team.position.pj-lead-and") }}<br />
              {{ $t("team.position.backend") }}
            </span>
          </div>
        </div>
        <div class="our-team-member">
          <img
            :src="getImage('aaron-lin')"
            class="our-team-member-image"
            alt="Aaron Lin"
          />
          <div class="our-team-member-profile">
            <span class="our-team-member-name">Aaron Lin</span>
            {{ $t("team.position.frontend") }}
          </div>
        </div>
        <div class="our-team-member">
          <img
            :src="getImage('human-icon')"
            class="our-team-member-image"
            alt="Yin Long"
          />
          <div class="our-team-member-profile">
            <span class="our-team-member-name">Yin Long</span>
            {{ $t("team.position.backend") }}
          </div>
        </div>
        <div class="our-team-member two-positions">
          <img
            :src="getImage('human-icon')"
            class="our-team-member-image"
            alt="Don"
          />
          <div class="our-team-member-profile">
            <span class="our-team-member-name">Don</span>
            <span class="profile-two-positions-text">
              {{ $t("team.position.fe-and") }}<br />
              {{ $t("team.position.backend") }}
            </span>
          </div>
        </div>
        <div class="our-team-member">
          <img
            :src="getImage('human-icon')"
            class="our-team-member-image"
            alt="Andrew Wang"
          />
          <div class="our-team-member-profile">
            <span class="our-team-member-name">Andrew Wang</span>
            {{ $t("team.position.qa-and") }}
            {{ $t("team.position.backend") }}
          </div>
        </div>
        <div class="our-team-member">
          <img
            :src="getImage('human-icon')"
            class="our-team-member-image"
            alt="Powen Tsai"
          />
          <div class="our-team-member-profile">
            <span class="our-team-member-name">Powen Tsai</span>
            {{ $t("team.position.frontend") }}
          </div>
        </div>
        <div class="our-team-member">
          <img
            :src="getImage('human-icon')"
            class="our-team-member-image"
            alt="Emily Lin"
          />
          <div class="our-team-member-profile">
            <span class="our-team-member-name">Emily Lin</span>
            {{ $t("team.position.frontend") }}
          </div>
        </div>
        <div class="our-team-member">
          <img
            :src="getImage('human-icon')"
            class="our-team-member-image"
            alt="Michelle Chen"
          />
          <div class="our-team-member-profile">
            <span class="our-team-member-name">Michelle Chen</span>
            {{ $t("team.position.frontend") }}
          </div>
        </div>
        <div class="our-team-member">
          <img
            :src="getImage('ann-chio')"
            class="our-team-member-image"
            alt="Ann Chio"
          />
          <div class="our-team-member-profile">
            <span class="our-team-member-name">Ann Chio</span>
            {{ $t("team.position.frontend") }}
          </div>
        </div>
        <div class="our-team-member">
          <img
            :src="getImage('human-icon')"
            class="our-team-member-image"
            alt="Yan Wu"
          />
          <div class="our-team-member-profile">
            <span class="our-team-member-name">Yan Wu</span>
            {{ $t("team.position.frontend") }}
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import Breadcrumb from "@/components/app/Breadcrumb.vue";

export default {
  name: "OurTeam",
  components: {
    Breadcrumb,
  },
  data() {
    return {
      windowHeight: window.innerHeight,
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  beforeMount() {
    window.scrollTo({ top: 0 });
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.windowHeight = window.innerWidth;
    },
    getImage(item) {
      if (this.windowHeight > 768) {
        return require(`@/assets/image/our-team/${item}.png`);
      } else {
        return require(`@/assets/image/our-team/${item}-mobile.png`);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.our-team-background-image {
  width: 600px;
  height: 800px;
  top: 80px;
  right: 0;
  position: absolute;
  margin: 0;
  .our-team-background-image-right {
    width: 100%;
    height: 100%;
  }
}
.our-team-container {
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-left: 85px;
  padding-top: 80px;
  margin-bottom: 80px;
  .our-team-title {
    width: 60%;
    min-width: 600px;
    font-size: 64px;
    text-align: left;
    font-weight: 500;
    color: rgba(0, 65, 101, 1);
    margin-bottom: 39px;
    .our-team-title-highlight1 {
      color: rgba(228, 167, 61, 1);
      text-decoration: underline;
    }
    .our-team-title-highlight2 {
      color: rgba(147, 135, 219, 1);
      text-decoration: underline;
    }
    .our-team-title-highlight3 {
      color: #6d192b;
      text-decoration: underline;
    }
  }
  .our-team-description {
    width: 60%;
    min-width: 600px;
    text-align: left;
    font-size: 20px;
    font-weight: 500;
    line-height: 32px;
    letter-spacing: 0.02em;
    color: rgba(117, 117, 117, 1);
    margin-bottom: 111px;
  }
}
.our-team-team {
  width: 100%;
  display: flex;
  align-items: flex-start;
  border-color: transparent;
  flex-direction: column;
  margin-bottom: 66px;
  .our-team-team-name {
    font-size: 32px;
    text-align: center;
    font-weight: 500;
    margin-bottom: 40px;
    color: #004165;
  }
  .our-team-members {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 30px;
    .our-team-member {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      border-color: transparent;
      border-radius: 20px;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.15);
      background-color: rgba(255, 255, 255, 0.4);
      padding: 28px;
      .our-team-member-image {
        width: 238px;
        height: 301px;
        border-color: transparent;
        margin-bottom: 15px;
      }
      .our-team-member-profile {
        width: 238px;
        display: flex;
        flex-direction: column;
        color: rgba(151, 151, 151, 1);
        font-size: 16px;
        font-weight: 400;
        border-color: transparent;
        .our-team-member-name {
          color: black;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 5px;
        }
      }
    }
    .two-positions {
      padding-top: 18px;
      padding-bottom: 18px;
    }
  }
}
@media screen and (max-width: 768px) {
  .our-team-background-image {
    display: none;
  }
  .our-team-container {
    width: 100%;
    padding-left: 47px;
    padding-top: 0px;
    margin-bottom: 80px;
    .our-team-title {
      width: 71.65%;
      min-width: 0px;
      font-size: 20px;
      margin-bottom: 20px;
    }
    .our-team-description {
      width: 90%;
      min-width: 0px;
      font-size: 12px;
      line-height: 20px;
      margin-bottom: 88px;
    }
  }
  .our-team-team {
    margin-bottom: 35px;
    .our-team-team-name {
      font-size: 15px;
      margin-bottom: 9px;
    }
    .our-team-members {
      gap: 9px 30px;
      .our-team-member {
        border-radius: 10px;
        padding: 10px;
        .our-team-member-image {
          width: 100px;
          height: 126.38px;
          margin-bottom: 5px;
        }
        .our-team-member-profile {
          width: 100px;
          font-size: 10px;
          line-height: 12px;
          letter-spacing: -0.01em;
          .our-team-member-name {
            font-size: 12px;
            line-height: 15px;
            margin-bottom: 0px;
          }
          .profile-two-positions-text {
            font-size: 6px;
            line-height: 7px;
          }
        }
      }
      .two-positions {
        padding-top: 8px;
        padding-bottom: 10px;
      }
    }
  }
}
</style>
