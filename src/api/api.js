import $ from 'jquery';
export default class Api {
    constructor(service, data) {
        this.service = service;
        this.data = data;
        this.server = 'https://www.exact.co.id/SE/';
        //this.server = 'http://192.168.0.113:8084/SE/'; 
    }
    doPost(result) {
        var httpServer = this.server + this.service;
        setTimeout(function () {
            $.ajax(httpServer,this.data, {
                method: 'POST',
                data: this.data
            }).then(function success(result) {
                return (result);
            },function fail(data, status) {
                    alert('Request failed.  Returned status of ' + status);
                }
            );
        }, 3000);
    };

}
