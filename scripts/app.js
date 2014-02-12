define(function() {

    // Defining the Api object
    var Api = {};

    var init = function() {
        console.log('Magnify Video Tool Initialized.');
    };


    Api.init = init;


    // Pushing the Api to the global scope
    window.MFYApp = Api;

    return Api;

});