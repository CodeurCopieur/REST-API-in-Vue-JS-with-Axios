let capitalize = (value) => {
  return value.toUpperCase();
}

const app = new Vue({
  el: '#app',
  data:{
    posts: []
  },
  filters: {
    capitalize
  },
  methods: {
    updated() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
           .then(response => this.posts = response.data.slice(0,10))
           .catch(erreur => this.posts = [{title: "Erreur de chargement !"}])
    }
  }
})