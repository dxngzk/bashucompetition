<template>
  <div class="contest">
    <h1>{{ msg }}</h1>
    <h2>Welcome To Contest!</h2>
  </div>
</template>

<script>
export default {
  name: 'contest',
  data () {
    return {
      msg: 'Contest #33'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

.contest {
    color: blue;
}
</style>
