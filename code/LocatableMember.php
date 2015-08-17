<?php

class LocatableMember extends DataExtension {

	// Extending SilverStripe MemberProfiles to include lat/lng
	static $db = array(
			"Longitude" => "Varchar",
			"Latitude" => "Varchar"
	);

}
