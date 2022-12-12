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
    let sum = 0;
    for (let i = 0; i < users.length; i++) {
        sum += users[i].age;
    }
    sum /= users.length;
    console.log(`평균나이: ${sum}`);
}

function problem2() {
    //TODO: 2. 24살이상인 user를 출력하시오
    let list = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 24) {
            list.push(users[i]);
        }
    }
    console.log(list);
}
function problem3() {
    //TODO: 3. users의 이름[나이/성별]로 출력하시오
    //ex) 민준[24/남], 하윤[23/여]
    let list = [];
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        let gend = user.gender == "male" ? "남" : "여";

        list.push(`${user.name}[${user.age}/${gend}]`);
    }
    console.log(list);
}

function problem4() {
    //TODO: 4. users를 이름(오름차순)으로 정렬하시오

    console.log(
        users.sort((a, b) => {
            a = a.name;
            b = b.name;
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
        })
    );
}
function problem5() {
    //TODO: 5. users를 나이(내림차순)로 정렬하시오
    console.log(
        users.sort((a, b) => {
            a = a.age;
            b = b.age;
            if (a < b) return 1;
            else if (a > b) return -1;
            return 0;
        })
    );
}
function problem6() {
    //TODO: 6. users를 생일(년도오름차순)으로 정렬하시오
    console.log(
        users.sort((a, b) => {
            let aList = a.birth.split("-").map((value) => parseInt(value));
            let bList = b.birth.split("-").map((value) => parseInt(value));

            for (let i = 0; i < 3; i++) {
                a = aList[i];
                b = bList[i];
                if (a < b) return -1;
                else if (a > b) return 1;
            }

            return 0;
        })
    );
}
