<template>
    <div class="grid">
     <vs-row align="center" justify="center">
      <vs-col class="mt-5" w="3">
        <div class="login-form-wrapper p-3">
          <h3 class="text-center mb-3 text-uppercase">Регистрация</h3>
          <!-- <pre>{{ $v }}</pre> -->
          <form class="form d-flex flex-column" autocomplete="new-password">
            <vs-input class="mb-4 mt-4 test" label-placeholder="Email" v-model="email">
            </vs-input>
            <vs-input
              type="password"
              v-model="password"
              label-placeholder="Password"
              :progress="getProgress"
              :visiblePassword="hasVisiblePassword"
              icon-after
              @click-icon="hasVisiblePassword = !hasVisiblePassword">
              <template #icon>
                <i v-if="!hasVisiblePassword" class='bx bx-show-alt'></i>
                <i v-else class='bx bx-hide'></i>
              </template>

              <template v-if="getProgress >= 100" #message-success>
                Secure password
              </template>
            </vs-input>
            <vs-button class="mt-3 mb-3">
              Зарегистрироваться
            </vs-button>
          </form>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  data(){
    return{
      email: '',
      password: '',
      hasVisiblePassword: false
    }
  },
  computed: {
   getProgress() {
      let progress = 0

      // at least one number
      if (/\d/.test(this.password)) progress += 20;

      // at least one capital letter
      if (/(.*[A-Z].*)/.test(this.password)) progress += 20;

      // at menons a lowercase
      if (/(.*[a-z].*)/.test(this.password)) progress += 20;

      // more than 5 digits
      if (this.password.length >= 6) progress += 20;

      // at least one special character
      if (/[^A-Za-z0-9]/.test(this.password)) progress += 20;

      return progress
    }
  }
}
</script>

<style>
.grid{
  height: 100vh;
  background: #F4F7F8;
}
.login-form-wrapper{
  background: white;
  border-radius: 20px;
}
</style>
