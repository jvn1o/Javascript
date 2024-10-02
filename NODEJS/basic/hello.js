// var fs = require('fs');

// // 동기형 API를 이용한 코드
// var data = fs.readFileSync('data.txt');
// console.log(data.toString("utf-8"));
// // 파일을 읽을때에는 실행을 멈추고 끝날때까지 기다린다.

// // 비동기형 API를 이용한 코드
// fs.readFile("data.txt", function(err,data) {
//     console.log(data.toString("utf-8"));
// });
// console.log("끝?");
// // 실행을 멈추지 않고 읽어들인다.

var newlec = require('newlec-hello');
console.log(newlec.hello());