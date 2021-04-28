<template>
  <vs-sidebar
  v-model="active"
  open
  >
  <template #logo>
    <img src="/rijet-logo.png" />
  </template>
  <vs-sidebar-item id="index" to="/">
    <template #icon>
      <i class='bx bx-home'></i>
    </template>
    Сводка
  </vs-sidebar-item>
  <vs-sidebar-item id="organizations" to="/organizations">
    <template #icon>
      <i class='bx bx-id-card'></i>
    </template>
    Организации
  </vs-sidebar-item>
  <vs-sidebar-item id="settings" to="/settings">
    <template #icon>
      <i class='bx bx-wrench'></i>
    </template>
    Настройки
  </vs-sidebar-item>
  <template #footer>
    <vs-row justify="flex-end">
      <vs-avatar badge-color="danger" badge-position="top-right">
        <i class='bx bx-bell' ></i>

        <template #badge>
          12
        </template>
      </vs-avatar>
    </vs-row>
  </template>
</vs-sidebar>
</template>

<script>
export default {
  data() {
    return {
      active: this.$route.name
    }
  }
}
</script>

<style>

</style>
