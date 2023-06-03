const changeFocus = () => {

    let phone_input = document.getElementById("first_number").value
    if(phone_input.length === 3){
        document.getElementById("second_number").focus()
    }

}

const changeFocus1 = () => {

    let phone_input1 = document.getElementById("second_number").value
    if(phone_input1.length === 4){
        document.getElementById("third_number").focus()
    }

}