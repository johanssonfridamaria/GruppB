<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Container wrapper -->
    <div class="container">
      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <a class="navbar-brand" href="#"
        ><img
          src="../assets/img/Logga.png"
          height="60"
          alt=""
          loading="lazy"
          style="margin-top: 2px"
      /></a>
      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarText">
        <!-- Rights links -->
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Contact</a>
          </li>
        </ul>
        <!-- Right links -->
      </div>
      <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
</style>