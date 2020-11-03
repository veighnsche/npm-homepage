<script>
  import { home } from './routes'
  import { pathname } from './store/pathname'
  import { brandColors, brandColorsAlt } from './brandColors'

  $: homeClass = home === $pathname ? 'active' : ''

</script>

<style lang="scss">
  svg {
    opacity: 0;
    transition: opacity 1s;
  }

  svg:hover {
    opacity: 1;
  }

  .active {
    opacity: 0.4;
  }

  rect {
    opacity: 0.5;
    transition: fill 1s;
  }
</style>

<div style="font-size: 5rem;">
  <svg class={homeClass} height="1.1em" width="1.8em">
    <rect fill={brandColors[$pathname]} height="0.1em" width="1.8em" y="0.4em"/>
    <rect fill={brandColors[$pathname]} height="1.1em" width="0.1em" x="0.5em"/>
    <rect fill={brandColorsAlt[$pathname]} height="0.05em" width="1.8em" y="0.55em"/>
    <rect fill={brandColorsAlt[$pathname]} height="1.1em" width="0.05em" x="0.65em"/>
    <rect fill={brandColors[$pathname]} height="0.1em" width="1.8em" y="0.7em"/>
    <rect fill={brandColors[$pathname]} height="1.1em" width="0.1em" x="0.8em"/>
  </svg>
</div>
