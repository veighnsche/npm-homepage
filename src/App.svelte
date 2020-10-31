<script>
  import { currentPage } from './currentPageStore'
  import Header from './Header.svelte'
  import Jumbo from './Jumbo.svelte'
  import Arrow from './Arrow.svelte'
  import Home from './pages/Home.svelte'
</script>

<style>
    main {
        display: grid;

    }

    .wrapper {
        display: grid;
        grid-template-rows: 17vh 66vh 17vh auto;
        grid-template-areas:
                "header"
                "jumbo"
                "arrow"
                "main";
    }

    .header {
        grid-area: header;
    }

    .jumbo {
        grid-area: jumbo;
    }

    .main {
        grid-area: main;
    }
</style>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Heebo:wght@600&family=Libre+Baskerville&display=swap"
    rel="stylesheet">
</svelte:head>

<div class="wrapper">
  <div class="header">
    <Header/>
  </div>

  <div class="jumbo">
    <Jumbo/>
  </div>

  <div class="arrow">
    <Arrow/>
  </div>

  <div class="main">
    <main>
      {#if $currentPage === 'home'}
        <Home/>
      {/if}
    </main>
  </div>
</div>


