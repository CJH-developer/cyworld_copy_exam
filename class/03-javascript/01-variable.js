// Const 는 데이터 재할당 불가
// let 은 데이터 재할당 가능

let name
const names = "Tomas"

name="Sungjinwoo"


console.log(name)

console.log(names)



let friend = {
    name:"철수", 
    age:20, 
    camp : "코드캠프"
}
//undefined
friend
//{name: '철수', age:  20, camp: '코드캠프'}
friend.name
//'철수'
friend.age
//20
friend.camp
//'코드캠프'