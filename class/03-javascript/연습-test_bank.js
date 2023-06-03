let array_test = ["a", "b", "c"]
//undefined
array_test
//(3) ['a', 'b', 'c']
array_test[1]
//'b'
array_test.length
//3
array_test.includes("a")
//true
array_test.push("d")
//4
array_test
//(4) ['a', 'b', 'c', 'd']
array_test.pop()
//'d'
array_test
//(3) ['a', 'b', 'c']


// 배열 합치기
let array_test_1 = ["1","2","3"]
let array_test_2 = ["4","5"]
let result = array_test_1.concat(array_test_2)


const email = "codecamp@gmail.com"
//undefined
email.includes("@")
//true
email.split("@")
//(2) ['codecamp', 'gmail.com']
email.split("@")[0]
//'codecamp'
email.split("@")[1]
//'gmail.com'
let userId = email.split("@")[0]
//undefined
userId
//'codecamp'
let useremail = email.split("@")[1]
//undefined
useremail
//'gmail.com'
let maskingmail = []
//undefined
maskingmail.push(userId[0])
//1
maskingmail.push(userId[1])
//2
maskingmail.push(userId[2])
//3
maskingmail.push(userId[3])
//4
maskingmail
//(4) ['c', 'o', 'd', 'e']
maskingmail.push("*")
//5
maskingmail.push("*")
//6
maskingmail.push("*")
//7
maskingmail.push("*")
//8
maskingmail
//(8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
maskingmail.join("-")
//'c-o-d-e-*-*-*-*'
maskingmail.join("")
//'code****'
maskingmail.join("")+"@"+useremail
//'code****@gmail.com'
let result1 = maskingmail.join("")+"@"+useremail
//undefined
result1
//'code****@gmail.com'

// 타이머

let time = 10
setInterval(function(){

    if(time >= 0){
    console.log(time)
    time = time - 1
    }
}, 1000)


//3분 제한시간
setInterval(function(){
    if(time>=0){
        let min = Math.floor(time / 60)
        let sec = String(time%60).padStart(2, "0")
        console.log(min +":"+sec)
        time = time - 1
    }
}, 1000)