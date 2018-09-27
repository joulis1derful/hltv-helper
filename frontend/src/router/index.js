import Vue from 'vue';
import Router from 'vue-router';
import Teams from '@/components/Teams';
import Players from '@/components/Players';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Teams',
      component: Teams,
    },
    {
      path: '/players',
      name: 'Players',
      component: Players
    },
  ],
});
