function examOne(first, second) {
  // 매개변수가 문자일 경우 아래 문자열이 나타나도록 작성하기
  // 문자열 데이터를 입력하셨습니다.
  // 덧셈로직
  if (typeof first === "string" || typeof second === "string") {
    return "문자열을 입력하셨습니다.";
  } else {
    return first + second;
  }
}

function examTwo(first, second, third) {
  //숫자여야만 실행되도록 타입을 확인하는 로직 작성
  // 곱셈로직

  if (
    typeof first === "number" &&
    typeof second === "number" &&
    typeof third === "number"
  ) {
    return first * second * third;
  }
}

function examThree(str) {
  // 문자열만 실행되도록 타입을 확인하는 로직 작성
  // length 프로퍼티를 사용하지 않고 길이 구하기
  // 문자열구하기
  if (typeof str === "string") {
    let strsplit = str.split("");
    // 문자열을 배열로 변환
    // console.log(strsplit)
    // 배열로 변한 여부 확인

    let count = 0;
    // 길이를 측정할 변수 선언.
    
    while(strsplit.shift()!==undefined){
      // shift() 함수 및 while 문을 이용해 undefined 가 나올때까지 반복문 실행
      count ++;
      // 길이 측정.
    }
  return count
  }
}

function examFour(array) {
  // array 만을 인자로 받아서 실행할 수 있도록 작성
  // 최소값판별
  if (Array.isArray(array) === true) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
      }
    }
    return min;
  }
}

function examFive(array) {
  //array만을 인자로 받아 실행할 수 있도록 작성
  //배열값 누계(총합)하기
  if (Array.isArray(array) === true) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  }
}

console.log(examOne(2, 3));
console.log(examTwo(2, 3, 4));
console.log(examThree("Hello"));
console.log(examFour([3, 1, 4, 2]));
console.log(examFive([1, 2, 3]));
