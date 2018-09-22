$(document).ready(function () {
    var data;
    $.ajax({
            dataType: "json",
            url: 'https://gist.githubusercontent.com/meiqimichelle/7727723/raw/0109432d22f28fd1a669a3fd113e41c4193dbb5d/USstates_avg_latLong',
            data: data
        }
    ).done(function (data) {
        console.log(data);
    });
});