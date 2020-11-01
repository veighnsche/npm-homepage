<script>
  import { Route, Router } from 'svelte-routing'
  import Header from './Header.svelte'
  import Deepmerge from './pages/Deepmerge.svelte'
  import Csv from './pages/Csv.svelte'
  import Pipe from './pages/Pipe.svelte'
  import Home from './pages/Home.svelte'
</script>

<style lang="scss">

</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Heebo:wght@600&family=Libre+Baskerville&display=swap"
    rel="stylesheet">
</svelte:head>

<Router>
  <div class="header">
    <Header/>
  </div>

  <main>
    <Route component={Deepmerge} path="deepmerge"/>
    <Route component={Csv} path="csv"/>
    <Route component={Pipe} path="pipe"/>
    <Route component={Home} path="/"/>
  </main>
</Router>


