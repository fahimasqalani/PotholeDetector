$(document).ready(function () {
    // configure map
    var mymap = L.map('map').setView([3.152772, 101.625772], 18);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoicmFmaXphbi1iYWhhcnVtIiwiYSI6ImNqa2kyc3VudDEwanAzdm1sa2hrbXljaGoifQ.3OBKi3hcYVUCD7jrJ76tYw'
    }).addTo(mymap);


    var pointA = new L.LatLng(3.152965, 101.625150);
    var pointB = new L.LatLng(3.151937, 101.625026);
    var pointC = new L.LatLng(3.152644, 101.626554);
    var pointD = new L.LatLng(3.153415, 101.626179);
    var pointE = new L.LatLng(3.152965, 101.625150);
    var pointList = [pointA, pointB, pointC, pointD, pointE];

    var polyline = new L.Polyline(pointList, {
        color: 'red',
        weight: 5,
        opacity: 0.5,
        smoothFactor: 1
    });
    polyline.addTo(mymap);
});
