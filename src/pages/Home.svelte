<script>
  import { currentPage } from '../currentPageStore'
</script>

<style>
    .wrapper {
        height: 100vh;
        width: 100%;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        grid-template-rows: 17vh auto 17vh;
        grid-template-areas:
                ". . ."
                ". paper ."
                ". . .";
    }

    .paper {
        grid-area: paper;
        width: 1920px;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr auto 5% auto 1fr;
        grid-template-rows: 1fr auto 1fr auto 1fr;
        grid-template-areas:
                ". . . . ."
                ". deepmerge . pipe ."
                ". . . . ."
                ". csv . . .";
    }

    .card {
        cursor: pointer;
        width: 25vw;
        height: 25vh;
        background-image: url('text-texture.png');
        background-size: cover;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.20);
        -webkit-background-clip: text;
        color: transparent;
        display: grid;
        opacity: 0.75;
        grid-template-columns: 1fr 1fr auto 1fr 1fr;
        grid-template-rows: 20% auto auto 1fr;
        grid-template-areas:
                ". . . . ."
                ". . title . ."
                ". description description description ."
                ". . . . .";
    }

    .texture {
        background-color: #fafaff;
        background-image: url("texture.png");
    }

    .deepmerge {
        grid-area: deepmerge;
    }

    .csv {
        grid-area: csv;
    }

    .pipe {
        grid-area: pipe;
    }

    h1 {
        grid-area: title;
        font-size: 4em;
        font-family: 'Libre Baskerville', serif;
    }

    p {
        grid-area: description;
        text-align: center;
        font-family: 'Heebo', sans-serif;
        font-size: 1.2em;
    }
</style>

<div class="wrapper">
  <div class="paper">
    <div class="deepmerge texture" on:click={currentPage.set('deepmerge')}>
      <div class="card">
        <h1>Deepmerge</h1>
        <p>To merge javascript object literals with arrays and options</p>
      </div>
    </div>

    <div class="csv texture" on:click={currentPage.set('csv')}>
      <div class="card">
        <h1>CSV</h1>
        <p>To transform CSV files into javascript object literals, JSON or back to CSV files</p>
      </div>
    </div>

    <div class="pipe texture" on:click={currentPage.set('pipe')}>
      <div class="card">
        <h1>Pipe</h1>
        <p>To start using javascript as a functional paradigm with these foundational building blocks</p>
      </div>
    </div>
  </div>
</div>
