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
		if(!$this->owner->Latitude || $this->owner->isChanged('Address1')){
			if ($this->owner->Address1) {
				 // Get the member's address
				 $address = $this->owner->Address1 . " " . $this->owner->Suburb . " " . $this->owner->Region;
				 // Run it through GoogleGeocoding's address_to_point function (RestfulService/XML)
				 $point = GoogleGeocoding::address_to_point($address);
				 // Set the Latitude and Longitude values with the reponse
				 $this->owner->Latitude = $point['Latitude'];
				 $this->owner->Longitude  = $point['Longitude'];
			}
			parent::onBeforeWrite();
		}
	}
}
