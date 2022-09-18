<script>
  import '../app.css';
</script>

<svelte:head>
  <title>Kev</title>
</svelte:head>

<div class="max-w-7xl mx-auto mt-4 lg:mt-24">
  <div class="flex flex-col items-center space-y-4 p-4">
    <img class="w-64 rounded-3xl" src="/images/profile-pic.jpg" alt="Profile" />
    <div class="flex flex-row mx-auto mb-4 w-56">
      <a href="https://www.instagram.com/kmatthews10/" target="_blank" class="mx-auto">
        <img src="/images/insta.png" class="w-10 h-10" alt="Instagram" />
      </a>
      <a href="https://github.com/Kevinmatthews100" target="_blank" class="mx-auto">
        <img src="/images/github.png" class="w-10 h-10" alt="Github" />
      </a>
      <a href="https://www.linkedin.com/in/kevin-matthews-54a486192/" target="_blank" class="mx-auto">
        <img src="/images/lin.png" class="w-10 h-10" alt="Linkedin" />
      </a>
    </div>
    <div class="flex space-x-4 text-2xl">
      <a href="/">Home</a>
      <a href="/publications">Publications</a>
      <a href="/music">Music</a>
    </div>
  </div>

  <main class="p-4 mx-auto">
    <slot />
  </main>
</div>
