test( 'multiple background images', function() {

  'use strict';

  var elem = document.querySelector('#multiple-background-images');
  var imgLoader = new imagesLoaded( elem, { background: true });
  var progressCount = 0;
  stop();

  imgLoader.on( 'progress', function(instance, image) {
    progressCount++;
  });

  imgLoader.on( 'done', function() {
    equal( progressCount, 2, 'multiple background-images loaded' );
    start();
  });

});
