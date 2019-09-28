// MAP
ymaps.ready(init);
function init(){  
 var myMap = new ymaps.Map("map", {
     center: [55.758225068983045,37.62521699999994],
     zoom: 17,
     // controls: []
 }, {
     searchControlProvider: 'yandex#search'
 }),
 myPlacemark = new ymaps.Placemark([55.758225068983045,37.62521699999994], {
// Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
balloonContentHeader: "Балун метки",
balloonContentBody: "Содержимое <em>балуна</em> метки",
balloonContentFooter: "Подвал",
hintContent: "Хинт метки"

}, {
// Опции.
// Необходимо указать данный тип макета.
iconLayout: 'default#image',
// Своё изображение иконки метки.
iconImageHref: './img/map-shape.png',
// Размеры метки.
iconImageSize: [60, 82],
// Смещение левого верхнего угла иконки относительно
// её "ножки" (точки привязки).
iconImageOffset: [-5, -38]
});

 myMap.geoObjects.add(myPlacemark);
}

// MAP END
