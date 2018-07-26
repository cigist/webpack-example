import api from '../api/api'

let scope;
export default class HomeController {
  constructor($scope,$http) {
    'ngInject';
    scope=$scope;
    scope.message=$scope.name;
    this.http = $http;
  };
  getMessage() {
    let param = {
      xname: 'dodol'
    }
    api.ngPost(this.http,'walletw.exmasterbank?', param,(response) => {
      if(response.STATUS ==='OK'){
        scope.listBank=response.LIST_BANK;
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
