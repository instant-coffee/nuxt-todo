import axios from 'axios'

export async function init ({store, redirect}) {
  try {
    const res = await axios.get('https://todos-api-xeywbdjlvd.now.sh/todos')
    store.commit('init', res.data)
  } catch (error) {
    redirect('/error')
  }
}
