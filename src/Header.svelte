<script>
  import { nav } from './navStore'
</script>

<style>
    header {
        font-size: 2.5rem;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 20% auto 20%;
        grid-template-rows: 1fr 1.3em auto;
        grid-template-areas:
                ". . ."
                ". text-brand ."
                ". nav .";
    }

    .text-brand {
        grid-area: text-brand;
        font-family: 'Libre Baskerville', serif;
        letter-spacing: 0.1em;
    }

    .text-brand:hover {
        cursor: pointer;
    }

    nav {
        grid-area: nav;
        font-size: 0.7em;
        font-family: 'Heebo', sans-serif;
        letter-spacing: 0.1em;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    li {
        float: left;
        display: block;
        color: #333;
        text-align: center;
        padding: 0.3em 0.4em;
        text-decoration: none;
    }

    li:hover {
        background-color: #eee;
        cursor: pointer;
    }

    .active {
        background-color: #f9c813;
    }

    .active:hover {
        background-color: #fdb50a;
    }
</style>

<header>
  <div class="text-brand" on:click={nav.set('home')}>
    V
  </div>

  <nav>
    <ul>
      <li class="{$nav === 'deepmerge' && 'active'}" on:click={nav.set('deepmerge')}>deepmerge</li>
      <li class="{$nav === 'csv' && 'active'}" on:click={nav.set('csv')}>csv</li>
      <li class="{$nav === 'pipe' && 'active'}" on:click={nav.set('pipe')}>pipe</li>
    </ul>
  </nav>
</header>
