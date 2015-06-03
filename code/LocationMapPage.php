<?php

class LocationMapPage extends Page {
	
}

class LocationMapPage_Controller extends Page_Controller {
	
		public function init() {
			parent::init();

		
			// Note: you should use SS template require tags inside your templates
			// instead of putting Requirements calls here.  However these are
			// included so that our older themes still work

			//$query = DataObject::get("VideoPage", "ID = $this->VimeoID"); 

			//$GPSURL = $GPSXML.URL;

			//Requirements::javaScript("mysite/javascript/vimeo.js");
	/*		Requirements::javascriptTemplate('mysite/javascript/map.js', array( 
		//		'City' => $City,
				'lat' => $this->getLatForMap(),
				'lng' => $this->getLngForMap() 
			)); */
			Requirements::javascript("framework/thirdparty/jquery/jquery.js");
		//	Requirements::javascript("http://maps.google.com/maps/api/js?sensor=false"); VERSION 2 (Depreciated)
		Requirements::javascript("http://maps.googleapis.com/maps/api/js?key=AIzaSyAAaa_ApoYASmy5j35SKI7q1UcLzvdxf2E&sensor=false");
		Requirements::javascript("mysite/javascript/GoogleMapConfig.js");
		Requirements::javascriptTemplate('mysite/javascript/GoogleMapConfig.js', array( 
					'memberCount' => $this->memberCountForMap(),
					'content' => $this->getContentForMap(),
					'lat' => $this->getLatForMap(),
					'lng' => $this->getLngForMap()
					));
		//	Requirements::javascript("mysite/javascript/MapSettings.js"); VERSION 2 Configuration
//			Requirements::javascript("mysite/javascript/jquery.scrollto.js");
//			Requirements::javascript("mysite/javascript/scrollConfig.js");
/*			Requirements::javascriptTemplate('mysite/javascript/MapSettings.js', array(  VERSION 2 (Depreciated)
			'fname' => $this->getFirstNameForMap(),
			'sname' => $this->getSurnameForMap(), 
			'lat' => $this->getLatForMap(), 
			'lng' => $this->getLngForMap()
			));  */
			//Debug::show($this->MemberCountForMap());
	//		Requirements::javascript("mysite/javascript/MapTrigger.js");
	//	Debug::show($this->getContentForMap());
//			Debug::show($this->getLatForMap());
//			Debug::show($this->getLngForMap());
			//Debug::show($this->getCoordinatesForMap());

 self::convertAddressToPoint(); 
		}
		
	
	function RegionMembers() {
		$members = GroupedList::create(LocatableMember::get()->sort('Region')->filter(array('MemberType' => 'FM'))); //->filter(array('Surname IS NOT NULL'))
		return $members;
	}
	
		function getMembersForMap() {
			$members = LocatableMember::get()->filter(array('MemberType' => 'FM'));
			return $members;
		}

		function memberCountForMap() {
			$members = LocatableMember::get()->filter(array('MemberType' => 'FM'));
			$memberCount = $members->Count();
			return $memberCount;
		}
		
		function getContentForMap() {
			$members = self::getMembersForMap();
			$contentArray = array();
			foreach($members as $member){
				array_push($contentArray, "<strong>" . $member->FirstName . " " . $member->Surname . "</strong><br />" . $member->Phone . "<br />" . $member->Address . "<br />" . $member->Suburb . "<br />" . $member->Region . "<br />" . $member->Email);
			}	
			$contentOut = implode("*", $contentArray);
			return $contentOut;
		}
		
		function getLatForMap() {
			$members = self::getMembersForMap();
			$coOrdArray = array();
			foreach($members as $member){
				array_push($coOrdArray, $member->Latitude);
			}	
			$coOrdOut = implode(",", $coOrdArray);
			return $coOrdOut;
		}
		function getLngForMap() {
			$members = self::getMembersForMap();
			$coOrdArray = array();
			foreach($members as $member){
				array_push($coOrdArray, $member->Longitude);
			}	
			$coOrdOut = implode(",", $coOrdArray);
			return $coOrdOut;
		}



		
		function convertAddressToPoint() {
			$records = LocatableMember::get();
			foreach($records as $record) {
				if (!$record->Latitude) {
					$address = $record->Address . " " . $record->Suburb . " " . $record->Region;
					$point = GoogleGeocoding::address_to_point($address);
					$record->Latitude = $point['Latitude'];
					$record->Longitude = $point['Longitude'];
					$record->write();
				}
			}
		}


		function Map() {
			return '<div id="map_canvas"></div>';
		}
	
	
}