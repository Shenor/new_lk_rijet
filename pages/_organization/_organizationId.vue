<template>
  <div>
    {{id}}
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const id = params.organizationId;
    return {id}
  },
  data(){
    return{
    }
  }
}
</script>

<style>

</style>
