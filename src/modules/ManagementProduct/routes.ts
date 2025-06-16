import { RouteName } from '@/shared/constants';
import { RouteRecordRaw } from 'vue-router';
import MainLayout from './index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/manage-product',
    name: RouteName.MANAGE_PRODUCT,
    component: MainLayout,
    meta: {}
  },
];

export default routes;
