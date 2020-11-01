<script>
  import { csv, deepmerge, pipe } from './routes'

  import Header from './Header.svelte'
  import Deepmerge from './pages/Deepmerge.svelte'
  import Csv from './pages/Csv.svelte'
  import Pipe from './pages/Pipe.svelte'
  import Home from './pages/Home.svelte'

  let pathname = window.location.pathname
</script>

<style lang="scss">

</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Heebo:wght@600&family=Libre+Baskerville&display=swap"
    rel="stylesheet">
</svelte:head>

<div class="header">
  <Header/>
</div>

<main>
  {#if (pathname === deepmerge)}
    <Deepmerge/>
  {:else if (pathname === csv)}
    <Csv/>
  {:else if (pathname === pipe)}
    <Pipe/>
  {:else}
    <Home/>
  {/if}
</main>


