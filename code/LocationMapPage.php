<?php

class LocationMapPage extends Page {
}

class LocationMapPage_Controller extends Page_Controller {
	public function init() {
		parent::init();

		Requirements::javascript(MODULE_MAPPABLE_DIR . '/javascript/jquery-2.1.4.min.js');
		Requirements::javascript('https://maps.googleapis.com/maps/api/js?key=AIzaSyAAaa_ApoYASmy5j35SKI7q1UcLzvdxf2E');
		Requirements::javascript(MODULE_MAPPABLE_DIR . '/javascript/GoogleMapConfig.js');

		Requirements::css(MODULE_MAPPABLE_DIR . '/css/mappable.css');
      self::locationData();

	}

	private static $allowed_actions = array(
		'locationData'
	);

	public function locationData() {
		$infoWindowList = Location::get()->exclude(array('lat' => null, 'lng' => null))->limit(8);
      //Debug::show($infoWindowList);
		if ($infoWindowList) {

			$InfoWindows = array();

			foreach ($infoWindowList as $obj) {
				$InfoWindows[] = array(
					'lat' => $obj->lat,
					'lng' => $obj->lng,
					'info' => $obj->Name . "<br />" . $obj->InfoWindow
				);
			}
			$InfoWindows = Convert::array2json($InfoWindows);

			return $InfoWindows;

		}
	}

	public function Map() {
		return '<div id="map_canvas"></div>';
	}
}
