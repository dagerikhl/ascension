<script lang="ts">
  import { onMount } from 'svelte';
  import { navigate, Route } from 'svelte-routing';
  import { isAuthenticated } from '../modules/authentication/stores/users';
  import { HOME_ROUTE, ROUTES } from '../modules/routing/routes';

  onMount(() => {
    const route = ROUTES.find(({ path }) => path === window.location.pathname);
    if (!route || (route.isProtected && !$isAuthenticated)) {
      // Have to use timout to allow routes to be loaded first
      setTimeout(() => {
        navigate(HOME_ROUTE.path);
      }, 0);
    }
  });
</script>

<main class="AppContent">
  {#each ROUTES as route (route.path)}
    {#if $isAuthenticated || !route.isProtected}
      <Route path={route.path} component={route.Component} />
    {/if}
  {/each}
</main>

<style lang="scss">
  .AppContent {
    grid-column: 2;

    height: calc(100vh - 64px - 128px - 2rem);
    padding: 1rem;

    overflow-y: scroll;
  }
</style>
