<script>
  const toggleBtn = document.querySelector('#toggle-btn');
  const body = document.querySelector('body');

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
  });
</script>
