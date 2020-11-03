<script>
  import { csv, deepmerge, home, pipe } from './routes'
  import { pathname } from './store/pathname'

  const classes = {
    [home]: 'home',
    [deepmerge]: 'deepmerge',
    [csv]: 'csv',
    [pipe]: 'pipe',
  }

  function pathnameDisplay(pathname) {
    if (home === pathname) {
      return ''
    }
    return pathname
  }
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

<div class="jumbo {classes[$pathname]}">
  <span class="brand">
    Veighnsche {pathnameDisplay($pathname)}
    <div class="tag">
      {$pathname === home ? 'pronounced Fins' : ''}
    </div>
  </span>
</div>
