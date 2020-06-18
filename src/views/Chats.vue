<template>
  <div class="chats-page">
    <div class="chats-page__chat-container">
      <Chat :user="user1"></Chat>
    </div>
    <div class="chats-page__chat-container">
      <Chat :user="user0"></Chat>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import ChatComponent from "@/components/ChatComponent.vue";
  import {mapState} from "vuex";

  export default Vue.extend({
    name: 'Chats',
    data: () => ({}),
    computed: {
      ...mapState(['user0', 'user1']),
      contacts() {
        return [this.user0, this.user1]
      }
    },
    components: {
      Chat: ChatComponent
    },
    methods: {

    }
  })
</script>

<style scoped lang="stylus">
  .chats-page
    display flex
    height 100%

    &__chat-container
      width 50%
      padding 0 5px
      height 100%

      &:first-child
        border-right 1px solid grey
      &:last-child
        border-left 1px solid grey
</style>
