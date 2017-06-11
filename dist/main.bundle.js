webpackJsonp([1,4],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phrase_logic_phrase__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logicExpression_logic_root_expression__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicLogicPhraseInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasicLogicPhraseInfoComponent = (function () {
    function BasicLogicPhraseInfoComponent() {
        this._logicPhrase = new __WEBPACK_IMPORTED_MODULE_1__phrase_logic_phrase__["a" /* LogicPhrase */](0, [], "");
        this._logicRootExpression = new __WEBPACK_IMPORTED_MODULE_2__logicExpression_logic_root_expression__["a" /* LogicRootExpression */]();
        this._logicRootExpressionInDNF = new __WEBPACK_IMPORTED_MODULE_2__logicExpression_logic_root_expression__["a" /* LogicRootExpression */]();
    }
    BasicLogicPhraseInfoComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(BasicLogicPhraseInfoComponent.prototype, "logicPhrase", {
        get: function () {
            return this._logicPhrase;
        },
        set: function (value) {
            this._logicPhrase = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicLogicPhraseInfoComponent.prototype, "logicRootExpressionInDNF", {
        get: function () {
            return this._logicRootExpressionInDNF;
        },
        set: function (value) {
            this._logicRootExpressionInDNF = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicLogicPhraseInfoComponent.prototype, "logicRootExpression", {
        get: function () {
            return this._logicRootExpression;
        },
        set: function (value) {
            this._logicRootExpression = value;
        },
        enumerable: true,
        configurable: true
    });
    return BasicLogicPhraseInfoComponent;
}());
BasicLogicPhraseInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-basic-logic-phrase-info',
        template: __webpack_require__(235),
        styles: [__webpack_require__(229)],
    }),
    __metadata("design:paramtypes", [])
], BasicLogicPhraseInfoComponent);

//# sourceMappingURL=basic-logic-phrase-info.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kv_diagram_model_kv_diagram_generator__ = __webpack_require__(166);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KVDiagramComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KVDiagramComponent = (function () {
    function KVDiagramComponent() {
    }
    KVDiagramComponent.prototype.ngOnInit = function () {
    };
    KVDiagramComponent.prototype.parse = function (logicPhrase) {
        var generator = new __WEBPACK_IMPORTED_MODULE_1__kv_diagram_model_kv_diagram_generator__["a" /* KvDiagramGenerator */](logicPhrase);
        this.kvDiagram = generator.generateKVDiagram();
        this.kvDiagram.fill(logicPhrase);
        this.kvDiagram.draw(this.canvasRef);
    };
    return KVDiagramComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('kvDiagramCanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object)
], KVDiagramComponent.prototype, "canvasRef", void 0);
KVDiagramComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-kvdiagramm',
        template: __webpack_require__(236),
        styles: [__webpack_require__(230)]
    }),
    __metadata("design:paramtypes", [])
], KVDiagramComponent);

var _a;
//# sourceMappingURL=kvdiagram.component.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logic_expression_abstract__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogicAnd; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LogicAnd = (function (_super) {
    __extends(LogicAnd, _super);
    function LogicAnd() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rightAssociative = false;
        _this._precedence = 2;
        _this._expressionType = "*";
        return _this;
    }
    LogicAnd.prototype.toString = function () {
        return "*";
    };
    LogicAnd.prototype.phraseToString = function () {
        var result = "(";
        for (var _i = 0, _a = this.logicChildExpressions; _i < _a.length; _i++) {
            var expression = _a[_i];
            result += expression.phraseToString() + "*";
        }
        result = result.substring(0, result.length - 1);
        result += ")";
        return result;
    };
    LogicAnd.prototype.getResult = function () {
        var result = true;
        for (var _i = 0, _a = this.logicChildExpressions; _i < _a.length; _i++) {
            var expression = _a[_i];
            result = result && expression.getResult();
        }
        return result;
    };
    return LogicAnd;
}(__WEBPACK_IMPORTED_MODULE_0__logic_expression_abstract__["a" /* AbstractLogicExpression */]));

//# sourceMappingURL=logic-and.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logic_expression_abstract__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogicBracketClose; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LogicBracketClose = (function (_super) {
    __extends(LogicBracketClose, _super);
    function LogicBracketClose() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._expressionType = ")";
        return _this;
    }
    LogicBracketClose.prototype.phraseToString = function () {
        return ")";
    };
    LogicBracketClose.prototype.toString = function () {
        var result = ")";
        return result;
    };
    LogicBracketClose.prototype.getResult = function () {
        return false;
    };
    return LogicBracketClose;
}(__WEBPACK_IMPORTED_MODULE_0__logic_expression_abstract__["a" /* AbstractLogicExpression */]));

//# sourceMappingURL=logic-bracket-close.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logic_expression_abstract__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogicBracketOpen; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LogicBracketOpen = (function (_super) {
    __extends(LogicBracketOpen, _super);
    function LogicBracketOpen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._expressionType = "(";
        return _this;
    }
    LogicBracketOpen.prototype.phraseToString = function () {
        return "(";
    };
    LogicBracketOpen.prototype.toString = function () {
        var result = "(";
        return result;
    };
    LogicBracketOpen.prototype.getResult = function () {
        return false;
    };
    return LogicBracketOpen;
}(__WEBPACK_IMPORTED_MODULE_0__logic_expression_abstract__["a" /* AbstractLogicExpression */]));

//# sourceMappingURL=logic-bracket-open.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logic_expression_abstract__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogicNeg; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LogicNeg = (function (_super) {
    __extends(LogicNeg, _super);
    function LogicNeg(logicExpression) {
        if (logicExpression === void 0) { logicExpression = null; }
        var _this = _super.call(this) || this;
        _this.rightAssociative = true;
        _this._precedence = 3;
        _this._expressionType = "~";
        if (logicExpression != null)
            _this.logicChildExpressions[0] = logicExpression;
        return _this;
    }
    LogicNeg.prototype.phraseToString = function () {
        if (typeof this._logicChildExpressions[0] !== "undefined") {
            return "~" + this._logicChildExpressions[0].phraseToString();
        }
        else {
            return "";
        }
    };
    LogicNeg.prototype.toString = function () {
        return "~";
    };
    LogicNeg.prototype.getResult = function () {
        if (typeof this._logicChildExpressions[0] !== "undefined") {
            return !this._logicChildExpressions[0].getResult();
        }
        else {
            return false;
        }
    };
    return LogicNeg;
}(__WEBPACK_IMPORTED_MODULE_0__logic_expression_abstract__["a" /* AbstractLogicExpression */]));

