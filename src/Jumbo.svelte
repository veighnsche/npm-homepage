<script>
  export let name
  export let title
  export let tag = ''

  const backgroundUrl = `jumbo/${name}.jpg`
</script>

<style lang="scss">
  main {
    width: 100%;
    height: 66vh;
    display: grid;
    color: #eeeeee;
    background-size: cover;
    grid-template-columns: 20% auto 20%;
    grid-template-rows: 1fr 1.1em 0.3em 1fr;
    grid-template-areas: ". . ." ". brand ." ". tag ." ". . .";
  }

  .brand {
    font-size: 5rem;
    grid-area: brand;
    font-family: 'Great Vibes', cursive;

    .tag {
      grid-area: tag;
      font-family: 'Heebo', sans-serif;
      font-size: 0.3em;
      opacity: 0.3;
      padding-left: 3.3em;
    }

  }
</style>

<main style="background: url({backgroundUrl}) no-repeat center">
  <span class="brand">
    {title}
    <div class="tag">
      {tag}
    </div>
  </span>
</main>
