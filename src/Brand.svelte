<script>
  import { home } from './routes'
  import { pathname } from './store/pathname'
  import { brandColors } from './brandColors'

  $: homeClass = home === $pathname ? 'active' : ''

</script>

<style lang="scss">
  svg {
    border-radius: 1.1em;
    opacity: 0;
    transition: opacity 1s;
  }

  svg:hover {
    opacity: 0.1;
  }

  .active {
    opacity: 0.2;
  }

  .active:hover {
    opacity: 0.3;
  }

  rect {
    transition: fill 1s;
  }
</style>

<div style="font-size: 5rem;">
  <svg class={homeClass} height="1.1em" width="1.8em">
    <rect fill={brandColors[$pathname]} height="0.3em" width="1.8em" y="0.4em"/>
    <rect fill={brandColors[$pathname]} height="1.1em" width="0.3em" x="0.5em"/>
  </svg>
</div>
