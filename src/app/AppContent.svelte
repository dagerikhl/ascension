<script lang="ts">
  import { Route } from 'svelte-routing';
  import Home from '../pages/home/Home.svelte';
</script>

<main class="AppContent">
  <Route path="/">
    <Home />
  </Route>
</main>

<style lang="scss">
  .AppContent {
    grid-column: 2;

    height: calc(100vh - 64px - 128px - 2rem);
    padding: 1rem;

    overflow-y: scroll;
  }
</style>
