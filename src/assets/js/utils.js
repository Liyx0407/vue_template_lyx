import moment from 'moment';
import AMap from 'AMap';

/**
 * 公共方法
 */



class Util {

  getKeyWord(list, keyWord, key) {
    //获取关键字
    //字符串方法indexOf
    var len = list.length;
    var arr = [];
    for (var i = 0; i < len; i++) {
      //如果字符串中不包含目标字符会返回-1
      if (list[i][key].indexOf(keyWord) >= 0) {
        arr.push(list[i]);
      }
    }
    return arr;
  }
  //时间格式化
  formatDate(time) {
    let d = new Date(time).valueOf();
    let date = moment(d).format('YYYY-MM-DD HH:mm:ss');
    return date
  }
  //时间格式化
  formatDay(time) {
    let d = new Date(time).valueOf();
    let date = moment(d).format('YYYY-MM-DD');
    return date
  }
  getStartDate() {
    //获取开始时间
    const start = formatDate(new Date(new Date(new Date().toLocaleDateString()).getTime()));
    return start;
  }
  //获取当前时间
  getCurentDate = function () {
    const end = formatDate(new Date());
    return end;
  }

  //根据相差天数获取当天日期
  getDay(day) {
    let nowTemp = new Date().getTime();
    let temp = day * 24 * 60 * 60 * 1000;
    let targetDay = new Date(nowTemp - temp);
    // console.log(targetDay);
    return (targetDay);
  }

  //排序(升序)
  compareAscSort(property) {
    //property 表示根据什么属性排序
    return function (a, b) {
      var value1 = a[property];
      var value2 = b[property];
      return value1 - value2;
    }
  }

  //排序(降序)
  compareDescSort(property) {
    return function (a, b) {
      var value1 = a[property];
      var value2 = b[property];
      return value2 - value1;
    }
  }

  //获取时间戳
  getTemp(date) {
    let temp = new Date(date).getTime();
    return temp
  }

  //把标准时间转为  xx小时xx分钟xx秒 所代表的秒数
  //部标设备指令___临时位置跟踪需求
  changeTimeToSecond(sTime) {
    let time = formatDate(sTime);
    let timeArr = time.split(" ")[1];
    let timeSecArr = timeArr.split(":");
    let iIntervalTime = parseInt(timeSecArr[0]) * 3600 + parseInt(timeSecArr[1]) * 60 + parseInt(timeSecArr[2]);
    return iIntervalTime;
  }

  //将时间间隔转换为秒
  turnSecond(val) {
    let time = formatDate(val);
    let timeArr = time.split(" ")[1];
    let timeSecArr = timeArr.split(":");
    let iIntervalTime = (parseInt(timeSecArr[0]) * 3600) + (parseInt(timeSecArr[1]) * 60) + (parseInt(timeSecArr[2]));
    return iIntervalTime;
  }

  //验证为数字
  checkNumber(rule, value, callback) {
    if (value && value !== '') {
      let regEn = /^(\-|\+)?\d+(\.\d)?$/
      if (!regEn.test(value)) {
        callback(new Error('请输入数字'))
      } else {
        callback()
      }
    } else {
      callback()
    }
  }

  //判断数字是否在这个区间
  rangRules(min, max) {
    if (!(min < value && value < max)) {
      if (!(min < value && value < max)) {
        return `请输入${min}~${max}之间的数字`;
      }
    }
  }

  //只能是数字和字母

  checkString(rule, value, callback) {
    if (value && value !== '') {
      let regEn = /^(?=[0-9a-zA-Z@_.]+$)/
      if (!regEn.test(value)) {
        callback(new Error('不能输入特殊字符')) //只能是字母和数字
      } else {
        callback()
      }
    } else {
      callback()
    }
  }

  //手机号码

  checkPhone(rule, value, callback) {
    if (value && value !== '') {
      let regEn = /(^1[3|4|5|7|8|9]\d{9}$)|(^09\d{8}$)/
      if (!regEn.test(value)) {
        callback(new Error("请输入正确的手机号"))
      } else {
        callback()
      }
    } else {
      callback()
    }
  }

