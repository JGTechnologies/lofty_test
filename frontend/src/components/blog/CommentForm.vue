<template>
  <div>
    <div>
      <label for="body">Body</label>
      <textarea
        type = "text"
        class = "form-control"
        rows = "10"
        id = "body"
        v-model = "comment.body"
      />
    </div>
    <div class="my-2">
      <Button
        v-if = "comment.pk"
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
        @clicked = "onSubmitClicked"
      />
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'CommentForm',
  components: {
    Button
  },
  props: {
    comment: {
      type: Object,
      default () {
        return {
          body: ''
        }
      }
    }
  },
  methods: {
    onSubmitClicked () {
      this.$emit('submitClicked', {
        body: this.comment.body
      })

      this.comment.body = ''
    }
  }
}
</script>

<style>
</style>
