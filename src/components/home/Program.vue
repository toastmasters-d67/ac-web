<template>
  <section id="program" class="program-container">
    <header class="program-title">Program</header>
    <div class="program-table">
      <div class="program-row program-baseline">
        <span class="row-time">08:00 - 10:00</span>
        <span class="row row-yellow">註冊報到</span>
      </div>
      <div class="program-row program-baseline">
        <span class="row-time">10:00 - 11:30</span>
        <span class="row row-yellow">開幕典禮</span>
      </div>
      <div class="program-row program-center">
        <span class="row-time">11:30 - 12:00</span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-speaker">主題講座 - 黑幼龍</span>
            <span class="row-item-title">On Becoming a Leader</span>
            <span class="row-item-venue">B2 國際會議廳</span>
          </div>
        </div>
      </div>
      <div class="program-row program-baseline">
        <span class="row-time">12:00 - 13:00</span>
        <span class="row row-gray">中場休息</span>
      </div>
      <div class="program-row program-center">
        <span class="row-time">13:00 - 14:00</span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-speaker">主題講座 - Bachir Bastie</span>
            <span class="row-item-title">Better Life</span>
            <span class="row-item-venue">B2 國際會議廳</span>
          </div>
          <div class="row-item">
            <span class="row-item-speaker">主題講座 - 黑幼龍</span>
            <span class="row-item-title">On Becoming a Leader</span>
            <span class="row-item-venue">2D 國際會議廳</span>
          </div>
          <div class="row-item">
            <span class="row-item-speaker">主題講座 - 黑幼龍</span>
            <span class="row-item-title">On Becoming a Leader</span>
            <span class="row-item-venue">2C 國際會議廳</span>
          </div>
        </div>
      </div>
      <div class="program-row program-baseline">
        <span class="row-time">12:00 - 13:00</span>
        <span class="row row-gray">中場休息</span>
      </div>
      <div class="program-row program-center">
        <span class="row-time">14:00 - 15:00</span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-speaker">主題講座 - 林定蔚</span>
            <span class="row-item-title">演講風格我做主</span>
            <span class="row-item-venue">B2 國際會議廳</span>
          </div>
          <div class="row-item">
            <span class="row-item-speaker">主題講座 - 黑幼龍</span>
            <span class="row-item-title">On Becoming a Leader</span>
            <span class="row-item-venue">2D 國際會議廳</span>
          </div>
          <div class="row-item">
            <span class="row-item-speaker">主題講座 - 黑幼龍</span>
            <span class="row-item-title">On Becoming a Leader</span>
            <span class="row-item-venue">2C 國際會議廳</span>
          </div>
        </div>
      </div>
      <div class="program-row program-baseline">
        <span class="row-time">15:00 - 15:30</span>
        <span class="row row-gray">中場休息</span>
      </div>
      <div class="program-row program-center">
        <span class="row-time">15:30 - 16:30</span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-speaker">主題講座 - Bachir Bastie</span>
            <span class="row-item-title">Better Life</span>
            <span class="row-item-venue">B2 國際會議廳</span>
          </div>
          <div class="row-item">
            <span class="row-item-speaker">主題講座 - 黑幼龍</span>
            <span class="row-item-title">On Becoming a Leader</span>
            <span class="row-item-venue">2D 國際會議廳</span>
          </div>
          <div class="row-item">
            <span class="row-item-speaker">主題講座 - 黑幼龍</span>
            <span class="row-item-title">On Becoming a Leader</span>
            <span class="row-item-venue">2C 國際會議廳</span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time">16:30 - 17:30</span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-speaker">主題講座 - 林定蔚</span>
            <span class="row-item-title">演講風格我做主</span>
            <span class="row-item-venue">B2 國際會議廳</span>
          </div>
          <div class="row-item">
            <span class="row-item-speaker">主題講座 - 黑幼龍</span>
            <span class="row-item-title">On Becoming a Leader</span>
            <span class="row-item-venue">2D 國際會議廳</span>
          </div>
          <div class="row-item">
            <span class="row-item-speaker">主題講座 - 黑幼龍</span>
            <span class="row-item-title">On Becoming a Leader</span>
            <span class="row-item-venue">2C 國際會議廳</span>
          </div>
        </div>
      </div>
      <div class="program-row program-baseline">
        <span class="row-time">17:30 - 20:30</span>
        <span class="row row-yellow">晚宴暨閉幕表揚</span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.program-container {
  width: 100%;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-style: normal;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  padding-top: 80px;
  padding-bottom: 80px;
  .program-title {
    color: #004165;
    font-size: 48px;
    font-weight: 600;
    line-height: 49px;
    margin-top: 50px;
    margin-bottom: 32px;
  }
  .program-table {
    width: 1347px;
    height: 1755px;
    background: rgba(255, 255, 255, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 50px;
    padding-top: 100px;
    .program-row {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 30px;
    }
    .program-center {
      align-items: center;
    }
    .program-baseline {
      align-items: baseline;
    }
  }
}
.row-time {
  width: 168px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 400;
  line-height: 60px;
  letter-spacing: 0.05em;
  margin-right: 23px;
}
.row {
  width: 1055px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 400;
  line-height: 60px;
  letter-spacing: 0.05em;
  border-radius: 20px;
  gap: 10px;
  padding: 0px 10px;
}
.row-yellow {
  height: 90px;
  background: rgba(255, 204, 77, 0.25);
}
.row-gray {
  height: 60px;
  background: rgba(182, 194, 210, 0.5);
}
.row-items {
  width: 1058px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
  div:nth-child(-n + 2) {
    margin-right: 16px;
  }
  .row-item {
    width: 302px;
    height: 180px;
    background: rgba(255, 255, 255, 0.6);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 20px;
    padding: 0px 20px;
    .row-item-speaker {
      color: black;
      font-size: 24px;
      font-weight: 400;
      line-height: 60px;
      letter-spacing: 0.05em;
    }
    .row-item-title {
      color: black;
      font-weight: 400;
      font-size: 24px;
      line-height: 60px;
      letter-spacing: 0.05em;
    }
    .row-item-venue {
      color: #6f6f6e;
      font-size: 20px;
      font-weight: 400;
      line-height: 60px;
      letter-spacing: 0.05em;
    }
  }
}
</style>
