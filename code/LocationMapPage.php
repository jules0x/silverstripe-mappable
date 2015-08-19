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
                    'memberCount' => $this->MemberCountForMap(),
                    'content' => $this->MapMemberData(),
                    ));
        Requirements::css(MODULE_MAPPABLE_DIR.'/css/mappable.css');
                //self::convertAddressToPoint();
    }

    public function MemberCountForMap()
    {
        $members = Member::get();
        $memberCount = $members->Count();

        return $memberCount;
    }

    public function MapMemberData()
    {
        $members = Member::get();
        $contentArray = array();
        foreach ($members as $member) {
            array_push($contentArray, '<strong>'.$member->FirstName.' '.$member->Surname.'</strong>');
        }
        $contentOut = implode('*', $contentArray);

        return $contentOut;
    }

    public function Map()
    {
        return '<div id="map_canvas"></div>';
    }
}
