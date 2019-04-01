// This example creates a simple polygon representing the Bermuda Triangle.

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: -16.6806141, lng: -49.2585262}
    });

  // Define the LatLng coordinates for the polygon's path.
    var coords = [
        {lat: -16.6812179, lng: -49.2744739},
        {lat: -16.7102891, lng: -49.2394848},
        {lat: -16.7096267, lng: -49.2727645},
        {lat: -16.6773664, lng: -49.2458722}
    ];

    // Construct the polygon.
    var editablePolygon = new google.maps.Polygon({
        paths: coords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        editable: true
    });

    editablePolygon.setMap(map);

    google.maps.event.addListener(editablePolygon.getPath(), 'set_at', function(index, obj) {
        console.log('Vertex moved on outer path.');
        console.log(obj.lat() + ', ' + obj.lng());
        getPolygonCoords(editablePolygon);
    });
}

function getPolygonCoords(editablePolygon) {
    var len = editablePolygon.getPath().getLength();
    console.log("New coordinates")
    for (var i = 0; i < len; i++) {
        console.log(editablePolygon.getPath().getAt(i).toUrlValue(5));
    }
}