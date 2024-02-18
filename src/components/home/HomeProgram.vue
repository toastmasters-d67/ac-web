<template>
  <section id="program" class="program-container">
    <div class="program-head">
      <header class="program-title">{{ $t("home.program.title") }}</header>
      <div class="program-download">
        <a
          href="https://drive.google.com/file/d/1poDhZzGed001PUHhevTbMG4WBNWNmr4Q/view?usp=share_link"
          target="_blank"
        >
          <img
            src="@/assets/icon/home/program-download.svg"
            class="download-img"
            alt="logo"
          />
          <span class="downlad-text">
            {{ $t("home.program.download") }}
          </span>
        </a>
      </div>
    </div>
    <div class="program-day-switcher">
      <div
        class="program-day"
        :class="showProgramDay1 ? 'day-active' : 'day-non-active'"
        @click="switchProgram('day1')"
      >
        {{ $t("home.program.day1") }}
      </div>
      <div
        class="program-day"
        :class="showProgramDay1 ? 'day-non-active' : 'day-active'"
        @click="switchProgram('day2')"
      >
        {{ $t("home.program.day2") }}
      </div>
    </div>
    <div class="program-table" v-if="showProgramDay1">
      <div class="program-row program-center">
        <span class="row-time">09:10</span>
        <div class="row-items">
          <div class="row-item item-expand item-expand-yellow">
            <span class="row-item-time">
              {{ $t("home.program.registration") }}
              <span class="row-item-time-duration">
                ({{ $t("home.program.until1") }})
              </span>
            </span>
            <span class="row-item-venue venue-lobby">
              {{ $t("home.program.room.lobby") }}
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time"></span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-time">
              09:20
              <span class="row-item-time-duration">
                (15 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{ $t("home.program.briefing1") }}<br />
              {{
                $t("home.program.briefing2", {
                  group: $t("home.program.group1"),
                })
              }}
            </span>
            <span class="row-item-venue venue-rose">
              {{ $t("home.program.room.rose") }}
            </span>
          </div>
          <div class="row-item">
            <span class="row-item-time">
              09:20
              <span class="row-item-time-duration">
                (15 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{ $t("home.program.briefing1") }}<br />
              {{
                $t("home.program.briefing2", {
                  group: $t("home.program.group2"),
                })
              }}
            </span>
            <span class="row-item-venue venue-lisianthus">
              {{ $t("home.program.room.group2-briefing-a") }}
            </span>
            <span class="row-item-venue venue-clove">
              {{ $t("home.program.room.group2-briefing-b") }}
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time"></span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-time">
              09:40
              <span class="row-item-time-duration">
                (70 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{ $t("home.program.run-off", { alphabet: "A" }) }}
            </span>
            <span class="row-item-venue venue-lisianthus">
              {{ $t("home.program.room.lisianthus") }}
            </span>
          </div>
          <div class="row-item">
            <span class="row-item-time">
              09:40
              <span class="row-item-time-duration">
                (70 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{ $t("home.program.run-off", { alphabet: "B" }) }}
            </span>
            <span class="row-item-venue venue-clove">
              {{ $t("home.program.room.clove") }}
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time">11:00</span>
        <div class="row-items">
          <div class="row-item item-expand">
            <span class="row-item-time">
              {{ $t("home.program.keynote") }} -
              {{ $t("home.program.speaker-shih") }}
              <span class="row-item-time-duration">
                (50 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title title-expand">
              {{ $t("speakers[0].seminars[0].topic") }}
            </span>
            <span class="row-item-venue venue-calla">
              {{ $t("home.program.room.calla") }}
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time">11:40</span>
        <div class="row-items">
          <div class="row-item item-expand item-expand-gray">
            <span class="row-item-time">
              {{ $t("home.program.lunch") }}
              {{ $t("home.program.lunch-and") }}
              <span class="row-item-time-duration">
                (20 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-venue venue-lobby">
              {{ $t("home.program.room.lobby") }}
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time"></span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-time">
              12:05
              <span class="row-item-time-duration">
                (20 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{ $t("home.program.mandarin") }}/
              {{ $t("home.program.taiwanese") }}/
              {{
                $t("home.program.evaluation", {
                  language: $t("home.program.english"),
                })
              }}<br />
              {{
                $t("home.program.briefing2", {
                  group: $t("home.program.group1"),
                })
              }}
            </span>
            <span class="row-item-venue venue-rose">
              {{ $t("home.program.room.rose") }}
            </span>
          </div>
          <div class="row-item">
            <span class="row-item-time">
              12:05
              <span class="row-item-time-duration">
                (20 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{ $t("home.program.mandarin") }}/
              {{ $t("home.program.taiwanese") }}/
              {{
                $t("home.program.evaluation", {
                  language: $t("home.program.english"),
                })
              }}<br />
              {{
                $t("home.program.briefing2", {
                  group: $t("home.program.group2"),
                })
              }}
            </span>
            <span class="row-item-venue venue-calla">
              {{ $t("home.program.room.calla") }}
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time">12:35</span>
        <div class="row-items">
          <div class="row-item item-expand">
            <span class="row-item-time">
              {{ $t("home.program.opening") }}
              <span class="row-item-time-duration">
                (50 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-venue venue-calla">
              {{ $t("home.program.room.calla") }}
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time">13:25</span>
        <div class="row-items">
          <div class="row-item item-expand">
            <span class="row-item-time">
              {{ $t("home.program.keynote") }} - {{ $t("speakers[1].name") }}
              <span class="row-item-time-duration">
                (45 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title title-expand">
              {{ $t("home.program.gvb-keynote-title[0]") }}<br />
              {{ $t("home.program.gvb-keynote-title[1]") }}<br />
              {{ $t("home.program.gvb-keynote-interpreter") }}
            </span>
            <span class="row-item-venue venue-calla">
              {{ $t("home.program.room.calla") }}
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time">14:10</span>
        <div class="row-items">
          <div class="row-item item-expand item-expand-gray">
            <span class="row-item-time">
              {{ $t("home.program.tea") }}
              {{ $t("home.program.tea-and") }}
              <span class="row-item-time-duration">
                (15 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-venue venue-lobby">
              {{ $t("home.program.room.lobby") }}
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time"></span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-time">
              14:25
              <span class="row-item-time-duration">
                (60 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{
                $t("home.program.evaluation", {
                  language: $t("home.program.mandarin"),
                })
              }}
            </span>
            <span class="row-item-venue venue-calla">
              {{ $t("home.program.room.calla") }}
            </span>
          </div>
          <div class="row-item">
            <span class="row-item-time">
              14:25
              <span class="row-item-time-duration">
                (60 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{
                $t("home.program.training", {
                  language: $t("home.program.english"),
                })
              }}&nbsp;({{ $t("speakers[2].name") }})
            </span>
            <span class="row-item-venue venue-lisianthus">
              {{ $t("home.program.room.lisianthus") }}
            </span>
          </div>
          <div class="row-item">
            <span class="row-item-time">
              14:40
              <span class="row-item-time-duration">
                (200 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title title-3-lines">
              {{ $t("home.program.japanese") }}
              &nbsp;({{ $t("speakers[9].name") }})
            </span>
            <span class="row-item-venue venue-clove">
              {{ $t("home.program.room.clove") }}
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time"></span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-time">
              15:35
              <span class="row-item-time-duration">
                (60 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{
                $t("home.program.evaluation", {
                  language: $t("home.program.taiwanese"),
                })
              }}
            </span>
            <span class="row-item-venue venue-calla">
              {{ $t("home.program.room.calla") }}
            </span>
          </div>
          <div class="row-item">
            <span class="row-item-time">
              15:35
              <span class="row-item-time-duration">
                (60 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{
                $t("home.program.training", {
                  language: $t("home.program.english"),
                })
              }}&nbsp;({{ $t("speakers[3].name") }})
            </span>
            <span class="row-item-venue venue-lisianthus">
              {{ $t("home.program.room.lisianthus") }}
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time"></span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-time">
              16:45
              <span class="row-item-time-duration">
                (105 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{
                $t("home.program.evaluation", {
                  language: $t("home.program.english"),
                })
              }}
            </span>
            <span class="row-item-venue venue-calla">
              {{ $t("home.program.room.calla") }}
            </span>
          </div>
          <div class="row-item">
            <span class="row-item-time">
              16:45
              <span class="row-item-time-duration">
                (90 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{
                $t("home.program.training", {
                  language: $t("home.program.mandarin"),
                })
              }}&nbsp;({{ $t("speakers[5].name") }})
            </span>
            <span class="row-item-venue venue-lisianthus">
              {{ $t("home.program.room.lisianthus") }}
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time">18:40</span>
        <div class="row-items">
          <div class="row-item item-expand item-expand-yellow">
            <span class="row-item-time">
              {{ $t("home.program.dinner") }}
              <span class="row-item-time-duration">
                (200 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-venue venue-jasmine">
              {{ $t("home.program.room.jasmine") }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="program-table" v-if="!showProgramDay1">
      <div class="program-row program-center">
        <span class="row-time">09:00</span>
        <div class="row-items">
          <div class="row-item item-expand item-expand-yellow">
            <span class="row-item-time">
              {{ $t("home.program.registration") }}
              <span class="row-item-time-duration">
                ({{ $t("home.program.until2") }})
              </span>
            </span>
            <span class="row-item-venue venue-lobby">
              {{ $t("home.program.room.lobby") }}
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time"></span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-time">
              09:10
              <span class="row-item-time-duration">
                (170 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{ $t("home.program.excom") }}
            </span>
            <span class="row-item-venue venue-calla">
              {{ $t("home.program.room.calla") }}
            </span>
          </div>
          <div class="row-item-columns">
            <div class="row-item">
              <span class="row-item-time">
                09:50
                <span class="row-item-time-duration">
                  (60 {{ $t("home.program.min") }})
                </span>
              </span>
              <span class="row-item-title">
                {{
                  $t("home.program.training", {
                    language: $t("home.program.mandarin"),
                  })
                }}&nbsp;({{ $t("speakers[7].name") }})
              </span>
              <span class="row-item-venue venue-lisianthus">
                {{ $t("home.program.room.lisianthus") }}
              </span>
            </div>
            <div class="row-item">
              <span class="row-item-time">
                11:00
                <span class="row-item-time-duration">
                  (60 {{ $t("home.program.min") }})
                </span>
              </span>
              <span class="row-item-title">
                {{
                  $t("home.program.training", {
                    language: $t("home.program.taiwanese"),
                  })
                }}&nbsp;({{ $t("speakers[8].name") }})
              </span>
              <span class="row-item-venue venue-lisianthus">
                {{ $t("home.program.room.lisianthus") }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time"></span>
        <div class="row-items">
          <div class="row-item item-expand-gray">
            <span class="row-item-time">
              12:00
              <span class="row-item-time-duration">
                (30 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{ $t("home.program.luncheon") }}
            </span>
            <span class="row-item-venue venue-lobby">
              {{ $t("home.program.room.lobby") }}
            </span>
          </div>
          <div class="row-item item-expand-gray">
            <span class="row-item-time">
              12:00
              <span class="row-item-time-duration">
                (30 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{ $t("home.program.dtm-gathering") }}
            </span>
            <span class="row-item-venue venue-rose">
              {{ $t("home.program.room.rose") }}
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time"></span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-time">
              12:30
              <span class="row-item-time-duration">
                (20 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{ $t("home.program.mandarin") }}/
              {{ $t("home.program.taiwanese") }}/
              {{
                $t("home.program.speech", {
                  language: $t("home.program.english"),
                })
              }}<br />
              {{
                $t("home.program.briefing2", {
                  group: $t("home.program.group1"),
                })
              }}
            </span>
            <span class="row-item-venue venue-rose">
              {{ $t("home.program.room.rose") }}
            </span>
          </div>
          <div class="row-item">
            <span class="row-item-time">
              12:30
              <span class="row-item-time-duration">
                (20 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{ $t("home.program.mandarin") }}/
              {{ $t("home.program.taiwanese") }}/
              {{
                $t("home.program.speech", {
                  language: $t("home.program.english"),
                })
              }}<br />
              {{
                $t("home.program.briefing2", {
                  group: $t("home.program.group2"),
                })
              }}
            </span>
            <span class="row-item-venue venue-calla">
              {{ $t("home.program.room.calla") }}
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time"></span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-time">
              13:00
              <span class="row-item-time-duration">
                (70 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{
                $t("home.program.speech", {
                  language: $t("home.program.mandarin"),
                })
              }}
            </span>
            <span class="row-item-venue venue-calla">
              {{ $t("home.program.room.calla") }}
            </span>
          </div>
          <div class="row-item">
            <span class="row-item-time">
              13:00
              <span class="row-item-time-duration">
                (70 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{
                $t("home.program.training", {
                  language: $t("home.program.english"),
                })
              }}&nbsp;({{ $t("speakers[4].name") }})
            </span>
            <span class="row-item-venue venue-lisianthus">
              {{ $t("home.program.room.lisianthus") }}
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time"></span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-time">
              14:20
              <span class="row-item-time-duration">
                (60 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{
                $t("home.program.speech", {
                  language: $t("home.program.taiwanese"),
                })
              }}
            </span>
            <span class="row-item-venue venue-calla">
              {{ $t("home.program.room.calla") }}
            </span>
          </div>
          <div class="row-item">
            <span class="row-item-time">
              14:20
              <span class="row-item-time-duration">
                (60 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{
                $t("home.program.training", {
                  language: $t("home.program.english"),
                })
              }}&nbsp;({{ $t("speakers[1].name") }})
            </span>
            <span class="row-item-venue venue-lisianthus">
              {{ $t("home.program.room.lisianthus") }}
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time">15:20</span>
        <div class="row-items">
          <div class="row-item item-expand item-expand-gray">
            <span class="row-item-time">
              {{ $t("home.program.tea") }}
              <span class="row-item-time-duration">
                (20 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-venue venue-lobby">
              {{ $t("home.program.room.lobby") }}
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time"></span>
        <div class="row-items">
          <div class="row-item">
            <span class="row-item-time">
              15:40
              <span class="row-item-time-duration">
                (70 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{ $t("home.program.final") }}
            </span>
            <span class="row-item-venue venue-calla">
              {{ $t("home.program.room.calla") }}
            </span>
          </div>
          <div class="row-item">
            <span class="row-item-time">
              15:40
              <span class="row-item-time-duration">
                (70 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-title">
              {{
                $t("home.program.training", {
                  language: $t("home.program.mandarin"),
                })
              }}&nbsp;({{ $t("speakers[6].name") }})
            </span>
            <span class="row-item-venue venue-lisianthus">
              {{ $t("home.program.room.lisianthus") }}
            </span>
          </div>
        </div>
      </div>
      <div class="program-row program-center">
        <span class="row-time">17:00</span>
        <div class="row-items">
          <div class="row-item item-expand item-expand-yellow">
            <span class="row-item-time">
              {{ $t("home.program.closing") }}
              <span class="row-item-time-duration">
                (75 {{ $t("home.program.min") }})
              </span>
            </span>
            <span class="row-item-venue venue-calla">
              {{ $t("home.program.room.calla") }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showProgramDay1 = ref(true)

function switchProgram (day: string): void {
  showProgramDay1.value = day === 'day1'
}
</script>

<style scoped>
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
    margin: 50px auto 59px auto;
    padding-left: 130px;
  }

  .program-head {
    width: 84.93%;
    max-width: 1223px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .program-download {
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    padding: 5px 10px;
    text-align: center;

    a {
      display: flex;
      text-decoration: none;
      align-items: center;
    }

    img {
      margin-right: 10px;
      height: 20px;
    }

    span {
      letter-spacing: 0.03em;
      color: black;
      font-family: "Noto Sans TC";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 35px;
    }
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
    border: 2px solid;
    border-color: #ddc8bf;
    box-shadow: 4px 4px 9px rgba(0, 0, 0, 0.25);
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

.row-items {
  max-width: 1055px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 16px;

  .row-item-columns {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
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

    .title-expand {
      text-align: center;
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

    .venue-rose {
      background: #c1ccbe;
    }

    .venue-jasmine {
      background: rgba(255, 255, 255, 0.6);
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

@media screen and (max-width: 768px) {
  .program-container {
    padding-bottom: 0px;

    .program-title {
      font-size: 15px;
      line-height: 18px;
      margin: 20px auto 29px auto;
      padding-left: 100px;
    }

    .program-download {
      padding: 3px 5px;
      height: 18px;

      span {
        font-size: 8px;
        line-height: 0;
      }

      img {
        margin-right: 5px;
        height: 10px;
      }
    }

    .program-head {
      width: 90.43%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    .program-download {
      background: rgba(255, 255, 255, 0.6);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 15px;
      padding: 4px 10px;
      text-align: center;

      a {
        display: flex;
        text-decoration: none;
        align-items: center;
      }

      img {
        margin-right: 4px;
        height: 10px;
      }

      span {
        letter-spacing: 0.03em;
        color: black;
        font-family: "Noto Sans TC";
        font-style: normal;
        font-weight: 400;
        font-size: 8px;
      }
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

  .row-items {
    gap: 10px;

    .row-item-columns {
      gap: 5px;
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

      .title-expand {
        max-width: 76%;
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
      margin: auto;
      font-size: 12px;
      line-height: 15px;
      gap: 5px;
      padding: 10px 20px;
    }
  }
}
</style>
