import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id: 0,
    lists: [],
    value: "",
    filter: "all",
    msg: "TODO LIST OF VUEX"
  },
  mutations: {
    add(state, event) {
      let content = event.target.value;
      if (content !== "") {
        state.lists.unshift({
          id: state.id++,
          content,
          finished: false
        });
      }
    },
    status(state, id) {
      state.lists.forEach(list => {
        if (list.id === id) {
          list.finished = !list.finished;
          this.commit("updataData");
        }
      });
    },
    remove(state, id) {
      state.lists.splice(
        state.lists.findIndex(list => list.id === id),
        1
      );
    },
    deleted(state) {
      state.lists = state.lists.filter(list => !list.finished);
      state.filter = "all";
    },
    clear(state) {
      state.lists = [];
    },
    toggle(state, status) {
      state.filter = status;
    },
    getData(state) {
      const data = JSON.parse(localStorage.getItem("todoListVuexData"));
      if (data && data.length > 0) {
        state.lists = data;
        state.id = state.lists[0].id + 1;
      }
    },
    updataData(state) {
      localStorage.setItem("todoListVuexData", JSON.stringify(state.lists));
    }
  },
  getters: {
    filterTodoLists: state => {
      if (state.filter === "all") {
        return state.lists;
      }
      const finished = state.filter === "finished";
      return state.lists.filter(list => list.finished === finished);
    }
  },
  actions: {},
  modules: {}
});
