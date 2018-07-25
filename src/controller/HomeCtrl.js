import profile from './ProfileCtrl'
import api from '../api/api'

export default class  HelloWorldController {
    constructor($scope) {
      this.scope = $scope;
      this.data={
        message:[]
      }
    };

    getMessage(){
      let param={
        xname:'dodol'
      }
      let vapi = new api('walletw.exmasterbank?',param);
      vapi.doPost(function (result){
        console.log(result);
      });
    }
}