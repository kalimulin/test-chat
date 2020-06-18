<template>
  <div class="chat-page">
    chat
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
            },
            setAvatar(): void {
                this.avatarSrc = encodeURIComponent(this.avatarUrl)
            },
            generateAvatar(set = 4): void {
                this.avatarSrc = `https://robohash.org/${encodeURIComponent(this.nickname)}?set=set${set}`
                this.avatarUrl = this.avatarSrc
            }
        }
    })
</script>

<style scoped lang="stylus">

</style>
