<template>
  <div>
    <div class="post card">
      <div class="post-title">
        <span
          class = "h3"
          @click = "titleClicked"
        >
          {{ post.title }}
        </span>
        <div class="h6 text-muted">
          By: {{ this.author.full_name }}<br />
          {{ post.created }}<br />
          <span v-if="post.updated">Updated: {{ post.updated }}</span>
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

    <div
      class = "my-5"
      v-if = "comments"
    >
      <div class="h4">
        Comments
      </div>
      <div
        v-for = "comment in comments"
        :key = "comment.pk"
      >
        <Comment
          :comment = "comment"
          @editClicked = "onCommentEditClicked(comment.pk)"
          @deleteClicked = "$emit('commentDeleteClicked', comment.pk)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store/index.js'
import Button from '@/components/Button'
import Comment from '@/components/blog/Comment'

export default {
  name: 'Post',
  props: {
    post: Object,
    comments: Array
  },
  components: {
    Button,
    Comment
  },
  data () {
    return {
      author: 'ERROR',
      currentUserID: -1
    }
  },
  methods: {
    titleClicked () {
      this.$router.push({
        name: 'blog-post-details',
        params: {
          id: this.$props.post.pk
        }
      })
    },
    onCommentEditClicked (id) {
      this.$router.push({
        name: 'blog-edit-comment',
        params: {
          id: id
        }
      })
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
