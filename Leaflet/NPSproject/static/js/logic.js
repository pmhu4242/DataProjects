
var NPMap = {
  div: 'mapid',
  overlays: [{
    filter: function (feature) {
      return feature.properties.park === 'Yellowstone';
    },
    popup: {
      title: '{{name}}'
    },
    styles: {
      point: {
        'marker-symbol': 'star'
      }
    },
    type: 'geojson',
    url: 'https://www.nps.gov/lib/npmap.js/4.0.0/examples/data/gateway-points-of-interest.geojson'
  }, {
    popup: {
      description: 'The alpha code is {{Code}}',
      title: '{{Name}}'
    },
    styles: {
      point: {
        'marker-color': '#609321',
        'marker-symbol': 'park'
      }
    },
    type: 'geojson',
    url: 'https://www.nps.gov/lib/npmap.js/4.0.0/examples/data/national-parks.geojson'
  }]
};

(function () {
  var s = document.createElement('script');
  s.src = 'https://www.nps.gov/lib/npmap.js/4.0.0/npmap-bootstrap.js';
  document.body.appendChild(s);
})();

