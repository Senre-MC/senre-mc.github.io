var Viewer={MOBILE: 0, DESKTOP: 1}
function deviceTester() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(isMobile){
    return Viewer.MOBILE;
  } else {
    return Viewer.DESKTOP;
  }
}


