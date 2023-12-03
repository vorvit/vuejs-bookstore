import { createWebHistory } from 'vue-router'
import createRouter from '../pages/routes.js'

export default createRouter(createWebHistory(import.meta.env.BASE_URL))