<script>
  import { deepmerge, csv, pipe } from './routes'
  let pathname = window.location.pathname
  const setPathname = (pathname = '') => () => window.location.pathname = pathname
  const isActive = active => pathname === active && 'active'
</script>

<style lang="scss">
  header {
    font-size: 2.5rem;
    width: 100%;
    height: 17vh;
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
  <div class="text-brand" on:click={setPathname()}>
    V
  </div>

  <nav>
    <ul>
      <li class={isActive(deepmerge)} on:click={setPathname(deepmerge)}>
        deepmerge
      </li>
      <li class={isActive(csv)} on:click={setPathname(csv)}>
        csv
      </li>
      <li class="{isActive(pipe)}" on:click={setPathname(pipe)}>
        pipe
      </li>
    </ul>
  </nav>
</header>
