<script>
  import { deepmerge } from '../routes'
  import { brandColors } from '../brandColors'

</script>

<style lang="scss">
  .part, .empty-part, .header-part {
    width: 100%;

    display: grid;
    grid-template-columns: 2fr 1.5fr;
    grid-template-areas: "description code";
  }

  .empty-part {
    height: 3em;
  }

  .header-part div {
    font-size: 2em;
    padding-right: 0.3em;
  }

  .header-part code {
    font-size: 2.05em;
    padding-left: 0.2em;
  }

  .description, .title, .header {
    height: 100%;
    grid-area: description;
    padding: 0.6em;
    font-family: 'Heebo', sans-serif;
    font-size: 1.1rem;
    text-align: end;
  }

  .title {
    font-family: 'Great Vibes', cursive;
    font-size: 4em;
    text-align: center;
  }

  .header {
    font-family: 'Libre Baskerville', serif;
  }

  code {
    height: 100%;
    grid-area: code;
    padding: 0.6em;
  }
</style>


<div class="empty-part">
  <div class="title">
    Veighnsche
  </div>
  <code style="background-color: {brandColors[deepmerge]}"></code>
</div>

<div class="empty-part">
  <div class="description"></div>
  <code style="background-color: {brandColors[deepmerge]}"></code>
</div>

<div class="empty-part">
  <div class="description"></div>
  <code style="background-color: {brandColors[deepmerge]}"></code>
</div>

<div class="header-part">
  <div class="header">
    Getting
  </div>
  <code style="background-color: {brandColors[deepmerge]}">
    started
  </code>
</div>

<div class="part">
  <div class="description">
    install
  </div>
  <code style="background-color: {brandColors[deepmerge]}">
    yarn add @veighnsche/deepmerge
  </code>
</div>

<div class="part">
  <div class="description">
    npm install
  </div>
  <code style="background-color: {brandColors[deepmerge]}">
    npm install @veighnsche/deepmerge
  </code>
</div>

<div class="part">
  <div class="description">
    import
  </div>
  <code style="background-color: {brandColors[deepmerge]}">
    import {@html '{ deepmerge }'} from '@veighnsche/deepmerge'
  </code>
</div>

<div class="empty-part">
  <div class="description"></div>
  <code style="background-color: {brandColors[deepmerge]}"></code>
</div>
