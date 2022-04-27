import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

export interface State {
  count: number
}

export const key: InjectionKey<Store<State>> = Symbol('state')
// 创建一个新的 store 实例
export const store = createStore<State>({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})
// 定义自己的useStore组合式函数
export function useStore() {
  return baseUseStore(key)
}