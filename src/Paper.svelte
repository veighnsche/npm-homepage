<style lang="scss">
  main {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    grid-template-areas:
            "."
            "paper"
            ".";
  }

  .paper {
    background-color: #fbfbf8;
    //height: 50em;
    max-height: 100vh;
    grid-area: paper;
    box-shadow:
            0 2px 2px 0 rgba(0, 0, 0, 0.14),
            0 3px 1px -2px rgba(0, 0, 0, 0.12),
            0 1px 5px 0 rgba(0, 0, 0, 0.20);
  }
</style>

<main class="container-lg">
  <div class="paper">
    <slot/>
  </div>
</main>