//# sourceMappingURL=logic-neg.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logic_expression_abstract__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogicOr; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LogicOr = (function (_super) {
    __extends(LogicOr, _super);
    function LogicOr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rightAssociative = false;
        _this._precedence = 1;
        _this._expressionType = "+";
        return _this;
    }
    LogicOr.prototype.phraseToString = function () {
        var result = "(";
        for (var _i = 0, _a = this.logicChildExpressions; _i < _a.length; _i++) {
            var expression = _a[_i];
            result += expression.phraseToString() + "+";
        }
        result = result.substring(0, result.length - 1);
        result += ")";
        return result;
    };
    LogicOr.prototype.toString = function () {
        return "+";
    };
    LogicOr.prototype.getResult = function () {
        var result = true;
        for (var _i = 0, _a = this.logicChildExpressions; _i < _a.length; _i++) {
            var expression = _a[_i];
            result = result || expression.getResult();
        }
        return result;
    };
    return LogicOr;
}(__WEBPACK_IMPORTED_MODULE_0__logic_expression_abstract__["a" /* AbstractLogicExpression */]));

//# sourceMappingURL=logic-or.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logic_expression_abstract__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logic_var__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logic_and__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logic_or__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logic_neg__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logic_bracket_close__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logic_bracket_open__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shunting_yard__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__logic_tree_utils__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__phrase_string_methods__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogicRootExpression; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();











var LogicRootExpression = (function (_super) {
    __extends(LogicRootExpression, _super);
    function LogicRootExpression() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.possibleOperands = Array('~', '+', '*', '(', ')');
        _this._shuntedPhrase = Array();
        return _this;
    }
    LogicRootExpression.prototype.phraseToString = function () {
        if (typeof this._logicChildExpressions[0] !== 'undefined') {
            return this._logicChildExpressions[0].phraseToString();
        }
        return '';
    };
    LogicRootExpression.prototype.phraseToStringWithoutBreakets = function () {
        if (typeof this._logicChildExpressions[0] !== 'undefined') {
            var tmp = __WEBPACK_IMPORTED_MODULE_10__phrase_string_methods__["a" /* StringMethods */].replaceAll(this._logicChildExpressions[0].phraseToString(), ")", "");
            return __WEBPACK_IMPORTED_MODULE_10__phrase_string_methods__["a" /* StringMethods */].replaceAll(tmp, "(", "");
        }
        return '';
    };
    Object.defineProperty(LogicRootExpression.prototype, "shuntedPhrase", {
        get: function () {
            return this._shuntedPhrase;
        },
        enumerable: true,
        configurable: true
    });
    LogicRootExpression.prototype.toString = function () {
        if (typeof this._logicChildExpressions[0] !== 'undefined') {
            return this._logicChildExpressions[0].toString();
        }
        return '';
    };
    LogicRootExpression.prototype.getResult = function () {
        if (typeof this._logicChildExpressions[0] !== 'undefined') {
            return this._logicChildExpressions[0].getResult();
        }
        return false;
    };
    LogicRootExpression.prototype.parseLogicString = function (logicPhrase) {
        var logicObjectPhrase = this.logicStringToObjectAarray(logicPhrase);
        var shuntigYard = new __WEBPACK_IMPORTED_MODULE_7__shunting_yard__["a" /* ShuntingYard */]();
        this._shuntedPhrase = shuntigYard.startAlgo(logicObjectPhrase);
        var clonedShuntedPhrase = __WEBPACK_IMPORTED_MODULE_8_lodash__["cloneDeep"](this._shuntedPhrase);
        this.logicChildExpressions = this.parseShuntedYard(clonedShuntedPhrase);
    };
    LogicRootExpression.prototype.logicStringToObjectAarray = function (logicPhrase) {
        var logicObjectPhrase = Array();
        var actualConjunction = '';
        var actualVarName = '';
        for (var i = 0; i < logicPhrase.length; i++) {
            if (this.possibleOperands.indexOf(logicPhrase[i]) != -1 && actualVarName != '') {
                logicObjectPhrase.push(new __WEBPACK_IMPORTED_MODULE_1__logic_var__["a" /* LogicVar */](actualVarName));
                actualVarName = '';
            }
            if (logicPhrase[i] == '~') {
                logicObjectPhrase.push(new __WEBPACK_IMPORTED_MODULE_4__logic_neg__["a" /* LogicNeg */]());
            }
            else if (logicPhrase[i] == '+') {
                logicObjectPhrase.push(new __WEBPACK_IMPORTED_MODULE_3__logic_or__["a" /* LogicOr */]());
            }
            else if (logicPhrase[i] == '*') {
                logicObjectPhrase.push(new __WEBPACK_IMPORTED_MODULE_2__logic_and__["a" /* LogicAnd */]());
            }
            else if (logicPhrase[i] == '(') {
                logicObjectPhrase.push(new __WEBPACK_IMPORTED_MODULE_6__logic_bracket_open__["a" /* LogicBracketOpen */]());
            }
            else if (logicPhrase[i] == ')') {
                logicObjectPhrase.push(new __WEBPACK_IMPORTED_MODULE_5__logic_bracket_close__["a" /* LogicBracketClose */]());
            }
            else {
                actualVarName += logicPhrase[i];
            }
        }
        if (actualVarName != '')
            logicObjectPhrase.push(new __WEBPACK_IMPORTED_MODULE_1__logic_var__["a" /* LogicVar */](actualVarName));
        return logicObjectPhrase;
    };
    LogicRootExpression.prototype.parseShuntedYard = function (_shuntedPhrase) {
        var logicObjects = this.reverseArray(_shuntedPhrase);
        var logicObjectResults = Array();
        while (logicObjects.length > 0) {
            var logicObject = logicObjects.pop();
            while (logicObject.parsed && logicObjects.length > 0) {
                logicObjectResults.push(logicObject);
                logicObject = logicObjects.pop();
            }
            if (logicObject.parsed) {
                logicObjects.push(logicObject);
                return logicObjects;
            }
            if (logicObject instanceof __WEBPACK_IMPORTED_MODULE_4__logic_neg__["a" /* LogicNeg */]) {
                var var1 = logicObjectResults.pop();
                logicObject.add(var1);
                logicObject.parsed = true;
                logicObjects.push(logicObject);
            }
            else {
                var var1 = logicObjectResults.pop();
                var var2 = logicObjectResults.pop();
                logicObject.add(var1);
                logicObject.add(var2);
                logicObject.parsed = true;
                logicObjects.push(logicObject);
            }
        }
        return logicObjects;
    };
    LogicRootExpression.prototype.reverseArray = function (array) {
        var arrayR = Array();
        while (array.length > 0) {
            arrayR.push(array.pop());
        }
        return arrayR;
    };
    LogicRootExpression.prototype.toDNF = function () {
        var logicTreeUtils = new __WEBPACK_IMPORTED_MODULE_9__logic_tree_utils__["a" /* LogicTreeUtils */]();
        this.logicChildExpressions[0] = logicTreeUtils.dissolveLogicNegs(this.logicChildExpressions[0]);
        this.logicChildExpressions[0] = logicTreeUtils.dissolveLogicAnd(this.logicChildExpressions[0]);
    };
    return LogicRootExpression;
}(__WEBPACK_IMPORTED_MODULE_0__logic_expression_abstract__["a" /* AbstractLogicExpression */]));

