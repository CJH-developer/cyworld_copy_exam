let isStarted = false;


let auth = () => {

    if(isStarted == false){
        // 타이머 미작동
        isStarted = true 
        document.getElementById("timer__finish").disabled = false
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("target").innerText = token
        document.getElementById("target").style.color = "#" + token

        let time = 30
        let timer


        timer = setInterval(function(){
            if(time>=0){
                let min = Math.floor(time / 60)
                let sec = String(time%60).padStart(2, "0")
                document.getElementById("timer").innerText = (min +":"+sec)
                time = time - 1
            }else{
                document.getElementById("timer__finish").disabled = true
                isStarted = false;
                document.getElementById("button__name").innerText = "인증번호 재전송"
                clearInterval(timer)
            }
        }, 1000)
    
    }else {
        // 타이머 작동
    }

}

const complete_join = () => {
    
    alert("가입이 완료되었습니다.");
}