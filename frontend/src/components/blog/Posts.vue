<template>
  <div>
    <div
      v-for = "post in posts"
      :key = "post.id"
    >
      <Post
        :post = "post"
        @editClicked = "onEditPostClicked"
        @deleteClicked = "onDeletePostClicked"
      />
    </div>
  </div>
</template>

<script>
import Post from '@/components/blog/Post'

export default {
  name: 'Posts',
  props: {
    posts: Array
  },
  components: {
    Post
  },
  methods: {
    onEditPostClicked (id) {
      this.$router.push({
        name: 'blog-edit-post',
        params: {
          id: id
        }
      })
    },
    onDeletePostClicked (id) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.$store.dispatch('deletePost', id)
          .then(() => {
            this.$emit('postDeleted', id)
          })
      }
    }
  }
}
</script>
