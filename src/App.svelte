<script lang="ts">
  import { Auth0Client } from '@auth0/auth0-spa-js';
  import { onMount } from 'svelte';
  import { Router } from 'svelte-routing';
  import AppContent from './app/AppContent.svelte';
  import AppFooter from './app/AppFooter.svelte';
  import AppHeader from './app/AppHeader.svelte';
  import AppMenu from './app/AppMenu.svelte';
  import authService from './modules/authentication/services/authService';
  import { isAuthenticated, user } from './modules/authentication/stores/users';

  let auth0Client: Auth0Client;

  onMount(async () => {
    auth0Client = await authService.createClient();

    isAuthenticated.set(await auth0Client.isAuthenticated());
    user.set(await auth0Client.getUser());
  });
</script>

<Router>
  <div class="App">
    <AppHeader />

    <AppMenu />

    <AppContent />

    <AppFooter />
  </div>
</Router>

<style lang="scss">
  .App {
    display: grid;
    grid-template-columns: 200px minmax(500px, 3fr);
    grid-template-rows: 64px minmax(calc(100vh - 64px - 128px), auto) 128px;
  }
</style>
