<style>
    .wrapper {
        height: 100vh;
        width: 100%;
        display: grid;
        grid-template-columns: 10% auto 10%;
        grid-template-rows: 13vh auto 13vh;
        grid-template-areas:
                ". . ."
                ". paper ."
                ". . .";
    }

    .paper {
        grid-area: paper;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
</style>

<div class="wrapper">
  <div class="paper"></div>
</div>
