$(document).ready(function () {
    // configure map
    var mymap = L.map('map').setView([36.778259, -95.417931], 4);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoicmFmaXphbi1iYWhhcnVtIiwiYSI6ImNqa2kyc3VudDEwanAzdm1sa2hrbXljaGoifQ.3OBKi3hcYVUCD7jrJ76tYw'
    }).addTo(mymap);


    // add json
    $(document).ready(function () {
        $.ajax({
                dataType: "json",
                url: 'states.json'
            }
        ).done(function (data) {
            for (var i = 0; i < data.length; i++) {
                var state = data[i].state;
                var latitude = data[i].latitude;
                var longitude = data[i].longitude;
                console.log(state);
                console.log(latitude);
                console.log(longitude);

                // create marker
                // and add it to map
                var marker = L.marker([latitude, longitude]);
                marker.addTo(mymap);

                // bind popup to marker
                marker.bindPopup('<p>' + state + '</p>');
            }
        });
    });

});