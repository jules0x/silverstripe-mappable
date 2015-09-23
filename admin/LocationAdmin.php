<?php

class MyAdmin extends ModelAdmin {

	private static $managed_models = array(
		'Location'
	);

	private static $url_segment = 'locations';

	private static $menu_title = 'Locations';

	private static $menu_icon = 'mappable/images/ic_my_location_black_24dp_1x.png'; // TODO: use MODULE_MAPPABLE_DIR

}
