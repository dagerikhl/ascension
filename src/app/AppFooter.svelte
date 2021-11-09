<script lang="ts">
  import { version } from '../../package.json';
</script>

<footer class="AppFooter">
  <div class="group">
    <div class="group"><img class="logo" src="assets/logos/miles.svg" alt="Miles" /></div>

    <div class="group">&copy; Miles/Dag Erik Løvgren 2021-(present)</div>
  </div>

  <div class="group">v{version}</div>
</footer>

<style lang="scss">
  .AppFooter {
    height: 128px;
    grid-column: span 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;

    .group {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .logo {
      height: 64px;
      width: 64px;
    }
  }
</style>
