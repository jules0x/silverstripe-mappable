<?php

class MyAdmin extends ModelAdmin {

	private static $managed_models = array(
		'Location'
	);

	private static $url_segment = 'locations';

	private static $menu_title = 'Locations';
}