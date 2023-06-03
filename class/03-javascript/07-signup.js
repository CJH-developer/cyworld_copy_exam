const checkValidation = function() {
    
    let email = document.getElementById("email").value
    let password = document.getElementById("pw").value
    let password1 = document.getElementById("re_pw").value

    if(email&& password && password1 ){
        //모든 input이 비어있지 않을 때
        document.getElementById("submit").disabled = false
    } else {
        //모든 input이 비어있을 때
        document.getElementById("submit").disabled = true
    }

}

const changeFocus = () => {

    let phone1 = document.getElementById("p1").value
    if(phone1.length === 3){
        document.getElementById("p2").focus()
    }

}

const changeFocus1 = () => {

    let phone2 = document.getElementById("p2").value
    if(phone2.length === 4){
        document.getElementById("p3").focus()
    }

}