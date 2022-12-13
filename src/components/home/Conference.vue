<template>
  <section class="conference-container">
    <header class="conference-title">What's in the conference?</header>
    <span class="conference-text">
      A conference is a gathering of many people who talk about a specific
      subject or topic. People meet to confer about a theme. All the people who
      attend have a common interest. It is not the same as a convention, which
      is typically much bigger and consists of delegates who represent various
      different groups.
    </span>
    <div class="conference-video">
      <img
        src="@/assets/icon/home/conference-play.png"
        class="conference-play"
        alt="play"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.conference-container {
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
  .conference-title {
    font-size: 48px;
    font-weight: 600;
    line-height: 49px;
    margin-top: 50px;
    margin-bottom: 32px;
  }
  .conference-text {
    width: 773px;
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    text-align: center;
  }
  .conference-video {
    width: 1040px;
    height: 551px;
    background: url("@/assets/image/home/conference-video.png") no-repeat center;
    margin-top: 55px;
    .conference-play {
      width: 72.5px;
      height: 72.5px;
      margin-top: 240px;
    }
  }
}
</style>
