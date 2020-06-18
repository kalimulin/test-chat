import Vue from 'vue'
import Vuex from 'vuex'
import {Message, User} from "@/interfaces";

Vue.use(Vuex)

const user0: User = {
  nickName: 'Иван Иванович',
  avatarUrl: 'https://robohash.org/IvanIvanovich?set=set4',
  id: 0
}

const user1: User = {
  nickName: '',
  avatarUrl: '',
  id: 1
}

export default new Vuex.Store({
  state: {
    user1,
    user0,
    messages: Array<Message>(),
    contacts: [user0, user1]
  },
  mutations: {
    setUser: (state, user) => {
      state.user1 = {
        id: state.user1.id,
        nickName: user.nickName,
        avatarUrl: user.avatarSrc
      }
    },
    setContacts: (state, contacts) => {
      state.contacts = [...contacts]
    },
    addMessage: (state, msg)  => {
      state.messages.push({
        timestamp: Date.now(),
        message: msg.message,
        fromId: msg.fromId,
        toId: msg.toId,
        isRead: (msg.toId === msg.toId)
      })
    }
  },
  getters: {
    getDialogMessages(state) {
      return (id1: number, id2: number) => {
        return state.messages.filter(message => (message.fromId === id1 && message.toId === id2) || (message.toId === id1 && message.fromId === id2))
      }
    },
  },
  actions: {
    updateUser: ({commit, state}, user) => {
      commit('setUser', user)
      commit('setContacts', [state.user0, state.user1])
    }
  }
})
