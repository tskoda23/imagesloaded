test( 'background image', function() {

  'use strict';

  var elem = document.querySelector('#background-image');
  var imgLoader1 = new imagesLoaded( elem, { background: true });
  var progressCount = 0;
  stop();

  imgLoader1.on( 'progress', function( instance, image ) {
    // check image.img is image
    ok( image, 'image argument there' );
    equal( image.img && image.img.nodeName, 'IMG', 'image is <img>' );
    progressCount++;
  });

  imgLoader1.on( 'done', function() {
    ok( true, 'background image done' );
    checkDone();
  });

  // local backgorund image
  elem = document.querySelector('#local-background-image');
  var imgLoader2 = new imagesLoaded( elem, { background: true });

  // imgLoader2.on( 'progress', function( instance, image ) {
  //   // check image.img is image
  //   ok( image, 'image argument there' );
  //   equal( image.img && image.img.nodeName, 'IMG', 'image is <img>' );
  //   progressCount++;
  // });
  //
  // imgLoader2.on( 'done', function() {
  //   ok( true, 'local background image done' );
  //   checkDone();
  // });

  function checkDone() {
    equal( progressCount, 1, 'background-images loaded' );
    if ( progressCount == 1 ) {
      start();
    }
  }

});
