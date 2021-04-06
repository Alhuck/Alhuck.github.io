$(document).ready(function () {
  var urls = ['resources/images/one.png', 'resources/images/two.png', 'resources/images/three.png', 'resources/images/four.png', 'resources/images/five.png'];

  var cout = 1;
  $('body').css('background-image', 'url("' + urls[0] + '")');
  // setInterval(function() {
  //   $('body').css('background-image', 'url("' + urls[cout] + '")');
  //   cout == urls.length-1 ? cout = 0 : cout++;
  // }, 5000);

});