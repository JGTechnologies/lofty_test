import Vue from 'vue'
import VueRouter from 'vue-router'

import ExampleComponent from '@/components/ExampleComponent.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import PasswordReset from '@/views/PasswordReset.vue'

import BlogCreatePost from '@/views/blog/CreatePost.vue'
import BlogEditComment from '@/views/blog/EditComment.vue'
import BlogEditPost from '@/views/blog/EditPost.vue'
import BlogPostList from '@/views/blog/Home.vue'
import BlogViewPost from '@/views/blog/ViewPost.vue'

import store from '@/store/index.js'

const routes = [
  { path: '*', component: ExampleComponent },
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/password-reset', name: 'password-reset', component: PasswordReset },
  { path: '/blog', name: 'blog-home', component: BlogPostList },
  { path: '/blog/comments/:id/edit', name: 'blog-edit-comment', component: BlogEditComment },
  { path: '/blog/posts', name: 'blog-create-post', component: BlogCreatePost },
  { path: '/blog/posts/:id', name: 'blog-post-details', component: BlogViewPost },
  { path: '/blog/posts/:id/edit', name: 'blog-edit-post', component: BlogEditPost }
]

Vue.use(VueRouter)
const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) { return { x: 0, y: 0 } },
  mode: 'history',
  routes
})

const authExcludedRoutes = [
  // Include Routes that SHOULD NOT check for authorization here
  'login',
  'register',
  'password-reset'
]

router.beforeEach((to, from, next) => {
  if (store.state.auth.loggedIn === false && !authExcludedRoutes.includes(to.name)) {
    next('/login')
  } else {
    next()
  }
})

export default router
