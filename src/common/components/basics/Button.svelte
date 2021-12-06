<script lang="ts">
</script>

<button class="Button" on:click on:mouseover on:mouseenter on:mouseleave {...$$restProps}><slot /></button>

<style lang="scss">
  .Button {
    padding: 0.25rem 0.5rem;

    background-color: lightgray;

    border: 1px solid black;
    border-radius: 4px;

    cursor: pointer;

    &:hover {
      background-color: darkgray;
    }
  }
</style>
