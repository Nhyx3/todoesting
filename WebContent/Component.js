jQuery.sap.declare("fis.eim.todotesting.Component");

jQuery.sap.require("jquery.sap.storage");

sap.ui.core.UIComponent.extend("fis.eim.todotesting.Component", {

	metadata : {
		name: "Todo testing",
		version: "1.0",
		includes: [],
		dependencies: {
			libs: [
			    "sap.m",
			    "sap.ui.layout"
			],
			components: []
		},

		config: {
			//resourceBundle: "i18n/messageBundle.properties"
			favIcon: "pictures/favicon.ico"
		},

		routing : {
			config : {
				routerClass : fis.eim.todotesting.Router,
				viewType : "XML",
				viewPath : "fis.eim.todotesting.view",
				targetControl : "appView",
				clearTarget : false
			},
			routes : [
				{
					pattern : "",
					name : "app",
					view : "App",
					targetControl : "appView"
				}
			]
		}
	},

	createContent : function () {
		var rootPath = jQuery.sap.getModulePath("fis.eim.todotesting");
		var config = this.getMetadata().getConfig();

		var view = sap.ui.view({
			id : "appView",
			viewName : "fis.eim.todotesting.view.App",
			type : "XML",
			viewData : { component : this }
		});

		var model = new sap.ui.model.json.JSONModel();
		var storage = jQuery.sap.storage(jQuery.sap.storage.Type.local);

		if (storage.get("todos")) {
			model.setData(storage.get("todos"));
		}

		view.setModel(model);
		sap.ui.getCore().setModel(model);

		return view;
	}
});
