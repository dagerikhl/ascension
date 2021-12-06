import type { Route } from '../../common/types/Route';
import Guide from '../../pages/guide/Guide.svelte';
import Home from '../../pages/home/Home.svelte';
import MyAscension from '../../pages/my-ascension/MyAscension.svelte';

export const HOME_ROUTE: Route = {
  path: '/',
  label: 'Home',
  Component: Home,
  isProtected: false,
};
export const GUIDE_ROUTE: Route = {
  path: '/guide',
  label: 'Guide',
  Component: Guide,
  isProtected: false,
};
export const MY_ASCENSION_ROUTE: Route = {
  path: '/my-ascension',
  label: 'Home',
  Component: MyAscension,
  isProtected: true,
};

export const ROUTES: Route[] = [HOME_ROUTE, GUIDE_ROUTE, MY_ASCENSION_ROUTE];
