import Vue from 'vue'
import Vuex from 'vuex'

import blog from '@/store/services/blog'
import users from '@/store/services/users'
import auth from '@/store/modules/auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    blog,
    users,
    auth
  }
})

export default store
