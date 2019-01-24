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

export {addCommaEvery3Digits,isTouchDevice};