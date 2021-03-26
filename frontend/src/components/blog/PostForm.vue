<template>
  <div>
    <div>
      <label for="title">Title</label>
      <input
        type="text"
        class="form-control"
        id="title"
        v-model="title"
      >
    </div>
    <div>
      <label for="body">Body</label>
      <textarea
        type="text"
        class="form-control"
        rows="10"
        id="body"
        v-model="body"
      />
    </div>
    <div class="my-2">
      <Button
        text = "Cancel"
        background = "grey"
        color = "white"
        class = "float-left"
        @clicked = "$emit('cancelClicked')"
      />
      <Button
        text = "Submit"
        color = "white"
        class = "btn-success float-right col-6"
        @clicked = "$emit('submitClicked', { title: title, body: body })"
      />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'PostForm',
  components: {
    Button
  },
  props: {
    id: Number
  },
  data () {
    return {
      title: '',
      body: ''
    }
  },
  created () {
    if (this.$props.id !== undefined) {
      this.$store.dispatch('getPost', this.$props.id)
        .then(response => {
          this.title = response.title
          this.body = response.body
        })
    }
  }
}
</script>

<style>
</style>
