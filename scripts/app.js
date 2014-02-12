define(function(require) {

    'use strict';

    // Defining the Api object
    var Api = {
        collections: {}
    };

    // Defining the initStatus
    var initStatus = false;

    // Define Required Methods
    var Collection = require('collections/collection_Video');
    var fetch = require('utils/fetch');

    // Defining Variables

    var init = function() {

        // Return false if the app has already initiated
        if(initStatus) return false;
        initStatus = true;

        console.log('Magnify Video Tool Initialized.');

        Api.collections.Videos = new Collection();

    };


    Api.init = init;
    Api.fetch = fetch;


    // Pushing the Api to the global scope
    window.MFYApp = Api;

    return Api;

});