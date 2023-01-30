<template>
  <section id="program" class="program-container">
    <header class="program-title">Program</header>
    <div class="program-day-switcher">
      <div
        class="program-day"
        :class="showProgramDay1 ? 'day-active' : 'day-non-active'"
        @click="switchProgram('day1')"
      >
        Day 1
      </div>
      <div
        class="program-day"
        :class="showProgramDay1 ? 'day-non-active' : 'day-active'"
        @click="switchProgram('day2')"
      >
        Day 2
      </div>
    </div>
    <!-- Day 1 program -->
    <div class="program-table" v-if="showProgramDay1">
      <div class="program-row program-center">
        <span class="row-time">09:00</span>
        <span class="row row-yellow">
          <span>Registration</span>
          <span class="row-small-text"> (Open until 12:00 at 1F Lobby) </span>
        </span>
      </div>
      <div class="program-row program-center">
        <span class="row-time">09:10</span>
        <div class="row-items">
          <div class="row-item item-expand">
            <span class="row-item-time">
              Judge Briefing
              <span class="row-item-time-duration">(20 mins)</span>
            </span>
            <span class="row-item-venue venue-preparation">
              2F Preparation Room
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time"></span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-time">
              09:40 <span class="row-item-time-duration">(70 mins)</span>
            </span>
            <span class="row-item-title">
              International Speech Run-off A Contest
            </span>
            <span class="row-item-venue venue-lisianthus">
              2F Room Lisianthus
            </span>
          </div>
          <div class="row-item">
            <span class="row-item-time">
              09:40 <span class="row-item-time-duration">(70 mins)</span>
            </span>
            <span class="row-item-title">
              International Speech Run-off B Contest
            </span>
            <span class="row-item-venue venue-clove">2F Room Clove</span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time">11:00</span>
        <div class="row-items">
          <div class="row-item item-expand">
            <span class="row-item-time">
              Keynote Speech - Stan Shih
              <span class="row-item-time-duration">(50 mins)</span>
            </span>
            <span class="row-item-title">
              From Wangdao perspective to the competitiveness of Taiwan
            </span>
            <span class="row-item-venue venue-calla">
              1F Room Calla Lilly & Rose
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time">12:00</span>
        <div class="row-items">
          <div class="row-item item-expand item-expand-gray">
            <span class="row-item-time">
              Lunchbox Distribution
              <span class="row-item-time-duration">(30 mins)</span>
            </span>
            <span class="row-item-venue venue-lobby">1F Lobby</span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time">12:10</span>
        <div class="row-items">
          <div class="row-item item-expand">
            <span class="row-item-time">
              Judge Briefing
              <span class="row-item-time-duration">(20 mins)</span>
            </span>
            <span class="row-item-venue venue-preparation">
              2F Preparation Room
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time">12:30</span>
        <div class="row-items">
          <div class="row-item item-expand">
            <span class="row-item-time">
              Opening Ceremony
              <span class="row-item-time-duration">(40 mins)</span>
            </span>
            <span class="row-item-venue venue-calla">
              1F Room Calla Lilly & Rose
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time">13:10</span>
        <div class="row-items">
          <div class="row-item item-expand">
            <span class="row-item-time">Keynote Speech - Greg Van Borssum</span>
            <span class="row-item-title">TBD</span>
            <span class="row-item-venue venue-calla">
              1F Room Calla Lilly & Rose
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time">14:00</span>
        <div class="row-items">
          <div class="row-item item-expand item-expand-gray">
            <span class="row-item-time">
              Tea Break
              <span class="row-item-time-duration">(20 mins)</span>
            </span>
            <span class="row-item-venue venue-lobby">1F Lobby</span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time"></span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-time">
              14:20 <span class="row-item-time-duration">(60 mins)</span>
            </span>
            <span class="row-item-title">Mandarin Evaluation Contest</span>
            <span class="row-item-venue venue-calla"
              >1F Room Calla Lilly & Rose</span
            >
          </div>
          <div class="row-item">
            <span class="row-item-time"
              >14:20 <span class="row-item-time-duration">(60 mins)</span></span
            >
            <span class="row-item-title">English Training Session</span>
            <span class="row-item-venue venue-lisianthus"
              >2F Room Lisianthus</span
            >
          </div>
          <div class="row-item">
            <span class="row-item-time"
              >14:20
              <span class="row-item-time-duration">(120 mins)</span></span
            >
            <span class="row-item-title title-3-lines"
              >Japanese Speech & Evaluation Contest and Training Session</span
            >
            <span class="row-item-venue venue-clove">2F Room Clove</span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time"></span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-time"
              >15:30 <span class="row-item-time-duration">(60 mins)</span></span
            >
            <span class="row-item-title">Taiwanese Evaluation Contest</span>
            <span class="row-item-venue venue-lisianthus"
              >2F Room Lisianthus</span
            >
          </div>
          <div class="row-item">
            <span class="row-item-time"
              >15:30 <span class="row-item-time-duration">(60 mins)</span></span
            >
            <span class="row-item-title">English Training Session</span>
            <span class="row-item-venue venue-calla"
              >1F Room Calla Lilly & Rose</span
            >
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time"></span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-time"
              >16:40 <span class="row-item-time-duration">(90 mins)</span></span
            >
            <span class="row-item-title">English Evaluation Contest</span>
            <span class="row-item-venue venue-calla"
              >1F Room Calla Lilly & Rose</span
            >
          </div>
          <div class="row-item">
            <span class="row-item-time"
              >16:40 <span class="row-item-time-duration">(90 mins)</span></span
            >
            <span class="row-item-title">Mandarin Training Session</span>
            <span class="row-item-venue venue-lisianthus"
              >2F Room Lisianthus</span
            >
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time">18:30</span>
        <span class="row row-yellow">
          <span>Gala Dinner</span>
          <span class="row-small-text">1F Banquet Hall (Jasmine)</span></span
        >
      </div>
    </div>
    <!-- Day 2 program -->
    <div class="program-table" v-if="!showProgramDay1">
      <div class="program-row program-center">
        <span class="row-time">09:00</span>
        <span class="row row-yellow">
          <span>Registration</span>
          <span class="row-small-text"
            >(Open until 12:00 at 1F Lobby)</span
          ></span
        >
      </div>
      <div class="program-row program-center">
        <span class="row-time"></span>
        <div class="row-items">
          <div class="row-item item-2-column-height">
            <span class="row-item-time"
              >09:10
              <span class="row-item-time-duration">(180 mins)</span></span
            >
            <span class="row-item-title"
              >Excom Meeting/ District Council Meeting/ Association BoD
              Meeting</span
            >
            <span class="row-item-venue venue-calla"
              >1F Room Calla Lilly & Rose</span
            >
          </div>
          <div class="row-item-columns">
            <div class="row-item">
              <span class="row-item-time"
                >09:50
                <span class="row-item-time-duration">(70 mins)</span></span
              >
              <span class="row-item-title">Mandarin Training Session</span>
              <span class="row-item-venue venue-lisianthus"
                >2F Room Lisianthus</span
              >
            </div>
            <div class="row-item">
              <span class="row-item-time"
                >11:00
                <span class="row-item-time-duration">(60 mins)</span></span
              >
              <span class="row-item-title">Taiwanese Training Session</span>
              <span class="row-item-venue venue-lisianthus"
                >2F Room Lisianthus</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time">12:00</span>
        <div class="row-items">
          <div class="row-item item-expand item-expand-gray">
            <span class="row-item-time"
              >Luncheon
              <span class="row-item-time-duration">(50 mins)</span></span
            >
            <span class="row-item-venue venue-lisianthus"
              >2F Room Lisianthus</span
            >
            <span class="row-item-note"
              >** Lunchbox Distribution will take place at 1F Lobby</span
            >
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time">12:20</span>
        <div class="row-items">
          <div class="row-item item-expand">
            <span class="row-item-time"
              >Judge Briefing
              <span class="row-item-time-duration">(20 mins)</span></span
            >
            <span class="row-item-venue venue-preparation"
              >2F Preparation Room</span
            >
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time"></span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-time"
              >13:00 <span class="row-item-time-duration">(70 mins)</span></span
            >
            <span class="row-item-title">Mandarin Speech Contest</span>
            <span class="row-item-venue venue-calla"
              >1F Room Calla Lilly & Rose</span
            >
          </div>
          <div class="row-item">
            <span class="row-item-time"
              >13:00 <span class="row-item-time-duration">(70 mins)</span></span
            >
            <span class="row-item-title">English Training Session</span>
            <span class="row-item-venue venue-lisianthus"
              >2F Room Lisianthus</span
            >
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time"></span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-time"
              >14:20 <span class="row-item-time-duration">(60 mins)</span></span
            >
            <span class="row-item-title">Taiwanese Speech Contest</span>
            <span class="row-item-venue venue-calla"
              >1F Room Calla Lilly & Rose</span
            >
          </div>
          <div class="row-item">
            <span class="row-item-time"
              >14:20 <span class="row-item-time-duration">(60 mins)</span></span
            >
            <span class="row-item-title">English Training Session</span>
            <span class="row-item-venue venue-lisianthus"
              >2F Room Lisianthus</span
            >
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time">15:20</span>
        <div class="row-items">
          <div class="row-item item-expand item-expand-gray">
            <span class="row-item-time"
              >Tea Break
              <span class="row-item-time-duration">(20 mins)</span></span
            >
            <span class="row-item-venue venue-lobby">1F Lobby</span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time"></span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-time"
              >15:50 <span class="row-item-time-duration">(70 mins)</span></span
            >
            <span class="row-item-title">International Speech Contest</span>
            <span class="row-item-venue venue-calla"
              >1F Room Calla Lilly & Rose</span
            >
          </div>
          <div class="row-item">
            <span class="row-item-time"
              >15:50 <span class="row-item-time-duration">(70 mins)</span></span
            >
            <span class="row-item-title">Mandarin Training Session</span>
            <span class="row-item-venue venue-lisianthus"
              >2F Room Lisianthus</span
            >
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time">17:10</span>
        <div class="row-items">
          <div class="row-item item-expand item-expand-yellow">
            <span class="row-item-time"
              >Closing Ceremony
              <span class="row-item-time-duration">(50 mins)</span></span
            >
            <span class="row-item-venue venue-calla"
              >1F Room Calla Lilly & Rose</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.program-container {
  width: 100%;
  background: transparent;
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
    margin-bottom: 59px;
  }
  .program-day-switcher {
    max-width: 1223px;
    width: 84.93%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 31px;
    height: 70px;
    margin-bottom: 20px;
    .program-day {
      flex: 1;
      height: 70px;
      color: black;
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
    }
  }
  .program-table {
    max-width: 1231px;
    width: 93.54%;
    background: rgba(255, 255, 255, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 20px;
    padding-top: 47px;
    .program-row {
      width: 93.74%;
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
  .day-active {
    background: rgba(255, 255, 255, 0.25);
  }
  .day-non-active {
    background: linear-gradient(-90deg, #ddc8bf 0%, #a7c4d4 100%);
    cursor: pointer;
  }
}
.row-time {
  width: 73px;
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
.time-filter {
  color: rgba(255, 255, 255, 0.25);
}
.row {
  max-width: 1055px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 25px;
  border-radius: 20px;
  gap: 10px;
  padding: 0px 10px;
  .row-small-text {
    font-size: 16px;
  }
}
.row-yellow {
  height: 93px;
  background: rgba(255, 204, 77, 0.25);
}
.row-items {
  max-width: 1055px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
  gap: 16px;
  .row-item-columns {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  .item-2-column-height {
    height: 343px;
  }
  .row-item {
    width: 100%;
    background: rgba(255, 255, 255, 0.6);
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 20px;
    padding: 15px 20px;
    gap: 15px;
    letter-spacing: 0.05em;
    .row-item-time {
      color: black;
      font-size: 24px;
      font-weight: 400;
      line-height: 30px;
      .row-item-time-duration {
        font-size: 16px;
      }
    }
    .row-item-title {
      color: black;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-weight: 400;
      font-size: 24px;
      line-height: 30px;
      text-align: left;
      margin-top: 3px;
      margin-bottom: 8px;
    }
    .title-3-lines {
      font-size: 20px;
      line-height: 25px;
    }
    .row-item-venue {
      color: #004165;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0.05em;
      line-height: 20px;
      border-radius: 20px;
      gap: 10px;
      padding: 5px 10px;
    }
    .venue-preparation {
      background: #dde1e1;
    }
    .venue-lisianthus {
      background: #ddc8bf;
    }
    .venue-clove {
      background: rgba(188, 155, 221, 0.5);
    }
    .venue-calla {
      background: #c1ccbe;
    }
    .venue-lobby {
      background: white;
    }
    .row-item-note {
      font-size: 16px;
      color: black;
    }
  }
  .item-expand {
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
  }
  .item-expand-gray {
    background: rgba(182, 194, 210, 0.5);
  }
  .item-expand-yellow {
    background: rgba(255, 204, 77, 0.25);
  }
}

/* Mobile Design */
@media screen and (max-width: 768px) {
  .program-container {
    padding-bottom: 0px;
    .program-title {
      font-size: 15px;
      line-height: 18px;
      margin-top: 20px;
      margin-bottom: 29px;
    }
    .program-day-switcher {
      width: 90.43%;
      height: 30px;
      gap: 10px;
      margin-bottom: 12px;
      .program-day {
        height: 30px;
        background-size: 100% 30px;
        font-size: 12px;
        line-height: 30px;
        border-radius: 20px;
      }
      .day-1 {
        background: rgba(255, 255, 255, 0.25);
      }
    }
    .program-table {
      border-radius: 10px;
      padding-top: 11px;
      .program-row {
        margin-bottom: 10px;
      }
    }
  }
  .row-time {
    position: absolute;
    width: fit-content;
    font-size: 12px;
    line-height: 15px;
    margin-left: 10px;
  }
  .row {
    font-size: 12px;
    line-height: 15px;
    gap: 5px;
    .row-small-text {
      font-size: 8px;
    }
  }
  .row-yellow {
    height: 42px;
  }
  .row-items {
    gap: 10px;
    .row-item-columns {
      gap: 5px;
    }
    .item-2-column-height {
      height: 219px;
      @media screen and (min-width: 427px) {
        height: 189px;
      }
    }
    .row-item {
      padding: 10px;
      gap: 5px;
      .row-item-time {
        font-size: 10px;
        line-height: 15px;
        .row-item-time-duration {
          font-size: 8px;
        }
      }
      .row-item-title {
        font-size: 10px;
        line-height: 15px;
        margin-top: 3px;
        margin-bottom: 8px;
      }
      .title-3-lines {
        font-size: 8px;
        line-height: 14px;
      }
      .row-item-venue {
        font-size: 8px;
        line-height: 10px;
        border-radius: 10px;
      }
      .row-item-note {
        font-size: 8px;
      }
    }
    .item-expand {
      font-size: 12px;
      line-height: 15px;
      gap: 5px;
      padding: 10px 20px;
    }
  }
}
</style>

<script>
export default {
  name: "Program",
  data() {
    return {
      showProgramDay1: true,
    };
  },
  methods: {
    switchProgram(day) {
      if (day === "day1") {
        this.showProgramDay1 = true;
      } else {
        this.showProgramDay1 = false;
      }
    },
  },
};
</script>
