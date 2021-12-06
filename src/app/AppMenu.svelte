<script lang="ts">
  import NavLink from '../common/components/layout/NavLink.svelte';
  import { isAuthenticated } from '../modules/authentication/stores/users';
  import { ROUTES } from '../modules/routing/routes';
</script>

<nav class="AppMenu">
  {#each ROUTES as route (route.path)}
    {#if $isAuthenticated || !route.isProtected}
      <NavLink to={route.path}>{route.label}</NavLink>
    {/if}
  {/each}
</nav>

<style lang="scss">
  .AppMenu {
    grid-column: 1;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    height: calc(100vh - 64px - 128px - 2rem);
    padding: 1rem;

    overflow-y: auto;
    list-style: none;

    border-right: 1px solid lightgray;
  }
</style>
