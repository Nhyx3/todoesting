jQuery.sap.declare("fis.eim.todotesting.Component");

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

		var data = {
			"Todos": []
		};
		var model = new sap.ui.model.json.JSONModel(data);

		view.setModel(model);
		sap.ui.getCore().setModel(model);

		return view;
	}
});
