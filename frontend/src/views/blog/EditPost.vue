<template>
  <div class="container">
    <div class="row my-5 py-3">
      <div class="col-lg-8 offset-2">
        <PostForm
          :id="id"
          @cancelClicked="onCancelClicked"
          @submitClicked="onSubmitClicked"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PostForm from '@/components/blog/PostForm'
export default {
  name: 'EditPost',
  components: {
    PostForm
  },
  data () {
    return {
      id: this.$route.params.id
    }
  },
  methods: {
    onCancelClicked () {
      this.$router.go(-1)
    },
    onSubmitClicked (values) {
      const payload = {
        pk: this.id,
        title: values.title,
        body: values.body
      }
      this.$store.dispatch('patchPost', payload)
        .then(() => {
          this.$router.go(-1)
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
