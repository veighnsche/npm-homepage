<script>
  import { store, csv, deepmerge, home, pipe } from './store/store'
  const navs = [deepmerge, csv, pipe]
</script>

<style lang="scss">
  header {
    font-size: 2.5rem;
    width: 100%;
    height: 17vh;
    display: grid;
    grid-template-columns: 20% auto 20%;
    grid-template-rows: 1fr 1.5em auto;
    grid-template-areas:
                ". . ."
                ". brand ."
                ". nav .";
  }

  .brand {
    grid-area: brand;
  }

  .brand:hover {
    cursor: pointer;
  }

  nav {
    grid-area: nav;
    font-size: 0.7em;
    font-family: 'Heebo', sans-serif;
    font-weight: 600;
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
    transition: background-color 1s;
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
  <div class="brand" on:click={store.set(home)}/>

  <nav>
    <ul>
      {#each navs as nav}
        <li class={$store.classes.header[nav]} on:click={store.set(nav)}>
          {nav.slice(1)}
        </li>
      {/each}
    </ul>
  </nav>
</header>
