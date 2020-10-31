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
        width: 25vw;
        height: 25vh;
        background-size: cover;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);
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

    .deepmerge {
        grid-area: deepmerge;
        background-image: url('jumbo/deepmerge.jpg');
    }

    .csv {
        grid-area: csv;
        background-image: url('jumbo/csv.jpg');
    }

    .pipe {
        grid-area: pipe;
        background-image: url('jumbo/pipe.jpg');
    }

    h1 {
        grid-area: title;
        font-size: 3em;
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
    <div class="card deepmerge">
      <h1>Deepmerge</h1>
      <p>To merge javascript object literals with arrays and options</p>
    </div>

    <div class="card csv">
      <h1>CSV</h1>
      <p>To transform CSV files into javascript object literals, JSON or back to CSV files</p>
    </div>

    <div class="card pipe">
      <h1>Pipe</h1>
      <p>To start using javascript as a functional paradigm with these foundational building blocks</p>
    </div>
  </div>
</div>
