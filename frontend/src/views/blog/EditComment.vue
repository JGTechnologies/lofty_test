<template>
  <div class="container">
    <div class="row my-5 py-3">
      <div
        v-if = "comment"
        class = "col-lg-8 offset-2"
      >
        <CommentForm
          :comment = "comment"
          @cancelClicked = "onCancelClicked"
          @submitClicked = "onSubmitClicked"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CommentForm from '@/components/blog/CommentForm'

export default {
  name: 'EditComment',
  components: {
    CommentForm
  },
  data () {
    return {
      comment: null
    }
  },
  created () {
    this.$store.dispatch('getComment', this.$route.params.id)
      .then((result) => {
        this.comment = result
      })
  },
  methods: {
    onCancelClicked () {
      this.$router.push({
        name: 'blog-post-details',
        params: {
          id: this.comment.post
        }
      })
    },
    onSubmitClicked (values) {
      const payload = {
        pk: this.comment.pk,
        body: values.body
      }

      this.$store.dispatch('patchComment', payload)
        .then(() => {
          this.$router.push({
            name: 'blog-post-details',
            params: {
              id: this.comment.post
            }
          })
        })
        .catch(error => {
          alert('Failed to save')
          console.log(error)
        })
    }
  }
}
</script>

<style>
</style>
