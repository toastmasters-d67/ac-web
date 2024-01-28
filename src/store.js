import { createStore } from "vuex";

// 定義一個新的 Vue Store
const store = createStore({
  state: {
    langu: "en",
    id: "",
  },
  mutations: {
    // 將state設定為參數
    SET_LAN(state, lan) {
      state.langu = lan;
    },
    SET_ID(state, id) {
      state.id = id;
    },
  },
});
export default store;
