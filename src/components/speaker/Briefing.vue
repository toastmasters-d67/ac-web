<template>
  <section class="briefing-container">
    <div class="briefing-speaker">
      <header class="briefing-title">黑幼龍博士</header>
      <img
        src="@/assets/icon/speaker/speaker-divider.png"
        class="briefing-speaker-divider"
        alt="divider"
      />
      <div class="briefing-speaker-row">
        <img
          src="@/assets/image/speaker/john.png"
          class="briefing-speaker-image"
          alt="play"
        />
        <div class="briefing-speaker-text">
          <span>
            華人世界所熟知的「中文卡內基之父」，連續 27 年創下全球營運績效第一名
            的紀錄；Yes123 人力銀行網站調查─最想追隨的領導人之一，
            自剖內心世界，寫給想要成為更優秀領導人的每一位讀者。
          </span>
          <span>
            在領導專書 「走出一條不平凡的領導之路：黑幼龍是如何做到的」裡提到：
            「我想到過去這三十多年，從創辦中文卡內基訓練，並帶著一群夥伴將之推廣、
            延伸、創新，影響到四十多萬人的一生時，
            我真的在領導力方面做了些『不平凡的事』。
            主要的是幫助了很多其他的人成為不平凡的人。
            我是帶着感恩的心情，在這本書中分享我在領導方面的心路歷程。坦白說，
            如果我離開世上時，沒有在這世界留下這本書，可能會覺得很遺憾。」
          </span>
          <span>
            非常榮幸在此次年度大會中，黑幼龍博士將會親身以「On Becoming a
            Leader」為題，分享擔任講師路上的歷練故事，以及分享其對領導力的見解。
          </span>
        </div>
      </div>
      <div class="briefing-speaker-row">
        <img
          src="@/assets/icon/speaker/speaker-facebook.png"
          class="briefing-logo"
          alt="facebook"
        />
        <img
          src="@/assets/icon/speaker/speaker-instagram.png"
          class="briefing-logo"
          alt="instagram"
        />
        <img
          src="@/assets/icon/speaker/speaker-youtube.png"
          class="briefing-logo"
          alt="youtube"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.briefing-container {
  width: 100%;
  color: black;
  display: flex;
  flex-direction: column;
  font-style: normal;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  // padding-top: 80px;
  // padding-bottom: 80px;
  text-align: left;
  .briefing-title {
    font-size: 48px;
    font-weight: 600;
    line-height: 49px;
    // margin-top: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
    // margin-bottom: 32px;
  }
}
.briefing-speaker {
  margin: 0 auto;
  .briefing-speaker-divider {
    width: 1278px;
    border: 1px solid #cccccc;
  }
  .briefing-speaker-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    .briefing-speaker-image {
      width: 515px;
      height: 649px;
      border-color: transparent;
      margin-right: 50px;
    }
    .briefing-speaker-text {
      width: 690px;
      display: flex;
      flex-direction: column;
      font-size: 20px;
      font-weight: 400;
      line-height: 50px;
    }
    .briefing-logo {
      width: 50px;
      height: 50px;
      margin-right: 20px;
    }
  }
}
</style>
