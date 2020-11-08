<script>
  import { store } from '../store/store'
  import EmptyPart from './parts/EmptyPart.svelte'
  import TitlePart from './parts/TitlePart.svelte'

  $: color = $store.brandColor
</script>

<style lang="sass">
  .part, .empty-part, .header-part
    width: 100%
    display: grid
    grid-template-columns: 2fr 1.5fr
    grid-template-areas: "description code"

  .empty-part
    height: 3em

  .header-part div
    font-size: 2em
    padding-right: 0.3em

  .header-part code
    font-size: 2.05em
    padding-left: 0.2em

  .description, .title, .header
    height: 100%
    grid-area: description
    padding: 0.6em
    font-family: 'Heebo', sans-serif
    font-size: 1.1rem
    text-align: end

  .title
    font-family: 'Great Vibes', cursive
    font-size: 4em
    text-align: center

  .header
    font-family: 'Libre Baskerville', serif

  code
    height: 100%
    grid-area: code
    padding: 0.6em

</style>

<TitlePart/>

<div class="header-part">
  <div class="header">
    Getting
  </div>
  <code style="background-color: {color}">
    started
  </code>
</div>

<div class="part">
  <div class="description">
    install through yarn
  </div>
  <code style="background-color: {color}">
    yarn add @veighnsche/csv
  </code>
</div>

<div class="part">
  <div class="description">
    or install through npm
  </div>
  <code style="background-color: {color}">
    npm install @veighnsche/csv
  </code>
</div>

<div class="part">
  <div class="description">
    import
  </div>
  <code style="background-color: {color}">
    import {@html '{ csv }'} from '@veighnsche/csv'
  </code>
</div>

<EmptyPart/>
