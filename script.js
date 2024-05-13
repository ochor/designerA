/* 1. 웹 문서에 있는 이미지 갤러리 중 하나의 이미지를 클릭하면,
    모달 창을 생성하도록 하는 구문*/
    new LuminousGallery(document.querySelectorAll('.gallery-img'), {}, {
        caption: function(trigger) {
        return trigger.querySelector('img').getAttribute('alt');
        }
    });

    /*question = 질문 /질의문*/


/*2. 마우스 휠로 드래그 하였을 때
     스크롤이 반응함에 따라 부드럽게 요소가 나타날 수 있도록 하는 구문 */
    AOS.init({
        duration: 1000
    });