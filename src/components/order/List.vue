<script lang="ts">
export default {
  name: 'List',
  props: {
    count: {
      type: Object,
      default: function () {
        return {
          early: 0,
          double: 0,
          first: 0,
          second: 0,
          banquet: 0
        }
      }
    },
    remainder: {
      type: Number
    }
  },
  computed: {
    getItems () {
      const items: any[] = []
      let index = 1
      Object.keys(this.count).forEach((key) => {
        for (let i = 0; i < this.count[key]; i++) {
          if (key !== 'banquet') {
            const item = {
              id: '',
              key: index,
              type: key,
              description: this.$t(`cart.picker.${key}.name`)
            }
            items.push(item)
            index++
          }
        }
      })
      return items
    }
  }
}
</script>

<template>
  <section id="list" class="list-container">
    <header class="list-title">
      <span class="title-desktop">{{ $t("order.list.title") }}</span>
      <div class="title-mobile">
        <span class="title-mobile-subtitle">
          {{ $t("order.list.mobile-subtitle") }}
        </span>
        <span class="title-mobile-content">
          {{ $t("order.list.mobile-content") }}
        </span>
      </div>
    </header>
    <ul class="list-tickets-list">
      <li v-for="(item, key) in getItems" :key="key" class="list-ticket">
        {{ $t("order.ticket") }} {{ item.key }} - {{ item.description }}
      </li>
      <li class="list-banquet">
        <div class="list-banquet-content">
          <img
            alt="banquet"
            src="@/assets/icon/order/banquet-icon.svg"
            class="list-banquet-icon"
          />
          <span class="list-banquet-text">
            {{ $t("cart.picker.banquet.name") }}
          </span>
          <span class="list-banquet-number">
            {{ remainder }}
          </span>
        </div>
        <span class="list-banquet-note">({{ $t("order.list.note") }})</span>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.list-container {
  width: 32.25%;
  height: fit-content;
  position: sticky;
  top: 80px;
  z-index: 4;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 40px 24px;

  .list-title {
    display: flex;
    flex-direction: column;

    .title-desktop {
      display: block;
      color: black;
      font-size: 28px;
      text-align: left;
      font-weight: 600;
      margin-bottom: 16px;
    }

    .title-mobile {
      display: none;
    }
  }

  .list-paidunpaid-switcher {
    display: flex;
    border-color: transparent;
    border-radius: 29px;
    margin-bottom: 16px;

    .list-switcher-button {
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgba(33, 67, 102, 1);
      font-size: 18px;
      font-weight: 600;
      border-radius: 100px;
      border-color: transparent;
      background-color: rgba(167, 196, 212, 1);
      padding: 8px 16px;
      cursor: pointer;
    }

    .button-active {
      background-color: rgba(167, 196, 212, 1);
    }

    .button-inactive {
      background-color: transparent;
    }
  }

  .list-order-selector {
    width: 100%;
    display: flex;
    padding: 8px 16px;
    position: relative;
    border: 1px solid black;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 1);
    margin-bottom: 16px;

    .list-order-number {
      color: rgba(0, 0, 0, 1);
      flex-grow: 1;
      font-size: 16px;
      text-align: left;
      font-weight: 500;
      margin-right: 8px;
      margin-bottom: 0;
    }

    .list-selector-icon {
      position: relative;
      background: white;
      transform: rotate(-90deg);
      cursor: pointer;
    }
  }

  ul.list-tickets-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 24px;

    li.list-ticket {
      display: flex;
      font-size: 16px;
      font-weight: 500;
      color: black;
      border-radius: 4px;
      background-color: rgba(223, 223, 223, 1);
      padding: 8px 16px;
    }

    .list-banquet {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border-radius: 4px;
      border-color: transparent;
      background-color: rgba(223, 223, 223, 1);
      padding: 8px 16px;

      .list-banquet-content {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 8px;
        border-color: transparent;
        margin-bottom: 4px;

        .list-banquet-icon {
          width: 28px;
          height: 28px;
        }

        .list-banquet-text {
          color: rgba(0, 0, 0, 1);
          flex-grow: 1;
          font-size: 16px;
          text-align: left;
          font-weight: 500;
        }

        .list-banquet-number {
          width: 20px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-style: Bold;
          font-weight: 700;
          color: rgba(255, 255, 255, 1);
          border-radius: 14px;
          background-color: black;
        }
      }

      .list-banquet-note {
        color: rgba(120, 120, 120, 1);
        font-size: 12px;
        font-weight: 400;
      }
    }
  }

  .list-line {
    width: 100%;
    margin-bottom: 24px;
  }

  .list-new-order {
    width: 100%;
    font-size: 24px;
    text-align: center;
    font-weight: 500;
    color: black;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
    border-color: transparent;
    border-radius: 70px;
    background-color: rgba(255, 219, 130, 1);
    padding: 4px;
    cursor: pointer;
  }
}

@media screen and (max-width: 768px) {
  .list-container {
    width: 100%;
    position: relative;
    top: 0px;
    z-index: 0;
    padding: 12px 5%;

    .list-title {
      .title-desktop {
        display: none;
      }

      .title-mobile {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        margin-bottom: 16px;

        .title-mobile-subtitle {
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
          color: black;
        }

        .title-mobile-content {
          text-align: start;
          font-weight: 400;
          font-size: 12px;
          line-height: 15px;
          color: #787878;
        }
      }
    }

    ul.list-tickets-list {
      margin-bottom: 0;

      li.list-ticket {
        display: none;
      }

      .list-banquet {
        padding: 8px 16px;

        .list-banquet-content {
          gap: 8px;
          border-color: transparent;
          margin-bottom: 4px;

          .list-banquet-icon {
            width: 20px;
            height: 20px;
          }

          .list-banquet-text {
            font-size: 14px;
            line-height: 17px;
          }

          .list-banquet-number {
            font-size: 12px;
            line-height: 16px;
          }
        }

        .list-banquet-note {
          text-align: start;
          font-size: 12px;
          line-height: 15px;
        }
      }
    }
  }
}
</style>
