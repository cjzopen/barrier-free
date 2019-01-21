// import fullname from './fullname';
// import formatNumber from './format-number';
import * as theFn from './function.js'
// import './test.scss';

const person = theFn.fullname('Json', 'Wang');
//console.log(person);
var x = document.createElement('div');
x.innerHTML = person;
x.className = "nameTag";
document.body.appendChild(x);

// console.log(theFn.formatNumber(867890231));

// var x = document.createElement('span');
// const k = theFn.formatNumber(867890231);
// x.innerHTML = k;
// document.body.appendChild(x);

var viewWidth = ()=>{
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}
// $(window).on('resize',()=>{
//   console.log(viewWidth())
// })

// number add ',' in #num element
const numElement = document.querySelector('#num');
var j = theFn.formatNumber(numElement.innerHTML);
numElement.innerHTML = j;

// #nav menu
var triggerFlag = false;
//avoid click and touchend triggered in the same time on touchable desktop pc
var triggerThreshold = 200;
$('[data-toggle="slidedown"]').off('click');
$(document).on('click','.slidedown-title',function(e){
  if($(this).attr('href') == '#'){
    e.preventDefault();
  }
});
$(document).on('focus','.slidedown-title',function(e){
  var _this = $(this);
  _this.addClass('slidedown--active');
  _this.closest('[data-slidedown]').siblings().find('.slidedown-title').removeClass('slidedown--active');
  $(document).on('blur','[data-slidedown]:last .slidedown-item:last',function(){
    _this.removeClass('slidedown--active');
  });
});
//click other element to close on touchable desktop pc
$(document).on('click',':not(#nav a)',function(){
  $('.slidedown--active').removeClass('slidedown--active');
});
if(!theFn.isTouchDevice()){
  $(document).on('mouseenter','[data-slidedown]',function(e){
    var _this = $(this);
    // _this.find('.slidedown-title').addClass('slidedown--active');
    // _this.siblings().find('.slidedown-title').removeClass('slidedown--active');
    _this.find('.slidedown-title').trigger('focus');
    _this.on('mouseleave',function(e){
      // i dont know why mouseenter trigger focus cant add class slidedown--active
       _this.find('.slidedown-title').trigger('blur');
       _this.find('.slidedown--active').removeClass('slidedown--active');
    });
  });
}

$(document).on('click touchend','.nav-toggle-button',function(e){
  e.preventDefault();
  if (!triggerFlag) {
    triggerFlag = true;
    setTimeout(()=>{ triggerFlag = false; }, triggerThreshold);
    $('#nav').toggleClass('--active');
  }
});

// function tablePagination(element){
//   var theTable = $(element);
//   var row = theTable.find('tbody tr');
//   var rowLength = row.length;
//   if(rowLength>10){
//     theTable.after('<ul class="justify-content-center pagination '+element.replace(/[\s\W]/g, '')+'-pagination"></ul>');
//     //直接選會選不到
//     var pagination = theTable.next();
//     appendPaginationButton(pagination,rowLength);
//   }
// }
// function appendPaginationButton(element,index){
//   element.append('<li class="page-item"><a class="page-link" href="#" aria-label="上一頁" data-page="prev"><span aria-hidden="true">&laquo;</span></a></li>');
//   for(var i=1;i<=Math.ceil(index/10);i++){
//     element.append('<li class="page-item"><a class="page-link" href="#" data-page="'+i+'">'+i+'</a></li>');
//   }
//   element.append('<li class="page-item"><a class="page-link" href="#" aria-label="下一頁" data-page="next"><span aria-hidden="true">&raquo;</span></a></li>');
// }
// tablePagination('#mytable');