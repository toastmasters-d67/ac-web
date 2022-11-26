<template>
  <div class="souvenirs-container">
    <span class="souvenirs-title">Souvenirs</span>
    <div class="souvenirs-images">
      <img src="@/assets/image/home/hat.png" class="souvenirs-hat" alt="hat" />
      <img
        src="@/assets/image/home/shirt.png"
        class="souvenirs-shirt"
        alt="shirt"
      />
      <img src="@/assets/image/home/hat.png" class="souvenirs-hat" alt="hat" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Souvenirs",
};
</script>
<style scoped lang="scss">
.souvenirs-container {
  width: 100%;
  background-color: white;
  border-color: transparent;
  border-radius: 0;
  box-sizing: border-box;
  margin-top: 150px;
  margin-bottom: 50px;
  .souvenirs-title {
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 59px;
    margin: 0 auto;
    margin-bottom: 15px;
  }
}
.souvenirs-images {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  .souvenirs-hat {
    width: 321px;
    height: 360px;
    margin-right: 35px;
  }
  .souvenirs-shirt {
    width: 530px;
    height: 614px;
    position: relative;
    margin-right: 35px;
  }
}
</style>
