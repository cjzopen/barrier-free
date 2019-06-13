// import formatNumber from './format-number';
import * as theFn from './function.js';
// import $ from "jquery";
// import './test.scss';

$('body').removeClass('no-js');

const numElement = document.querySelector('#visit-times');
var j = theFn.addCommaEvery3Digits(numElement.innerHTML);
numElement.innerHTML = j;

// #nav menu
//avoid click and touchend triggered in the same time on touchable desktop pc
var triggerFlag = false;
var triggerThreshold = 200;

$('[data-toggle="slidedown"]').off('click');
$(document).on('click','.slidedown-title',function(e){
  if($(this).attr('href') == '#'){
    e.preventDefault();
  }
  // let _this = $(this);
  // // alert('fired');
  // _this.addClass('slidedown--active');
  // _this.closest('[data-slidedown]').siblings().find('.slidedown-title').removeClass('slidedown--active');
  // $(document).on('blur','[data-slidedown]:last .slidedown-item:last',function(){
  //   _this.removeClass('slidedown--active');
  // });
});
$(document).on('focus click','.slidedown-title',function(e){
  let _this = $(this);
  _this.addClass('slidedown--active');
  _this.closest('[data-slidedown]').siblings().find('.slidedown-title').removeClass('slidedown--active');
  $(document).on('blur','[data-slidedown]:last .slidedown-item:last',function(){
    _this.removeClass('slidedown--active');
  });
});
//click other element to close on touchable desktop pc
$(document).on('click',':not(#nav *)',function(e){
  // fixed: display none <a> cant be triggered in ie ,and click trigger mulit times causing removeClass events to be triggered anyway
  if (e.target !== this)
    return;

  if($('.slidedown--active').length){
    setTimeout(function(){
      $('.slidedown--active').removeClass('slidedown--active');
    },200);
  }
});
if(!theFn.isTouchDevice()){
  $(document).on('mouseenter','[data-slidedown]',function(e){
    let _this = $(this);
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
    $('body,html').toggleClass('overflow-hidden');
  }
});
$(window).on('resize',()=>{
  $('#nav').removeClass('--active');
  $('body,html').removeClass('overflow-hidden');
});


$(document).on('focus','.table tbody tr a',function(){
  $(document).on('blur','.table tbody tr a',function(){
    $(this).closest('tr').removeClass('--active');
  });
  $(this).closest('tr').addClass('--active');
});

$('.detail[data-slide]').hide();
$(document).on('click','.summary',function(e){
  e.preventDefault();
  let _this = $(this);
  var group = _this.attr('data-slide');
  var detail = _this.next();
  if(group){
    detail = $('.detail[data-slide="'+group+'"]');
  }
  detail.slideToggle(200);
});

$(document).on('click','.keyword_list_item',function(e){
  e.preventDefault();
  let _this = $(this);
  let keyword = _this.text();
  $('#main-search').val(keyword).focus();
});

var IEVer = theFn.detectIE();
if(IEVer !== false && IEVer < 12){
  $('body').addClass('is-ie');
  var STICKY = $('.sticky-top');
  STICKY.addClass('position-absolute w-100');
  STICKY.each(function( index ) {
    let $this = $(this);
    // $this.next().css('padding-top',$this.outerHeight());
    $this.parent().before($this.html());
    $this.remove();
    // let offset = 
    // $this.closest('.sticky-parent').scroll(function() {
    //   $this.position().top
    //   if ($(this).scrollTop() > offset) {
    //     $('.back-to-top').fadeIn(400);
    //   } else {
    //     $('.back-to-top').fadeOut(400);
    //   }
    // });
  });
}
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