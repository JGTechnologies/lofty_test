<template>
  <div class="container">
    <div class="my-5 py-5">
      <div
        class = "col-lg-8 offset-2"
        v-if = "post"
      >
        <div class = "col-12">
          <Post
            :post = "post"
            :comments = "comments"
            @commentDeleteClicked = "onCommentDeleteClicked"
            @editClicked = "onEditPostClicked"
            @deleteClicked = "onDeletePostClicked"
          />
        </div>

        <div>
          <CommentForm @submitClicked="createComment" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentForm from '@/components/blog/CommentForm'
import Post from '@/components/blog/Post'
import store from '@/store/index'

export default {
  name: 'ViewPost',
  data () {
    return {
      post: null,
      comments: null
    }
  },
  components: {
    CommentForm,
    Post
  },
  created () {
    this.$store.dispatch('getPost', this.$route.params.id)
      .then(post => {
        this.post = post
        this.$store.dispatch('getComments', post.pk)
          .then(comments => {
            this.comments = comments
          })
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    createComment (values) {
      const payload = {
        user: store.state.auth.profile.pk,
        post: this.post.pk,
        body: values.body
      }

      this.$store.dispatch('createComment', payload)
        .then(result => {
          this.comments = [result, ...this.comments]
        })
    },
    onCommentDeleteClicked (id) {
      if (confirm('Are you sure you want to delete this comment?')) {
        this.$store.dispatch('deleteComment', id)
          .then(() => {
            this.comments = this.comments.filter((comment) => comment.pk !== id)
          })
      }
    },
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
            this.$router.push({
              name: 'blog-home'
            })
          })
      }
    }
  }
}
</script>

<style>
</style>
