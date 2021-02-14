<template>   

  <div>
    <navbar></navbar>
    <main class="py-4">
      <router-view></router-view>
    </main>
  </div>

</template>

<script>
import navbar from "./components/Navbar";

export default {
  name: 'App',   
  components: {
    navbar
  },
  data: () => ({
    
  }),
};
</script>
