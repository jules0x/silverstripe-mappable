<?php

class LocatableMember extends DataExtension {

	// Extending SilverStripe MemberProfiles to include lat/lng
	static $db = array(
		"Address1" => "Text",
		"Address2" => "Text",
		"Suburb" => "Varchar",
		"City" => "Varchar",
		"Region" => "Enum('Northland,Auckland,Coromandel,Waikato,Bay Of Plenty,East Cape,Taupo,King Country,Taranaki,Hawkes Bay,Wanganui,Wellington,Wairarapa,Nelson,Marlborough,West Coast,Canterbury,Otago,Southland', 'Auckland')",
		"Longitude" => "Varchar",
		"Latitude" => "Varchar"
	);

}
