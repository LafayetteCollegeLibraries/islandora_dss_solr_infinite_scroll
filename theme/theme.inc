<?php

  /**
   * @file Theme hooks and other theming functionality
   * @author griffinj@lafayette.edu
   *
   */

function dss_solr_infinite_preprocess_html(&$variables) {

  $settings = array('token' => drupal_get_token('infinite'),
		    'modulePath' => base_path() . drupal_get_path('module', 'dss_solr_infinite'));

  drupal_add_js(array('dssSolrInfinite' => $settings), 'setting');
  }
