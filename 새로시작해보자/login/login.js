const $id = document.getElementById('id');
    const $pw = document.getElementById('pw');
    const $btnlogin = document.getElementById('btnlogin');
    const $btnjoin = document.getElementById('btnjoin');

    $btnlogin.addEventListener("click", loginHandler);
    $btnjoin.addEventListener("click", join);

    function join() {
        location.href = "../signup/signup.html";
    }

    function loginHandler() {
        const login = getUser($id.value, $pw.value);
        if (login == null) {
            alert("로그인 실패");
            $id.value = '';
            $pw.value = '';
            $id.focus();
        }
        else if ($id.value == "" || $pw.value == "") {
            alert("빈공간이 있습니다.");
        }
        else {
            alert('로그인 성공');
            location.href = "./main.html";
        }
    }

    function getUser(id, pw) {
        for (let i = 0; i < users.length; i++) {
            if (id == users[i].id && pw == users[i].pw) {
                return users[i];
                alert(users[i]);
            }
        }
        return null;
    }