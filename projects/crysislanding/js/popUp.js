$(document).ready(function() {
    //Скрыть PopUp при загрузке страницы    
    PopUpHide();
});
//Функция отображения PopUp
function PopUpShow() {
    $("#popup").show();
    $("body").addClass("scroll-hidden");
}
//Функция скрытия PopUp
function PopUpHide() {
    $("#popup").hide();
    $("body").removeClass("scroll-hidden");
}