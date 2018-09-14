sap.ui.define([
		"sap/ui/core/mvc/Controller"
	], function (Controller) {
		"use strict";

		return Controller.extend("UI5LL.controller.BaseController", {
		
			getRouter : function () {
				return sap.ui.core.UIComponent.getRouterFor(this);
			},

			getModel : function (sName) {
				return this.getView().getModel(sName);
			},

			getResourceBundle : function () {
				return this.getOwnerComponent().getModel("i18n").getResourceBundle();
			}

		});

	}
);