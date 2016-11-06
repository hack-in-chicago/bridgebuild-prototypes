var map = L.map('map', {
	center: [53.0, 95.0],
	zoom: 3
})

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo( map )

jquery.get("currentcountry", function(data){
	map.setView(data.Coords, data.zoom);
});