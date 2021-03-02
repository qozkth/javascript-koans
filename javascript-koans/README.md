# Javascript Koans

기본적인 자바스크립트 문법 및 개념을 빠르게 학습할 수 있는 미션 프로젝트입니다.

> 🚨과제를 시작하는 방법과 제출하는 방법은 노션의 프렙 가이드 페이지에서 찾을 수 있습니다.

## Running the Koans (실행방법)

> 이번 과제에서는 단계적 학습 목적에 의해, `var` 키워드 만을 사용하고 있습니다.

1. 노션의 프렙 가이드 페이지의 과제를 시작하는 방법에 따라 과제를 다운로드 받으세요.
2. 브라우저(크롬 권장)에서 `KoansRunner.html` 파일을 열어보세요. (`Ctrl + O` 혹은 `Cmd + O`)
3. 화면을 보시면, 첫 번째 에러는 "Jasmine 주요 기능 알아보기"에서 발생했음을 알 수 있습니다.
4. 화면 아래쪽 빨간 박스를 보시면 현재 오류가 발생하는 파일명과 Line Number가 표기됩니다.
5. Visual Studio Code (혹은 유사 프로그램)에서 과제 프로젝트를 열어보세요.
6. 4번 단계에서 표기된 파일을 열어 오류가 발생한 Line Number를 살펴보세요.
7. 오류의 원인을 분석하고, 올바른 정답으로 수정하세요.
8. 수정하셨다면, 다시 브라우저로 돌아가 새로고침하여 결과를 확인하세요.
9. 노랗고 빨간 에러 화면이 없어질때까지 위 과정을 반복하세요.

---

[영문 원본]

# Javascript Koans

Based on Edgecase's fantastic
[Ruby koans](http://github.com/edgecase/ruby_koans), the goal of the
Javascript koans is to teach you Javascript programming through
testing.

When you first run the koans, you'll be presented with a runtime error and a
stack trace indicating where the error occurred. Your goal is to make the
error go away. As you fix each error, you should learn something about the
Javascript language and functional programming in general.

Your journey towards Javascript enlightenment starts in the koans/AboutExpects.js file. These
koans will be very simple, so don't overthink them! As you progress through
more koans, more and more Javascript syntax will be introduced which will allow
you to solve more complicated problems and use more advanced techniques.

## Running the Koans

Simply navigate to the Javascript Koans folder using a file browser, and
double click on KoansRunnner.html.

Any browser will do, but for the best results Firefox or Chrome is
recommended. More stack trace information shows up for javascript on these
browsers.

The first error will be in koans/AboutExpects.js. Fix the first test and
refresh the browser. Rinse and repeat until all tests turn green.

The test runner used is [Jasmine](http://jasmine.github.io/) with a customized report viewer.

## Etc

### Changelog

- v3 - Nov 2010 - Moved out of branch of functional-koans project, into own top level project
- v2 - Sept 2010 - Second version based on jasmine (Thanks Greg Malcolm!)
- v1 - July 2010 - First version based on jsTestDriver

### Acknowledgements

- Dick Wall (the Java posse) - for bringing the idea of koans to my attention
- Edgecase - for the great Ruby Koans
- Douglas Crockford - for Javascript; the good bits

### [MIT Licensed](LICENSE)
