<script>
  import posthog from 'posthog-js';
  let count = 0;

  function handleClick() {
    count++;
    posthog.capture('button_clicked', { count });
  }
</script>

<button on:click={handleClick}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
