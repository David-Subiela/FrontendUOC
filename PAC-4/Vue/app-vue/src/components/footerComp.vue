<template>
  <footer class="social">
    <a href="mailto:davsubiela@gmail.com" target="_blank" rel="noopener no-referrer"
      ><i class="fa-solid fa-envelope"></i
    ></a>
    <a href="https://linkedin.com/in/davidsubi" target="_blank" rel="noopener no-referrer"
      ><i class="fa-brands fa-linkedin-in"></i
    ></a>
    <a href="https://github.com/David-Subiela" target="_blank" rel="noopener no-referrer"
      ><i class="fa-brands fa-github"></i
    ></a>
  </footer>
</template>

<script>
export default {
  name: 'footerComp'
}
</script>

<style scoped>
/* FOOTER - XARXES SOCIALS */
.social {
  background-color: #463f3f;
  text-align: center;
  padding: 20px;
}

.social i {
  color: azure;
  font-size: 30px;
  padding-left: 50px;
}

.dark .social {
  background-color: azure;
}
.dark .social i {
  color: #463f3f;
}

@media (max-width: 428px) {
  .social i {
    padding-left: 30px;
    padding-right: 20px;
  }
}
</style>
