sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("UI5LL.controller.Main", {

		onInit: function() {
			
		},

		onPressFileUploader: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("fileUploader");
			// if (!oRouter) {
			// 	oRouter.navTo("fileUploader");
			// }
			//	this.getOwnerComponent().getRouter().navTo("fileUploader");
		}

	});
});