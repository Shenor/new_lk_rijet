<template>
  <vs-row class="grid">
    <vs-col class="col box" w="4">
      <div class="pt-4 pb-4">
        <div class="pl-2 pr-2 mb-3">
          <!-- <i class='bx bx-info-circle cursor-pointer' @click="isShowInfo=!isShowInfo"></i> -->
         <div class="d-flex">
          <h5 class="mr-1">Мои сайты</h5>
          <i v-if="isShowInfo" class='bx bx-chevron-down cursor-pointer' @click="isShowInfo=!isShowInfo"></i>
          <i v-else class='bx bx-chevron-up cursor-pointer' @click="isShowInfo=!isShowInfo"></i>
         </div>
          <vs-alert border closable v-model="isShowInfo">
            <template #title>
              Rijet CORS
            </template>
            Плагин <b>Rijet</b> использует CORS политики, для определения принадлежности
            к конкретной организаци. Поэтому необходимо внести URL-адрес вашего сайта
            в данный список, для корректной работы.
          </vs-alert>
        </div>
        <div class="sites-wrapper">
          <div class="d-flex align-items-center mb-2" v-for="(item, idx) in users" :key="item.key">
            <vs-input class="flex-fill" border type="text" v-model="users[idx]" placeholder="Password">
              <template #icon>
                <i class='bx bx-link'></i>
              </template>
            </vs-input>
            <i class='bx bx-trash-alt ml-3 cursor-pointer' style='color:#ff4757' @click="del(idx)"></i>
          </div>
        </div>
        <vs-button-group class="justify-content-end mt-3">
          <vs-button size="small" flat icon  @click="add">
            <i class='icon bx bx-add-to-queue mr-1'></i> Добавить
          </vs-button>
          <vs-button size="small" flat icon success  @click="save">
            <i class='icon bx bx-save mr-1'></i> Сохранить
          </vs-button>
        </vs-button-group>
    </div>
    </vs-col>
    <vs-col class="col box" w="4">
      <div class="pt-4 pb-4">
        <h5 class="mb-3">Режим работы</h5>
        <div class="d-flex align-items-center pt-3 mb-3">
          <vs-input
            class="mr-3"
            type="time"
            v-model="openingHours"
            label="Времы открытия"
          />
          <vs-input
            class="mr-3"
            type="time"
            v-model="closingHours"
            label="Время закрытия"
          />
        </div>
        <div class="d-flex">
          <h6 class="mb-3 mr-1">Вкл/выкл прием заказов</h6>
          <vs-tooltip>
            <i class='bx bx-info-circle cursor-pointer'></i>
            <template #tooltip>
              Этот переключатель позволит отключить возможность заказов, через плагин Rijet
            </template>
          </vs-tooltip>
        </div>
          <vs-switch class="getOrder" v-model="isWorkTime">
            <template #off>
             Закрыто <i v-if="!isWorkTime" class='bx bxs-moon ml-1'></i>
            </template>
            <template #on>
              Открыто <i v-if="isWorkTime" class='bx bxs-sun ml-1'></i>
            </template>
          </vs-switch>
      </div>
    </vs-col>
    <vs-col class="col box" w="4">
      <div class="pt-4 pb-4">
        asd
      </div>
    </vs-col>
  </vs-row>
</template>

<script>
export default {
  data(){
    return{
      isWorkTime: false,
      isShowInfo: false,
      openingHours: '',
      closingHours: '',
      users: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002']
    }
  },
  layout: 'DashboardLayout',
  methods: {
    add(){
      this.users.push('https://')
    },
    del(idx){
      this.users = this.users.filter((item, id) => id != idx)
    },
    save(){
      this.$vs.notification({
        progress: 'auto',
        color: "success",
        duration: 5000,
        position: 'top-right',
        title: 'Данные успешно сохранены',
        text: `Теперь сайты внесенные в список могут работать с плагином`
      })
      // console.log(this.openingHours)
      // console.log(this.closingHours)
    }
  }
}
</script>

<style lang="scss" scoped>
  .grid{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    grid-template-rows: auto;
    gap: 10px;
  }
  .sites-wrapper{
    max-height: 150px;
    padding-right: 15px;
    overflow-y: auto;
    overflow-x: hidden;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);

    &::v-deep input{
      font-size: .9rem;
    }
  }
  .col{
    min-width: 300px;
  }
  .text{
    font-size: .9rem;
  }
  .icon{
    font-size: .9rem;
  }

  .dialog::v-deep input{
    width: 100%;
  }
  .getOrder{
    width: 100px;
  }
</style>