//# sourceMappingURL=logic-root-expression.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogicPhrase; });
var LogicPhrase = (function () {
    function LogicPhrase(lengh, varNames, phrase) {
        this._lengh = 0;
        this._phrase = "";
        this._lengh = lengh;
        this._varNames = varNames;
        this._phrase = phrase;
    }
    Object.defineProperty(LogicPhrase.prototype, "lengh", {
        get: function () {
            return this._lengh;
        },
        set: function (value) {
            this._lengh = value;
        },
        enumerable: true,
        configurable: true
    });
    LogicPhrase.prototype.varCount = function () {
        return this._varNames.length;
    };
    Object.defineProperty(LogicPhrase.prototype, "varNames", {
        get: function () {
            return this._varNames;
        },
        set: function (value) {
            this._varNames = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogicPhrase.prototype, "phrase", {
        get: function () {
            return this._phrase;
        },
        set: function (value) {
            this._phrase = value;
        },
        enumerable: true,
        configurable: true
    });
    return LogicPhrase;
}());

//# sourceMappingURL=logic-phrase.js.map

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 151;


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(174);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractLogicExpression; });
var AbstractLogicExpression = (function () {
    function AbstractLogicExpression() {
        this._logicChildExpressions = Array();
        this.rightAssociative = false;
        this._precedence = 0;
        this._parsed = false;
        this._expressionType = "";
    }
    Object.defineProperty(AbstractLogicExpression.prototype, "parsed", {
        get: function () {
            return this._parsed;
        },
        set: function (value) {
            this._parsed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractLogicExpression.prototype, "expressionType", {
        get: function () {
            return this._expressionType;
        },
        set: function (value) {
            this._expressionType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractLogicExpression.prototype, "precedence", {
        get: function () {
            return this._precedence;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractLogicExpression.prototype, "logicChildExpressions", {
        get: function () {
            return this._logicChildExpressions;
        },
        set: function (value) {
            this._logicChildExpressions = value;
        },
        enumerable: true,
        configurable: true
    });
    AbstractLogicExpression.prototype.add = function (oldVar) {
        this.logicChildExpressions.push(oldVar);
    };
    AbstractLogicExpression.prototype.isRightAssociative = function () {
        if (this.rightAssociative)
            return true;
        else
            return false;
    };
    AbstractLogicExpression.prototype.isLeftAssociative = function () {
        if (!this.rightAssociative)
            return true;
        else
            return false;
    };
    AbstractLogicExpression.prototype.precedenceLessOrEqual = function (otherOperand) {
        if (this._precedence <= otherOperand.precedence)
            return true;
        else
            return false;
    };
    AbstractLogicExpression.prototype.precedenceLess = function (otherOperand) {
        if (this._precedence < otherOperand.precedence)
            return true;
        else
            return false;
    };
    return AbstractLogicExpression;
}());

//# sourceMappingURL=logic-expression-abstract.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'KV-Toolbox';
        this.welcomeMessage = "Das ist eine KV-Toolbox";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(234),
        styles: [__webpack_require__(228)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logic_input_logic_input_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__basic_logic_phrase_info_basic_logic_phrase_info_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__kvdiagram_kvdiagram_component__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__logic_input_logic_input_component__["a" /* LogicInputComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__basic_logic_phrase_info_basic_logic_phrase_info_component__["a" /* BasicLogicPhraseInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_9__kvdiagram_kvdiagram_component__["a" /* KVDiagramComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coordinate; });
var Coordinate = (function () {
    function Coordinate(x, y) {
        this._x = 0;
        this._y = 0;
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Coordinate.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Coordinate.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    return Coordinate;
}());

//# sourceMappingURL=coordinate.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KvDiagramEntry; });
var KvDiagramEntry = (function () {
    function KvDiagramEntry(xPos, yPos) {
        this.width = 50;
        this.varCombinationTag = Array();
        this._xPos = xPos;
        this._yPos = yPos;
    }
    Object.defineProperty(KvDiagramEntry.prototype, "xPos", {
        get: function () {
            return this._xPos;
        },
        set: function (value) {
            this._xPos = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KvDiagramEntry.prototype, "yPos", {
        get: function () {
            return this._yPos;
        },
        set: function (value) {
            this._yPos = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KvDiagramEntry.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    KvDiagramEntry.prototype.draw = function (ctx) {
        ctx.beginPath();
        ctx.rect(this._xPos * this.width, this._yPos * this.width, this.width, this.width);
        ctx.stroke();
        if (this.value == 1) {
            ctx.font = '25px sans-serif';
            ctx.fillText("1", (this._xPos) * this.width + 20, (this._yPos) * this.width + 40, this.width);
        }
    };
    KvDiagramEntry.prototype.genCombinationTags = function (segments) {
        this.varCombinationTag = Array();
        for (var _i = 0, segments_1 = segments; _i < segments_1.length; _i++) {
            var segment = segments_1[_i];
            if (segment.inSegment(this._xPos, this._yPos))
                this.varCombinationTag.push(segment.varName);
        }
    };
    KvDiagramEntry.prototype.combinationPartOfTag = function (vars) {
        for (var _i = 0, vars_1 = vars; _i < vars_1.length; _i++) {
            var name = vars_1[_i];
            if (!this.varCombinationTag.includes(name))
                return false;
        }
        return true;
    };
    return KvDiagramEntry;
}());

//# sourceMappingURL=kv-diagram-entry.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kv_diagram_entry__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kvdiagram__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kvdiagram_segment__ = __webpack_require__(167);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KvDiagramGenerator; });



var KvDiagramGenerator = (function () {
    function KvDiagramGenerator(logicPhrase) {
        this.logicPhrase = logicPhrase;
    }
    KvDiagramGenerator.prototype.generateDiagramSegments = function (kvDiagram) {
        var newSegmentLength = 1;
        var actualSegmentType = "x";
        var segmentNameRow = 1;
        var varName1Neg = new __WEBPACK_IMPORTED_MODULE_2__kvdiagram_segment__["a" /* KVDiagramSegment */](actualSegmentType, "~" + this.logicPhrase.varNames[0], 0, 0, false, segmentNameRow);
        var varName1Pos = new __WEBPACK_IMPORTED_MODULE_2__kvdiagram_segment__["a" /* KVDiagramSegment */](actualSegmentType, this.logicPhrase.varNames[0], 1, 1, true, segmentNameRow);
        kvDiagram.addSegment(varName1Neg);
        kvDiagram.addSegment(varName1Pos);
        for (var mirrorCount = 1; mirrorCount < this.logicPhrase.varCount(); mirrorCount++) {
            if (actualSegmentType == "x")
                actualSegmentType = "y";
            else
                actualSegmentType = "x";
            //Mirror old segments of the acutal segmentType
            var toAdd = Array();
            for (var _i = 0, _a = kvDiagram.segments; _i < _a.length; _i++) {
                var oldSegment = _a[_i];
                if (oldSegment.segmentType == actualSegmentType) {
                    var mirroredSegment = new __WEBPACK_IMPORTED_MODULE_2__kvdiagram_segment__["a" /* KVDiagramSegment */](actualSegmentType, oldSegment.varName, newSegmentLength - 1 + (newSegmentLength - oldSegment.endPos), newSegmentLength - 1 + (newSegmentLength - oldSegment.startPos), oldSegment.positiv, oldSegment.segmentNameRow);
                    toAdd.push(mirroredSegment);
                }
            }
            //Add mirroed segments
            for (var _b = 0, toAdd_1 = toAdd; _b < toAdd_1.length; _b++) {
                var newSegment = toAdd_1[_b];
                kvDiagram.addSegment(newSegment);
            }
            //Add new segments
            var varNameNeg = new __WEBPACK_IMPORTED_MODULE_2__kvdiagram_segment__["a" /* KVDiagramSegment */](actualSegmentType, "~" + this.logicPhrase.varNames[mirrorCount], 0, newSegmentLength - 1, false, segmentNameRow);
            var varNamePos = new __WEBPACK_IMPORTED_MODULE_2__kvdiagram_segment__["a" /* KVDiagramSegment */](actualSegmentType, this.logicPhrase.varNames[mirrorCount], newSegmentLength, (newSegmentLength * 2) - 1, true, segmentNameRow);
            kvDiagram.addSegment(varNameNeg);
            kvDiagram.addSegment(varNamePos);
            if ((mirrorCount % 2) == 1) {
                newSegmentLength = newSegmentLength * 2;
                segmentNameRow++;
            }
        }
    };
    KvDiagramGenerator.prototype.generateKVDiagram = function () {
        var fields = Math.pow(2, this.logicPhrase.varCount());
        var xLength = this.getXLength(this.logicPhrase.varCount());
        var yLength = fields / xLength;
        var kvDiagram = new __WEBPACK_IMPORTED_MODULE_1__kvdiagram__["a" /* KVDiagram */]();
        this.generateDiagramSegments(kvDiagram);
        this.optimizeDiagramSegments(kvDiagram);
        var kvMatrix;
        kvMatrix = this.generateMatrix(xLength, yLength);
        kvDiagram.kvMatrix = kvMatrix;
        return kvDiagram;
    };
    KvDiagramGenerator.prototype.fillMatrix = function () {
    };
    KvDiagramGenerator.prototype.generateMatrix = function (xLength, yLength) {
        var kvMatrix;
        kvMatrix = Array();
        for (var x = 0; x < xLength; x++) {
            kvMatrix[x] = Array();
            for (var y = 0; y < yLength; y++) {
                kvMatrix[x][y] = new __WEBPACK_IMPORTED_MODULE_0__kv_diagram_entry__["a" /* KvDiagramEntry */](x, y);
            }
        }
        return kvMatrix;
    };
    KvDiagramGenerator.prototype.getXLength = function (varCount) {
        var steps = varCount / 2;
        var pot = Math.floor(steps) + (varCount % 2);
        return Math.pow(2, pot);
    };
    KvDiagramGenerator.prototype.optimizeDiagramSegments = function (kvDiagram) {
        for (var _i = 0, _a = kvDiagram.segments; _i < _a.length; _i++) {
            var segment = _a[_i];
            for (var _b = 0, _c = kvDiagram.segments; _b < _c.length; _b++) {
                var otherSegment = _c[_b];
                if (otherSegment != segment) {
                    if ((segment.endPos + 1) == otherSegment.startPos && segment.varName == otherSegment.varName) {
                        var betterSegment = new __WEBPACK_IMPORTED_MODULE_2__kvdiagram_segment__["a" /* KVDiagramSegment */](segment.segmentType, segment.varName, segment.startPos, otherSegment.endPos, segment.positiv, segment.segmentNameRow);
                        //Delet bad segments
                        var index = kvDiagram.segments.indexOf(segment, 0);
                        if (index > -1) {
                            kvDiagram.segments.splice(index, 1);
                        }
                        index = kvDiagram.segments.indexOf(otherSegment, 0);
                        if (index > -1) {
                            kvDiagram.segments.splice(index, 1);
                        }
                        //Add better segment
                        kvDiagram.segments.push(betterSegment);
                    }
                }
            }
        }
    };
    return KvDiagramGenerator;
}());

//# sourceMappingURL=kv-diagram-generator.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KVDiagramSegment; });
var KVDiagramSegment = (function () {
    function KVDiagramSegment(segmentType, varName, startPos, endPos, positiv, segmentNameRow) {
        this._segmentType = "";
        this._varName = "";
        this._startPos = 0;
        this._endPos = 0;
        this._positiv = false;
        this.width = 50;
        this._positiv = positiv;
        this._segmentType = segmentType;
        this._varName = varName;
        this._startPos = startPos;
        this._endPos = endPos;
        this._segmentNameRow = segmentNameRow;
        if (this.startPos > this.endPos) {
            var tmp = this.startPos;
            this._startPos = this.endPos;
            this._endPos = tmp;
        }
    }
    Object.defineProperty(KVDiagramSegment.prototype, "segmentNameRow", {
        get: function () {
            return this._segmentNameRow;
        },
        set: function (value) {
            this._segmentNameRow = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KVDiagramSegment.prototype, "positiv", {
        get: function () {
            return this._positiv;
        },
        set: function (value) {
            this._positiv = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KVDiagramSegment.prototype, "segmentType", {
        get: function () {
            return this._segmentType;
        },
        set: function (value) {
            this._segmentType = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KVDiagramSegment.prototype, "varName", {
        get: function () {
            return this._varName;
        },
        set: function (value) {
            this._varName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KVDiagramSegment.prototype, "startPos", {
        get: function () {
            return this._startPos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KVDiagramSegment.prototype, "endPos", {
        get: function () {
            return this._endPos;
        },
        enumerable: true,
        configurable: true
    });
    KVDiagramSegment.prototype.draw = function (ctx, xLength, yLength) {
        ctx.font = '25px sans-serif';
        if (this.segmentType == "x") {
            if (this.positiv) {
                ctx.beginPath();
                ctx.moveTo(this.startPos * this.width, yLength * this.width + 30 * this.segmentNameRow - 20);
                ctx.lineTo(this.endPos * this.width + this.width, yLength * this.width + 30 * this.segmentNameRow - 20);
                ctx.stroke();
                ctx.fillText(this.varName, this.startPos * this.width, yLength * this.width + 30 * this.segmentNameRow, this.width);
            }
        }
        else {
            if (this.positiv) {
                ctx.beginPath();
                ctx.moveTo((xLength - 1) * this.width + this.width * this.segmentNameRow + 10, this.startPos * this.width);
                ctx.lineTo((xLength - 1) * this.width + this.width * this.segmentNameRow + 10, this.endPos * this.width + this.width);
                ctx.stroke();
                ctx.fillText(this.varName, (xLength - 1) * this.width + this.width * this.segmentNameRow + 15, this.startPos * this.width + 25, this.width);
            }
        }
    };
    KVDiagramSegment.prototype.inSegment = function (x, y) {
        if (this.segmentType == "x") {
            if (x > this.endPos || x < this.startPos)
                return false;
        }
        else {
            if (y > this.endPos || y < this.startPos)
                return false;
        }
        return true;
    };
    return KVDiagramSegment;
}());

//# sourceMappingURL=kvdiagram-segment.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__phrase_string_methods__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coordinate__ = __webpack_require__(164);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KVDiagram; });


var KVDiagram = (function () {
    function KVDiagram() {
        this._segments = Array();
    }
    KVDiagram.prototype.addSegment = function (segment) {
        this._segments.push(segment);
    };
    Object.defineProperty(KVDiagram.prototype, "kvMatrix", {
        get: function () {
            return this._kvMatrix;
        },
        set: function (value) {
            this._kvMatrix = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KVDiagram.prototype, "segments", {
        get: function () {
            return this._segments;
        },
        enumerable: true,
        configurable: true
    });
    KVDiagram.prototype.fill = function (logicPhrase) {
        var DNFs = logicPhrase.phrase.split("+");
        for (var _i = 0, DNFs_1 = DNFs; _i < DNFs_1.length; _i++) {
            var DNF = DNFs_1[_i];
            DNF = __WEBPACK_IMPORTED_MODULE_0__phrase_string_methods__["a" /* StringMethods */].replaceAll(DNF, "(", "");
            DNF = __WEBPACK_IMPORTED_MODULE_0__phrase_string_methods__["a" /* StringMethods */].replaceAll(DNF, ")", "");
            DNF = __WEBPACK_IMPORTED_MODULE_0__phrase_string_methods__["a" /* StringMethods */].replaceAll(DNF, " ", "");
            var vars = DNF.split("*");
            this.genCombinationTagsForEntries();
            var coordinates = this.getCoordinate(vars);
            for (var _a = 0, coordinates_1 = coordinates; _a < coordinates_1.length; _a++) {
                var coordinate = coordinates_1[_a];
                this.kvMatrix[coordinate.x][coordinate.y].value = 1;
            }
        }
    };
    KVDiagram.prototype.draw = function (canvasRef) {
        var ctx = canvasRef.nativeElement.getContext('2d');
        ctx.clearRect(0, 0, 5000, 5000);
        for (var _i = 0, _a = this.kvMatrix; _i < _a.length; _i++) {
            var xRow = _a[_i];
            for (var _b = 0, xRow_1 = xRow; _b < xRow_1.length; _b++) {
                var entry = xRow_1[_b];
                entry.draw(ctx);
            }
        }
        for (var _c = 0, _d = this.segments; _c < _d.length; _c++) {
            var segment = _d[_c];
            segment.draw(ctx, this.kvMatrix.length, this.kvMatrix[0].length);
        }
    };
    KVDiagram.prototype.getCoordinate = function (vars) {
        this.genCombinationTagsForEntries();
        var coordinates = Array();
        var segmentsRequired = new Array();
        for (var _i = 0, _a = this.kvMatrix; _i < _a.length; _i++) {
            var xRow = _a[_i];
            for (var _b = 0, xRow_2 = xRow; _b < xRow_2.length; _b++) {
                var entry = xRow_2[_b];
                if (entry.combinationPartOfTag(vars)) {
                    coordinates.push(new __WEBPACK_IMPORTED_MODULE_1__coordinate__["a" /* Coordinate */](entry.xPos, entry.yPos));
                }
            }
        }
        return coordinates;
    };
    KVDiagram.prototype.genCombinationTagsForEntries = function () {
        for (var _i = 0, _a = this.kvMatrix; _i < _a.length; _i++) {
            var xRow = _a[_i];
            for (var _b = 0, xRow_3 = xRow; _b < xRow_3.length; _b++) {
                var entry = xRow_3[_b];
                entry.genCombinationTags(this._segments);
            }
        }
    };
    return KVDiagram;
}());

//# sourceMappingURL=kvdiagram.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phrase_basic_logic_phrase_parser__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_logic_phrase_info_basic_logic_phrase_info_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kvdiagram_kvdiagram_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logicExpression_logic_root_expression__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogicInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LogicInputComponent = (function () {
    function LogicInputComponent(basicLogicPhraseParser) {
        this.basicLogicPhraseParser = basicLogicPhraseParser;
        this.logicPhraseString = "";
        this.logicExtraVars = "";
    }
    LogicInputComponent.prototype.ngOnInit = function () {
    };
    LogicInputComponent.prototype.parseLogicPhrase = function () {
        var logicRootExpression = new __WEBPACK_IMPORTED_MODULE_4__logicExpression_logic_root_expression__["a" /* LogicRootExpression */]();
        logicRootExpression.parseLogicString(this.logicPhraseString);
        var logicExpressionInDNF = __WEBPACK_IMPORTED_MODULE_5_lodash__["cloneDeep"](logicRootExpression);
        logicExpressionInDNF.toDNF();
        this.basicLogicPhraseInfoCom.logicRootExpression = logicRootExpression;
        this.basicLogicPhraseInfoCom.logicRootExpressionInDNF = logicExpressionInDNF;
        this.logicDNFPhrase = this.basicLogicPhraseParser.parse(logicExpressionInDNF.phraseToStringWithoutBreakets(), this.logicExtraVars);
        this.logicPhrase = this.basicLogicPhraseParser.parse(this.logicPhraseString, this.logicExtraVars);
        this.basicLogicPhraseInfoCom.logicPhrase = this.logicPhrase;
        this.kvDiagramCom.parse(this.logicDNFPhrase);
    };
    return LogicInputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__basic_logic_phrase_info_basic_logic_phrase_info_component__["a" /* BasicLogicPhraseInfoComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__basic_logic_phrase_info_basic_logic_phrase_info_component__["a" /* BasicLogicPhraseInfoComponent */]) === "function" && _a || Object)
], LogicInputComponent.prototype, "basicLogicPhraseInfoCom", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__kvdiagram_kvdiagram_component__["a" /* KVDiagramComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__kvdiagram_kvdiagram_component__["a" /* KVDiagramComponent */]) === "function" && _b || Object)
], LogicInputComponent.prototype, "kvDiagramCom", void 0);
LogicInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-logic-input',
        template: __webpack_require__(237),
        styles: [__webpack_require__(231)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__phrase_basic_logic_phrase_parser__["a" /* BasicLogicPhraseParser */]]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__phrase_basic_logic_phrase_parser__["a" /* BasicLogicPhraseParser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__phrase_basic_logic_phrase_parser__["a" /* BasicLogicPhraseParser */]) === "function" && _c || Object])
], LogicInputComponent);

var _a, _b, _c;
//# sourceMappingURL=logic-input.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logic_or__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logic_and__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logic_neg__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logic_var__ = __webpack_require__(54);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogicTreeUtils; });




var LogicTreeUtils = (function () {
    function LogicTreeUtils() {
    }
    LogicTreeUtils.prototype.dissolveLogicAnd = function (actualLogicExpression) {
        if (actualLogicExpression instanceof __WEBPACK_IMPORTED_MODULE_1__logic_and__["a" /* LogicAnd */]) {
            var logicConjunction = actualLogicExpression;
            var var1 = logicConjunction.logicChildExpressions[0];
            var var2 = logicConjunction.logicChildExpressions[1];
            if (var1 instanceof __WEBPACK_IMPORTED_MODULE_0__logic_or__["a" /* LogicOr */] && var2 instanceof __WEBPACK_IMPORTED_MODULE_0__logic_or__["a" /* LogicOr */]) {
                /*
                 * Do all this crazy stuff to have this result:
                 * (a+b)*(c+d) = (((ac+ad)+bc)+db)
                 *
                 * Because on or can only have two child expressions
                 */
                var and1 = new __WEBPACK_IMPORTED_MODULE_1__logic_and__["a" /* LogicAnd */]();
                and1.add(var1.logicChildExpressions[0]);
                and1.add(var2.logicChildExpressions[0]);
                var and2 = new __WEBPACK_IMPORTED_MODULE_1__logic_and__["a" /* LogicAnd */]();
                and2.add(var1.logicChildExpressions[0]);
                and2.add(var2.logicChildExpressions[1]);
                var or1 = new __WEBPACK_IMPORTED_MODULE_0__logic_or__["a" /* LogicOr */]();
                or1.add(and1);
                or1.add(and2);
                var and3 = new __WEBPACK_IMPORTED_MODULE_1__logic_and__["a" /* LogicAnd */]();
                and3.add(var1.logicChildExpressions[1]);
                and3.add(var2.logicChildExpressions[0]);
                var or2 = new __WEBPACK_IMPORTED_MODULE_0__logic_or__["a" /* LogicOr */]();
                or2.add(or1);
                or2.add(and3);
                var and4 = new __WEBPACK_IMPORTED_MODULE_1__logic_and__["a" /* LogicAnd */]();
                and4.add(var1.logicChildExpressions[1]);
                and4.add(var2.logicChildExpressions[1]);
                var or3 = new __WEBPACK_IMPORTED_MODULE_0__logic_or__["a" /* LogicOr */]();
                or3.add(or2);
                or3.add(and4);
                actualLogicExpression = or3;
            }
            else if (var1 instanceof __WEBPACK_IMPORTED_MODULE_0__logic_or__["a" /* LogicOr */] && var2 instanceof __WEBPACK_IMPORTED_MODULE_3__logic_var__["a" /* LogicVar */]) {
                actualLogicExpression = new __WEBPACK_IMPORTED_MODULE_0__logic_or__["a" /* LogicOr */]();
                var and1 = new __WEBPACK_IMPORTED_MODULE_1__logic_and__["a" /* LogicAnd */]();
                and1.add(var2);
                and1.add(var1.logicChildExpressions[0]);
                var and2 = new __WEBPACK_IMPORTED_MODULE_1__logic_and__["a" /* LogicAnd */]();
                and2.add(var2);
                and2.add(var1.logicChildExpressions[1]);
                actualLogicExpression.add(and1);
                actualLogicExpression.add(and2);
            }
            else if (var2 instanceof __WEBPACK_IMPORTED_MODULE_0__logic_or__["a" /* LogicOr */] && var1 instanceof __WEBPACK_IMPORTED_MODULE_3__logic_var__["a" /* LogicVar */]) {
                actualLogicExpression = new __WEBPACK_IMPORTED_MODULE_0__logic_or__["a" /* LogicOr */]();
                var and1 = new __WEBPACK_IMPORTED_MODULE_1__logic_and__["a" /* LogicAnd */]();
                and1.add(var1);
                and1.add(var2.logicChildExpressions[0]);
                var and2 = new __WEBPACK_IMPORTED_MODULE_1__logic_and__["a" /* LogicAnd */]();
                and2.add(var1);
                and2.add(var2.logicChildExpressions[1]);
                actualLogicExpression.add(and1);
                actualLogicExpression.add(and2);
            }
        }
        for (var i = 0; i < actualLogicExpression.logicChildExpressions.length; i++) {
            actualLogicExpression.logicChildExpressions[i] = this.dissolveLogicAnd(actualLogicExpression.logicChildExpressions[i]);
        }
        return actualLogicExpression;
    };
    LogicTreeUtils.prototype.dissolveLogicNegs = function (actualLogicExpression) {
        if (actualLogicExpression.expressionType == "~") {
            var logicConjunction = actualLogicExpression.logicChildExpressions[0];
            var var1 = logicConjunction.logicChildExpressions[0];
            var var2 = logicConjunction.logicChildExpressions[1];
            if (logicConjunction.expressionType == "*") {
                actualLogicExpression = new __WEBPACK_IMPORTED_MODULE_0__logic_or__["a" /* LogicOr */]();
                actualLogicExpression.add(new __WEBPACK_IMPORTED_MODULE_2__logic_neg__["a" /* LogicNeg */](var1));
                actualLogicExpression.add(new __WEBPACK_IMPORTED_MODULE_2__logic_neg__["a" /* LogicNeg */](var2));
            }
            else if (logicConjunction.expressionType == "+") {
                actualLogicExpression = new __WEBPACK_IMPORTED_MODULE_1__logic_and__["a" /* LogicAnd */]();
                actualLogicExpression.add(new __WEBPACK_IMPORTED_MODULE_2__logic_neg__["a" /* LogicNeg */](var1));
                actualLogicExpression.add(new __WEBPACK_IMPORTED_MODULE_2__logic_neg__["a" /* LogicNeg */](var2));
            }
        }
        for (var i = 0; i < actualLogicExpression.logicChildExpressions.length; i++) {
            actualLogicExpression.logicChildExpressions[i] = this.dissolveLogicNegs(actualLogicExpression.logicChildExpressions[i]);
        }
        return actualLogicExpression;
    };
    return LogicTreeUtils;
}());

//# sourceMappingURL=logic-tree-utils.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logic_var__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logic_bracket_open__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logic_bracket_close__ = __webpack_require__(124);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShuntingYard; });



var ShuntingYard = (function () {
    function ShuntingYard() {
    }
    ShuntingYard.prototype.startAlgo = function (logicObjectPhrase) {
        var operands = new Array();
        var vars = new Array();
        for (var i = 0; i < logicObjectPhrase.length; i++) {
            if (logicObjectPhrase[i] instanceof __WEBPACK_IMPORTED_MODULE_0__logic_var__["a" /* LogicVar */]) {
                vars.push(logicObjectPhrase[i]);
            }
            else if (logicObjectPhrase[i] instanceof __WEBPACK_IMPORTED_MODULE_1__logic_bracket_open__["a" /* LogicBracketOpen */]) {
                operands.push(logicObjectPhrase[i]);
            }
            else if (logicObjectPhrase[i] instanceof __WEBPACK_IMPORTED_MODULE_2__logic_bracket_close__["a" /* LogicBracketClose */]) {
                while (operands.length != 0) {
                    var stackOperand = operands.pop();
                    if (stackOperand instanceof __WEBPACK_IMPORTED_MODULE_1__logic_bracket_open__["a" /* LogicBracketOpen */])
                        break;
                    vars.push(stackOperand);
                }
            }
            else {
                while (operands.length != 0) {
                    var stackOperand = operands.pop();
                    if (logicObjectPhrase[i].isLeftAssociative() && logicObjectPhrase[i].precedenceLessOrEqual(stackOperand)) {
                        vars.push(stackOperand);
                    }
                    else if (logicObjectPhrase[i].isRightAssociative() && logicObjectPhrase[i].precedenceLess(stackOperand)) {
                        vars.push(stackOperand);
                    }
                    else {
                        operands.push(stackOperand);
                        break;
                    }
                }
                operands.push(logicObjectPhrase[i]);
            }
        }
        while (operands.length != 0) {
            var stackOperand = operands.pop();
            vars.push(stackOperand);
        }
        return vars;
    };
    return ShuntingYard;
}());

//# sourceMappingURL=shunting-yard.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(238),
        styles: [__webpack_require__(232)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logic_phrase__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__string_methods__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicLogicPhraseParser; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BasicLogicPhraseParser = (function () {
    function BasicLogicPhraseParser() {
        this.logicPhrase = "";
        this.keyChars = ['(', ')', '+', '~', '*'];
    }
    /**
     * @brief parses the logicPhraseString and returns basic information
     * @param phrase
     * @returns {LogicPhrase}
     */
    BasicLogicPhraseParser.prototype.parse = function (phrase, extraVars) {
        var length = phrase.length;
        phrase = __WEBPACK_IMPORTED_MODULE_2__string_methods__["a" /* StringMethods */].replaceAll(phrase, " ", "");
        var varNames = this.getVarNames(phrase, extraVars);
        var logicPhrase = new __WEBPACK_IMPORTED_MODULE_1__logic_phrase__["a" /* LogicPhrase */](length, varNames, phrase);
        return logicPhrase;
    };
    /**
     * @brief returns all names of the included Variables (Anything between the keyChars)
     * @param phrase
     * @returns {string[]}
     */
    BasicLogicPhraseParser.prototype.getVarNames = function (phrase, extraVars) {
        var varNames = new Array();
        //Parse the extraVars
        for (var _i = 0, _a = extraVars.split(" "); _i < _a.length; _i++) {
            var varName = _a[_i];
            if (varName != "")
                varNames.push(varName);
        }
        //Parse the phrase
        var actualName = "";
        for (var _b = 0, phrase_1 = phrase; _b < phrase_1.length; _b++) {
            var char = phrase_1[_b];
            if (this.keyChars.includes(char)) {
                if (!varNames.includes(actualName) && actualName != "") {
                    varNames.push(actualName);
                }
                actualName = "";
            }
            else {
                actualName += char;
            }
        }
        if (actualName != "" && !varNames.includes(actualName)) {
            varNames.push(actualName);
        }
        varNames.sort(function (a, b) {
            if (a < b)
                return -1;
            if (a > b)
                return 1;
            return 0;
        });
        return varNames;
    };
    return BasicLogicPhraseParser;
}());
BasicLogicPhraseParser = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], BasicLogicPhraseParser);

//# sourceMappingURL=basic-logic-phrase-parser.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, ".colMargin{\n  margin-bottom: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <br>\n  <h1>\n    {{welcomeMessage}}\n  </h1>\n  <div class=\"row\">\n    <div class=\"col colMargin\"><app-logic-input #logicInput [kvDiagramCom]=\"kvDiagramCom\" [basicLogicPhraseInfoCom]=\"basicLogicPhraseInfoCom\"></app-logic-input></div>\n    <div class=\"col colMargin\"><app-basic-logic-phrase-info #basicLogicPhraseInfoCom></app-basic-logic-phrase-info></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12 colMargin\"><app-kvdiagramm #kvDiagramCom> </app-kvdiagramm></div>\n  </div>\n</div>\n"

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"card\">\n    <div class=\"card-block\">\n      <h4 class=\"card-title\">Information</h4>\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th>Key</th>\n            <th>Data</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <th scope=\"row\">Phrase</th>\n            <td>{{logicPhrase.phrase}}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Länge</th>\n            <td>{{logicPhrase.lengh}}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">VarNames</th>\n            <td>{{logicPhrase.varNames.toString()}}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">DNF</th>\n            <td>{{logicRootExpressionInDNF.phraseToStringWithoutBreakets()}}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Parsed tree</th>\n            <td>{{logicRootExpression.phraseToString()}}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Shunted Yard</th>\n            <td>{{logicRootExpression.shuntedPhrase.toString()}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n"

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">KV Diagramm</h4>\n    <canvas #kvDiagramCanvas width=\"1000\" height=\"1000\">\n    </canvas>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"card\">\n    <div class=\"card-block\">\n      <h4 class=\"card-title\">Logik input</h4>\n      <p class=\"card-text\">Trage hier die logischen Verknüpfungen ein</p>\n      <div class=\"form-group row\">\n        <label for=\"logicPhrase\" class=\"col-2 col-form-label\">Logik Phrase</label>\n        <div class=\"col-10\">\n          <textarea class=\"form-control\" [(ngModel)]=\"logicPhraseString\" type=\"textarea\" value=\"\" id=\"logicPhrase\">\n          </textarea>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"logicPhrase\" class=\"col-2 col-form-label\">Zusätzliche Variablen</label>\n        <div class=\"col-10\">\n          <textarea class=\"form-control\" [(ngModel)]=\"logicExtraVars\" type=\"textarea\" value=\"\" id=\"logicExtraVars\">\n          </textarea>\n        </div>\n\n        <div class=\"col-12\">\n          Hier kannst du zusätzliche Variablen angeben, falls der Logische Ausdruck nicht in der DNF sondern nur in  der DF ist.\n          (Trenne über \" \")\n        </div>\n\n      </div>\n      <div class=\"row\">\n        <br>\n        <div class=\"col-4\">\n          <button type=\"button\" (click)=\"parseLogicPhrase()\"  class=\"btn btn-primary\">Parse</button>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ 238:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>\n"

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(152);


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logic_expression_abstract__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogicVar; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var LogicVar = (function (_super) {
    __extends(LogicVar, _super);
    function LogicVar(name) {
        var _this = _super.call(this) || this;
        _this._value = false;
        _this._name = "";
        _this._parsed = true;
        _this._name = name;
        return _this;
    }
    Object.defineProperty(LogicVar.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LogicVar.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    LogicVar.prototype.toString = function () {
        return this._name;
    };
    LogicVar.prototype.phraseToString = function () {
        return this._name;
    };
    LogicVar.prototype.getResult = function () {
        return this._value;
    };
    return LogicVar;
}(__WEBPACK_IMPORTED_MODULE_0__logic_expression_abstract__["a" /* AbstractLogicExpression */]));

//# sourceMappingURL=logic-var.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringMethods; });
var StringMethods = (function () {
    function StringMethods() {
    }
    StringMethods.replaceAll = function (str, find, replace) {
        return str.replace(new RegExp(this.escapeRegExp(find), 'g'), replace);
    };
    StringMethods.escapeRegExp = function (str) {
        return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    };
    return StringMethods;
}());

//# sourceMappingURL=string-methods.js.map

/***/ })

},[267]);
//# sourceMappingURL=main.bundle.js.map