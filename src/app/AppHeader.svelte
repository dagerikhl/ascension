<script lang="ts">
  import { Auth0Client } from '@auth0/auth0-spa-js';
  import { onMount } from 'svelte';
  import authService from '../modules/authentication/services/authService';
  import { isAuthenticated } from '../modules/authentication/stores/users';

  let auth0Client: Auth0Client;

  onMount(async () => {
    auth0Client = await authService.createClient();
  });

  const login = () => {
    authService.loginWithPopup(auth0Client);
  };

  const logout = () => {
    authService.logout(auth0Client);
  };
</script>

<header class="AppHeader">
  <div class="group">
    <h1>Ascension</h1>
  </div>

  <div class="group">
    <div>Logged in? {$isAuthenticated}</div>
  </div>

  <div class="group">
    <button on:click={login}>Login</button>
    <button on:click={logout}>Logout</button>
  </div>
</header>

<style lang="scss">
  .AppHeader {
    grid-column: span 2;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    height: 64px;
    padding: 0 2rem;

    background-color: floralwhite;
    box-shadow: 0 0 0.25rem gray;

    .group {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    h1 {
      margin: 0;

      font-size: 150%;
    }
  }
</style>
