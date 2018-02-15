<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <form v-on:submit.prevent="queryGitHub(query)">

        <input type="text" placeholder="GitHub username" v-model="query"/>

      </form>
    <div class= "results" v-if="results">
      <img v-bind:src="results.avatar_url" />
      <h2>{{ results.name }}</h2>
      <div>{{ results.bio }}</div>
      <div>{{ results.location }}</div>
      <div v-if="results.following">Following: {{ results.following }}</div>
      <div v-if="results.followers">Followers: {{ results.followers }}</div>
      <a v-if="results.blog" v-bind:href="results.blog"> Go to Website</a>
      {{ results.message }}
    </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Github',
  data () {
    return {
      msg: 'Github Search',
      query: '',
      results: null
    }
  },
  methods: {
    queryGitHub (q) {
      let self = this
      fetch('https://api.github.com/users/' + q)
        .then((j) => {
          return j.json()
        })
        .then((r) => {
          console.log(r)
          self.results = r
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.results {
  margin: 10px 150px;
}

.results img {
  float: left;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
