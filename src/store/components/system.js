/**
 * 缓存菜单信息
 * 
 */
const addUserInfo = {
  state: {
    activeIndex:'',
    // token:

  },
  mutations: {
    addActiveIndex(state, param) {
      if (param) {
        state.activeIndex = param;
      }
    },

  },
  actions: {
    addActiveIndex({
      commit
    }, param) {
      commit('addActiveIndex', param)
    },
  }
}
export default addUserInfo
