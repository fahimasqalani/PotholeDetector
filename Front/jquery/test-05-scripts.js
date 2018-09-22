$(document).ready(function () {
    console.log('test');
    $('div > p.class1').addClass('blue');
    $('div.middle > p.class2').addClass('red');
    $('div.bottom > p.class3').addClass('yellow');
});