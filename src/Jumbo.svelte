<script>
  import { nav } from './navStore'
</script>

<style>
    main {

    }

    .jumbo {
        font-size: 70px;
        color: #eeeeee;
        width: 1fr;
        height: 100%;
        background-size: cover;
    }

    .jumbo {
        display: grid;
        grid-template-columns: 20% auto 20%;
        grid-template-rows: 1fr 1.1em 0.3em 1fr;
        grid-template-areas:
          ". . ."
          ". brand ."
          ". tag ."
          ". . .";
    }

    .bg-home {
        background: url('jumbo/home.jpg') no-repeat center;
    }

    .bg-deepmerge {
        background: url('jumbo/deepmerge.jpg') no-repeat center;
    }

    .bg-csv {
        background: url('jumbo/csv.jpg') no-repeat center;
    }

    .bg-pipe {
        background: url('jumbo/pipe.jpg') no-repeat center;
    }

    .brand {
        grid-area: brand;
        font-family: 'Great Vibes', cursive;
        /*letter-spacing: 0.1em;*/
    }

    .tag {
        grid-area: tag;
        font-family: 'Heebo', sans-serif;
        font-size: 0.3em;
        opacity: 0.3;
        padding-left: 3.3em;
    }

</style>

<div class="jumbo bg-{$nav}">
  {#if $nav !== 'home'}
    <div class="brand">
      Veighnsche/{$nav}
    </div>
  {:else}
    <div class="brand">
      Veighnsche
    </div>
    <div class="tag">
      pronounced Fins
    </div>
  {/if}
</div>
