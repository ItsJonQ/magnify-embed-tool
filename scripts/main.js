(function() {

    'use strict';

    // Defining the config for RequireJS
    require.config({
        packages: [
            {
                name: 'backbone',
                location: '../bower_components/backbone',
                main: 'backbone'
            },
            {
                name: 'jquery',
                location: '../bower_components/jquery',
                main: 'jquery'
            },
            {
                name: 'underscore',
                location: '../bower_components/underscore',
                main: 'underscore'
            }
        ]
    });

    require(['jquery', 'underscore', 'backbone', 'app'], function($, _, Backbone, App) {

        // Initializing the App
        App.init();

    });

})();