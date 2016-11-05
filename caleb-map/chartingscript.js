AmCharts.makeChart("mapdiv", {

	type: "map",


	dataProvider: joshuadata,
	areasSettings: {
		autoZoom: false,
		selectedColor: "#CC0000",
		alpha: 1,
		color: "#C3C3C3",
		rollOverColor: "#AA0000",
	  	rollOverOutlineColor: "#FFFFFF",
		selectable: true,
		balloonText: "[[title]]<br />[[customData]]"
	},
	balloonLabelFunction: function (item) {
		if (item.customData != undefined) {
			return '<div>'+item.customData.x1+'<br />Population: '+item.customData.x2+'<br />Total People Groups: '+item.customData.x3+'<br />Unreached People Groups: '+item.customData.x4+'<br />% of Groups Unreached: '+item.customData.x5+'<br /><br />Click for people group listing</div>';
		}
		else {
			return item.title;
		}
	}
});
