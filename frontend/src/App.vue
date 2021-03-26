<template lang="html">
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>
       | <router-link :to="{ name: 'blog-home' }">Blog</router-link>
    </div>

    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>
