// const fullname = (lastname, firstname) => lastname + ',' + firstname;

// var viewWidth = ()=>{
//   return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
// }

const addCommaEvery3Digits = (num, separator) => {
  let parts;
  if (!isNaN(parseFloat(num)) && isFinite(num)) {
    num = Number(num);
    parts = num.toString().split('.');
    parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + (separator || ','));
    return parts.join('.');
  }
  return NaN;
}

const isTouchDevice = () => {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
};

const detectIE = () => {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  // var edge = ua.indexOf('Edge/');
  // if (edge > 0) {
  //   // Edge (IE 12+) => return version number
  //   return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  // }

  // other browser
  return false;
}

export {addCommaEvery3Digits,isTouchDevice,detectIE};