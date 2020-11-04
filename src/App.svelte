<script>
  import { csv, deepmerge, home, pipe } from './routes'
  import { pathname } from './store/pathname'
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

{#if ($pathname !== home)}
  <Paper>
    {#if ($pathname === deepmerge)}
      <Deepmerge/>
    {:else if ($pathname === csv)}
      <Csv/>
    {:else if ($pathname === pipe)}
      <Pipe/>
    {/if}
  </Paper>
{/if}
