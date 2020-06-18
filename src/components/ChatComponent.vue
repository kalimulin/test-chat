<template>
  <div class="chat">
    <div class="chat__sidebar">
      <div class="chat__user">{{user.nickName}}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'

  export default Vue.extend({
    name: 'ChatComponent',
    props: {
      user: Object
    },
    data: () => ({
    }),
    created() {
      if (this.user && !this.user.nickName) {
        this.$router.push('/')
      }
    },
    methods: {
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
</style>