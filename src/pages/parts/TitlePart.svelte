<script>
  import { store } from '../../store/store'
  $: color = $store.brandColor
</script>

<style lang="sass">
  main
    width: 100%
    display: grid
    grid-template-columns: 2fr 1.5fr
    grid-template-areas: "description code"

  div
    height: 100%
    grid-area: description
    padding: 0.6em
    font-family: 'Great Vibes', cursive
    font-size: 4em
    text-align: center

  code
    height: 100%
    grid-area: code
</style>

<main>
  <div style="color: {color}">
    Veighnsche
  </div>
  <code style="background-color: {color}"></code>
</main>
