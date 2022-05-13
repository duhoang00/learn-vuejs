// import { defineStore } from "pinia";
import { createStore } from "vuex";

export const useCounterStore = createStore({
  // id: "counter",
  state: () => ({
    counter: 0,
  }),
  // getters: {
  //   doubleCount: (state) => state.counter * 2,
  // },
  mutations: {
    increment(state) {
      state.counter++;
    },
  },
});
