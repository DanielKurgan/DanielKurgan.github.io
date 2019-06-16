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