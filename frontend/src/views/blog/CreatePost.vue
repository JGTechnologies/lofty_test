<template>
  <div class="container">
    <div class="row my-5 py-3">
      <div class="col-lg-8 offset-2">
        <PostForm
          @cancelClicked="onCancelClicked"
          @submitClicked="onSubmitClicked"
        />
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store/index.js'
import PostForm from '@/components/blog/PostForm'

export default {
  name: 'EditPost',
  components: {
    PostForm
  },
  methods: {
    onCancelClicked () {
      this.$router.push({
        name: 'blog-home'
      })
    },
    onSubmitClicked (values) {
      const payload = {
        user: store.state.auth.profile.pk,
        title: values.title,
        body: values.body
      }

      console.log(payload)

      this.$store.dispatch('createPost', payload)
        .then(() => {
          this.$router.push({
            name: 'blog-home'
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
