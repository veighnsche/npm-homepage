<script>
  import { csv, deepmerge, home, pipe } from './routes'
  import { pathname } from './store/pathname'

  const brandColors = {
    [home]: '#21212b',
    [deepmerge]: '#11332a',
    [csv]: '#3c3c3c',
    [pipe]: '#10181b',
  }
</script>

<style>
    svg {
        transition: opacity 50ms;
    }

    svg:hover {
        opacity: 0.1;
    }
</style>

<div style="font-size: 5rem;">
  <svg height="1.1em" opacity="0.0" width="1.8em" xmlns="http://www.w3.org/2000/svg">
    <rect fill={brandColors[$pathname]} height="0.3em" width="1.8em" y="0.4em"/>
    <rect fill={brandColors[$pathname]} height="1.1em" width="0.3em" x="0.5em"/>
  </svg>
</div>
