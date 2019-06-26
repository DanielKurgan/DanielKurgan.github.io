// Accordion
 var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling || nextElementSibling(this);
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  }


  function nextElementSibling(el) {
    do {
      el = el.nextSibling
    } while (el && el.nodeType !== 1);
    return el;
  }

// Close background
$(document).mouseup(function (e) {
    var container = $(".popup");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});

// Map API
    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    
    function init() {
        // Создание карты.    
        var myMap = new ymaps.Map("map", {
            center: [56.24424015, 43.97108515],
            zoom: 15
        });
        myMap.controls 
            .remove('geolocationControl') 
            .remove('trafficControl') 
            .remove('rulerControl') 
            .remove('searchControl');

        var myPlacemark = new ymaps.Placemark([56.24515091, 43.97634337], {
            balloonContentHeader: '<span class="map-title">Кризисные коммунакации</span>',
           balloonContentBody: '+7 (831) 415-41-84',
           balloonContentFooter: 'ООО “Кризисные коммуникации”– юридические услуги',
           hintContent: 'Кризисные коммуникации'
       });
        myMap.geoObjects.add(myPlacemark);

    }

// Mask for number
jQuery(function($){
   $(".phone").mask("+7(999) 99-99-999");
});

// Pop up script
$(document).ready(function() {
    PopUpHide();
});
function PopUpShow() {
    $("#popup").show();
    $("body").addClass("scroll-hidden");
}
function PopUpHide() {
    $("#popup").hide();
    $("body").removeClass("scroll-hidden");
}

// Preloader
$(document).ready(function() {
	$("body").show();
})