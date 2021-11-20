document.addEventListener('DOMContentLoaded', function() {
  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
          center: [55.75851495500353, 37.60106436011877],
          controls: [],
          zoom: 14
        });

    var myPlacemark = new ymaps.Placemark([55.75851495500353, 37.60106436011877], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/icon_map.svg',
          iconImageSize: [20, 20],
          iconImageOffset: [-10, -5]
        });

    myMap.geoObjects.add(myPlacemark);
    myMap.controls.add('zoomControl', {
      size: 'small',
      float: 'none',
      position: {
          bottom: '361px',
          right: '12px'
      },
    });
    myMap.controls.add('geolocationControl', {
      float: 'none',
      position: {
          bottom: '308px',
          right: '12px'
      },
    });
  };
});
