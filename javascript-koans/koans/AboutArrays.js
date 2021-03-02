/*
 * 배열에 대해 한번 살펴볼까요?
 *
 * AboutArrays.js는 자바스크립트 Array(배열)에 대해 알아보는 시간입니다.
 * 각종 문서를 참고하여 아래 문제를 하나씩 풀어보세요.
 *
 * MDN: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array
 * Poiema Web: https://poiemaweb.com/js-array
 *
 */

describe("JavaScript Array(배열) 알아보기", function() {

  // TODO: FILL_ME_IN 부분만 수정해야 한다는 것 기억하고 계시죠?
  // expect 안의 값과 toBe 안의 값이 같아야 통과한다는 것도 기억하고 계시죠?
  // typeof(emptyArray)와 같으려면 FILL_ME_IN은 무엇이 되어야 할까요?
  // 조금 더 직관적으로 말해, typeof(emptyArray)의 결과값은 무엇일까요?
  // typeof에 대해 잘 모르신다면 MDN 사이트에서 검색해보세요 :)
  it("배열의 type 알아보기", function () {
    var emptyArray = [];
    expect(typeof(emptyArray)).toBe("object");
  });

  // TODO: 지금까지 해오신 것처럼 앞으로도 쭈욱 FILL_ME_IN 부분만 수정해보세요 :)
  // 이제 점점 설명을 줄이도록 하겠습니다..
  it("배열의 length 속성 알아보기", function () {
    var emptyArray = [];
    expect(emptyArray.length).toBe(0);
  });

  it("여러가지 값을 담고 있는 배열 살펴보기", function() {
    // 이 배열을 유심히 보세요.
    var multiTypeArray = [
      0,
      1,
      "two",
      function () { return 3; },
      { value1: 4, value2: 5 },
      [6, 7]
    ];

    expect(multiTypeArray[0]).toBe(0);
    expect(multiTypeArray[2]).toBe("two");
    expect(multiTypeArray[3]()).toBe(3);
    expect(multiTypeArray[4].value1).toBe(4);
    expect(multiTypeArray[4]["value2"]).toBe(5);
    expect(multiTypeArray[5][0]).toBe(6);
  });

  it("간단한 배열 맛보기", function () {
    var array = [];
    expect(array).toEqual([]);

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
    expect(array).toEqual([1, 2]);

    array.push(3);
    expect(array).toEqual([1, 2, 3]);
  });

  it("length 속성에 대해 알아보기", function () {
    var fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toBe(4);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toBe(6);

    var tenEmptyElementArray = new Array(10);
    expect(tenEmptyElementArray.length).toBe(10);

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toBe(5);
  });

  it("slice를 이용한 배열 자르기", function () {
    // 저는 배가 고프면 이런 배열을 만들어요.
    var array = ["돈까스", "돼지갈비", "훈제오리고기", "항정살"];

    expect(array.slice(0, 1)).toEqual(["돈까스"]);
    expect(array.slice(0, 2)).toEqual(["돈까스", "돼지갈비"]);
    expect(array.slice(2, 2)).toEqual([]);
    expect(array.slice(2, 20)).toEqual(["훈제오리고기", "항정살"]);
    expect(array.slice(3, 0)).toEqual([]);
    expect(array.slice(3, 100)).toEqual(["항정살"]);
    expect(array.slice(5, 1)).toEqual([]);
  });

  it("push와 pop을 이용한 요소 추가 및 삭제", function () {
    var array = [1, 2];
    array.push(3);

    expect(array).toEqual([1, 2, 3]);

    var poppedValue = array.pop();
    expect(poppedValue).toBe(3);
    expect(array).toEqual([1, 2]);
  });

  it("shift와 unshift를 이용한 요소의 추가 및 삭제", function () {
    var array = [1, 2];

    array.unshift(3);
    expect(array).toEqual([3, 1, 2]);

    var shiftedValue = array.shift();
    expect(shiftedValue).toEqual(3);
    expect(array).toEqual([1,2]);
  });
});
