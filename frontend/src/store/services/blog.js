import axios from 'axios'

const state = {
}

const getters = {}

const mutations = {
}

const actions = {
  // posts
  createPost (context, payload) {
    return axios.post('/api/blog/posts/', payload)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  deletePost (context, id) {
    return axios.delete(`/api/blog/posts/${id}/`)
      .then(() => {})
      .catch(error => {
        console.log(error)
      })
  },
  getAuthor (context, id) {
    return axios.get(`/api/users/${id}/`)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  getPost (context, id) {
    return axios.get(`/api/blog/posts/${id}/`)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  getPosts (context) {
    return axios.get('/api/blog/posts/')
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  patchPost (context, payload) {
    return axios.patch(`/api/blog/posts/${payload.pk}/`, payload)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
      })
  },

  // comments
  createComment (context, payload) {
    return axios.post('/api/blog/comments/', payload)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  deleteComment (context, id) {
    return axios.delete(`/api/blog/comments/${id}/`)
      .then(() => {})
      .catch(error => {
        console.log(error)
      })
  },
  getComment (context, id) {
    return axios.get(`/api/blog/comments/${id}/`)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  getComments (context, postID) {
    return axios.get(`/api/blog/posts/${postID}/comments/`)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  patchComment (context, payload) {
    return axios.patch(`/api/blog/comments/${payload.pk}/`, payload)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
