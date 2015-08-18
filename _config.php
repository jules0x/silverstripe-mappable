<?php

define('MODULE_MAPPABLE_DIR', basename(dirname(__FILE__)));
/**
 * Check if the module folder exists.
 */
if (basename(dirname(__FILE__)) != MODULE_MAPPABLE_DIR) {
    throw new Exception(MODULE_MAPPABLE_DIR . ' not configured correctly');
}
