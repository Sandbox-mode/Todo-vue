import Vue from "vue";
import Vuex from "vuex";
import uuid from "uuid";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: "Выгулять собаку",
        editing: false,
      },
      {
        id: 2,
        title: "Выгулять кошку",
        editing: false,
      },
      {
        id: 3,
        title: "Выгулять кошку",
        editing: false,
      },
    ],
  },
  getters: {
    getTodos: (state) => {
      return state.todos;
    },
  },
  mutations: {
    deleteTodo(state, payload) {
      state.todos = state.todos.filter((todo) => todo.id !== payload.id);
    },
    addTodo(state, title) {
      state.todos.push({
        id: uuid.v4(),
        title,
        editing: false,
      });
    },
    updateItem(state, payload) {
      state.todos = state.todos.map(item => {
        if(item.id === payload.id) {
          return { ...payload };
        }
        return item;
      })
    }
  },
  actions: {
    setDeleteItem: ({ commit }, payload) => {
      commit("deleteTodo", payload);
    },
    setAddItem: ({ commit }, payload) => {
      commit("addTodo", payload.title);
    },

    updateItem: ({ commit }, payload) => {
      commit('updateItem', payload);
    },
  },
});

/**
 * Внешний API - только для компонентов
 * Внешний API - getters, actions
 * mutations - только внутри стора
 */

// this.$emit('edit-todo', {
//   id: this.todo.id,
//   title: this.localValue,
//   editing: false
// });
