<script>
  import { store } from '../../store/store'
</script>


<style lang="sass">
  main
    width: 100%
    display: grid
    grid-template-columns: 2fr 1.5fr
    grid-template-areas: "description code"
    height: 3em

  div
    height: 100%
    grid-area: description
    padding: 0.6em

  code
    height: 100%
    grid-area: code

</style>

<main class="empty-part">
  <div class="description"></div>
  <code style="background-color: {$store.brandColor}"></code>
</main>
