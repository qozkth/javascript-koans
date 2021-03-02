/*
 * AboutFunctions.js는 자바스크립트 Function(함수)에 대해 알아보는 시간입니다.
 * 각종 문서를 참고하여 아래 문제를 하나씩 풀어보세요.
 *
 * MDN: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions
 * Poiema Web: https://poiemaweb.com/js-function
 *
 */

describe("JavaScript Function(함수) 알아보기", function() {

  it("함수 선언(생성)하기", function() {
    // 함수 내부에서 return이 어떤 기능을 하는지 아시나요?
    // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/return
    // https://poiemaweb.com/js-  function#5-%EB%B0%98%ED%99%98%EA%B0%92
    function add(a, b) {
      return a + b;
    }

    expect(add(1, 2)).toBe(3);
  });

  it("함수의 매개변수 알아보기", function () {

    function returnFirstArg(firstArg) {
      return firstArg;
    }

    // 'returnFirstArg' 함수를 아래처럼 호출할 경우, 'firstArg'의 값은 무엇일까요?
    expect(returnFirstArg("철수", "영희", "희수")).toBe("철수");

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

    // 두번째 매개변수로 지정된 값이 없을 경우, 'secondArg'의 값은 무엇일까요?
    expect(returnSecondArg("철수")).toBe(undefined);

    // arguments라는 키워드에 대해 알고 계신가요?
    function returnAllArgs() {
      var argsArray = [];
      for (var i = 0; i < arguments.length; i++) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }

    expect(returnAllArgs("철수", "영희", "희수")).toBe("철수,영희,희수");
  });

  // 함수 또한 하나의 값이기 때문에,
  // 객체의 속성으로 지정될 수도 있고, 배열의 요소가 될 수도 있습니다.
  it("객체의 속성으로서의 함수 알아보기", function () {

    var welcomeMessage = function (name) {
      return name + "야, 안녕!";
    };

    var goodbyeMessage = function (name) {
      return name + "야, 잘가!";
    };

    var person = { say: welcomeMessage };
    expect(person.say("철수")).toBe("철수야, 안녕!");

    person.say = goodbyeMessage;
    expect(person.say("영희")).toBe("영희야, 잘가!");

  });

  it("함수 내부의 변수와 함수 외부의 변수에 대해 알아보기", function () {
    var message = "함수 외부";

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      // 72번째 줄에 있는 변수와 이름은 같지만, 함수 내부에서 별도로 "선언"된 (다른) 변수입니다.
      var message = "함수 내부";
      return message;
    }

    expect(getMessage()).toBe("함수 외부");
    expect(overrideMessage()).toBe("함수 내부");

    // 이 부분을 잘 이해하고 넘어가세요 :)
    expect(message).toBe("함수 외부");
  });

  it("함수의 접근 범위 알아보기", function () {
    var message = "상위 지역 변수";

    function functionOne() {
      var message = "하위 지역 변수";

      function functionTwo() {
        return message;
      }

      return functionTwo();
    }

    expect(functionOne()).toBe("하위 지역 변수");
  });
});
