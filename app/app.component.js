(function (app) {
    app.AppComponent = ng.core.Component({
        selector: 'my-app',
        template: '<h1>My first angular 2 app.</h1>'
    }).Class({
        constructor: function () {}
    });
}(window.app || (window.app = {})));