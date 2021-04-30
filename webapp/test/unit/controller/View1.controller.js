/*global QUnit*/

sap.ui.define([
	"controller/View1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View1 Controller");

	QUnit.test("I should test the View1 controller", function (assert) {
        debugger;
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
