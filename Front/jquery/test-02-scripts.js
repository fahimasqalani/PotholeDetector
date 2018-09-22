$(document).ready(function () {
    console.log('animate');
    // animate to 200px within 5seconds
    $("#expander" ).animate({width: "200px", height: "200px"}, 5000);
    $("#expander2").animate({width: "200px", height: "200px"}, 5000);


});
// simplified code
// $("#expander, #expander2" ).animate({width: "200px", height: "200px"}, 5000);
