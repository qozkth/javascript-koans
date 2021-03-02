/*
 * AboutObjects.js는 자바스크립트 Object(객체)에 대해 알아보는 시간입니다.
 * 각종 문서를 참고하여 아래 문제를 하나씩 풀어보세요.
 *
 * MDN: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 * Poiema Web: https://poiemaweb.com/js-object
 *
 */

describe("JavaScript Object(객체) 알아보기", function () {

  describe("1. 객체의 속성(Property 혹은 Key)", function () {
    var ken = {  favoriteFood: "돈까스", age: 10 };

    it("객체의 속성(Property 혹은 Key)으로 접근하기", function () {
      expect(ken.age).toBe(10);
    });

    it("객체의 속성 대소문자 정확히 하기", function () {
      expect(ken.favoriteFood).toBe("돈까스");
      expect(ken.favoritefood).toBe(undefined);
    });
  });

  it("객체 메소드(속성값이 함수인 경우) 알아보기", function () {
    var ken = {
      favoriteFood: "돈까스",
      age: 10,
      eat: function (count) {
        return `${this.favoriteFood} ${count}인분을 먹고 오겠습니다.`;
      }
    };

    var dietMessage = ken.eat(4);
    expect(dietMessage).toMatch("돈까스 4인분을 먹고 오겠습니다.");
  });

  describe("'in' 연산자 알아보기", function () {
    var ken = {
      age: 10,
      favoriteFood: "돈까스"
    };

    it("존재하는 속성 확인하기", function () {
      var hasFavoriteFood = "favoriteFood" in ken;

      expect(hasFavoriteFood).toBe(true);
    });

    it("존재하지 않는 속성 확인하기", function () {
      var hasFavoriteAnimal = "favoriteAnimal" in ken;

      expect(hasFavoriteAnimal).toBe(false);
    });
  });

  it("객체의 속성과 값 추가 및 삭제하기", function () {
    var ken = {
      age: 10,
      favoriteFood: "돈까스"
    };

    expect("favoriteAnimal" in ken).toBe(false);

    ken.favoriteAnimal = "Doggy";
    expect("favoriteAnimal" in ken).toBe(true);

    delete ken.favoriteFood;
    expect("favoriteFood" in ken).toBe(false);
  });
});
