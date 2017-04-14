/**
 * Created by lachlanmackenzie on 2017-04-14.
 */
export const state = {
  counter: 0
}

export const mutations = {
  increment(state){
    state.counter++
  },
  decrement(state){
    state.counter--
  }
}
