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
         'members' => $this->mapMemberData(),
      	));
        Requirements::css(MODULE_MAPPABLE_DIR.'/css/mappable.css');
      	//self::convertAddressToPoint();
         self::mapMemberData();
    }

    private static $allowed_actions = array(
         'mapMemberData',
     );

    public function mapMemberData()
    {
        $infoWindowList = Member::get();//->filter(array('Latitude' => 'IS NOT NULL'));
         //Debug::show($infoWindowList);
        if ($infoWindowList) {
            $InfoWindows = array();
            $count = 0;
            foreach ($infoWindowList as $obj) {
                $InfoWindows['Objects'][] = array(
                              'firstname' => $obj->FirstName,
                              'surname' => $obj->Surname,
                              'lat' => $obj->Latitude,
                              'long' => $obj->Longitude,
                         );
                ++$count;
            }
            $InfoWindows = Convert::array2json($InfoWindows);
            Debug::show($InfoWindows);
            Requirements::customScript("var infoWindowObject = $InfoWindows;");
        }
    }

    public function Map()
    {
        return '<div id="map_canvas"></div>';
    }
}
