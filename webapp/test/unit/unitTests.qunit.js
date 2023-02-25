/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"lz/zlzp_sap_object/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
