const email_empty_ValidChecksum = () => {
    let email_empty = document.getElementById("email").value

    if(email_empty){
        //모든 input이 비어있지 않을 때
        document.getElementById("submit").disabled = false
    } else {
        //모든 input이 비어있을 때
        document.getElementById("submit").disabled = true
    }

}

const name_empty_ValidChecksum = () => {
    let name_empty = document.getElementById("name").value

    if(name_empty){
        //모든 input이 비어있지 않을 때
        document.getElementById("submit").disabled = false
    } else {
        //모든 input이 비어있을 때
        document.getElementById("submit").disabled = true
    }

}

const password_empty_ValidChecksum = () => {
    let password_empty = document.getElementById("password").value

    if(password_empty){
        //모든 input이 비어있지 않을 때
        document.getElementById("submit").disabled = false
    } else {
        //모든 input이 비어있을 때
        document.getElementById("submit").disabled = true
    }

}

const password2_empty_ValidChecksum = () => {
    let password2_empty = document.getElementById("password").value

    if(password2_empty){
        //모든 input이 비어있지 않을 때
        document.getElementById("submit").disabled = false
    } else {
        //모든 input이 비어있을 때
        document.getElementById("submit").disabled = true
    }

}