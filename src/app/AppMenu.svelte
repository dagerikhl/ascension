<script lang="ts">
  import NavLink from '../common/components/layout/NavLink.svelte';
</script>

<nav class="AppMenu">
  <NavLink to="/my-ascension">My Ascension</NavLink>
  <NavLink to="/about">About</NavLink>
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
