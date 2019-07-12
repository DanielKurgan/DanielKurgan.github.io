    // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){ 
        // Создание карты.    
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [56.74796327, 60.55913738],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 17,
            controls: []
        });
        var shop = new ymaps.Placemark([56.74786657, 60.56294350]);
        myMap.geoObjects.add(shop);
        myMap.behaviors.disable('scrollZoom'); 
        // Удалим с карты «Ползунок масштаба».
if (document.body.clientWidth < 915) {
    var myMap = new ymaps.Map("map", {
        center: [56.74793071, 60.56275541],
    });
}
var myPlacemark = new ymaps.Placemark([56.74786657, 60.56294350], {
    balloonContentHeader: '<b>"ЖК Солнечный"</b>',
    balloonContentBody: '<b>Телефон</b>: +7 (922) 209-77-58<br><b>E-mail</b>: ialazarev@lider-cc.ru',
    hintContent: 'ЖК Солнечный'
});

myMap.geoObjects.add(myPlacemark);

// Балун откроется в точке «привязки» балуна — т. е. над меткой.
    }
