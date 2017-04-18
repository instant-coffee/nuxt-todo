<template>
  <div>
    <form @submit.prevent="add(task)">
      <input v-model="task" type="text">
    </form>

    <h1 class="f4 bold center mw5">Todos</h1>
    <ul class="list pl0 ml0 center mw5 ba b--light-silver br3">
      <li v-for="todo of todos" class="ph3 pv2 bb b--light-silver">
        {{todo.id}}.{{todo.task}}
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import {init} from './shared'

  export default {
    fetch: init,
    data () {
      return {
        task: 'some task'
      }
    },
    computed: {
      ...mapState({
        todos: state => state.todos
      })
    },
    methods: {
      ...mapActions([
        'add'
      ])
    }
  }
</script>
