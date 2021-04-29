/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapbtp./innovatorchallenge2021trainer/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
