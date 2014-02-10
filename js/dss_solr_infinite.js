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

    $.ias($.extend(this.options, {
		
		container: '.islandora-solr-search-result-list',
		    item: '.islandora-solr-search-result',
		    pagination: '.pagination',
		    next: '.islandora-discovery-inner-container .pagination-count .pagination .next a',
		    loader: '<div class="dss-solr-infinite-loader"><img src="' + this.options.modulePath + '/images/loader.gif" /></div>'
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

	$('.islandora-view-list').click(function(e) {

		e.preventDefault();
		//infiniteList.unbind();
		//$.ias().unbind();

		// AJAX-integrated
		var url = $(document).data('islandoraDssDateRangeSlider')['query'] || '/islandora/search/*:*';
		/**
		 * @todo Resolve
		 *
		 */
		url = '/' + url;
		var params = $(document).data('islandoraDssDateRangeFacetParams') || {};
		params = $.extend(params, { display: 'list' });
		$(document).data('islandoraDssDateRangeFacetParams', params);

		//$.get(document.URL, {display: 'list'}, function(data) {
		$.get(url, params, function(data) {

			$('.islandora-solr-search-results').removeClass('loading').append($(data).find('.islandora-solr-search-results').children());
		    });
		$('.islandora-solr-search-results').empty().addClass('loading');

	    });

	// Transition for visibility
	$('.islandora-view-list').toggleClass('shown');

	$('.islandora-view-grid').click(function(e) {

		e.preventDefault();
		//infiniteList.unbind();
		//$.ias().unbind();

		// AJAX-integrated
		var url = $(document).data('islandoraDssDateRangeSlider')['query'] || '/islandora/search/*:*';
		/**
		 * @todo Resolve
		 *
		 */
		url = '/' + url;
		var params = $(document).data('islandoraDssDateRangeFacetParams') || {};
		params = $.extend(params, { display: 'grid' });
		$(document).data('islandoraDssDateRangeFacetParams', params);

		//$.get(document.URL, {display: 'grid'}, function(data) {
		$.get(url, params, function(data) {

			$('.islandora-solr-search-results').removeClass('loading').append($(data).find('.islandora-solr-search-results').children());
		    });
		$('.islandora-solr-search-results').empty().addClass('loading');

	    });

	// Transition for visibility
	$('.islandora-view-grid').toggleClass('shown');

	// Abstract and refactor
	//var infiniteList = new IslandoraDssSolrInfinite($, Drupal.settings.dssSolrInfinite);
    };

    // @todo: Refactor
    $(document).ready(function() {

	    Drupal.behaviors.islandoraDssSolrInfinite();
	});

})(jQuery, Drupal, IslandoraDssSolrInfinite);
