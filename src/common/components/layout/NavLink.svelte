<script lang="ts">
  import { Link } from 'svelte-routing';

  export let to = '';

  const getProps = ({ href, isPartiallyCurrent, isCurrent }) => {
    const isActive = href === '/' ? isCurrent : isPartiallyCurrent || isCurrent;

    if (isActive) {
      return { class: 'NavLink active' };
    }

    return { class: 'NavLink' };
  };
</script>

<Link {to} {getProps}>
  > <div><slot /></div>
</Link>

<style lang="scss">
  :global(.NavLink) {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding: 0.25rem 0;

    transition: all 120ms ease-in-out;
    transition-property: padding-left, background-color, color;

    border-radius: 2px;
    color: gray;
    text-decoration: none;

    > div {
      margin-bottom: 1px;
    }

    &:hover {
      color: currentColor;
      background-color: lightgray;

      > div {
        margin-bottom: 0;

        border-bottom: 1px solid gray;
      }
    }
  }

  :global(.NavLink.active) {
    padding-left: 0.5rem;

    color: currentColor;

    > div {
      margin-bottom: 0;

      border-bottom: 1px solid gray;
    }
  }
</style>
