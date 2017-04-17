/**
 * Created by lachlanmackenzie on 2017-04-14.
 */
export const state = {
  todos: []
}

export const mutations = {
  init (state, todos) {
    state.todos = todos
  }
}

