<template>
  <div>
    <FrontNavbar></FrontNavbar>
    <router-view />
  </div>
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue';
export default {
  components:{
    FrontNavbar
  }
}
</script>
