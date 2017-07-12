// See post: http://asmaloney.com/2014/01/code/creating-an-interactive-map-with-leaflet-and-openstreetmap/

var map = L.map( 'map', {
  center: [40.0, 20.0],
  minZoom: 1,
  zoom: 2
})

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c']
}).addTo( map )

var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' )

var myIcon = L.icon({
  iconUrl: myURL + 'images/pin24.png',
  iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
})

// for ( var i=0; i < markers.length; ++i )
// {
//  L.marker( [-15.7942287, -47.882165799999996], {icon: myIcon} )
//   .bindPopup( '<a href="' + markers[i].url + '" target="_blank">' + markers[i].name + '</a>' )
//   .addTo( map );
// }

function getPosition(){
  // Verifica se o browser do usuario tem suporte a geolocation
  if ( navigator.geolocation ){
    navigator.geolocation.getCurrentPosition( 

    // sucesso! 
    function( posicao ){
      alert( posicao.coords.latitude);
      alert(posicao.coords.longitude );
      L.marker( [posicao.coords.latitude, posicao.coords.longitude], {icon: myIcon} )
      .bindPopup( '<a href="' + "https://en.wikipedia.org/wiki/South_Africa" + '" target="_blank">' + "brasil" + '</a>' )
      .addTo( map );
    },

    function ( erro ){
      var erroDescricao = 'Ops, ';
      switch( erro.code ) {
        case erro.PERMISSION_DENIED:
          erroDescricao += 'usuário não autorizou a Geolocation.';
        break;
        case erro.POSITION_UNAVAILABLE:
          erroDescricao += 'localização indisponível.';
        break;
        case erro.TIMEOUT:
          erroDescricao += 'tempo expirado.';
        break;
        case erro.UNKNOWN_ERROR:
         erroDescricao += 'não sei o que foi, mas deu erro!';
        break;
      }
      alert( erroDescricao );
    }
   );
  }
}

$( document ).ready( function(){
  getPosition();
} );