/*
 * 이번 과제에서는 Jasmine이라는 외부 라이브러리가 사용됩니다.
 *
 * 이번 과제의 목표는 자바스크립트에 대한 학습일뿐, Jasmine에 대한 학습이 아닙니다.
 * 하지만 Jasmine의 주요 기능은 대략적으로 알고 진행해야 무리가 없습니다.
 *
 * AboutExpects.js는 Jasmine의 주요 기능에 대해 소개해드리는 연습 시간이니,
 * 잘 살펴보시기 바랍니다.
 *
 * Jasmine Official Doc -> https://jasmine.github.io/
 *
 */

describe('Jasmine 주요 기능 알아보기', function() {

  it('true 판별하기 1', function() {

    /*
     * [가장 위 설명글을 먼저 읽고, 이 곳에서 시작하세요!]
     *
     * expect 구문을 아래와 같이 toBeTruthy와 함께 사용한다면,
     * expect 내에 있는 값이 true인지 판별할 수 있습니다.
     *
     * expect와 toBeTruthy가 구체적으로 어떻게 동작하는지는 중요하지 않습니다.
     * 여러분이 알아야 할 것은 아래와 같은 상황에서는 expect에게 넘겨진 값이 true이어야만 통과한다는 사실입니다.
     *
     * 아래의 false를 true로 바꿔보세요.
     */
    expect(true).toBeTruthy();
  });

  // [주의] FILL_ME_IN 외에는 그 어떤 것도 수정하지 마세요.
  it('true 판별하기 2', function() {
    // TODO: 아래 FILL_ME_IN을 지우고 올바른 값을 입력해주세요.
    var expectedValue = 2;
    var actualValue = 1 + 1;

    // 위에서 보신 것처럼 expect 안의 값이 true가 되어야 통과할 수 있습니다.
    // expect 안의 값이 true가 되기 위해서, FILL_ME_IN은 무슨 값이 되어야 할까요?
    expect(actualValue === expectedValue).toBeTruthy();
  });

  // [주의] FILL_ME_IN 외에는 그 어떤 것도 수정하지 마세요.
  it('같은 값 비교하기 (toEqual)', function() {
    // TODO: 아래 FILL_ME_IN을 지우고 올바른 값을 입력해주세요.
    var expectedValue = 2;
    var actualValue = 1 + 1;

    // 이번에는 expect 안의 값과 오른쪽 toEqual 안의 값이 같아야 통과가 가능합니다.
    // 그렇다면 FILL_ME_IN은 무슨 값이 되어야 할까요?
    expect(actualValue).toEqual(expectedValue);
  });

  // [주의] FILL_ME_IN 외에는 그 어떤 것도 수정하지 마세요.
  it('같은 값 비교하기 (toBe)', function() {
    var expectedValue = '2';
    var actualValue = (1 + 1).toString();

    // 이번에도 expect 안의 값과 오른쪽 toBe 안의 값이 "!완전히!" 같아야 통과가 가능합니다.
    // 그렇다면 FILL_ME_IN은 무슨 값이 되어야 할까요?
    expect(actualValue).toBe(expectedValue);
  });

  // [주의] FILL_ME_IN 외에는 그 어떤 것도 수정하지 마세요.
  it('should have filled in values', function() {
    // TODO: 아래 FILL_ME_IN을 지우고 올바른 값을 입력해주세요. 이건 쉽게 통과시킬 수 있으시겠죠? :)
    expect(1 + 1).toEqual(2);
  });
});
