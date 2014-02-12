(function() {

    'use strict';

    // Defining the config for RequireJS
    require.config({

        paths: {
            jquery: ['../bower_components/jquery/jquery'],
            underscore: ['../bower_components/underscore/underscore'],
            backbone: ['../bower_components/backbone/backbone']
        },

        shim: {
            'backbone': {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
            'underscore': {
                exports: '_'
            },
            'jquery': {
                exports: '$'
            }
        }

    });

    require(['jquery', 'underscore', 'backbone', 'app'], function($, _, Backbone, App) {

        // Initializing the App
        App.init();

    });

})();