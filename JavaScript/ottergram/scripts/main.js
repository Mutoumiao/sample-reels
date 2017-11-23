var DETATL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
// var IMAGE_RANDOM = '[data-image-random="but"]';

var detailImage = document.querySelector(DETATL_IMAGE_SELECTOR);
var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
// var but = document.querySelector(IMAGE_RANDOM);
var thumbnailArray = [].slice.call(thumbnails);
var HIDDEN_DETAIL_CALSS = "hidden-detail";
var TINY_EFFECT_CLASS = "is-tiny";
var ESC_KEY = 27;

function setDetails (imageUrl , titleText) {
    'use strict';
    detailImage.setAttribute('src', imageUrl);
    detailTitle.innerText = titleText;
}
function imageFromThumb (thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}
function titileFromThumb (thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb (thumbnail) {
    'use strict';
    setDetails( imageFromThumb(thumbnail), titileFromThumb(thumbnail) );
}

function addThumbClickHandler (thumb) {
    'use strict';
    thumb.addEventListener('click',function (evnet) {
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}


function hideDetails () {
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CALSS);
}
function showDetails () {
    'use strict';
    var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
    console.log(frame);
    document.body.classList.remove(HIDDEN_DETAIL_CALSS);
    frame.classList.add(TINY_EFFECT_CLASS);
    setTimeout(function () {
        frame.classList.remove(TINY_EFFECT_CLASS);
    },50);
}

function addKeyPressHandler () {
    'use strict';
    document.addEventListener('keyup',function (event) {
        event.preventDefault();
        console.log(event.keyCode);
        if(event.keyCode === ESC_KEY) {
            hideDetails();
        }
    });
}

function initializeevents () {
    'use strict';
    thumbnailArray.forEach(addThumbClickHandler);
    addKeyPressHandler();
}

// 添加随机显示事件
// function Random () {
//     var num = Math.floor(Math.random() * thumbnailArray.length);
//     var Srcs =  detailImage.src.slice(-5,-4)-1;
//     if(num == Srcs) { 
//         Random();
//     } else {
//         setDetailsFromThumb(thumbnailArray[num]);
//     } 
// }

// but.addEventListener('click',Random);



initializeevents();
