/*
 * 문자열에 대해 한번 살펴볼까요?
 *
 * AboutString.js는 자바스크립트 String(문자열)에 대해 알아보는 시간입니다.
 * 각종 문서를 참고하여 아래 문제를 하나씩 풀어보세요.
 *
 * MDN: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String
 * Poiema Web: https://poiemaweb.com/js-string
 *
 */

describe("JavaScript String(문자열) 알아보기", function () {
  /*
   * TODO: FILL_ME_IN 부분만 수정해야 한다는 것 기억하고 계시죠?
   *
   * expect 안의 값과 toBe 안의 값이 같아야 통과한다는 것도 기억하고 계시죠?
   *
   * typeof(str)와 같으려면 FILL_ME_IN은 무엇이 되어야 할까요?
   * 조금 더 직관적으로 말해, typeof(str)의 결과값은 무엇일까요?
   *
   * typeof에 대해 잘 모르신다면 MDN 사이트에서 검색해보세요 :)
   */
  it("문자열의 type 알아보기", function () {
    var str = "문자열입니당";
    expect(typeof str).toBe("string");
  });

  // TODO: 지금까지 해오신 것처럼 앞으로도 쭈욱 FILL_ME_IN 부분만 수정해보세요 :)
  // 이제 점점 설명을 줄이도록 하겠습니다..
  it("문자열의 length 속성 알아보기", function () {
    var str1 = "안녕하세요";
    expect(str1.length).toBe(5);

    var str2 = "안녕";
    expect(str2.length).toBe(2);

    var str3 = "";
    expect(str3.length).toBe(0);

    var str4 = " ";
    expect(str4.length).toBe(1);

    var str5 = "  ";
    expect(str5.length).toBe(2);
  });

  it("문자열의 인덱스 알아보기", function () {
    var message = "안녕, 내 이름은 돈까스라고 해.";

    expect(message[0]).toBe('안');
    expect(message[message.length - 1]).toBe(".");
  });

  it("문자열 더하기", function () {
    var firstName = "까스";
    var lastName = "돈";

    expect(lastName + firstName).toEqual("돈까스");
  });

  it("템플릿 리터럴 방식으로 문자열 만들기", function () {
    var food = "돈까스";
    var numberOfPeople = 3;

    // [주의] 따옴표가 아니라 Backtick 혹은 Backquote라고 부르는 문자입니다.
    // 키보드(영문)에서 숫자 1 키의 바로 왼쪽에 위치해 있습니다.
    var orderMessage = `${food} ${numberOfPeople}인분 주세요.`;

    expect(orderMessage).toEqual("돈까스 3인분 주세요.");
  });

  it("문자열 자르기", function () {
    var orderMessage = "돈까스 3인분 주세요.";

    expect(orderMessage.substring(0, 3)).toEqual("돈까스");
    expect(orderMessage.substring(8)).toEqual("주세요.");
  });

  it("특정 문자를 기준으로 자르기", function () {
    var orderMessage = "돈까스, 돈까스, 돈까스";

    expect(orderMessage.split(", ")).toEqual(["돈까스", "돈까스", "돈까스"]);
    expect(orderMessage.split("")).toEqual(["돈", "까", "스", ",", " ", "돈", "까", "스", ",", " ", "돈", "까", "스"]);
  });

  it("문자열 내에서 특정 문자 찾기", function () {
    var orderMessage = "돈까스 5인분 주세요.";

    expect(orderMessage.indexOf("돈까스")).toEqual(0);

    orderMessage = "돈까스 3인분 주세요. 앗, 죄송한데 돈까스 1인분 추가요.";

    expect(orderMessage.indexOf("돈까스")).toEqual(0);
    expect(orderMessage.indexOf(3)).toEqual(4);
    expect(orderMessage.lastIndexOf("돈까스")).toEqual(21);
  });

  it("문자열 순회하기", function () {
      var oddSentence = "안반녕갑하습세니요다";

      var greeting1 = "";
      var greeting2 = "";

      for (var i = 0; i < oddSentence.length; i++) {
        if (i % 2 === 0) {
          greeting1 += oddSentence[i];
        } else {
          greeting2 += oddSentence[i];
        }
      }

    expect(greeting1).toEqual("안녕하세요");
    expect(greeting2).toEqual("반갑습니다");
  });
});
