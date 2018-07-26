import $ from 'jquery';

const server = 'https://www.exact.co.id/SE/'
//const server = 'http://192.168.0.113:8084/SE/'
export default class Api {
    constructor() {

    }
    static async ngPost($http, service, data, result) {
        let config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
        $http.post(server + service, data, config).then((response) => {
            result(response.data);
        }).catch((err) => {
            console.log(err.status)
        });
    };
    static async ngGet($http, service, data, result) {
        let config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
        $http.get(server + service, data, config).then((response) => {
            result(response.data);
        }).catch((err) => {
            console.log(err.status)
        });
    };
    static async ngPut($http, service, data, result) {
        let config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
        $http.put(server + service, data, config).then((response) => {
            result(response.data);
        }).catch((err) => {
            console.log(err.status)
        });
    };
    static async ngDelete($http, service, data, result) {
        let config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
        $http.put(server + service, data, config).then((response) => {
            result(response.data);
        }).catch((err) => {
            console.log(err.status)
        });
    };
    //JQUERY API
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
