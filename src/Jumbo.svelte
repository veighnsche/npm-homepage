<script>
  import { store, home } from './store/store'
</script>

<style lang="scss">
  .jumbo {
    width: 100%;
    height: 66vh;
    color: #eeeeee;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    transition: background-image 1s;

    display: grid;
    grid-template-columns: 20% auto 20%;
    grid-template-rows: 1fr 1.1em 0.3em 1fr;
    grid-template-areas: ". . ." ". brand ." ". tag ." ". . .";

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
  }

  .home {
    background-image: url('jumbo/home.jpg');
  }

  .deepmerge {
    background-image: url('jumbo/deepmerge.jpg');
  }

  .csv {
    background-image: url("jumbo/csv.jpg");
  }

  .pipe {
    background-image: url("jumbo/pipe.jpg");
  }
</style>

<div class="jumbo {$store.classes.jumbo}">
  <span class="brand">
    Veighnsche {home !== $store.name ? $store.name : ''}
    <div class="tag">
      {$store.name === home ? 'pronounced Fins' : ''}
    </div>
  </span>
</div>
