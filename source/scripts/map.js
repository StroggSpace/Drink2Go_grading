document.querySelector('.map').classList.remove('map--nojs');

const map = L.map('map').setView([59.9683, 30.3175], 18);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

const markerIcon = L.icon({
  iconUrl: '../images/map_pin.svg',
  iconSize: [38, 50],
  iconAnchor: [20, 40],
});

L.marker([59.9683, 30.3175], { icon: markerIcon }).addTo(map);
