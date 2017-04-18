<template>
  <div>
    <h1 class="f4 bold center mw5">Todos</h1>
    <ul class="list pl0 ml0 center mw5 ba b--light-silver br3">
      <li v-for="todo of todos" class="ph3 pv2 bb b--light-silver">{{todo.task}}</li>
    </ul>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  import axios from 'axios'

  export default {
    async fetch ({ store, redirect }) {
      try {
        const res = await axios.get('https://todos-api-xeywbdjlvd.now.sh/todos')
        store.commit('init', res.data)
      } catch (error) {
        redirect('/error')
      }
    },
    computed: {
      ...mapState({
        todos: state => state.todos
      })
    },
    methods: {
      ...mapMutations([
      ])
    }
  }
</script>
