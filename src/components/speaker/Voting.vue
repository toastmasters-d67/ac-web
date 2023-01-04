<template>
  <section class="voting-container">
    <div class="voting-box">
      <img
        src="@/assets/image/speaker/voting-slido.png"
        class="voting-slido"
        alt="voting-slido"
      />
      <div class="voting-row">
        <header>
          <span class="voting-title">Slido</span> to vote and ask questions
        </header>
        <span class="voting-text">
          Engage your participants with live polls, Q&amp;A and quizzes!
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.voting-container {
  width: 100%;
  color: black;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  padding-bottom: 150px;
  .voting-box {
    width: 1200px;
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    .voting-slido {
      width: 150px;
      height: 150px;
      margin-right: 20px;
    }
    .voting-row {
      display: flex;
      flex-direction: column;
      font-size: 20px;
      line-height: 30px;
      text-align: left;
      .voting-title {
        font-size: 36px;
        line-height: 60px;
      }
      .voting-text {
        width: 315px;
        color: #6f6f6e;
      }
    }
  }
}
</style>
