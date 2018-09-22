$(document).ready(function () {
    $.ajax({
            dataType: "json",
            url: 'https://gist.githubusercontent.com/meiqimichelle/7727723/raw/0109432d22f28fd1a669a3fd113e41c4193dbb5d/USstates_avg_latLong'
        }
    ).done(function (data) {
        for (var i = 0; i < data.length; i++) {
            var state = data[i].state;
            $('#result').append('<tr><td>' + state + '</td></tr>')
        }
    });
});