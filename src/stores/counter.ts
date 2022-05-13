import { createStore } from "vuex";

export const useCounterStore = createStore({
  state: () => ({
    counter: 0,
  }),
  mutations: {
    increment(state) {
      state.counter++;
    },
  },
});
