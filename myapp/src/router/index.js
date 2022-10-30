import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  
  {
    path: '/dialog',
    name: 'dialog',
    component: () => import( '../views/Dialog')
  },
  {
    path: '/input',
    name: 'input',
    component: () => import( '../views/Input')
  },
  {
    path: '/switch',
    name: 'switch',
    component: () => import( '../views/Switch')
  },
  {
    path: '/radio',
    name: 'radio',
    component: () => import( '../views/Radio')
  },
  {
    path: '/radioGroup',
    name: 'radioGroup',
    component: () => import( '../views/RadioGroup')
  },
  {
    path: '/checkBox',
    name: 'checkBox',
    component: () => import( '../views/CheckBox')
  } ,
  {
    path: '/checkBoxGroup',
    name: 'checkBoxGroup',
    component: () => import( '../views/CheckBoxGroup')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import( '../components/table/tableIndex')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  
})

export default router
