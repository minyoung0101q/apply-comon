window.onload = function() {
  let comeon = document.getElementById("comeon");
  comeon.onclick = function() {
      var link = "apply_comon page2.html";
      location.href=link;
  }
}

//관심 분야 시작//
function handleOnChange(e){
//선택된 데이터 가져오기
const value = e.value;
console.log(value);

if(value == 'Dropdown') { // Dropdown을 선택했을때, 생성 안되도록 바로 함수를 탈출함.
  return false;
}
//데이터 출력
let checkbox = document.getElementsByClassName('interests');

// 생성전, 중복 되었는가를 판단. 
for(var i = 0; i < checkbox.length; i++) {
  if(checkbox[i].textContent == value) { // 중복이라면, 기존에 존재하는 interest 제거.
    //checkbox[i].parentNode.removeChild(checkbox[i]);//
    return false;
  }
}

//3개 이상은 선택 불가
let b = document.getElementsByClassName('content')[0];
let a = b.getElementsByClassName('interests');
if(a.length >= 4){
  alert('3개까지 선택이 가능합니다!');
  return false;
}


// 위의 for문을 정상적으로 끝내고 나면 생성함.
let new_box = document.createElement('div');
new_box.className = 'interests';
new_box.textContent = value;


let minus = document.createElement('div');
minus.innerHTML = '<div class="minus" onclick="orangeBoxDelete(this);"><hr class="line"></div>';
//minus.className = 'minus';
new_box.appendChild(minus);


/*let line = document.createElement('hr');
line.className = 'line';
minus.appendChild(line);*/

let content = document.getElementsByClassName('content')[0];
content.appendChild(new_box);
}

function orangeBoxDelete(umm){
  console.log('작동!');
  let orangebox = umm.parentNode;
  orangebox.parentNode.parentNode.removeChild(orangebox.parentNode);
}


//관심 분야 끝//

//관심 언어 시작//
function handleOnChang(th){
//선택된 데이터 가져오기
const value = th.value;
console.log(value);

if(value == 'Dropdown') { // Dropdown을 선택했을때, 생성 안되도록 바로 함수를 탈출함.
  return false;
}
//데이터 출력
let checkbox = document.getElementsByClassName('interest');

// 생성전, 중복 되었는가를 판단. 
for(var i = 0; i < checkbox.length; i++) {
  if(checkbox[i].textContent == value) { // 중복이라면, 기존에 존재하는 interest 제거.
    //checkbox[i].parentNode.removeChild(checkbox[i]);//
    return false;
  }
}

//3개 이상 선택 불가
let c = document.getElementsByClassName('content')[1];
let j = document.getElementsByClassName('interest');
if(j.length >=4){
  alert('3개까지 선택이 가능합니다!');
  return false;
}

// 위의 for문을 정상적으로 끝내고 나면 생성함.
let new_box = document.createElement('div');
new_box.className = 'interest';
new_box.textContent = value;

let minus = document.createElement('div');
minus.innerHTML = '<div class="minus" onclick="orangeBoxDelete(this);"><hr class="line"></div>';
//minus.className = 'minus';
new_box.appendChild(minus);

/*let line = document.createElement('hr');
line.className = 'line';
minus.appendChild(line);*/

let content = document.getElementsByClassName('content')[1];
content.appendChild(new_box);
}

function orangeBoxDelete(umm){
  console.log('작동!');
  let orangebox = umm.parentNode;
  orangebox.parentNode.parentNode.removeChild(orangebox.parentNode);
}
//관심 언어 끝//