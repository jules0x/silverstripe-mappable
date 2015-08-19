<?php

class LocationMapPage extends Page
{
}

class LocationMapPage_Controller extends Page_Controller
{
    public function init()
    {
        parent::init();
        Requirements::javascript('framework/thirdparty/jquery/jquery.js');
        Requirements::javascript('http://maps.googleapis.com/maps/api/js?key=AIzaSyAAaa_ApoYASmy5j35SKI7q1UcLzvdxf2E&sensor=false');
        Requirements::javascript(MODULE_MAPPABLE_DIR.'/javascript/GoogleMapConfig.js');
        Requirements::javascriptTemplate(MODULE_MAPPABLE_DIR.'/javascript/GoogleMapConfig.js', array(
                    'memberCount' => $this->memberCountForMap(),
                    'members' => $this->mapMemberData(),
                    ));
        Requirements::css(MODULE_MAPPABLE_DIR.'/css/mappable.css');
                //self::convertAddressToPoint();
					 self::MapMemberData();
    }

	 private static $allowed_actions = array(
		 'memberCountForMap',
		 'mapMemberData'
	 );

    public function memberCountForMap()
    {
        $members = Member::get();
        $memberCount = $members->Count();

        return $memberCount;
    }

	 public function mapMemberData() {
		 // Get all the Members with Geocoding data
		 $members = Member::get();//->filter(array('Latitude' => 'IS NOT NULL'));
		 //$count = $members->count();
		 $membersArray = array();
		 foreach($members as $member){
			 $singularMemberArray = array();
			 array_push($singularMemberArray, $member->FirstName);
			 array_push($singularMemberArray, $member->Surname);
			 array_push($singularMemberArray, $member->Latitude);
			 array_push($singularMemberArray, $member->Longitude);
			 array_push($membersArray, $singularMemberArray);
		 }
		 //print_r($membersArray);
		 return $membersArray;
	 }

    public function Map()
    {
        return '<div id="map_canvas"></div>';
    }
}
