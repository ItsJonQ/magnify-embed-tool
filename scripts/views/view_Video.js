define(['backbone'], function(Backbone) {

    'use strict';

    return Backbone.View.extend({

        tagName: 'li',

        className: 'list-group-item clearfix',

        template: _.template($('#templateVideoListItem').html()),

        embedCodeTemplate: _.template($('#templateVideoEmbedCode').html()),

        embedBoxTemplate: _.template($('#templateVideoEmbedBox').html()),

        events: {
            'click .action-main' :          'renderEmbed'
        },

        initialize: function() {
            this.render();
        },

        render: function() {

            // Rendering the $el by templating the data
            this.$el.html(this.template(this.model.get('data')));

            // Appending the $el to the collection
            this.collection.$el.append(this.$el);

            return this;
        },

        setupEmbed: function() {
            event.preventDefault();

            // Return this if the embed code is already set
            if(this.model.get('embed')) return this;

            var modelData = this.model.get('data');

            // Setting the embed code
            this.model.set('embedDefault', this.embedCodeTemplate({
                model: modelData,
                width: 630,
                height: 419
            }));

            this.model.set('embedLarge', this.embedCodeTemplate({
                model: modelData,
                width: 960,
                height: 604
            }));
        },

        renderEmbed: function() {
            // Setup the embed code
            this.setupEmbed();

            // Defining the model
            var model = this.model;

            // Defining the popup modal
            var $modal = this.collection.$embedModal;

            // Generating the embed code
            var embedCodeDefault = this.embedBoxTemplate({ embed: model.get('embedDefault' ) });
            var embedCodeLarge = this.embedBoxTemplate({ embed: model.get('embedLarge' ) });

            var embedPreview = '<img src="'+model.get('data').thumbnail.large+'">';

            // Upating the modal's title
            $modal.find('#embed-modal-title').html(model.get('data').title);

            // Updating the modal's thumb preview
            $modal.find('#embed-modal-preview').html(embedPreview);

            // Adding the embed code to the modal
            $modal.find('#embed-modal-code-default').html(embedCodeDefault);
            $modal.find('#embed-modal-code-large').html(embedCodeLarge);

        }

    });

});