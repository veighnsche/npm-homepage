<style>
    .wrapper {
        width: 1fr;
        height: 100%;
        display: grid;
        grid-template-rows: 1fr auto 1fr;
        grid-template-columns: 1fr auto 1fr;
        grid-template-areas:
                ". . ."
                ". arrow ."
                ". . .";
    }

    img {
        grid-area: arrow;
    }
</style>

<div class="wrapper">
  <img alt="arrow-down" height="100" src="arrow_down.svg" width="100"/>
</div>
