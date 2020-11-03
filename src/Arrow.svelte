<style>
    .wrapper {
        width: 100%;
        height: 17vh;
        display: grid;
        grid-template-rows: 1fr auto 1fr;
        grid-template-columns: 1fr auto 1fr;
        grid-template-areas:
                ". . ."
                ". arrow ."
                ". . .";
    }

    svg {
        grid-area: arrow;
    }
</style>

<div class="wrapper">
  <svg height="6em" viewBox="0 0 22 22" width="6em" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="#11332a"
      d="m3.707031 7l-.707031.707031 6.125 6.125 1.875 1.875 1.875-1.875 6.125-6.125-.707031-.707031-6.125 6.125-1.167969 1.167969-1.167969-1.167969-6.125-6.125"
    />
  </svg>
</div>
