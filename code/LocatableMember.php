<?php

class LocatableMember extends DataExtension {

	// Extending SilverStripe MemberProfiles to include lat/lng
	static $db = array(
		"Address1" => "Text",
		"Address2" => "Text",
		"Suburb" => "Varchar",
		"City" => "Varchar",
		"Region" => "Enum('Northland,Auckland,Coromandel,Waikato,Bay Of Plenty,East Cape,Taupo,King Country,Taranaki,Hawkes Bay,Wanganui,Wellington,Wairarapa,Nelson,Marlborough,West Coast,Canterbury,Otago,Southland', 'Auckland')",
		"Latitude" => "Varchar",
		"Longitude" => "Varchar"
	);

	public function onBeforeWrite() {
		// Convert address to Latitude/Longitude
		$this->convertAddressToPoint();
		parent::onBeforeWrite();
	}

	private function convertAddressToPoint() {
		// Get the current member
		$member = Member::get()->byID($this->owner->ID);
		// if Latitude is not populated, there must be no Geocoding saved in the database, let's populate it
		if(!$member->Latitude) {
			if(!$member->Address1){
				user_error('The member needs to have an address', E_USER_ERROR);
        		exit();
			}
			// Get the member's address
			$address = $member->Address1 . " " . $member->Suburb . " " . $member->Region;
			// Run it through GoogleGeocoding's address_to_point function (RestfulService/XML)
			$point = GoogleGeocoding::address_to_point($address);
			// Set the Latitude and Longitude values with the reponse
			$member->Latitude = $point['Latitude'];
			$member->Longitude = $point['Longitude'];
			return;
		}
	}

}
