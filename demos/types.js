var Viewer={MOBILE: 0, DESKTOP: 1}

var viewer = null;

function viewerTester() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if(isMobile){
    viewer = Viewer.MOBILE;
  } else {
    viewer = Viewer.DESKTOP;
  }
}


