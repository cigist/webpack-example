import api from '../api/api'

let data = {};
export default class HomeController {
  constructor($scope) {
    this.something = null;
  };
  getMessage() {
    let param = {
      xname: 'dodol'
    }
    api.doPost('walletw.exmasterbank?', param, function (response) {
      if (response.STATUS === 'OK') {
        data.response = response;
      }
    })
  }
}