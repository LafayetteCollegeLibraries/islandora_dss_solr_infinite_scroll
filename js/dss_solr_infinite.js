/**
 * @file dss_solr_infinite JavaScript integration for Islandora
 * @author griffinj@lafayette.edu
 *
 */

'use strict';

var IslandoraDssSolrDateFacet = function($, element, options) {

    this.$ = $;
    this.element = element;
    this.options = $.extend(options, {

	    range: true,
	    step: 86400, // Increment by a single day
	    values: [0, 0],
	});

    this.$element = $(element);

    //var that = this;

    this.$element.slider(this.options);
};

var IslandoraDssSolrInfinite = function($, options) {

    this.$ = $;
    this.options = $.extend(options, {
	});

    var ias = $.ias($.extend(this.options, {

		container: '.islandora-solr-search-result-list',
		item: '.islandora-solr-search-result',
		pagination: '.pagination',
		triggerPageThreshold: 100000,
		//next: '.islandora-discovery-inner-container .pagination-count .pagination .next a',
		next: '.pagination:last-child .next a',
		loader: '<div class="dss-solr-infinite-loader"><img src="' + this.options.modulePath + '/files/loader_65_65.gif" /></div>',

	    }));

    /*
    var that = this;

    //$('.islandora-solr-facet-list li a').click(function(e) {
    this.facetLinkHandler = function(e) {

	e.preventDefault();

	var facetedSearchAnchor = $(this);
	//var facetedSearchUrl = $(this).attr('href');
	$.get(facetedSearchAnchor.attr('href'), function(data) {

		$(data).find('#block-islandora-solr-facet-pages-islandora-solr-facet-pages').appendTo($('.region-slide-panel').empty());
		$('#block-islandora-solr-facet-pages-islandora-solr-facet-pages h2.block-title').after($('<div class="islandora-solr-facet islandora-solr-facet-filter"><a href="' + facetedSearchAnchor.attr('href') + '">' + facetedSearchAnchor.text() + '</a></div>').click(function(e) {

			    $('.islandora-solr-facet-filter').last().remove();
			    that.facetLinkHandler(e);
			}));

		$(data).find('.main-container').children().appendTo($('.main-container').empty());
	    });
	//});
    };

    $('.islandora-solr-facet-list li a').click(that.facetLinkHandler);
    */
};

IslandoraDssSolrInfinite.prototype = {

    constructor: IslandoraDssSolrInfinite,

    bind: function bind() {
	
	/*
	$.ias($.extend(this.options, {
		
		    container: '.islandora-solr-search-result-list',
		    item: '.islandora-solr-search-result',
		    pagination: '.pagination',
		    next: '.islandora-discovery-inner-container .pagination-count .pagination .next a',
		    loader: '<div class="dss-solr-infinite-loader"><img src="' + this.options.modulePath + '/images/loader.gif" /></div>'
		}));
	*/

	return null;
    },

    unbind: function unbind() {

	var $ = this.$;
	$.ias().unbind();
    }
};

/**
 * Integration with the Drupal JavaScript API
 *
 */
(function($, Drupal, IslandoraDssSolrInfinite) {

    Drupal.behaviors.islandoraDssSolrInfinite = function(context) {

    };

    // @todo: Refactor
    $(document).ready(function() {

	    Drupal.behaviors.islandoraDssSolrInfinite();
	});

})(jQuery, Drupal, IslandoraDssSolrInfinite);
