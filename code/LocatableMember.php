<?php

class LocatableMember extends Member {
	

					static $db = array(
						"Address" => "Text",
						"Suburb" => "Varchar",
						"City" => "Varchar",
						"Region" => "Enum('Northland,Auckland,Coromandel,Waikato,Bay Of Plenty,East Cape,Taupo,King Country,Taranaki,Hawkes Bay,Wanganui,Wellington,Wairarapa,Nelson,Marlborough,West Coast,Canterbury,Otago,Southland', 'Auckland')",
						"Phone" => "Varchar",
						"MemberType" => "Enum('FM,PGV,PV,PLM', 'FM')",
						"URL" => "Varchar",
						"Mobile" => "Varchar",
						"Fax" => "Varchar",
						"Postcode" => "Int",
						"Longitude" => "Varchar",
						"Latitude" => "Varchar"
				);
	
	
}