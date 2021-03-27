<template>
  <div class="comment card">
    <div class="comment-body">
      <pre>{{ comment.body }}</pre>
    </div>

    <div class="h6 text-muted">
      By: {{ this.author.full_name }}<br />
      {{ comment.created }}<br />
      <span v-if="comment.updated">Updated: {{ comment.updated }}</span>
    </div>

    <div v-if="comment.user == currentUserID" class="post-options">
      <Button
        text = "Edit"
        background = "blue"
        color = "white"
        class = "btn-sm edit-button"
        @clicked = "$emit('editClicked', comment.pk)"
      />
      <Button
        text = "Delete"
        background = "red"
        color = "white"
        class = "btn-sm delete-button"
        @clicked = "$emit('deleteClicked', comment.pk)"
      />
    </div>
  </div>
</template>

<script>
import store from '@/store/index.js'
import Button from '@/components/Button'

export default {
  name: 'Comment',
  components: {
    Button
  },
  props: {
    comment: Object
  },
  data () {
    return {
      author: 'ERROR'
    }
  },
  created () {
    this.currentUserID = store.state.auth.profile.pk
    this.$store.dispatch('getAuthor', this.comment.user)
      .then(result => {
        this.author = result
      })
  }
}
</script>

<style>
.comment {
  margin-bottom: 10px;
}
</style>
