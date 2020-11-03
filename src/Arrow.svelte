<script>
  import { pathname } from './store/pathname'
  import { brandColors } from './brandColors'
  import { home } from './routes'

  $: arrowClass = home !== $pathname ? 'active' : ''
</script>

<style lang="scss">
  .wrapper {
    width: 100%;
    height: 17vh;
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    grid-template-columns: 1fr auto 1fr;
    grid-template-areas:
                ". . ."
                ". arrow ."
                ". . .";
  }

  svg {
    grid-area: arrow;
    opacity: 0;
    transition: opacity 1s;
  }

  path {
    transition: fill 1s;
  }

  .active {
    opacity: 1;
  }
</style>

<div class="wrapper">
  <svg class={arrowClass} height="6em" viewBox="0 0 22 22" width="6em">
    <path
      d="m3.707031 7l-.707031.707031 6.125 6.125 1.875 1.875 1.875-1.875 6.125-6.125-.707031-.707031-6.125 6.125-1.167969 1.167969-1.167969-1.167969-6.125-6.125"
      fill={brandColors[$pathname]}
    />
  </svg>
</div>
