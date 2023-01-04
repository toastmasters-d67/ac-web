<template>
  <section class="briefing-container">
    <div class="briefing-speaker">
      <header class="briefing-title">Verity Price</header>
      <img
        src="@/assets/icon/speaker/speaker-divider.png"
        class="briefing-speaker-divider"
        alt="divider"
      />
      <div class="briefing-speaker-row">
        <img
          src="@/assets/image/speaker/speaker-price.png"
          class="briefing-speaker-image"
          alt="play"
        />
        <div class="briefing-speaker-text">
          <span>
            What does it take to be the first? Way back in 2005, Verity started
            her journey as the first South African musician with the tenacious
            foresight to get online crowdfunding for an album she hadn&apos;t
            even recorded yet. Fifteen years later, and a career glittered with
            accolades, brings us to 2021 and Verity&apos;s latest big first -
            first speaker from Africa to ever be crowned the World Champion of
            Public Speaking and the sixth woman in history.
          </span>
          <span>
            Her talent for ‘acting out the box’ rather than merely ‘thinking
            out’ of it, has brought international success for Verity, speaking
            globally on innovation and thinking differently, which includes two
            <a
              href="https://www.ted.com/talks/verity_price_does_convenience_kill_creativity"
              class="briefing-link"
              target="_blank"
            >
              TEDx Talks
            </a>
            . As the Toastmasters 2022 World Champion, Verity captured the
            judges, and thousands of peoples imagination with her winning speech
            <a
              href="https://www.youtube.com/watch?v=k24vGzEjePo&ab_channel=ToastmastersInternational"
              class="briefing-link"
              target="_blank"
            >
              ‘A Great Read’
            </a>
            - an inspiring invitation to improve our lives by &quot;writing a
            different story&quot;. Helping people do just that, is Verity&apos;s
            passion.
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
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  text-align: left;
  a {
    color: black;
    border-color: transparent;
  }
  .briefing-title {
    font-size: 48px;
    font-weight: 600;
    line-height: 49px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
.briefing-speaker {
  min-width: 1200px;
  margin: 0 auto;
  .briefing-speaker-divider {
    width: 1200px;
    border: 1px solid #cccccc;
  }
  .briefing-speaker-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
    .briefing-speaker-image {
      width: 510px;
      height: 655px;
      border-color: transparent;
      margin-right: 50px;
    }
    .briefing-speaker-text {
      width: 680px;
      display: flex;
      flex-direction: column;
      font-size: 20px;
      line-height: 40px;
    }
    .briefing-logo {
      width: 50px;
      height: 50px;
      margin-right: 20px;
      cursor: pointer;
    }
  }
}
</style>
