<script>
  import { home } from './routes'
  import { pathname } from './store/pathname'
  // import { brandColors, brandColorsAlt } from './brandColors'

  $: homeClass = home !== $pathname ? 'active' : ''

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

  text {
    font-family: 'Libre Baskerville', serif;
    //font-family: 'Great Vibes', cursive;
    transition: fill 1s;
  }
</style>

<div style="font-size: 1em;">
<!--  <svg class={homeClass} height="1.2em" width="7.5em">-->
<!--    <text x="0.28em" y="0.9em" fill={brandColorsAlt[$pathname]}>veighnsche</text>-->
<!--    <rect fill={brandColors[$pathname]} height="0.1em" width="1.8em" y="0.4em"/>-->
<!--    <rect fill={brandColors[$pathname]} height="1.1em" width="0.1em" x="0.5em"/>-->
<!--    <rect fill={brandColorsAlt[$pathname]} height="0.05em" width="7.2em" y="0.535em"/>-->
<!--    <rect fill={brandColorsAlt[$pathname]} height="1.1em" width="0.05em" x="0.65em"/>-->
<!--    <rect fill={brandColors[$pathname]} height="0.1em" width="1.8em" y="0.7em"/>-->
<!--    <rect fill={brandColors[$pathname]} height="1.1em" width="0.1em" x="0.8em"/>-->
<!--  </svg>-->
</div>
