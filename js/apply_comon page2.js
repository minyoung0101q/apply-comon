let body=document.getElementsByTagName("body")[0];

function Timer() {
    setTimeout("locateKap()",10000);
}
function locateKap(){
     location.replace("apply_comon page1.html");
}
    
cnt = 10; // 카운트다운 시간 초단위로 표시
function countdown() {
      if(cnt == 0){
      // 시간이 0일경우
      locateKap();
      }else {
      // 시간이 남았을 경우 카운트다운을 지속한다.
      let choonDiv=document.getElementById('choonDiv');
      choonDiv.innerHTML=cnt+"초후에 메인 페이지로 이동이 됩니다..";
      setTimeout("countdown()",1000);
      cnt--;
      }
}
countdown();