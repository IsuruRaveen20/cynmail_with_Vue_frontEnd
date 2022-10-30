import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contacts',
      name: 'ContactIndex',
      component: () => import('../views/contacts/ContactIndex.vue')
    },
    {
      path: '/contacts/create',
      name: 'ContactCreate',
      component: () => import('../views/contacts/ContactCreate.vue')
    },
    {
      path: '/contacts/:id/edit',
      name: 'ContactEdit',
      component: () => import('../views/contacts/ContactEdit.vue'),
      props:true,
    },

    {
      path: '/contactGroups',
      name: 'ContactGroupIndex',
      component: () => import('../views/contactGroups/ContactGroupIndex.vue')
    },
    {
      path: '/contactGroups/create',
      name: 'ContactGroupCreate',
      component: () => import('../views/contactGroups/ContactGroupCreate.vue')
    },
    {
      path: '/contactGroups/:id/edit',
      name: 'ContactGroupEdit',
      component: () => import('../views/contactGroups/ContactGroupEdit.vue'),
      props:true,
    },
  ],
})

export default router
