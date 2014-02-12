define(['backbone','utils/fetch', 'models/model_Video'], function(Backbone, fetch, Model) {

    'use strict';

    var collection = Backbone.Collection.extend({

        model: Model,

        initialize: function() {
            this.init();
        },

        init: function() {
            var self = this;

            fetch(function(data) {

                // Defining the entries
                var entries = data.entry;

                // Looping through the entries
                for(var i = 0, len = entries.length; i < len; i++) {

                    // Creating the new entry Video model
                    var entry = new Model({
                        data: entries[i]
                    });

                    // Adding the entry model to the collection
                    self.add(entry);

                }

            });
        }

    });

    return collection;

});