<script lang="ts">
  import { Router } from 'svelte-routing';
  import AppContent from './app/AppContent.svelte';
  import AppFooter from './app/AppFooter.svelte';
  import AppHeader from './app/AppHeader.svelte';
  import AppMenu from './app/AppMenu.svelte';
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
