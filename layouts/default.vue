<template>
  <div class="__wrapper__">
    <Navbar class="navbar"/>
    <Sidebar class="sidebar"/>
    <div class="main">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import Sidebar from '~/components/Sidebar.vue'

export default {
  data(){
    return{

    }
  },
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style lang="scss">
.__wrapper__{
  display: grid;
  grid-template-columns: minmax(260px, auto) 1fr;
  grid-auto-rows: 50px auto;
  grid-template-areas:
  "sd  nd"
  "sd  mn";

  .navbar{
    grid-area: nd;
  }
  .sidebar{
    grid-area: sd;
  }
  .main{
    padding: 15px;
    grid-area: mn;
  }
}

.content{
  padding: 78px 30px 30px 280px;
  min-height: 100vh;
}
</style>
