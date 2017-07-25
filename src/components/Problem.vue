<template>
  <div class="problem">
    <h1>{{ msg }}</h1>
    <h2>Welcome To Problems</h2>
  </div>
</template>

<script>
export default {
  name: 'problem',
  data () {
    return {
      msg: 'Problem 1000'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.problem {
    color: red;
}
</style>
