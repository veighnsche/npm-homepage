<script>
  import { store, csv, deepmerge, home, pipe } from './store/store'
  import Header from './Header.svelte'
  import Deepmerge from './pages/Deepmerge.svelte'
  import Csv from './pages/Csv.svelte'
  import Pipe from './pages/Pipe.svelte'
  import Jumbo from './Jumbo.svelte'
  import Arrow from './Arrow.svelte'
  import Paper from './Paper.svelte'
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&family=Great+Vibes&family=Heebo:wght@600&family=Libre+Baskerville&display=swap"
    rel="stylesheet">
</svelte:head>

<Header/>
<Jumbo/>
<Arrow/>

{#if ($store.name !== home)}
  <Paper>
    {#if ($store.name === deepmerge)}
      <Deepmerge/>
    {:else if ($store.name === csv)}
      <Csv/>
    {:else if ($store.name === pipe)}
      <Pipe/>
    {/if}
  </Paper>
{/if}
