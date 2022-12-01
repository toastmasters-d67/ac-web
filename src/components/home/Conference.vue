<template>
  <div class="conference-container">
    <span class="conference-title">What's in the conference?</span>
    <span class="conference-text">
      A conference is a gathering of many people who talk about a specific
      subject or topic. People meet to confer about a theme. All the people who
      attend have a common interest. It is not the same as a convention, which
      is typically much bigger and consists of delegates who represent various
      different groups.
    </span>
  </div>
</template>

<style scoped lang="scss">
.conference-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-style: normal;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  margin-bottom: 150px;
  .conference-title {
    font-size: 40px;
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
}
</style>
