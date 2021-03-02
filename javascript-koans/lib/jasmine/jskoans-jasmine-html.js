JsKoansReporter = function(doc) {
  this.document = doc || document;
  this.suiteDivs = {};
  this.failedSpecs = 0;

  this.noOfSubjects = 0;
  this.failedSubjects = 0;
};

JsKoansReporter.prototype.createDom = function(type, attrs, childrenVarArgs) {
  var el = document.createElement(type);

  for (var i = 2; i < arguments.length; i++) {
    var child = arguments[i];

    if (typeof child === 'string') {
      el.appendChild(document.createTextNode(child));
    } else {
      if (child) { el.appendChild(child); }
    }
  }

  for (var attr in attrs) {
    if (attr == "className") {
      el[attr] = attrs[attr];
    } else {
      el.setAttribute(attr, attrs[attr]);
    }
  }

  return el;
};

JsKoansReporter.prototype.reportRunnerStarting = function(runner) {
  this.outerDiv = this.createDom('div', { className: 'jasmine_reporter show-passed' },
      this.createDom('h1', { }, "Javascript Koans"),
      this.runnerDiv = this.createDom('div', { className: 'runner running' },
        this.runnerMessageSpan = this.createDom('span', { classname: 'running' }, "분석중..."),
        this.finishedAtSpan = this.createDom('span', { className: 'finished-at' }, ""))
      );

  this.document.body.appendChild(this.outerDiv);

  var suites = runner.suites();
  for (var i = 0; i < suites.length; i++) {
    var suite = suites[i];
    var suiteDiv = this.createDom('div', { className: 'suite' },
        this.createDom('a', { className: 'description', href: '?spec=' + encodeURIComponent(suite.getFullName()) }, 
          this.getSuiteDescription(suite)));
    this.suiteDivs[suite.id] = suiteDiv;
    var parentDiv = this.outerDiv;
    if (suite.parentSuite) {
      parentDiv = this.suiteDivs[suite.parentSuite.id];
    }
    parentDiv.appendChild(suiteDiv);
  }

  this.footerDiv = this.createDom('div', { className: 'banner' },
      this.createDom('div', { className: 'logo' },
        "Test runner: Jasmine",
        this.createDom('span', { className: 'version' }, runner.env.versionString()))
      );

  this.outerDiv.appendChild(this.footerDiv);

  this.startedAt = new Date();
};

JsKoansReporter.prototype.reportRunnerResults = function(runner) {
  var results = runner.results();
  var className = "progress";
  this.runnerDiv.setAttribute("class", className);
  //do it twice for IE
  this.runnerDiv.setAttribute("className", className);
  var specs = runner.specs();
  var specCount = 0;
  for (var i = 0; i < specs.length; i++) {
    if (this.specFilter(specs[i])) {
      specCount++;
    }
  }

  var enlightenmentMessage;

  var messages = [
    "아직 풀어야 할 문제가 남았습니다.. 잠이 오나요? 🤔",
    "두려워하지 마세요.. 할 수 있다구요 🤗",
    "차근차근 하나하나 살펴보면 결국 성취할 수 있습니다.. 🤹🏻‍♂️",
    "옛날에 그런 노래 아시나요? 성진우의 '포기하지마'.. 😤",
    "쉽다고 방심하지 말고, 어렵다고 내려놓지 마세요!! 👨🏻‍🏫"
  ];

  if (this.failedSpecs === 0) {
    status = 'passed';
    enlightenmentMessage = "학습이 끝났습니다! (개발자 도구를 열어 콘솔에 에러 메시지가 없는지 꼭 확인하세요.)";
  } else {
    status = 'failed';
    var message = messages[Math.floor(Math.random() * messages.length)];
    enlightenmentMessage = message;
  }

  var suitesCount = runner.suites().length;
  var specsCount = runner.specs().length;
  var showPassed;
  var showAllFailed;

  var progress = this.createDom('div', {},
      this.createDom('div', { className: 'enlightenment-' + status }, enlightenmentMessage),
      this.createDom('div', { className: 'completion' },
        this.createDom('div', {},
          this.createDom('span', { className: 'key' }, "학습 주제: "),
          this.createDom('span', { className: 'value' }, this.noOfSubjects - this.failedSubjects + "/" + this.noOfSubjects)
          ),
        this.createDom('div', {},
          this.createDom('span', { className: 'key' }, "문제 풀이: "),
          this.createDom('span', { className: 'value' }, specsCount - this.failedSpecs + "/" + runner.specs().length)
          ),
        this.createDom('div', { className: 'options' },
          this.createDom('label', { "for": "__jsKoans_showPassed__" }, " 통과한 문제 보기"),
          showPassed = this.createDom('input', { id: "__jsKoans_showPassed__", type: 'checkbox', checked: '' }),
          this.createDom('label', { "for": "__jsKoans_showAllFailed__" }, " 미리 보기"),
          showAllFailed = this.createDom('input', { id: "__jsKoans_showAllFailed__", type: 'checkbox' })
          )
        )      
      );
  this.runnerMessageSpan.replaceChild(this.createDom('div', { className: 'description', href: '?'}, progress), this.runnerMessageSpan.firstChild);
  
  var self = this;
  showPassed.onchange = function(evt) {
    if (evt.target.checked) {
      self.outerDiv.className += ' show-passed';
    } else {
      self.outerDiv.className = self.outerDiv.className.replace(/ show-passed/, '');
    }
  };
  showAllFailed.onchange = function(evt) {
    if (evt.target.checked) {
      self.outerDiv.className += ' show-skipped';
    } else {
      self.outerDiv.className = self.outerDiv.className.replace(/ show-skipped/, '');
    }
  };
};

