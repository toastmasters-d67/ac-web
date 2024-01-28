import { createStore } from "vuex";

const store = createStore({
  state: {
    langu: "en",
    id: "",
  },
  mutations: {
    SET_LAN(state, lan) {
      state.langu = lan;
    },
    SET_ID(state, id) {
      state.id = id;
    },
  },
});
export default store;
