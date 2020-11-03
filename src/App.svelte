<script>
  import { csv, deepmerge, pipe } from './routes'
  import { pathname } from './store/pathname'
  import Header from './Header.svelte'
  import Deepmerge from './pages/Deepmerge.svelte'
  import Csv from './pages/Csv.svelte'
  import Pipe from './pages/Pipe.svelte'
  import Home from './pages/Home.svelte'
  import Jumbo from './Jumbo.svelte'
  import Arrow from './Arrow.svelte'
</script>

<style lang="scss">

</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Heebo:wght@600&family=Libre+Baskerville&display=swap"
    rel="stylesheet">
</svelte:head>

<Header/>
<Jumbo/>
<Arrow/>

<main>
  {#if ($pathname === deepmerge)}
    <Deepmerge/>
  {:else if ($pathname === csv)}
    <Csv/>
  {:else if ($pathname === pipe)}
    <Pipe/>
  {:else}
    <Home/>
  {/if}
</main>


