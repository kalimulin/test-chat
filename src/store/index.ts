import Vue from 'vue'
import Vuex from 'vuex'
import {Message, User} from "@/interfaces";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user1: {
      nickname: '',
      avatarUrl: '',
      id: 1
    } as User,
    user0: {
      nickname: 'Иван Иванович',
      avatarUrl: 'https://robohash.org/IvanIvanovich?set=set4',
      id: 0
    } as User,
    messages: Array<Message>()
  },
  mutations: {
    setUser: (state, user) => {
      state.user1 = {
        id: state.user1.id,
        nickname: user.nickname,
        avatarUrl: user.avatarSrc
      }
    },
    addMessage: (state, msg)  => {
      state.messages.push({
        timestamp: Date.now(),
        message: msg.message,
        fromId: msg.fromId,
        toId: msg.toId
      })
    }
  },
  getters: {
    getMessagesByUser(state) {
      return (id: number) => {
        return state.messages.filter(message => (message.fromId === id || message.toId === id))
      }
    }
  },
})