  //只能中文
  checkName(rule, value, callback) {
    if (value && value !== '') {
      let regEn = /^[\u4E00-\u9FA5]{2,4}$/
      if (!regEn.test(value)) {
        callback(new Error('请输入中文'))
      } else {
        callback()
      }
    } else {
      callback()
    }
  }
  //验证身份证
  checkIdNumber(rule, idcard, callback) {
    var Errors = new Array(
      "true",
      "身份证号码位数不对",
      "出生日期超出范围或含有非法字符",
      "身份证号码校验错误",
      "身份证地区非法"
    );
    var area = {
      11: "北京",
      12: "天津",
      13: "河北",
      14: "山西",
      15: "内蒙古",
      21: "辽宁",
      22: "吉林",
      23: "黑龙江",
      31: "上海",
      32: "江苏",
      33: "浙江",
      34: "安徽",
      35: "福建",
      36: "江西",
      37: "山东",
      41: "河南",
      42: "湖北",
      43: "湖南",
      44: "广东",
      45: "广西",
      46: "海南",
      50: "重庆",
      51: "四川",
      52: "贵州",
      53: "云南",
      54: "西藏",
      61: "陕西",
      62: "甘肃",
      63: "青海",
      64: "宁夏",
      65: "新疆",
      71: "台湾",
      81: "香港",
      82: "澳门",
      91: "国外"
    }
    var idcard, Y, JYM;
    var ereg;
    var S, M;
    var idcard_array = new Array();
    idcard_array = idcard.split("");
    if (idcard && idcard !== '') {
      //地区检验
      if (area[parseInt(idcard.substr(0, 2))] == null) callback(new Error(Errors[4]));
      //身份号码位数及格式检验
      switch (idcard.length) {
        case 15:
          if ((parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0 || ((parseInt(idcard.substr(6, 2)) + 1900) % 100 == 0 && (parseInt(idcard.substr(6, 2)) + 1900) % 4 == 0)) {
            ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}$/;
            //测试出生日期的合法性
          } else {
            ereg = /^[1-9][0-9]{5}[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}$/;
            //测试出生日期的合法性
          }
          if (ereg.test(idcard)) callback();
          else return callback(new Error(Errors[2]));
          break;
        case 18:
          //18位身份号码检测
          //出生日期的合法性检查
          //闰年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))
          //平年月日:((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))
          if (parseInt(idcard.substr(6, 4)) % 4 == 0 || (parseInt(idcard.substr(6, 4)) % 100 == 0 && parseInt(idcard.substr(6, 4)) % 4 == 0)) {
            ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|[1-2][0-9]))[0-9]{3}[0-9Xx]$/;
            //闰年出生日期的合法性正则表达式
          } else {
            ereg = /^[1-9][0-9]{5}(19|20)[0-9]{2}((01|03|05|07|08|10|12)(0[1-9]|[1-2][0-9]|3[0-1])|(04|06|09|11)(0[1-9]|[1-2][0-9]|30)|02(0[1-9]|1[0-9]|2[0-8]))[0-9]{3}[0-9Xx]$/;
            //平年出生日期的合法性正则表达式
          }

          if (ereg.test(idcard)) { //测试出生日期的合法性
            //计算校验位
            S = (parseInt(idcard_array[0]) + parseInt(idcard_array[10])) * 7 +
              (parseInt(idcard_array[1]) + parseInt(idcard_array[11])) * 9 +
              (parseInt(idcard_array[2]) + parseInt(idcard_array[12])) * 10 +
              (parseInt(idcard_array[3]) + parseInt(idcard_array[13])) * 5 +
              (parseInt(idcard_array[4]) + parseInt(idcard_array[14])) * 8 +
              (parseInt(idcard_array[5]) + parseInt(idcard_array[15])) * 4 +
              (parseInt(idcard_array[6]) + parseInt(idcard_array[16])) * 2 +
              parseInt(idcard_array[7]) * 1 +
              parseInt(idcard_array[8]) * 6 +
              parseInt(idcard_array[9]) * 3;
            Y = S % 11;
            M = "F";
            JYM = "10X98765432";
            M = JYM.substr(Y, 1);
            //判断校验位
            if (M == idcard_array[17].toUpperCase()) callback() //检测ID的校验位
            else callback(new Error(Errors[3]));
          } else callback(new Error(Errors[2]));
          break;
        default:
          callback(new Error(Errors[1]));
          break;
      }
    } else {
      callback()
    }

  }

  //获取数组对象中的某一个属性拼起来的数组
  getCarId(arr, attr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      newArr.push(element[attr])
    }
    return newArr
  }

  //获取位置信息数组
  getPlaceArr(arr, lngNmae, latName) {
    serverLoading = Loading.service({
      text: "加载数据中....",
      lock: true,
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    });
    let hasPlace = false;
    for (let i = 0; i < arr.length; i++) {
      let v = arr[i];
      // 转换gps
      if (v[lngNmae], v[latName]) {
        hasPlace = true;
        oneGpsToLngLat(v[lngNmae], v[latName]).then(res => {
          if (res) {
            getPlace(res[0], res[1]).then(data => {
              if (data) {
                v.location = data;
              }
            });
          }

        })
      }

    }
    serverLoading.close();
    if (hasPlace) {
      Message({
        showClose: true,
        message: "位置获取成功!",
        type: "success"
      })
    } else {
      Message({
        showClose: true,
        message: "暂无位置信息!",
      })
    }

    return arr;

  }

  //gps和经纬度转换
  oneGpsToLngLat(lng, lat) {
    return new Promise(function (resolve, reject) {
      AMap.convertFrom([lng, lat], 'gps', function (status, result) {
        if (result.info === 'ok') {
          var resLnglat = result.locations[0];
          resolve([resLnglat.lng, resLnglat.lat]);
        }
      });

    });
  }
  // 转换gps数组
  gpsArrToLngLat(arr, lngNmae, latName) {
    for (let i = 0; i < arr.length; i++) {
      let v = arr[i];
      oneGpsToLngLat(v[lngNmae], v[latName]).then(res => {
        if (res) {
          v[lngNmae] = res[0];
          v[latName] = res[1];
        }
      });
    }
    return arr;
  }
  //把0:00~12:00格式的数据转换为date格式的方法
  getTime(str) {
    let startT = str.split('-')[0];
    let startD = new Date(2016, 9, 10, parseInt(startT.split(':')[0]), parseInt(startT.split(':')[1]))
    let endT = str.split('-')[1];
    let endD = new Date(2016, 9, 10, parseInt(endT.split(':')[0]), parseInt(endT.split(':')[1]));
    let arr = [startD, endD];
    return arr;
  }

  //把1-31个checked/unchecked数据转换为2日,3日的数组
  changeCheckedToDate(sRepetition) {
    let arr = [];
    let array = sRepetition.split(" ");
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (element == "Checked") {
        arr.push((i + 1) + "日");
      }
    }
    return arr;
  }

  //把2日,3日的数组 转换为1-31个checked/unchecked数据

  handleChooseDateTostr(checkedDates) {
    let arr = [];
    for (let i = 0; i < dateOptions.length; i++) {
      let element = "Unchecked";
      for (let j = 0; j < checkedDates.length; j++) {
        const chooseEl = checkedDates[j];
        if (dateOptions[i] == chooseEl) {
          element = "Checked";
          break;
        }
      }
      arr.push(element);
    }
    return arr.join(" ");
  }
  // 生成随机字符串
  randomString(len, charSet) {
    charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < len; i++) {
      var randomPoz = Math.floor(Math.random() * charSet.length);
      randomString += charSet.substring(randomPoz, randomPoz + 1);
    }
    return randomString;
  }


  //打开新页面
  OpenNewPage($this, routePath, param) {
    let routeData = $this.$router.resolve({
      path: routePath,
      query: param
    });
    window.open(routeData.href, '_blank');
  }
  /**
   * 写入sessionStorage
   */
  setSessionStorage (key, objData) {
    if (typeof objData == 'string') {
      sessionStorage.setItem(key, objData);
    } else {
      sessionStorage.setItem(key, JSON.stringify(objData));
    }

  }
  /**
   * 读取sessionStorage
   */
  getSessionStorage (key, isObj) {
    var data = sessionStorage.getItem(key);
    if (isObj) {
      return JSON.parse(data);
    }
    return data;
  }
  /**
   * 移除sessionStorage
   */
  removeSessionStorage (key) {
    sessionStorage.removeItem(key);
  }
  timestampToTime(row, column) {
    var date = row[column.property];
    if (date == undefined) {
      return "";
    }
    return moment(date).format("YYYY-MM-DD HH:mm:ss");
  }

  //是否操作成功
  isSuccess(data, callback) {
    if (data && data.data) {
      var json = data.data;
      if (json.status == 'SUCCESS') {
        _this.$message({
          message: '执行成功',
          type: "success"
        });
        callback(json);
      } else if (json.message) {
        _this.$message({
          message: json.message,
          type: "error"
        });
      }
    } else {
      _this.$message({
        message: '执行异常，请重试',
        type: "error"
      });
    }


  }

}




  export default new Util
