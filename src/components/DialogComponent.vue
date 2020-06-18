<template>
  <div class="dialog">
    <div class="dialog__contact">
      <div class="dialog__contact-avatar">
        <img :src="contact.avatarUrl" alt="">
      </div>
      <div class="dialog__contact-name">{{contact.nickName}}</div>
      <div class="dialog__close"><a href="#" @click.prevent="$emit('close')">Закрыть</a></div>
    </div>
    <div class="dialog__messages">
      <div class="dialog__message" v-for="msg in dialogMessages" :key="msg.timestamp">{{msg.message}}</div>
    </div>
    <div class="dialog__textarea">
      <textarea rows="10" placeholder="type message here" v-model="textareaMessage"></textarea>
      <button type="button" @click.prevent="sendMessage">Send</button>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend ({
  name: "DialogComponent",
  props: {
    contact: Object,
    user: Object
  },
  data: () => ({
    textareaMessage: ''
  }),
  methods: {
    sendMessage() {
      this.$store.commit('addMessage', {
        message: this.textareaMessage,
        fromId: this.user.id,
        toId: this.contact.id
      })
      this.textareaMessage = ''
    }
  },
  watch: {
    contact() {
      this.textareaMessage = ''
    }
  },
  computed: {
    dialogMessages() {
      return this.$store.getters.getDialogMessages(this.user.id, this.contact.id)
    }
  }
})
</script>

<style scoped lang="stylus">
  .dialog
    height 100%
    width calc(100% - 2px)
    display flex
    flex-direction column
    justify-content space-between
    &__contact
      padding 5px
      display flex
      justify-content space-between
      line-height 40px
      height 40px
      font-size 18px
      font-weight bold
      border-bottom 1px dashed gray
    &__close
      font-size 12px
      text-transform uppercase
      font-weight bold
      margin-left auto
    &__contact-avatar
      width 40px
      margin-right 10px
      img
        max-width 100%
        max-height 100%
        width auto
        height 100%
    &__messages
      flex-grow 1
      overflow auto
      background-color aliceblue
      margin-bottom 5px
      margin-left 5px
      margin-top 5px
      border 1px solid lightgray
    &__textarea
      textarea
        width calc(100% - 5px)
        margin-left 5px
        padding 5px
        box-sizing border-box
        border-color lightgray
      button
        margin 10px auto
        font-size 14px
        height 30px
        display block
        width 100px
</style>