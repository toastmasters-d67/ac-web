<template>
  <section id="program" class="program-container">
    <header class="program-title">Program</header>
    <div class="program-table">
      <div class="program-row program-baseline">
        <div class="row-day-1">Day 1</div>
        <div class="row-day-2">Day 2</div>
      </div>
      <div class="program-row program-baseline">
        <span class="row-time">08:00 - 10:00</span>
        <span class="row row-yellow">Registration &amp; Coffee</span>
      </div>
      <div class="program-row program-baseline">
        <span class="row-time">10:00 - 11:30</span>
        <span class="row row-yellow">Opening Ceremony</span>
      </div>
      <div class="program-row program-center">
        <span class="row-time">11:30 - 12:00</span>
        <div class="row-items">
          <div class="row-item-expand">
            <span class="row-item-speaker">John Hei</span>
            <span class="row-item-title">On Becoming a Leader</span>
            <span class="row-item-venue venue-2c">Room 2C</span>
          </div>
        </div>
      </div>
      <div class="program-row program-baseline">
        <span class="row-time">12:00 - 13:00</span>
        <span class="row row-gray">Talks &amp; Bites</span>
      </div>
      <div class="program-row program-center">
        <span class="row-time">13:00 - 14:00</span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-speaker">Bachir Bastie</span>
            <span class="row-item-title">Better Life</span>
            <span class="row-item-venue venue-b2">Room B2</span>
          </div>
          <div class="row-item">
            <span class="row-item-speaker">John Hei</span>
            <span class="row-item-title">On Becoming a Leader</span>
            <span class="row-item-venue venue-2c">Room 2C</span>
          </div>
          <div class="row-item">
            <span class="row-item-speaker">John Hei</span>
            <span class="row-item-title">On Becoming a Leader</span>
            <span class="row-item-venue venue-2d">Room 2D</span>
          </div>
        </div>
      </div>
      <div class="program-row program-baseline">
        <span class="row-time">12:00 - 13:00</span>
        <span class="row row-gray">Talks &amp; Bites</span>
      </div>
      <div class="program-row program-center">
        <span class="row-time">14:00 - 15:00</span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-speaker">Verity Price</span>
            <span class="row-item-title">How to write a winning speech</span>
            <span class="row-item-venue venue-b2">Room B2</span>
          </div>
          <div class="row-item">
            <span class="row-item-speaker">John Hei</span>
            <span class="row-item-title">On Becoming a Leader</span>
            <span class="row-item-venue venue-2c">Room 2C</span>
          </div>
          <div class="row-item">
            <span class="row-item-speaker">John Hei</span>
            <span class="row-item-title">On Becoming a Leader</span>
            <span class="row-item-venue venue-2d">Room 2D</span>
          </div>
        </div>
      </div>
      <div class="program-row program-baseline">
        <span class="row-time">15:00 - 15:30</span>
        <span class="row row-gray">Talks &amp; Bites</span>
      </div>
      <div class="program-row program-center">
        <span class="row-time">15:30 - 16:30</span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-speaker">Bachir Bastie</span>
            <span class="row-item-title">Better Life</span>
            <span class="row-item-venue venue-b2">Room B2</span>
          </div>
          <div class="row-item">
            <span class="row-item-speaker">John Hei</span>
            <span class="row-item-title">On Becoming a Leader</span>
            <span class="row-item-venue venue-2c">Room 2C</span>
          </div>
          <div class="row-item">
            <span class="row-item-speaker">John Hei</span>
            <span class="row-item-title">On Becoming a Leader</span>
            <span class="row-item-venue venue-2d">Room 2D</span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time">16:30 - 17:30</span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-speaker">Verity Price</span>
            <span class="row-item-title">How to write a winning speech</span>
            <span class="row-item-venue venue-b2">Room B2</span>
          </div>
          <div class="row-item">
            <span class="row-item-speaker">John Hei</span>
            <span class="row-item-title">On Becoming a Leader</span>
            <span class="row-item-venue venue-2c">Room 2C</span>
          </div>
          <div class="row-item">
            <span class="row-item-speaker">John Hei</span>
            <span class="row-item-title">On Becoming a Leader</span>
            <span class="row-item-venue venue-2d">Room 2D</span>
          </div>
        </div>
      </div>
      <div class="program-row program-baseline">
        <span class="row-time">17:30 - 20:30</span>
        <span class="row row-yellow">Dinner Party &amp; Closing Ceremony</span>
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
  letter-spacing: 0.05em;
  line-height: 60px;
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
  letter-spacing: 0.05em;
  line-height: 60px;
  border-radius: 20px;
  gap: 10px;
  padding: 0px 10px;
}
.row-day-1 {
  width: 610px;
  height: 70px;
  color: black;
  background: rgba(255, 255, 255, 0.25);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 60px;
  border-radius: 20px;
  box-sizing: border-box;
  gap: 10px;
  padding: 10px;
  margin-right: 35px;
  cursor: pointer;
}
.row-day-2 {
  width: 610px;
  height: 70px;
  color: black;
  background: linear-gradient(-90deg, #ddc8bf 0%, #a7c4d4 100%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 60px;
  border-radius: 20px;
  box-sizing: border-box;
  gap: 10px;
  padding: 10px;
  cursor: pointer;
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
  .row-item-expand {
    width: 1055px;
    height: 180px;
    background: rgba(255, 255, 255, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 400;
    line-height: 50px;
    border-radius: 20px;
    gap: 5px;
    padding: 5px 20px;
  }
  .row-item {
    width: 341px;
    height: 180px;
    background: rgba(255, 255, 255, 0.6);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 20px;
    padding: 5px 20px;
    .row-item-speaker {
      color: black;
      font-size: 24px;
      font-weight: 400;
      letter-spacing: 0.05em;
      line-height: 60px;
    }
    .row-item-title {
      height: 180px;
      color: black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      text-align: left;
    }
  }
  .row-item-venue {
    width: 100px;
    height: 30px;
    color: #004165;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.05em;
    line-height: 60px;
    border-radius: 20px;
    gap: 10px;
  }
  .venue-2c {
    background: #ddc8bf;
  }
  .venue-2d {
    background: rgba(188, 155, 221, 0.5);
  }
  .venue-b2 {
    background: #dde1e1;
  }
}
</style>
