<template>
  <div class="post card">
    <div class="post-title">
      <div class="h3">
        {{ post.title }}
        <div class="h6 text-muted">
          By: {{ this.author.full_name }} At: {{ post.created }} <span v-if="post.updated"> (Last Updated: {{ post.updated }})</span>
        </div>
      </div>
    </div>

    <div class="post-body">
      <pre>{{ post.body }}</pre>
    </div>

    <div v-if="post.user == currentUserID" class="post-options">
      <Button
        text = "Edit"
        background = "blue"
        color = "white"
        class = "btn-sm edit-button"
        @clicked = "$emit('editClicked', post.pk)"
      />
      <Button
        text = "Delete"
        background = "red"
        color = "white"
        class = "btn-sm delete-button"
        @clicked = "$emit('deleteClicked', post.pk)"
      />
    </div>
  </div>
</template>

<script>
import store from '@/store/index.js'
import Button from '@/components/Button'

export default {
  name: 'Post',
  props: {
    post: Object
  },
  components: {
    Button
  },
  data () {
    return {
      author: 'ERROR',
      currentUserID: -1
    }
  },
  created () {
    this.currentUserID = store.state.auth.profile.pk
    this.$store.dispatch('getAuthor', this.post.user)
      .then(result => {
        this.author = result
      })
      .catch(error => {
        console.log(error)
        this.author = 'ERROR'
      })
  }
}
</script>

<style scope>
.post {
  margin-bottom: 40px;
}
.post-body {
  border: 1px dotted black;
}
.post-options {
  margin-top: 5px;
}
.edit-button {
  margin-right: 10px;
}
pre {
  white-space: pre-wrap;
}
</style>
