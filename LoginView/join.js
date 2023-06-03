const join_result_check = () => {
    let email_empty = document.getElementById("email").value
    let name = document.getElementById("name").value
    let password = document.getElementById("password").value
    let password2 = document.getElementById("password2").value

    if(email ){
        //모든 input이 비어있지 않을 때
        alert("이메일을 입력하지 않았습니다.")
        document.getElementById("submit").disabled = false
    } else {
        //모든 input이 비어있을 때
        document.getElementById("submit").disabled = true
    }

    if(name ){
        //모든 input이 비어있지 않을 때
        alert("이름을 입력하지 않았습니다.")
        document.getElementById("submit").disabled = false
    } else {
        //모든 input이 비어있을 때
        document.getElementById("submit").disabled = true
    }

    if(password ){
        //모든 input이 비어있지 않을 때
        alert("비밀번호를 입력하지 않았습니다.")
        document.getElementById("submit").disabled = false
    } else {
        //모든 input이 비어있을 때
        document.getElementById("submit").disabled = true
    }

    if(password2 ){
        //모든 input이 비어있지 않을 때
        alert("비밀번호를 입력하지 않았습니다.")
        document.getElementById("submit").disabled = false
    } else {
        //모든 input이 비어있을 때
        document.getElementById("submit").disabled = true
    }

}