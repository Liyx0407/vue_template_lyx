/**
 * 缓存菜单信息
 * 
 */
const addUserInfo = {
  state: {
    permissionArr: [],
    ip: "",
    port: "",
    pwd: "",
    userName: ""

  },
  mutations: {
    add_UserInfo(state, param) {
      if (param) {
        state.permissionArr = param.split(',');

      }
    },
    add_ip(state, param) {
      if (param) {
        state.ip = param.transferIp;
        state.port = param.port;
        state.pwd = param.password;
        state.userName = param.userName;

      }
    },

  },
  actions: {
    add_UserInfo({
      commit
    }, param) {
      commit('add_UserInfo', param)
    },
    add_ip({
      commit
    }, param) {
      commit('add_ip', param)
    },
    add_port({
      commit
    }, param) {
      commit('add_port', param)
    },
  }
}
export default addUserInfo
