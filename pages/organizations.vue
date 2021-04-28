<template>
  <div>
    <vs-card>
      <template #title>
        <div class="mb-2"><h3 class="mr-1">Goyda228</h3>
        <small>fb3a6916-b548-11ea-aa5c-0025906bfe47</small>
      </div>
      </template>
      <template #img>
        <img src="/images/unsplash.jpg" alt="">
      </template>
      <template #text>
        <p class="mb-1">Товаров: 5</p>
        <p class="mb-2">Категорий: 6</p>
        <small><p>Дата выгрузки номенклатуры: 2020-09-18 16:04:18</p></small>
        <vs-button block class="mt-3">Подробнее</vs-button>
      </template>
      <template #interactions>
        <vs-tooltip shadow>
          <vs-button shadow icon>
            <i class='bx bx-cloud-download'></i>
          </vs-button>
          <template #tooltip>
          Обновить номенклатуру
        </template>
      </vs-tooltip>
      </template>
    </vs-card>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
