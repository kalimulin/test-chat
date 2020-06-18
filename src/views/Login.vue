<template>
  <div class="login-page">
    <div class="login-page__container">
      <h1>Добро пожаловать!</h1>
      <p>Укажите никнейм и url аватара.</p>
      <form @submit.prevent="formSubmit" class="login-page__form">
        <div class="login-page__form-group">
          <label>Никнейм</label>
          <input type="text" v-model="nickname">
        </div>
        <div class="login-page__form-group">
          <label>URL</label>
          <input type="text" v-model="avatarUrl">
          <button type="button" @click="setAvatar" :disabled="!avatarUrl.trim()">Ok</button>
        </div>
        <div class="login-page__avatar-select">
          <div class="login-page__generate-avatar">
            <p>сгенерировать аватар из никнейма</p>
            <button type="button" :disabled="!nickname.trim()" @click.prevent="generateAvatar(1)">Сгенерировать робота</button>
            <button type="button" :disabled="!nickname.trim()" @click.prevent="generateAvatar(2)">Сгенерировать монстра
            </button>
            <button type="button" :disabled="!nickname.trim()" @click.prevent="generateAvatar(3)">Сгенерировать робота без
              тела
            </button>
            <button type="button" :disabled="!nickname.trim()" @click.prevent="generateAvatar(4)">Сгенерировать котика</button>
          </div>
          <div class="login-page__avatar-img">
            <img :src="avatarSrc" alt="">
          </div>
        </div>
        <hr>
        <button type="submit" :disabled="!nickname.trim() || !avatarSrc.trim()">ВОЙТИ</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'Login',
    data: () => ({
      nickname: '',
      avatarUrl: '',
      avatarSrc: ''
    }),
    methods: {
      formSubmit(): void {
        console.log('form submit', this.nickname, this.avatarSrc)
        this.$store.commit('setUser', {nickName: this.nickname, avatarSrc: this.avatarSrc})
        this.$router.push('/chat')
      },
      setAvatar(): void {
        this.avatarSrc = encodeURIComponent(this.avatarUrl.trim())
      },
      generateAvatar(set = 4): void {
        this.avatarSrc = `https://robohash.org/${encodeURIComponent(this.nickname)}?set=set${set}`.trim()
        this.avatarUrl = this.avatarSrc
      }
    }
  })
</script>

<style scoped lang="stylus">
  .login-page
    height 100vh
    width 100%
    display flex
    text-align center

    &__container
      margin auto
      width 400px

    &__form
      width 100%

    &__form-group
      margin 5px 0 10px
      display flex
      justify-content space-between

      input
        flex-grow 1
        margin-left 5px

    &__avatar-select
      display flex
      align-items flex-end

      button
        width 100%
        margin-top 5px

    &__avatar-img
      padding 5px
      border 1px dashed grey
      min-height 150px
      width 150px
      flex-shrink 0
      margin-left 10px

      img
        width 100%
        max-width 100%
        max-height 100%
</style>
