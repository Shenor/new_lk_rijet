<template>
  <div>
    <vs-row class="mb-4">
      <vs-col class="box d-flex align-items-center" w="4">
        <vs-avatar class="mr-2" size="75">
          <template #text>
            G
          </template>
        </vs-avatar>
        <div class="pb-2 pt-2">
          <h4 class="m-0">Goyda228</h4>
          <small class="p-1">{{id}}</small>
          <div class="d-flex mt-3">
            <vs-button-group>
              <vs-button
              :active="isCategory"
              @click="isCategory = true"
              transparent
              >
                Категории
              </vs-button>
              <vs-button
              :active="!isCategory"
              @click="isCategory = false"
              transparent>
                Товары
              </vs-button>
            </vs-button-group>
          </div>
        </div>
      </vs-col>
    </vs-row>
    <vs-row v-if="isCategory">
      <vs-col class="box" w="6">
        <vs-table class="p-2">
          <template #header>
            <vs-input v-model="search" border placeholder="Search" />
          </template>
          <template #thead>
            <vs-tr>
              <vs-th sort @click="category = $vs.sortData($event ,category, 'id')">
                ID
              </vs-th>
              <vs-th sort @click="category = $vs.sortData($event ,category, 'name')">
                Название
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in $vs.getSearch(category, search)"
              :data="tr"
            >
              <vs-td>
                {{ tr.id }}
              </vs-td>
              <vs-td>
              {{ tr.name }}
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </vs-col>
    </vs-row>
    <vs-row v-else>
      <vs-col class="box" w="12">
        <!-- {{products}} -->
        <vs-table v-if="products" class="p-2">
          <template #header>
            <vs-input v-model="search" border placeholder="Search" />
          </template>
          <template #thead>
            <vs-tr>
              <vs-th sort @click="products = $vs.sortData($event ,products, 'id')">
                ID
              </vs-th>
              <vs-th sort @click="products = $vs.sortData($event ,products, 'name')">
                Название
              </vs-th>
              <vs-th>
                Ед.
              </vs-th>
              <vs-th sort @click="products = $vs.sortData($event ,products, 'price')">
                Цена
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in $vs.getPage(products, page, max)"
              :data="tr"
            >
              <vs-td>
                {{ tr.id }}
              </vs-td>
              <vs-td>
              {{ tr.name }}
              </vs-td>
              <vs-td>
              {{ tr.measureUnit }}
              </vs-td>
              <vs-td>
              {{ tr.price }}
              </vs-td>
            </vs-tr>
          </template>
          <template #footer>
            <vs-pagination v-model="page" :length="$vs.getLength(products, max)" />
          </template>
        </vs-table>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
// Test data //
import nomenclature from '~/static/products.json';

export default {
  async asyncData({ params }) {
    const id = params.organizationId;
    return {id}
  },
  data(){
    return{
      max: 5,
      page: 1,
      isCategory: false,
      search: '',
      category: [
        {id: '7cd6606e-2a4f-f2bd-0172-e106315d4d00', name: 'Пицца'},
        {id: '7cd6606e-2a4f-f2bd-0172-e106315d4d01', name: 'Роллы'},
        {id: '7cd6606e-2a4f-f2bd-0172-e106315d4cff', name: 'Бургеры'},
        {id: '18cd648d-09c3-8cdd-0172-e133092083d9', name: 'Доставка'}
      ],
      products: this.filterProduct()
    }
  },
  methods: {
    filterProduct(){
      return nomenclature.products.filter(item => item.type == "dish")
    }
  }
}
</script>

<style>

</style>

