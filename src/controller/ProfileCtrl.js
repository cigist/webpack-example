var _PROFILE;
export default class ProfileCtrl{
    constructor($scope){
        this.$scope = $scope;
        $scope.accountName="Dodol";
    };

    static init(){
        _PROFILE='DOOD;' 
        return _PROFILE;
    }
    
}