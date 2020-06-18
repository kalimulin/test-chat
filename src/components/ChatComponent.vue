<template>
  <div class="chat">
    <div class="chat__sidebar">
      <div class="text-center">
        <div class="chat__user-avatar">
          <img :src="user.avatarUrl" />
        </div>
        <div class="chat__user-nickName">{{user.nickName}}</div>
      </div>
      <div class="chat__contacts-list">
        <h3>Контакты:</h3>
        <div class="chat__contacts-item"
             v-for="contact in contacts"
             :key="contact.id"
             :class="contact.id === currentContact.id ? 'chat__contacts-item_active' : ''"
             @click="selectContact(contact)"
        >
          <span>{{contact.nickName}}</span>
          <span class="chat__messages-count"></span>
        </div>
      </div>
    </div>
    <Dialog v-if="currentContact && currentContact.nickName"
            :contact="currentContact"
            :user="user"
            @close="currentContact = {}" />
    <div v-else style="align-self: center; text-align: center; font-weight: bold; width: 100%">Выберите контакт</div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {mapState} from "vuex";
  import {User} from "@/interfaces";
  import DialogComponent from "@/components/DialogComponent.vue";

  export default Vue.extend({
    name: 'ChatComponent',
    props: {
      user: Object
    },
    components: {
      Dialog: DialogComponent
    },
    data: () => ({
      currentContact: {} as User
     }),
    created() {
      if (this.user && !this.user.nickName) {
        this.$router.push('/')
      }
    },
    computed: {
      ...mapState(['contacts'])
    },
    methods: {
      selectContact(contact: User) {
        this.currentContact = contact
      }
    }
  })
</script>

<style lang="stylus" scoped>
.chat
  display flex
  height 100%
  &__sidebar
    width 200px
    flex-basis 200px
    flex-shrink 0
    padding-right 5px
    border-right 1px dotted grey
  &__user-avatar
    margin-top 10px
    img
      max-width 100%
      max-height 100%
      width 150px
      height 150px
      border 1px solid rgba(50,50,50,.5)
      border-radius 10px
      overflow hidden
      padding 5px
  &__user-nickName
    text-overflow ellipsis
    white-space nowrap
    overflow hidden
  &__contacts-list
    margin-top 10px
    border-top 1px dashed gray
    h3
      font-size 16px
  &__contacts-item
    height 24px
    line-height 24px
    font-size 16px
    transition 300ms
    margin 0 -5px
    padding 0 5px
    cursor pointer
    position relative
    &:hover
      background-color lightgray
    &_active
      background-color lightblue
  &__messages-count
    display none /* пока не придумал, как правильно извлекать значения */
    position absolute
    color white
    right 2px
    top 7px
    height 10px
    width 10px
    border-radius 10px
    background-color orange
    font-size 14px
    font-weight bold
    text-align center
    line-height 20px
</style>