
/* */
if (PublicSacrificeDay()) {
  document.getElementsByTagName("html")[0].setAttribute("style", "filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");
}
function PublicSacrificeDay() {
  var PSFarr = new Array("0404", "0405", "0414", "0512", "0707", "0807", "0814", "0909", "0918", "0930", "1025", "1130", "1213");
  var currentdate = new Date();
  var str = "";
  var mm = currentdate.getMonth() + 1;
  if (currentdate.getMonth() > 9) {
    str += mm;
  } else {
    str += "0" + mm;
  }
  if (currentdate.getDate() > 9) {
    str += currentdate.getDate();
  } else {
    str += "0" + currentdate.getDate();
  }
  if (PSFarr.indexOf(str) > -1) {
    return 1;
  } else {
    return 0;
  }
}
hexo.extend.helper.register('getAnimalIcon', function (year) {
    var index = parseInt(year) % 12;
    var icon = {
        0: 'icon-monkey',
        1: 'icon-rooster',
        2: 'icon-dog',
        3: 'icon-boar',
        4: 'icon-rat',
        5: 'icon-ox',
        6: 'icon-tiger',
        7: 'icon-rabbit',
        8: 'icon-dragon',
        9: 'icon-snake',
        10: 'icon-horse',
        11: 'icon-goat',
    }
    return icon[index]
});