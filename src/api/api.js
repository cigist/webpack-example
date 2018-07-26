import $ from 'jquery';

const server = 'https://www.exact.co.id/SE/'
//const server = 'http://192.168.0.113:8084/SE/'; 
export default class Api {
    constructor() {
    }

    static async ngPost($http, service, args, result) {
        try {
            $http({
                method: "POST",
                url: server + service,
                params: args,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }).then(function mySucces(response) {
                result(response.data);
            }, function myError(response) {
            });
        } catch (error) {
            return null;
        }
    };
    static async doPost(service, data, result) {
        try {
            var httpServer = server + service;
            setTimeout(function () {
                $.post(httpServer, data, function (response, status) {
                    result(JSON.parse(response));
                }).done((respone, status) => {
                    console.log(status);
                }).fail((error) => {
                    console.log(error);
                }).always((done) => {
                    console.log('Request Done');
                });
            }, 3000);
        } catch (error) {
            return null;
        }
    };
    static async doGet(service, data, result) {
        try {
            var httpServer = server + service;
            setTimeout(function () {
                $.get(httpServer, data, function (response, status) {
                    result(JSON.parse(response));
                }).done((respone, status) => {
                    console.log(status);
                }).fail((error) => {
                    console.log(error);
                }).always((done) => {
                    console.log('Request Done');
                });
            }, 3000);
        } catch (error) {
            return null;
        }
    };
}
