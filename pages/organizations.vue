<template>
  <div>
    <vs-card>
      <template #title>
        <div class="mb-2"><h3 class="mr-1 mb-1">Goyda228</h3>
        <vs-tooltip shadow top not-hover v-model="isActiveCopyTooltip" class="w-0">
          <small class="mr-2 copy" @click="copy('fb3a6916-b548-11ea-aa5c-0025906bfe47')" title="Копировать">fb3a6916-b548-11ea-aa5c-0025906bfe47</small>
          <template #tooltip>
            Скопированно <i class='bx bx-check' style='color:#46c93a'></i>
          </template>
        </vs-tooltip>
      </div>
      </template>
      <template #img>
        <img src="/images/unsplash.jpg" alt="">
      </template>
      <template #text>
        <p class="mb-1">Товаров: 5</p>
        <p class="mb-2">Категорий: 6</p>
        <small><p>Дата выгрузки номенклатуры: 2020-09-18 16:04:18</p></small>
        <NuxtLink to='/organizations/fb3a6916-b548-11ea-aa5c-0025906bfe47'><vs-button block class="mt-3">Подробнее</vs-button></NuxtLink>
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
  data(){
    return{
      isActiveCopyTooltip: false
    }
  },
  methods:{
    copy(id){
      console.log(navigator);
      console.log(navigator.clipboard);
      if(!navigator) return false;
      navigator.clipboard.writeText(id);
      this.isActiveCopyTooltip = !this.isActiveCopyTooltip
    }
  }
}
</script>

<style lang="scss" scoped>
.copy{
  padding: .15rem;
  cursor: pointer;
  border-radius: 3px;
  background: whitesmoke;
}
</style>
