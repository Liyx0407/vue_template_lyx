import CryptoJS from 'crypto-js'
import Config from '../static/config'
let aseKey=Config.aseKey;

class tripleDES {
  decode(message) {
    //解密
    var decrypt = CryptoJS.AES.decrypt(message, CryptoJS.enc.Utf8.parse(aseKey), {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    console.log(decrypt);
  }

  encode(message) {
    //加密
    var encrypt = CryptoJS.AES.encrypt(message, CryptoJS.enc.Utf8.parse(aseKey), {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }).toString();
    console.log(encrypt);
  }
}

export default new tripleDES
