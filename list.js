const url = window.location.href;
const urlParams = window.location.search;
var Parameters = (urlParams.slice(urlParams.indexOf("?")+1, url.length));
var PageCount = Math.ceil($('.com tr').length/5); //전체 글 개수 처리

for(var i=1; i<=PageCount; i++){
     $('.pagination tr td').append("<a href=#>"+i+"</a>&nbsp;&nbsp;"); //전체 글 개수 나누기 5한 값으로 목록 번호 생성			    
}

$('.pagination tr td a:first-child').addClass("active");    //첫번째 자식에 active 클래스 생성
$('.com tr').hide();                          // com/tr에 있는 모든 테이블 숨김 처리
  var start = ($('.active').text()-1)*5;               //출력될 글의 시작점과 끝지점 처리
  var end = $('.active').text()*5;
  for(var i=0; i<end; i++){
    $('.com tr').eq(start+i).show();              //지정된 글 출력
  }

$('.pagination tr td a').click(function(e){
  $('.com tr').hide();                          // com/tr에 있는 모든 테이블 숨김 처리
  $('.pagination tr td a').removeClass('active'); //pagination/tr/td/a에 있는 active 클래스의 클래스 제거
  $(this).addClass('active');                     //클릭한 목록 번호 active 클래스 추가
  var start = ($(this).text()-1)*5;               //출력될 글의 시작점과 끝지점 처리
  var end = $(this).text()*5;
  for(var i=0; i<end; i++){
    $('.com tr').eq(start+i).show();              //지정된 글 출력
  }
});