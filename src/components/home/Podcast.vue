<template>
  <section class="podcast-container">
    <div class="podcast-box">
      <div class="podcast-toast">
        <img
          src="@/assets/image/home/podcast-toast-text.png"
          class="podcast-toast-text"
          alt="podcast-toast-text"
        />
        <img
          src="@/assets/image/home/podcast-toast-cup.png"
          class="podcast-toast-cup"
          alt="podcast-toast-cup"
        />
      </div>
      <div class="podcast-content">
        <header class="podcast-content-title">EP 40 大會預告</header>
        <span class="podcast-content-text">
          一群熱衷於學習新事物與語言的朋友在 Toastmasters International
          國際演講會相遇。在這個頻道分享生活的大小事與學習的心路歷程。
        </span>
        <div class="podcast-listen">
          <span class="podcast-listen-text">由此收聽</span>
          <img
            src="@/assets/icon/home/podcast-spotify.png"
            class="podcast-listen-icon"
            alt="podcast-spotify"
          />
          <img
            src="@/assets/icon/home/podcast-apple-podcasts.png"
            class="podcast-listen-icon"
            alt="podcast-apple-podcasts"
          />
          <img
            src="@/assets/icon/home/podcast-kkbox.png"
            class="podcast-listen-icon"
            alt="podcast-kkbox"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.podcast-container {
  width: 100%;
  color: black;
  background: #e5e5e5;
  font-style: normal;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  padding-bottom: 150px;
  .podcast-box {
    width: 870px;
    height: 300px;
    background: #fff2d3;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 35px;
    margin: 0 auto;
  }
}
.podcast-toast {
  width: 237px;
  height: 216px;
  background: #ce1f2c;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 9px;
  padding-top: 15px;
  padding-bottom: 10px;
  .podcast-toast-text {
    width: 208px;
    height: 75px;
  }
  .podcast-toast-cup {
    width: 224px;
    height: 120px;
  }
}
.podcast-content {
  width: 375px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  margin-left: 100px;
  .podcast-content-title {
    font-size: 32px;
    font-weight: 600;
    line-height: 39px;
    margin-bottom: 32px;
  }
  .podcast-content-text {
    width: 362px;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    margin-bottom: 24px;
  }
}
.podcast-listen {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.podcast-listen-text {
  font-size: 10px;
  font-weight: 400;
  line-height: 20px;
}
.podcast-listen-icon {
  width: 20px;
  height: 20px;
  margin-left: 9px;
  cursor: pointer;
}
</style>
