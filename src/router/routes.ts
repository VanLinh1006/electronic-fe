import { RouteName } from "@/shared/constants";
import { RouteRecordRaw } from "vue-router";
import {Homepage} from '@/modules/common'

const routes: RouteRecordRaw = [
{
  path: '',
  name: RouteName.HOMEPAGE,
  component: Homepage,
}
]

export default routes;