JsKoansReporter.prototype.reportSuiteResults = function(suite) {
  var results = suite.results();
  var status = results.passed() ? 'passed' : 'failed';
  if (results.totalCount == 0 || this.failedSubjects > 0) {
    status += '-skipped';  
  }

  if (suite.parentSuite == null) {
    this.noOfSubjects +=1;
    if (this.failedSpecs > 0) {
      this.failedSubjects += 1;
    }
  }

  this.suiteDivs[suite.id].className += " " + status;
};

JsKoansReporter.prototype.reportSpecStarting = function(spec) {
};

JsKoansReporter.prototype.reportSpecResults = function(spec) {
  var results = spec.results();
  var status = results.passed() ? 'passed' : 'failed';
  var skipStatus = status;
  
  if (results.skipped || this.failedSpecs > 0) {
    skipStatus += '-skipped';
  }

  var description;
  if ( !results.passed() ) {
    this.failedSpecs += 1;

    description = "다시 시도하세요. 👉🏻 '" + spec.description + "'"
  } else {
    description = "통과 👍🏻 '" + spec.description + "'"
  }

  var specDiv = this.createDom('div', { className: 'spec '  + skipStatus },
      this.createDom('a', { className: 'run_spec_' + status, href: '?spec=' + encodeURIComponent(spec.getFullName()) }, "새로고침"),
      this.createDom('a', {
        className: 'description',
        href: '?spec=' + encodeURIComponent(spec.getFullName()),
        title: spec.getFullName()
      }, description));

  var resultItems = results.getItems();
  var messagesDiv = this.createDom('div', { className: 'messages'});

  for (var i = 0; i < resultItems.length; i++) {
    var result = resultItems[i];

    if (result.type == 'expect' && result.passed && !result.passed()) {
      messagesDiv.appendChild(
          this.createDom('div', { className: 'errorMessage' }, result.message)
          );
      messagesDiv.appendChild(
          this.createDom('div', { className: 'description' }, "아래 파일 위치로 이동하여 올바르게 고쳐주세요. (파일 이름 뒤의 숫자는 줄 번호입니다.)")
          );

      if (result.trace.stack) {
        var lines = result.trace.stack.split('\n');
        var stack = lines[0];
        for (var i = 1; i < lines.length; i++) {
          if (lines[i].search('/koans/') != -1) {
            stack += '\n' + lines[i]
          }
        }
        messagesDiv.appendChild(this.createDom('div', {className: 'stackTrace'}, stack.trim()));
      }

      break;
    }
  }
  if (messagesDiv.childNodes.length > 0) {
    specDiv.appendChild(messagesDiv);
  }

  this.suiteDivs[spec.suite.id].appendChild(specDiv);
  
};

JsKoansReporter.prototype.log = function() {
  var console = jasmine.getGlobal().console;
  if (console && console.log) console.log.apply(console, arguments);
};

JsKoansReporter.prototype.getLocation = function() {
  return this.document.location;
};

JsKoansReporter.prototype.specFilter = function(spec) {
  var paramMap = {};
  var params = this.getLocation().search.substring(1).split('&');
  for (var i = 0; i < params.length; i++) {
    var p = params[i].split('=');
    paramMap[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
  }

  if (!paramMap["spec"]) return true;
  return spec.getFullName().indexOf(paramMap["spec"]) == 0;
};

JsKoansReporter.prototype.getSuiteDescription = function(suite) {
  if (null === suite.parentSuite) {
    return "[학습주제] " + suite.description;
  } else {
    return suite.description;
  }
};

