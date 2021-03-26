<template>
  <div class="container">
    <div class="row my-5 py-3">
      <div class="col-lg-8 offset-2">
        <div class="row">
          <Button
            text="Create New Post"
            background="green"
            color="white"
            class="ml-auto mb-2"
            @clicked="onNewPostClicked"
          />
        </div>
        <div class="row">
          <Posts
            :posts="posts"
            @postDeleted="onPostDeleted"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'
import Posts from '@/components/blog/Posts'

export default {
  name: 'Home',
  data () {
    return {
      posts: []
    }
  },
  methods: {
    onNewPostClicked () {
      this.$router.push({
        name: 'blog-create-post'
      })
    },
    onPostDeleted (postID) {
      this.posts = this.posts.filter((post) => post.pk !== postID)
    }
  },
  created () {
    this.$store.dispatch('getPosts')
      .then(posts => {
        this.posts = posts.reverse()
      })
      .catch(error => {
        console.log('error')
        console.log(error)
      })
  },
  components: {
    Button,
    Posts
  }
}
</script>

<style>
</style>
