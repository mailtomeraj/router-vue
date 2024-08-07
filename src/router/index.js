import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/home.vue'
import Articles from '@/components/articles/index.vue'
import Article from '@/components/articles/article.vue'
import Contact from '@/components/contact/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
        path: '/articles',
        name: 'articles',
        component: Articles
      },
      {
        path: '/articles/:articleId',
        name: 'article',
        component: Article,
        props: true
      },
      {
        path: '/contact',
        name: 'contact',
        component: Contact
      },
      
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
  linkActiveClass: "active"
// linkExactActiveClass: "active" 
})

export default router