import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NoteView from '@/views/NoteView.vue'
import TdlsView from '@/views/TdlsView.vue'
import TableView from '@/views/TableView.vue'
import PassView from '@/views/PassView.vue'
import RegisterView from '../views/RegisterView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/note',
    name: 'Note',
    component: NoteView
  },
  {
    path: '/tdls',
    name: 'Tdls',
    component: TdlsView
  },
  {
    path: '/table',
    name: 'Table',
    component: TableView
  },
  {
    path: '/pass',
    name: 'Pass',
    component: PassView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
