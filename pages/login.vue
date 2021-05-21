<template>
  <div class="bg">
    <div class="wrapper">
      <div class="login-form-wrapper p-3">
        <h3 class="text-center mb-3 text-uppercase">Rijet</h3>
        <!-- <pre>{{ $v }}</pre> -->
        <div class="form d-flex flex-column">
          <vs-input class="mb-3 input" placeholder="Email" :state="$v.email.$error?'danger':''" v-model.trim="$v.email.$model">
            <template #icon>
              @
            </template>
          </vs-input>
          <vs-input class="mb-3 input" type="password" placeholder="Password" :state="$v.password.$error?'danger':''" v-model="$v.password.$model">
            <template #icon>
              <i class='bx bxs-lock'></i>
            </template>
          </vs-input>
          <div class="d-flex justify-content-between">
            <vs-checkbox>Remember me</vs-checkbox>
            <a class="login-form-wrapper__link-forgot p-2" href="#">Forgot Password?</a>
          </div>
          <vs-button class="mt-3 mb-3" @click="loginIn">
            Войти
          </vs-button>
          <div class="login-form-wrapper__new text-center">
            Нет аккаунта? <nuxt-link to="/registration">Создать новый аккаунт</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators'

export default {
  layout: 'empty',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  mounted(){
    console.log(this.$v)
  },
  methods: {
    loginIn() {
      this.$v.$touch()
    }
  },
  validations: {
    email: {
      // email,
      required
    },
    password: {
      required
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: grid;
  place-items: center;
  height: 100vh;
  backdrop-filter: saturate(180%) blur(15px);
}

.login-form-wrapper{
  min-width: 400px;
  background: white;
  border-radius: 20px;

  @media (max-width: 600px) {
    min-width: 90vw;
  }

  &__link-forgot{
    color: rgb(var(--vs-dark));
    font-size: .8rem;
    opacity: .7;
  }

  & .input,
  &::v-deep .vs-input{
    width: 100%;
  }

  &::v-deep .vs-input__label{
    width: unset;
  }

  &__new{
    font-size: .7rem;

    a {
      color: rgb(var(--vs-telegram));
    }
  }
}
</style>
