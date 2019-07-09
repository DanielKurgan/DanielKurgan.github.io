// POPUPS
$(document).ready(function() {
    PopUpHideBonus();
    PopUpHideMain();
    PopUpHideComment();
    PopUpHideContacts();
    PopUpHideContent();
});

// POPUPBONUS
function PopUpShowBonus() {
    $(".popup-bonus").show();
    $("body").addClass("scroll-hidden");
}
function PopUpHideBonus() {
    $(".popup-bonus").hide();
    $("body").removeClass("scroll-hidden");
}
function backgroundCloseBonus() {
	document.getElementsByClassName('popup-bonus')[0].style.display = 'none';
}

// POPUPMAIN
function PopUpShowMain() {
    $(".popup-main").show();
    $("body").addClass("scroll-hidden");
}
function PopUpHideMain() {
    $(".popup-main").hide();
    $("body").removeClass("scroll-hidden");
}
function backgroundCloseMain() {
	document.getElementsByClassName('popup-main')[0].style.display = 'none';
}

// POPUPCOMMENT
function PopUpShowComment() {
    $(".popup-comment").show();
    $("body").addClass("scroll-hidden");
}
function PopUpHideComment() {
    $(".popup-comment").hide();
    $("body").removeClass("scroll-hidden");
}
function backgroundCloseComment() {
	document.getElementsByClassName('popup-comment')[0].style.display = 'none';
}

// POPUPCONTACTS
function PopUpShowcontacts() {
    $(".popup-contacts").show();
    $("body").addClass("scroll-hidden");
}
function PopUpHideContacts() {
    $(".popup-contacts").hide();
    $("body").removeClass("scroll-hidden");
}
function backgroundCloseContacts() {
    document.getElementsByClassName('popup-contacts')[0].style.display = 'none';
}

// POPUPCONTACTS
function PopUpShowContacts() {
    $(".popup-contacts").show();
    $("body").addClass("scroll-hidden");
}
function PopUpHideContacts() {
    $(".popup-contacts").hide();
    $("body").removeClass("scroll-hidden");
}
function backgroundCloseContacts() {
    document.getElementsByClassName('popup-contacts')[0].style.display = 'none';
}

// POPUPMAIN
function PopUpShowContent() {
    $(".popup-content").show();
    $("body").addClass("scroll-hidden");
}
function PopUpHideContent() {
    $(".popup-content").hide();
    $("body").removeClass("scroll-hidden");
}
function backgroundCloseContent() {
    document.getElementsByClassName('popup-content')[0].style.display = 'none';
}