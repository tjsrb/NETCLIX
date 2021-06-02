const $id = document.getElementById('id');
const $pw = document.getElementById('pw');
const $CheckPW = document.getElementById('CheckPW');
const $btnSignup = document.getElementById('btnSignup');
const $msg = document.getElementById('msg');
const $msgSuccess = document.getElementById('msgSuccess');
const $msgFail = document.getElementById('msgFail');
const $pwFail = document.getElementById('pwFail');
const $pwSuccess = document.getElementById('pwSuccess');
const $null = document.getElementById('null');
let j = 0;

$btnSignup.addEventListener("click", joinHandler);
$btnSignup.disabled = 'disabled';
$id.addEventListener("blur", NullCheck);
$pw.addEventListener("blur", NullCheck);
$id.addEventListener("blur", msg);
$CheckPW.addEventListener("blur", NullCheck);
$CheckPW.addEventListener("blur", pwCheck);
$pw.addEventListener("blur", pwCheck);
// 회원가입시 데이터 넘겨주는 함수
function joinHandler() {
    users.push({id : id.value, pw : pw.value});
    localStorage.setItem("user",JSON.stringify(users));

    console.log(users);
    location.href = "./login.html";
}

//비밀번호 일치 함수
function pwCheck() {
    if ($pw.value == '') {
        $pwSuccess.classList.remove('msgSuccess');
        $pwSuccess.classList.add('hidden');
        $pwFail.classList.remove('msgFail');
        $pwFail.classList.add('hidden');
        return;
    }
    //비밀번호 일치

    if ($pw.value == $CheckPW.value) {
        $pwFail.classList.remove('msgFail');
        $pwSuccess.classList.remove('hidden');
        $pwFail.classList.add('hidden');
        $pwSuccess.classList.add('msgSuccess');
        j++;
        btnon();
    }
    else { //비밀번호 불일치 
        $pwFail.classList.remove('hidden');
        $pwFail.classList.add('msgFail');
        $pwSuccess.classList.add('hidden');
        $pwSuccess.classList.remove('msgSuccess');
    }
}
// 빈공간 체크 함수
function NullCheck($id, $pw, $CheckPW) {
    if (id.value == '' || pw.value == '' || CheckPW.value == '') {
        $null.classList.remove('hidden');
    }
    else {
        $null.classList.add('hidden');
        return true;
    }
}
// 메세지 출력 함수
function msg() {
    //사용 불가능 아이디
    if ($id.value === '') {
        $msgSuccess.classList.remove('msgSuccess');
        $msgSuccess.classList.add('hidden');
        return;
    }
    const join = getUser($id.value);
    if (join != null && $id.value != "") {
        $msgFail.classList.remove('hidden');
        $msgFail.classList.add('show');
        $msgSuccess.classList.add('hidden');
    }
    //사용 가능 아이디
    else if (join == null && $id.value != "") {
        $msgSuccess.classList.remove('hidden');
        $msgSuccess.classList.add('msgSuccess');
        $msgFail.classList.add('hidden');
        if ($id.value == "") {
            $msgSuccess.classList.remove('hidden');
            $msgFail.classList.remove('hidden');

        }
        j++;
        btnon();
    }

}
//            if(event.target.parentNode.classList.contains("is-selected")){

// 아이디 중복 여부 함수
function getUser(id) {
    for (let i = 0; i < users.length; i++) {
        if (id == users[i].id) {
            return users[i];
        }
    }
    return null;
}
// 버튼 활성화
function btnon() {
    if (j % 2 == 0) {
        $btnSignup.disabled = false;
    }
    return false;
}