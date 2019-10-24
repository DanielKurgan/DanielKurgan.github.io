$(document).ready(function(){

function init() {
    var myMap = new ymaps.Map('map', {
        center: [55.758225068983045,37.62521699999994],
        zoom: 17,
        controls: []
    });
    
    var searchControl = new ymaps.control.SearchControl({
        options: {
            provider: 'yandex#search'
        }
    });
    
    myMap.controls.add(searchControl);
    
     myPlacemark = new ymaps.Placemark([55.758225068983045,37.62521699999994], {
			}, {
			iconLayout: 'default#image',
			iconImageHref: './img/map-shape.png',
			iconImageSize: [60, 82],
			iconImageOffset: [-5, -38]
			});
    
    // Программно выполним поиск определённых кафе в текущей
    // прямоугольной области карты.
    searchControl.search('Омар Хайям Лубянка');

}

ymaps.ready(init);

});