import { createRouter, createWebHistory } from 'vue-router';

import ViewHome from '@/views/ViewHome.vue';
import View404 from '@/views/View404.vue';

import VueFile from '@/views/2-VueFile.vue';
import ReactiveVariables from '@/views/3-ReactiveVariables.vue';
import AttributeBinding from '@/views/4-AttributeBinding.vue';
import ClassBinding from '@/views/5-ClassBinding.vue';
import ConditionLoop from '@/views/6-ConditionLoop.vue';
import VModelComputed from '@/views/7-VModelComputed.vue';
import Components from '@/views/8-Components.vue';
import ComponentCommunication from '@/views/9-ComponentCommunication.vue';
import CallingAPI from '@/views/10-CallingAPI.vue';
import CallingAPI2 from '@/views/10b-CallingAPI2.vue';
import StateManagement from '@/views/11-StateManagement.vue';
import StateManagementTest from '@/views/11b-StateManagementTest.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ViewHome,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/2',
      name: '2',
      component: VueFile,
      meta: {
        title: 'Ch.2 - Vue File',
      },
    },
    {
      path: '/3',
      name: '3',
      component: ReactiveVariables,
      meta: {
        title: 'Ch.3 - Reactive Variables',
      },
    },
    {
      path: '/4',
      name: '4',
      component: AttributeBinding,
      meta: {
        title: 'Ch.4 - Attribute Binding',
      },
    },
    {
      path: '/5',
      name: '5',
      component: ClassBinding,
      meta: {
        title: 'Ch.5 - Class Binding',
      },
    },
    {
      path: '/6',
      name: '6',
      component: ConditionLoop,
      meta: {
        title: 'Ch.6 - Condition and Loop',
      },
    },
    {
      path: '/7',
      name: '7',
      component: VModelComputed,
      meta: {
        title: 'Ch.7 - V-Model and Computed Property',
      },
    },
    {
      path: '/8',
      name: '8',
      component: Components,
      meta: {
        title: 'Ch.8 - Components',
      },
    },
    {
      path: '/9',
      name: '9',
      component: ComponentCommunication,
      meta: {
        title: 'Ch.9 - Component Communication',
      },
    },
    {
      path: '/10',
      name: '10',
      component: CallingAPI,
      meta: {
        title: 'Ch.10 - Calling API',
      },
    },
    {
      path: '/10b',
      name: '10b',
      component: CallingAPI2,
      meta: {
        title: 'Ch.10b - Calling API 2',
      },
    },
    {
      path: '/11',
      name: '11',
      component: StateManagement,
      meta: {
        title: 'Ch.11 - State Management',
      },
    },
    {
      path: '/11b',
      name: '11b',
      component: StateManagementTest,
      meta: {
        title: 'Ch.11b - State Management',
      },
    },
    // Error page
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: View404,
      meta: {
        title: 'Page Not Found',
      },
    },
  ],

  scrollBehavior: async (to) => {
    // If the link is hash, scroll smoothly
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }

    return { x: 0, y: 0 };
  },
});

// Change SEO metatag
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | My App`;
  return next();
});

export default router;
