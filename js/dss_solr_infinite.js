/**
 * @file dss_solr_infinite JavaScript integration for Islandora
 * @author griffinj@lafayette.edu
 *
 */

'use strict';

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
};

IslandoraDssSolrInfinite.prototype = {

    constructor: IslandoraDssSolrInfinite
};

/**
 * Integration with the Drupal JavaScript API
 *
 */
(function($, Drupal, IslandoraDssSolrInfinite) {

    Drupal.behaviors.islandoraDssSolrInfinite = function(context) {

	// Abstract and refactor
	var infiniteList = new IslandoraDssSolrInfinite($, Drupal.settings.dssSolrInfinite);
    };

    // @todo: Refactor
    $(document).ready(function() {

	    Drupal.behaviors.islandoraDssSolrInfinite();
	});

})(jQuery, Drupal, IslandoraDssSolrInfinite);
