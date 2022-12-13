const users = require("./data.json");
console.log(`====문제1====`);
problem1();
console.log(`====문제2====`);
problem2();
console.log(`====문제3====`);
problem3();
console.log(`====문제4====`);
problem4();
console.log(`====문제5====`);
problem5();
console.log(`====문제6====`);
problem6();

function problem1() {
    //TODO: 1. users의 평균나이를 구하시오
    console.log(
        `평균나이: ${
            users.reduce((prev, cur) => prev + cur.age, 0) / users.length
        }`
    );
}

function problem2() {
    //TODO: 2. 24살이상인 user를 출력하시오
    console.log(users.filter(({ age }) => age >= 24));
}
function problem3() {
    //TODO: 3. users의 이름[나이/성별]로 출력하시오
    //ex) 민준[24/남], 하윤[23/여]
    console.log(
        users.map(
            (user) =>
                `${user.name}[${user.age}/${
                    user.gender == "male" ? "남" : "여"
                }]`
        )
    );
}

function problem4() {
    //TODO: 4. users를 이름(오름차순)으로 정렬하시오
    console.log(users.sort((a, b) => (a.name > b.name ? 1 : -1)));
}
function problem5() {
    //TODO: 5. users를 나이(내림차순)로 정렬하시오
    console.log(users.sort((a, b) => (a.age > b.age ? -1 : 1)));
}
function problem6() {
    //TODO: 6. users를 생일(년도오름차순)으로 정렬하시오
    console.log(
        users.sort(
            (a, b) => new Date(a.birth).getTime() - new Date(b.birth).getTime()
        )
    );
}
