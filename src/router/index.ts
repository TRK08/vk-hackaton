import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../../firabase.config'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
        requiresAuth: true
      },
      children: []
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/Auth.vue')
    },
    {
      path: '/learn',
      name: 'learn',
      component: () => import('../views/Learn.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/comments/:id',
      name: 'comments',
      component: () => import('../views/Comments.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})

const getCurrentUser = () => {
  const { user } = storeToRefs(useAuthStore())
  return new Promise((res, rej) => {
    const removeListener = onAuthStateChanged(
      auth,
      (userData) => {
        removeListener()
        if (userData?.email === null || typeof userData?.email === 'string') {
          user.value.email = userData?.email
        }
        res(userData)
      },
      rej
    )
  })
}

router.beforeEach(async (to, from, next) => {
  const { user } = storeToRefs(useAuthStore())
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      next('/auth')
    }
  } else {
    next()
  }
})

export default router
