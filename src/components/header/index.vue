<template>
  <div class="container">
    <header
      class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
    >
      <router-link
        to="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <span class="fs-4">Beardit.com</span>
      </router-link>

      <ul class="nav nav-pills">
        <li class="nav-item"> <RouterLink to="/" class="nav-link" aria-current="page">Home</RouterLink></li>
        <li class="nav-item"> <RouterLink to="/articles" class="nav-link">Article</RouterLink></li>
          <li class="nav-item"> <RouterLink to="/contact" class="nav-link">Contact</RouterLink></li>
      </ul>
    </header>
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}
</style>
