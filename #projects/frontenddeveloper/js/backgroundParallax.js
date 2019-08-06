$('.home').mousemove(function(e) {
    var x = (e.pageX * -1 / 5), y = (e.pageY * -1 / 5);
    $('.background').css('background-position', x + 'px ' + y + 'px');
});