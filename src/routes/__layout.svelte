<script>
  import '../app.css';
</script>

<svelte:head>
  <title>Kevin Matthews</title>
</svelte:head>

<header class="flex items-center my-8 mx-auto justify-evenly text-sm max-w-2xl xl:text-xl xl:mx-0 xl:justify-start">
  <a href="/" class="text-black cursor-pointer hover:underline xl:px-5 xl:ml-40"> Kevin </a>
  <a href="/publications" class="text-black cursor-pointer hover:underline xl:px-5"> Publications </a>
  <a href="/music" class="text-black cursor-pointer hover:underline xl:px-5"> Music </a>
</header>

<hr class="mb-8 xl:mb-14" />

<div class="flex flex-col xl:px-5 xl:flex-row xl:mt-14 xl:ml-40 xl:items-start">
  <div class="flex flex-col">
    <img class="w-48 mb-4 rounded-2xl mx-auto xl:w-64 xl:mx-0" src="/images/profile-pic.jpg" alt="Profile" />
    <h1 class="mb-4 mx-auto text-3xl">Kevin Matthews</h1>
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
  </div>
  <main class="flex flex-col w-full mx-auto max-w-2xl px-2 my-4 xl:mt-0 xl:ml-24 2xl:max-w-4xl">
    <slot />
  </main>
</div>
