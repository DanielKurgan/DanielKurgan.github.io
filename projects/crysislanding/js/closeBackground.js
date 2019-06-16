$(document).mouseup(function (e) {
    var container = $(".popup");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});