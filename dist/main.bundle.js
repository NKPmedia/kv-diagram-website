webpackJsonp([1,4],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phrase_logic_phrase__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logicExpression_logic_root_expression__ = __webpack_require__(130);
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
        this._logicRootExpressionInDF = new __WEBPACK_IMPORTED_MODULE_2__logicExpression_logic_root_expression__["a" /* LogicRootExpression */]();
        this.logicRootExpressionInDNF = new __WEBPACK_IMPORTED_MODULE_2__logicExpression_logic_root_expression__["a" /* LogicRootExpression */]();
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
    Object.defineProperty(BasicLogicPhraseInfoComponent.prototype, "logicRootExpressionInDF", {
        get: function () {
            return this._logicRootExpressionInDF;
        },
        set: function (value) {
            this._logicRootExpressionInDF = value;
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
        template: __webpack_require__(241),
        styles: [__webpack_require__(234)],
    }),
    __metadata("design:paramtypes", [])
], BasicLogicPhraseInfoComponent);

//# sourceMappingURL=basic-logic-phrase-info.component.js.map

/***/ }),

/***/ 123:
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

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kv_diagram_model_kv_diagram_generator__ = __webpack_require__(168);
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
        this.mouseInCanvas = false;
    }
    KVDiagramComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(KVDiagramComponent.prototype, "kvDiagram", {
        get: function () {
            return this._kvDiagram;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KVDiagramComponent.prototype, "logicInputCom", {
        get: function () {
            return this._logicInputCom;
        },
        set: function (value) {
            this._logicInputCom = value;
        },
        enumerable: true,
        configurable: true
    });
    KVDiagramComponent.prototype.parse = function (logicPhrase) {
        var generator = new __WEBPACK_IMPORTED_MODULE_1__kv_diagram_model_kv_diagram_generator__["a" /* KvDiagramGenerator */](logicPhrase);
        this._kvDiagram = generator.generateKVDiagram();
        this._kvDiagram.kvDiagramComponent = this;
        this._kvDiagram.fill(logicPhrase);
        this._kvDiagram.draw(this.canvasRef);
    };
    KVDiagramComponent.prototype.canvasMouseEnter = function () {
        this.mouseInCanvas = true;
    };
    KVDiagramComponent.prototype.canvasMouseLeave = function () {
        this.mouseInCanvas = false;
    };
    KVDiagramComponent.prototype.canvasMouseMove = function (event) {
        if (this.mouseInCanvas) {
            var rect = this.canvasRef.nativeElement.getBoundingClientRect();
            var x = event.clientX - rect.left;
            var y = event.clientY - rect.top;
            if (typeof this._kvDiagram !== "undefined") {
                this._kvDiagram.mouseOver(x, y);
            }
        }
        this.kvDiagram.drawGroups(this.canvasRef);
    };
    KVDiagramComponent.prototype.cklickedCanvas = function (event) {
        if (this.mouseInCanvas) {
            var rect = this.canvasRef.nativeElement.getBoundingClientRect();
            var x = event.clientX - rect.left;
            var y = event.clientY - rect.top;
            if (typeof this._kvDiagram !== "undefined") {
                this._kvDiagram.clicked(x, y);
            }
            this.kvDiagram.draw(this.canvasRef);
            this.kvDiagram.drawGroups(this.canvasRef);
        }
    };
    KVDiagramComponent.prototype.updateDNF = function (newDnf) {
        this._logicInputCom.updateDNF(newDnf);
    };
    KVDiagramComponent.prototype.newQMC = function (qmc) {
        this.kvDiagram.newQMC(qmc);
        this.kvDiagram.drawGroups(this.canvasRef);
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
        template: __webpack_require__(242),
        styles: [__webpack_require__(235)],
    }),
    __metadata("design:paramtypes", [])
], KVDiagramComponent);

var _a;
//# sourceMappingURL=kvdiagram.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logic_expression_abstract__ = __webpack_require__(17);
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

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logic_expression_abstract__ = __webpack_require__(17);
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

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logic_expression_abstract__ = __webpack_require__(17);
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

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logic_expression_abstract__ = __webpack_require__(17);
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

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logic_expression_abstract__ = __webpack_require__(17);
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

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logic_expression_abstract__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logic_var__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logic_and__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logic_or__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logic_neg__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logic_bracket_close__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logic_bracket_open__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shunting_yard__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__logic_tree_utils__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__phrase_string_methods__ = __webpack_require__(24);
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
        logicPhrase = __WEBPACK_IMPORTED_MODULE_10__phrase_string_methods__["a" /* StringMethods */].replaceAll(logicPhrase, " ", "");
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
    LogicRootExpression.prototype.toDF = function () {
        var logicTreeUtils = new __WEBPACK_IMPORTED_MODULE_9__logic_tree_utils__["a" /* LogicTreeUtils */]();
        this.logicChildExpressions[0] = logicTreeUtils.dissolveLogicNegs(this.logicChildExpressions[0]);
        this.logicChildExpressions[0] = logicTreeUtils.dissolveLogicAnd(this.logicChildExpressions[0]);
    };
    return LogicRootExpression;
}(__WEBPACK_IMPORTED_MODULE_0__logic_expression_abstract__["a" /* AbstractLogicExpression */]));

//# sourceMappingURL=logic-root-expression.js.map

/***/ }),

/***/ 131:
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

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__primimplikante__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phrase_string_methods__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QMC; });



var QMC = (function () {
    function QMC() {
        this._notCombinedPrimimplikanten = new Array();
        this._restMatrix = new Array();
        this._essentialPrimeImplicants = new Array();
        this._neededDcEquivalents = new Array();
        this._bestCoverage = new Array();
        this._notEssentialDcEquivalents = Array();
    }
    Object.defineProperty(QMC.prototype, "simplificationTable", {
        get: function () {
            return this._simplificationTable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QMC.prototype, "notEssentialDcEquivalents", {
        get: function () {
            return this._notEssentialDcEquivalents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QMC.prototype, "notCombinedPrimimplikanten", {
        get: function () {
            return this._notCombinedPrimimplikanten;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QMC.prototype, "restMatrix", {
        get: function () {
            return this._restMatrix;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QMC.prototype, "essentialPrimeImplicants", {
        get: function () {
            return this._essentialPrimeImplicants;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QMC.prototype, "neededDcEquivalents", {
        get: function () {
            return this._neededDcEquivalents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QMC.prototype, "bestCoverage", {
        get: function () {
            return this._bestCoverage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QMC.prototype, "existingDcEquivalebnts", {
        get: function () {
            return this._existingDcEquivalebnts;
        },
        enumerable: true,
        configurable: true
    });
    QMC.prototype.simplify = function (logicPhrase) {
        this.initSimplificationTable(logicPhrase.varCount());
        this.generatePrimimplikante(logicPhrase.phrase);
        var round = 1;
        while (true) {
            var newColume = this.combinePrimimplikants(round, logicPhrase.varCount());
            this.findNotCombinedPrimimplikantes(round - 1);
            if (!newColume) {
                this.simplificationTable.pop();
                break;
            }
            round++;
        }
        this.findMinimalExpression();
        return "";
    };
    QMC.prototype.generatePrimimplikante = function (phrase) {
        phrase = __WEBPACK_IMPORTED_MODULE_1__phrase_string_methods__["a" /* StringMethods */].cleanUpDNF(phrase);
        var conjunctionTerms = phrase.split("+");
        for (var _i = 0, conjunctionTerms_1 = conjunctionTerms; _i < conjunctionTerms_1.length; _i++) {
            var conjunctionTerm = conjunctionTerms_1[_i];
            var varNames = conjunctionTerm.split("*");
            var primiplikant = new __WEBPACK_IMPORTED_MODULE_0__primimplikante__["a" /* Primimplikante */](varNames);
            var amountPositivVars = primiplikant.amountOfPositivVars;
            this._simplificationTable[0][amountPositivVars].push(primiplikant);
        }
    };
    QMC.prototype.initSimplificationTable = function (amountVars) {
        this._simplificationTable = new Array();
        this._simplificationTable[0] = new Array();
        for (var i = 0; i <= amountVars; i++) {
            this._simplificationTable[0][i] = new Array();
        }
    };
    /**
     *
     * @param round
     * @return returns true if it created a new colume in the simplificationTable
     */
    QMC.prototype.combinePrimimplikants = function (round, amountVars) {
        this._simplificationTable[round] = new Array();
        var newColume = false;
        for (var i = 0; i <= amountVars - round; i++) {
            this._simplificationTable[round][i] = new Array();
        }
        for (var amountClassIndex = 0; amountClassIndex < this._simplificationTable[round - 1].length; amountClassIndex++) {
            for (var _i = 0, _a = this._simplificationTable[round - 1][amountClassIndex]; _i < _a.length; _i++) {
                var primimplikante = _a[_i];
                if (typeof this._simplificationTable[round - 1][amountClassIndex + 1] !== "undefined") {
                    for (var _b = 0, _c = this._simplificationTable[round - 1][amountClassIndex + 1]; _b < _c.length; _b++) {
                        var primimplikante2 = _c[_b];
                        var newPrimimplikante = primimplikante.combine(primimplikante2);
                        if (newPrimimplikante != null) {
                            newColume = true;
                            if (!this.allreadyExist(newPrimimplikante, this._simplificationTable[round][amountClassIndex])) {
                                this._simplificationTable[round][amountClassIndex].push(newPrimimplikante);
                            }
                            primimplikante2.usedForCombination = true;
                            primimplikante.usedForCombination = true;
                        }
                    }
                }
            }
        }
        return newColume;
    };
    QMC.prototype.findNotCombinedPrimimplikantes = function (round) {
        for (var _i = 0, _a = this._simplificationTable[round]; _i < _a.length; _i++) {
            var amountClass = _a[_i];
            for (var _b = 0, amountClass_1 = amountClass; _b < amountClass_1.length; _b++) {
                var primim = amountClass_1[_b];
                if (!primim.usedForCombination)
                    this._notCombinedPrimimplikanten.push(primim);
            }
        }
    };
    QMC.prototype.findMinimalExpression = function () {
        this.generateRestMatrix();
        this.findEssentialPrimeImplicants();
        this.actualPrimeImplicantCombination = __WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"](this._essentialPrimeImplicants);
        /**
         * lets start to solve the NP-complete problem XD
         * calculate slave
         */
        this._bestCoverage = this.findBestCovareg(this._neededDcEquivalents, this._essentialPrimeImplicants, __WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"](this._essentialPrimeImplicants));
    };
    QMC.prototype.generateRestMatrix = function () {
        this.existingDcEquivalents();
        var i = 0;
        for (var _i = 0, _a = this._notCombinedPrimimplikanten; _i < _a.length; _i++) {
            var primeImplicant = _a[_i];
            this._restMatrix[i] = new Array();
            for (var _b = 0, _c = this._existingDcEquivalebnts; _b < _c.length; _b++) {
                var dcEquivalent = _c[_b];
                if (primeImplicant.decEquivalents.indexOf(dcEquivalent) != -1)
                    this._restMatrix[i][dcEquivalent] = "x";
                else
                    this._restMatrix[i][dcEquivalent] = " ";
            }
            i++;
        }
    };
    QMC.prototype.findEssentialPrimeImplicants = function () {
        for (var _i = 0, _a = this._existingDcEquivalebnts; _i < _a.length; _i++) {
            var dcEquivalent = _a[_i];
            var amountOfCovareg = 0;
            var lastCoverPrimeImplicant = 0;
            var i = void 0;
            for (i = 0; i < this._notCombinedPrimimplikanten.length; i++) {
                if (this._restMatrix[i][dcEquivalent] == "x") {
                    amountOfCovareg++;
                    lastCoverPrimeImplicant = i;
                }
            }
            if (amountOfCovareg == 1) {
                if (this.essentialPrimeImplicants.indexOf(this._notCombinedPrimimplikanten[lastCoverPrimeImplicant]) == -1) {
                    this._essentialPrimeImplicants.push(this._notCombinedPrimimplikanten[lastCoverPrimeImplicant]);
                }
            }
            else {
                this._neededDcEquivalents.push(dcEquivalent);
                this._notEssentialDcEquivalents.push(dcEquivalent);
            }
        }
        //Delete all covered dcEquivalents
        for (var _b = 0, _c = this._essentialPrimeImplicants; _b < _c.length; _b++) {
            var implicant = _c[_b];
            for (var _d = 0, _e = implicant.decEquivalents; _d < _e.length; _d++) {
                var dcEquivalent = _e[_d];
                var index = this._neededDcEquivalents.indexOf(dcEquivalent, 0);
                if (index > -1) {
                    this._neededDcEquivalents.splice(index, 1);
                }
            }
        }
    };
    QMC.prototype.existingDcEquivalents = function () {
        this._existingDcEquivalebnts = new Array();
        for (var _i = 0, _a = this._notCombinedPrimimplikanten; _i < _a.length; _i++) {
            var primeImplicant = _a[_i];
            for (var _b = 0, _c = primeImplicant.decEquivalents; _b < _c.length; _b++) {
                var dcEquivalent = _c[_b];
                if (this._existingDcEquivalebnts.indexOf(dcEquivalent) == -1)
                    this._existingDcEquivalebnts.push(dcEquivalent);
            }
        }
        this._existingDcEquivalebnts.sort(function (n1, n2) {
            if (n1 > n2) {
                return 1;
            }
            if (n1 < n2) {
                return -1;
            }
            return 0;
        });
    };
    QMC.prototype.findBestCovareg = function (neededDcEquivalents, usedPrimImplicants, any) {
        var dcEquivalentToCover = neededDcEquivalents.pop();
        neededDcEquivalents.push(dcEquivalentToCover);
        var amountOfPrimeImplicants = 99999999999999999999;
        if (neededDcEquivalents.length == 0)
            return usedPrimImplicants;
        for (var _i = 0, _a = this._notCombinedPrimimplikanten; _i < _a.length; _i++) {
            var onePrimeImplicant = _a[_i];
            if (onePrimeImplicant.decEquivalents.indexOf(dcEquivalentToCover) != -1) {
                var newNeededDcEquivalents = __WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"](neededDcEquivalents);
                for (var _b = 0, _c = onePrimeImplicant.decEquivalents; _b < _c.length; _b++) {
                    var dcEquivalent = _c[_b];
                    var index = newNeededDcEquivalents.indexOf(dcEquivalent, 0);
                    if (index > -1) {
                        newNeededDcEquivalents.splice(index, 1);
                    }
                }
                var newNeededPrimImplicants = __WEBPACK_IMPORTED_MODULE_2_lodash__["cloneDeep"](usedPrimImplicants);
                newNeededPrimImplicants.push(onePrimeImplicant);
                var acutalUsedPrimImplicants = this.findBestCovareg(newNeededDcEquivalents, newNeededPrimImplicants, any);
                if (amountOfPrimeImplicants >= acutalUsedPrimImplicants.length) {
                    amountOfPrimeImplicants = acutalUsedPrimImplicants.length;
                    usedPrimImplicants = acutalUsedPrimImplicants;
                }
            }
        }
        return usedPrimImplicants;
    };
    QMC.prototype.allreadyExist = function (newPrimimplikante, param2) {
        for (var _i = 0, param2_1 = param2; _i < param2_1.length; _i++) {
            var prim = param2_1[_i];
            if (prim.toString() == newPrimimplikante.toString()) {
                return true;
            }
        }
        return false;
    };
    return QMC;
}());

//# sourceMappingURL=qmc.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__qmc_qmc__ = __webpack_require__(132);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QMCVisualizerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QMCVisualizerComponent = (function () {
    function QMCVisualizerComponent() {
        this.qmc = new __WEBPACK_IMPORTED_MODULE_1__qmc_qmc__["a" /* QMC */]();
    }
    QMCVisualizerComponent.prototype.ngOnInit = function () {
    };
    QMCVisualizerComponent.prototype.newQMC = function (qmc) {
        this.qmc = qmc;
    };
    QMCVisualizerComponent.prototype.getTableBackground = function (groupIndex) {
        if (groupIndex % 2 == 1)
            return "table-info";
        else
            return "";
    };
    QMCVisualizerComponent.prototype.getEssentialPrimBackground = function (indexI) {
        var prim = this.qmc.notCombinedPrimimplikanten[indexI];
        if (this.qmc.essentialPrimeImplicants.indexOf(prim) != -1)
            return "table-warning";
        else
            return "";
    };
    QMCVisualizerComponent.prototype.getEssentialPrimDcBackground = function (dcEq) {
        if (this.qmc.notEssentialDcEquivalents.indexOf(dcEq) == -1)
            return "table-warning";
        else
            return "";
    };
    return QMCVisualizerComponent;
}());
QMCVisualizerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-qmcvisualizer',
        template: __webpack_require__(245),
        styles: [__webpack_require__(238)]
    }),
    __metadata("design:paramtypes", [])
], QMCVisualizerComponent);

//# sourceMappingURL=qmcvisualizer.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 154;


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(179);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 165:
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
        template: __webpack_require__(240),
        styles: [__webpack_require__(233)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logic_input_logic_input_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navbar_navbar_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__basic_logic_phrase_info_basic_logic_phrase_info_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__kvdiagram_kvdiagram_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__qmcvisualizer_qmcvisualizer_component__ = __webpack_require__(133);
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
            __WEBPACK_IMPORTED_MODULE_10__qmcvisualizer_qmcvisualizer_component__["a" /* QMCVisualizerComponent */],
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

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KvDiagramEntry; });
var KvDiagramEntry = (function () {
    function KvDiagramEntry(xPos, yPos) {
        this.width = 50;
        this.varCombinationTag = Array();
        this.qmcGroups = new Array();
        this._xPos = xPos;
        this._yPos = yPos;
    }
    Object.defineProperty(KvDiagramEntry.prototype, "kvDiagram", {
        get: function () {
            return this._kvDiagram;
        },
        set: function (value) {
            this._kvDiagram = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KvDiagramEntry.prototype, "ctx", {
        get: function () {
            return this._ctx;
        },
        set: function (value) {
            this._ctx = value;
        },
        enumerable: true,
        configurable: true
    });
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
    Object.defineProperty(KvDiagramEntry.prototype, "mouseOn", {
        get: function () {
            return this._mouseOn;
        },
        set: function (value) {
            this._mouseOn = value;
            this.draw();
        },
        enumerable: true,
        configurable: true
    });
    KvDiagramEntry.prototype.draw = function () {
        this.ctx.beginPath();
        this.ctx.rect(this._xPos * this.width, this._yPos * this.width, this.width, this.width);
        if (this.mouseOn)
            this.ctx.fillStyle = "#D7D7D7";
        else
            this.ctx.fillStyle = "#FFFFFF";
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.fillStyle = "black";
        if (this.value == 1) {
            this.ctx.font = '25px sans-serif';
            this.ctx.fillText("1", (this._xPos) * this.width + 20, (this._yPos) * this.width + 40, this.width);
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
    KvDiagramEntry.prototype.getCombinationsAsString = function () {
        var combination = "";
        for (var _i = 0, _a = this.varCombinationTag; _i < _a.length; _i++) {
            var name = _a[_i];
            combination += "*" + name;
        }
        return combination.substr(1);
    };
    KvDiagramEntry.prototype.clicked = function () {
        if (this.value == 1)
            this.value = 0;
        else
            this.value = 1;
        this.kvDiagram.updatedMatrixValues();
    };
    KvDiagramEntry.prototype.addGroupBox = function (groupBox) {
        this.qmcGroups.push(groupBox);
    };
    KvDiagramEntry.prototype.startEnlargeGroupBoxes = function () {
        for (var _i = 0, _a = this.qmcGroups; _i < _a.length; _i++) {
            var groupBox = _a[_i];
            groupBox.point1.x = this.xPos;
            groupBox.point2.x = this.xPos;
            groupBox.point1.y = this.yPos;
            groupBox.point2.y = this.yPos;
            groupBox = this.enlargeGroupBoxes(groupBox);
            groupBox.assignedGroup.underGroups.push(groupBox);
        }
    };
    KvDiagramEntry.prototype.enlargeGroupBoxes = function (groupBox) {
        var i = 0;
        for (var _i = 0, _a = this.qmcGroups; _i < _a.length; _i++) {
            var entriesGroups = _a[_i];
            if (entriesGroups.assignedGroup == groupBox.assignedGroup) {
                i++;
                break;
            }
        }
        if (i == 0)
            return groupBox;
        if (this.combinationPartOfTag(groupBox.assignedGroup.primImplikant.vars)) {
            if (this.xPos < groupBox.point1.x)
                groupBox.point1.x = this.xPos;
            if (this.xPos > groupBox.point2.x)
                groupBox.point2.x = this.xPos;
            if (this.yPos < groupBox.point1.y)
                groupBox.point1.y = this.yPos;
            if (this.yPos > groupBox.point2.y)
                groupBox.point2.y = this.yPos;
            var i_1 = 0;
            for (var _b = 0, _c = this.qmcGroups; _b < _c.length; _b++) {
                var entriesGroups = _c[_b];
                if (entriesGroups.assignedGroup == groupBox.assignedGroup) {
                    this.qmcGroups.splice(i_1, 1);
                }
                i_1++;
            }
            for (var dx = -1; dx <= 1; dx++) {
                for (var dy = -1; dy <= 1; dy++) {
                    if ((Math.abs(dy) + Math.abs(dx)) != 2) {
                        if (this.kvDiagram.isOnDiagram(this.xPos + dx, this.yPos + dy)) {
                            groupBox = this.kvDiagram.kvMatrix[this.xPos + dx][this.yPos + dy].enlargeGroupBoxes(groupBox);
                        }
                    }
                }
            }
            return groupBox;
        }
        else {
            return groupBox;
        }
    };
    KvDiagramEntry.prototype.resetGroupBoxes = function () {
        this.qmcGroups = new Array();
    };
    return KvDiagramEntry;
}());

//# sourceMappingURL=kv-diagram-entry.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kv_diagram_entry__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__kvdiagram__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__kvdiagram_segment__ = __webpack_require__(169);
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

/***/ 169:
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

/***/ 17:
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

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__phrase_string_methods__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coordinate__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__qmc_group__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__qmc_group_box__ = __webpack_require__(176);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KVDiagram; });




var KVDiagram = (function () {
    function KVDiagram() {
        this._segments = Array();
        this.qmcGroups = new Array();
    }
    Object.defineProperty(KVDiagram.prototype, "kvDiagramComponent", {
        get: function () {
            return this._kvDiagramComponent;
        },
        set: function (value) {
            this._kvDiagramComponent = value;
        },
        enumerable: true,
        configurable: true
    });
    KVDiagram.prototype.addSegment = function (segment) {
        this._segments.push(segment);
    };
    Object.defineProperty(KVDiagram.prototype, "segments", {
        get: function () {
            return this._segments;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KVDiagram.prototype, "kvMatrix", {
        get: function () {
            return this._kvMatrix;
        },
        set: function (value) {
            this._kvMatrix = value;
            for (var _i = 0, _a = this.kvMatrix; _i < _a.length; _i++) {
                var xRow = _a[_i];
                for (var _b = 0, xRow_1 = xRow; _b < xRow_1.length; _b++) {
                    var entry = xRow_1[_b];
                    entry.kvDiagram = this;
                }
            }
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
            for (var _b = 0, xRow_2 = xRow; _b < xRow_2.length; _b++) {
                var entry = xRow_2[_b];
                entry.ctx = ctx;
                entry.draw();
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
            for (var _b = 0, xRow_3 = xRow; _b < xRow_3.length; _b++) {
                var entry = xRow_3[_b];
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
            for (var _b = 0, xRow_4 = xRow; _b < xRow_4.length; _b++) {
                var entry = xRow_4[_b];
                entry.genCombinationTags(this._segments);
            }
        }
    };
    KVDiagram.prototype.mouseOver = function (x, y) {
        if (typeof this.kvMatrix[0][0] !== "undefined") {
            var matrixX = Math.floor(x / this.kvMatrix[0][0].width);
            var matrixY = Math.floor(y / this.kvMatrix[0][0].width);
            if (matrixX < this.kvMatrix.length && matrixY < this.kvMatrix[0].length) {
                if (typeof this.lastMouseOnEntry === "undefined")
                    this.lastMouseOnEntry = this.kvMatrix[matrixX][matrixY];
                if (this.lastMouseOnEntry != this.kvMatrix[matrixX][matrixY]) {
                    this.lastMouseOnEntry.mouseOn = false;
                    this.lastMouseOnEntry = this.kvMatrix[matrixX][matrixY];
                }
                this.lastMouseOnEntry.mouseOn = true;
            }
        }
    };
    KVDiagram.prototype.clicked = function (x, y) {
        if (typeof this.kvMatrix[0][0] !== "undefined") {
            var matrixX = Math.floor(x / this.kvMatrix[0][0].width);
            var matrixY = Math.floor(y / this.kvMatrix[0][0].width);
            if (matrixX < this.kvMatrix.length && matrixY < this.kvMatrix[0].length) {
                this.kvMatrix[matrixX][matrixY].clicked();
            }
        }
    };
    KVDiagram.prototype.updatedMatrixValues = function () {
        var newDnf = this.generateDNFOutOfMatrix();
        this.kvDiagramComponent.updateDNF(newDnf);
    };
    KVDiagram.prototype.generateDNFOutOfMatrix = function () {
        var dnf = "";
        for (var _i = 0, _a = this.kvMatrix; _i < _a.length; _i++) {
            var xRow = _a[_i];
            for (var _b = 0, xRow_5 = xRow; _b < xRow_5.length; _b++) {
                var entry = xRow_5[_b];
                if (entry.value == 1) {
                    dnf += " + " + entry.getCombinationsAsString();
                }
            }
        }
        return dnf.substr(3);
    };
    KVDiagram.prototype.newQMC = function (qmc) {
        this.qmc = qmc;
        this.createQMCGroups();
        this.assignQMCGroups();
        this.findGroupBoxes();
    };
    KVDiagram.prototype.assignQMCGroups = function () {
        this.genCombinationTagsForEntries();
        var coordinates = Array();
        for (var _i = 0, _a = this.kvMatrix; _i < _a.length; _i++) {
            var xRow = _a[_i];
            for (var _b = 0, xRow_6 = xRow; _b < xRow_6.length; _b++) {
                var entry = xRow_6[_b];
                entry.resetGroupBoxes();
            }
        }
        for (var _c = 0, _d = this.kvMatrix; _c < _d.length; _c++) {
            var xRow = _d[_c];
            for (var _e = 0, xRow_7 = xRow; _e < xRow_7.length; _e++) {
                var entry = xRow_7[_e];
                for (var _f = 0, _g = this.qmcGroups; _f < _g.length; _f++) {
                    var group = _g[_f];
                    if (entry.combinationPartOfTag(group.primImplikant.vars)) {
                        entry.addGroupBox(new __WEBPACK_IMPORTED_MODULE_3__qmc_group_box__["a" /* GroupBox */](group));
                    }
                }
            }
        }
    };
    KVDiagram.prototype.findGroupBoxes = function () {
        for (var _i = 0, _a = this.kvMatrix; _i < _a.length; _i++) {
            var xRow = _a[_i];
            for (var _b = 0, xRow_8 = xRow; _b < xRow_8.length; _b++) {
                var entry = xRow_8[_b];
                entry.startEnlargeGroupBoxes();
            }
        }
    };
    KVDiagram.prototype.createQMCGroups = function () {
        this.qmcGroups = new Array();
        for (var _i = 0, _a = this.qmc.bestCoverage; _i < _a.length; _i++) {
            var group = _a[_i];
            this.qmcGroups.push(new __WEBPACK_IMPORTED_MODULE_2__qmc_group__["a" /* Group */](this.genRandomColor(), group));
        }
    };
    KVDiagram.prototype.isOnDiagram = function (x, y) {
        if (x < 0)
            return false;
        if (y < 0)
            return false;
        if (x >= this.kvMatrix.length)
            return false;
        if (y >= this.kvMatrix[0].length)
            return false;
        return true;
    };
    KVDiagram.prototype.genRandomColor = function () {
        var color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
            + Math.floor(Math.random() * 255) + ")";
        return color;
    };
    KVDiagram.prototype.drawGroups = function (canvasRef) {
        for (var _i = 0, _a = this.qmcGroups; _i < _a.length; _i++) {
            var group = _a[_i];
            group.draw(canvasRef);
        }
    };
    return KVDiagram;
}());

//# sourceMappingURL=kvdiagram.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phrase_basic_logic_phrase_parser__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic_logic_phrase_info_basic_logic_phrase_info_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__kvdiagram_kvdiagram_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__logicExpression_logic_root_expression__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__qmc_qmc__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__qmcvisualizer_qmcvisualizer_component__ = __webpack_require__(133);
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
        this.logicPhraseString = "a+b";
        this.logicExtraVars = "c d";
    }
    LogicInputComponent.prototype.ngOnInit = function () {
    };
    LogicInputComponent.prototype.parseLogicPhrase = function () {
        this.kvDiagramCom.logicInputCom = this;
        var separatedVariableString = this.separateVariables(this.logicPhraseString);
        var logicRootExpression = new __WEBPACK_IMPORTED_MODULE_4__logicExpression_logic_root_expression__["a" /* LogicRootExpression */]();
        logicRootExpression.parseLogicString(separatedVariableString);
        var logicExpressionInDF = __WEBPACK_IMPORTED_MODULE_5_lodash__["cloneDeep"](logicRootExpression);
        logicExpressionInDF.toDF();
        this.basicLogicPhraseInfoCom.logicRootExpression = logicRootExpression;
        this.basicLogicPhraseInfoCom.logicRootExpressionInDF = logicExpressionInDF;
        this.logicDFPhrase = this.basicLogicPhraseParser.parse(logicExpressionInDF.phraseToStringWithoutBreakets(), this.logicExtraVars);
        this.logicPhrase = this.basicLogicPhraseParser.parse(separatedVariableString, this.logicExtraVars);
        this.basicLogicPhraseInfoCom.logicPhrase = this.logicPhrase;
        this.kvDiagramCom.parse(this.logicDFPhrase);
        this.updateDNF(this.kvDiagramCom.kvDiagram.generateDNFOutOfMatrix());
        var qmc = new __WEBPACK_IMPORTED_MODULE_6__qmc_qmc__["a" /* QMC */]();
        qmc.simplify(this.basicLogicPhraseParser.parse(this.kvDiagramCom.kvDiagram.generateDNFOutOfMatrix(), this.logicExtraVars));
        this.qmcVisualizerCom.newQMC(qmc);
    };
    LogicInputComponent.prototype.updateDNF = function (newDnf) {
        var logicRootExpression = new __WEBPACK_IMPORTED_MODULE_4__logicExpression_logic_root_expression__["a" /* LogicRootExpression */]();
        logicRootExpression.parseLogicString(newDnf);
        this.basicLogicPhraseInfoCom.logicRootExpressionInDNF = logicRootExpression;
        var qmc = new __WEBPACK_IMPORTED_MODULE_6__qmc_qmc__["a" /* QMC */]();
        qmc.simplify(this.basicLogicPhraseParser.parse(newDnf, this.logicExtraVars));
        this.qmcVisualizerCom.newQMC(qmc);
        this.kvDiagramCom.newQMC(qmc);
    };
    LogicInputComponent.prototype.separateVariables = function (oldString) {
        var result = "";
        var last = "";
        for (var i = 0; i < oldString.length; i++) {
            var curr = oldString.charAt(i);
            if ((curr.match(/([a-zA-Z]+)/) != null || curr == "~") && last.match(/([a-zA-Z]+)/)) {
                result += "*" + curr;
            }
            else if ((curr.match(/([\(]+)/) != null || curr == "~") && last.match(/([a-zA-Z]+)/)) {
                result += "*" + curr;
            }
            else if ((curr.match(/([a-zA-Z]+)/) != null || curr == "~") && last.match(/([\)]+)/)) {
                result += "*" + curr;
            }
            else {
                result += curr;
            }
            last = curr;
        }
        return result;
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
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__qmcvisualizer_qmcvisualizer_component__["a" /* QMCVisualizerComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__qmcvisualizer_qmcvisualizer_component__["a" /* QMCVisualizerComponent */]) === "function" && _c || Object)
], LogicInputComponent.prototype, "qmcVisualizerCom", void 0);
LogicInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Component */])({
        selector: 'app-logic-input',
        template: __webpack_require__(243),
        styles: [__webpack_require__(236)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__phrase_basic_logic_phrase_parser__["a" /* BasicLogicPhraseParser */]]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__phrase_basic_logic_phrase_parser__["a" /* BasicLogicPhraseParser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__phrase_basic_logic_phrase_parser__["a" /* BasicLogicPhraseParser */]) === "function" && _d || Object])
], LogicInputComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=logic-input.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logic_or__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logic_and__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logic_neg__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__logic_var__ = __webpack_require__(55);
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

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logic_var__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logic_bracket_open__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logic_bracket_close__ = __webpack_require__(126);
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

/***/ 174:
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
        template: __webpack_require__(244),
        styles: [__webpack_require__(237)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logic_phrase__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__string_methods__ = __webpack_require__(24);
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

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__kv_diagram_model_coordinate__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupBox; });

var GroupBox = (function () {
    function GroupBox(assignedGroup) {
        this._point1 = new __WEBPACK_IMPORTED_MODULE_0__kv_diagram_model_coordinate__["a" /* Coordinate */](0, 0);
        this._point2 = new __WEBPACK_IMPORTED_MODULE_0__kv_diagram_model_coordinate__["a" /* Coordinate */](0, 0);
        this.generalWidth = 50;
        this._assignedGroup = assignedGroup;
    }
    Object.defineProperty(GroupBox.prototype, "point1", {
        get: function () {
            return this._point1;
        },
        set: function (value) {
            this._point1 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupBox.prototype, "point2", {
        get: function () {
            return this._point2;
        },
        set: function (value) {
            this._point2 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupBox.prototype, "assignedGroup", {
        get: function () {
            return this._assignedGroup;
        },
        set: function (value) {
            this._assignedGroup = value;
        },
        enumerable: true,
        configurable: true
    });
    GroupBox.prototype.draw = function (canvasRef) {
        var ctx = canvasRef.nativeElement.getContext('2d');
        var width = this.point2.x - this.point1.x + 1;
        var height = this.point2.y - this.point1.y + 1;
        ctx.fillStyle = this.assignedGroup.color;
        ctx.strokeStyle = this.assignedGroup.color;
        ctx.lineWidth = 4;
        this.roundRect(ctx, (this.point1.x * this.generalWidth) + 4, (this.point1.y * this.generalWidth) + 4, (width * this.generalWidth) - 8, (height * this.generalWidth) - 8, 5, false, true);
        ctx.fillStyle = "black";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
    };
    /**
     * Draws a rounded rectangle using the current state of the canvas.
     * If you omit the last three params, it will draw a rectangle
     * outline with a 5 pixel border radius
     * @param {CanvasRenderingContext2D} ctx
     * @param {Number} x The top left x coordinate
     * @param {Number} y The top left y coordinate
     * @param {Number} width The width of the rectangle
     * @param {Number} height The height of the rectangle
     * @param {Number} [radius = 5] The corner radius; It can also be an object
     *                 to specify different radii for corners
     * @param {Number} [radius.tl = 0] Top left
     * @param {Number} [radius.tr = 0] Top right
     * @param {Number} [radius.br = 0] Bottom right
     * @param {Number} [radius.bl = 0] Bottom left
     * @param {Boolean} [fill = false] Whether to fill the rectangle.
     * @param {Boolean} [stroke = true] Whether to stroke the rectangle.
     */
    GroupBox.prototype.roundRect = function (ctx, x, y, width, height, radius, fill, stroke) {
        if (typeof stroke == 'undefined') {
            stroke = true;
        }
        if (typeof radius === 'undefined') {
            radius = 5;
        }
        if (typeof radius === 'number') {
            radius = { tl: radius, tr: radius, br: radius, bl: radius };
        }
        else {
            var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
            for (var side in defaultRadius) {
                radius[side] = radius[side] || defaultRadius[side];
            }
        }
        ctx.beginPath();
        ctx.moveTo(x + radius.tl, y);
        ctx.lineTo(x + width - radius.tr, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
        ctx.lineTo(x + width, y + height - radius.br);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
        ctx.lineTo(x + radius.bl, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
        ctx.lineTo(x, y + radius.tl);
        ctx.quadraticCurveTo(x, y, x + radius.tl, y);
        ctx.closePath();
        if (fill) {
            ctx.fill();
        }
        if (stroke) {
            ctx.stroke();
        }
    };
    return GroupBox;
}());

//# sourceMappingURL=group-box.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Group; });
var Group = (function () {
    function Group(color, primImplikant) {
        this._color = "";
        this._underGroups = new Array();
        this._color = color;
        this._primImplikant = primImplikant;
    }
    Object.defineProperty(Group.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "primImplikant", {
        get: function () {
            return this._primImplikant;
        },
        set: function (value) {
            this._primImplikant = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "underGroups", {
        get: function () {
            return this._underGroups;
        },
        set: function (value) {
            this._underGroups = value;
        },
        enumerable: true,
        configurable: true
    });
    Group.prototype.draw = function (canvasRef) {
        for (var _i = 0, _a = this.underGroups; _i < _a.length; _i++) {
            var underGroup = _a[_i];
            underGroup.draw(canvasRef);
        }
    };
    return Group;
}());

//# sourceMappingURL=group.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__phrase_string_methods__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Primimplikante; });

var Primimplikante = (function () {
    function Primimplikante(varNames, decEquivalents) {
        if (decEquivalents === void 0) { decEquivalents = new Array(); }
        this._vars = new Array();
        this._amountOfPositivVars = 0;
        this.onlyPositivars = new Array();
        this._usedForCombination = false;
        this._decEquivalents = Array();
        this._decEquivalents = decEquivalents;
        for (var _i = 0, varNames_1 = varNames; _i < varNames_1.length; _i++) {
            var varName = varNames_1[_i];
            this._vars.push(varName);
            this.onlyPositivars.push(__WEBPACK_IMPORTED_MODULE_0__phrase_string_methods__["a" /* StringMethods */].replaceAll(varName, "~", ""));
            if (!(varName.indexOf("~") >= 0))
                this._amountOfPositivVars++;
        }
        if (this._decEquivalents.length == 0)
            this.genDecEquivalent();
    }
    Primimplikante.prototype.toString = function () {
        var string = "";
        for (var _i = 0, _a = this._vars; _i < _a.length; _i++) {
            var vars = _a[_i];
            string += vars;
        }
        return string;
    };
    Primimplikante.prototype.getDcEquivalentsString = function () {
        var string = "";
        for (var _i = 0, _a = this.decEquivalents; _i < _a.length; _i++) {
            var vars = _a[_i];
            string += vars + " ";
        }
        return string;
    };
    Object.defineProperty(Primimplikante.prototype, "vars", {
        get: function () {
            return this._vars;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Primimplikante.prototype, "decEquivalents", {
        get: function () {
            return this._decEquivalents;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Primimplikante.prototype, "usedForCombination", {
        get: function () {
            return this._usedForCombination;
        },
        set: function (value) {
            this._usedForCombination = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Primimplikante.prototype, "amountOfPositivVars", {
        get: function () {
            return this._amountOfPositivVars;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @brief returns a simplification of both primimplikante or null if you cant combine them
     * @param primimplikante2
     */
    Primimplikante.prototype.combine = function (primimplikante2) {
        var hammingDistance = 0;
        var varsOfNewPrimimplikante = Array();
        if (!this.representSameVars(primimplikante2))
            return null;
        for (var _i = 0, _a = this._vars; _i < _a.length; _i++) {
            var varName = _a[_i];
            for (var _b = 0, _c = primimplikante2._vars; _b < _c.length; _b++) {
                var varName2 = _c[_b];
                if (this.sameVar(varName, varName2)) {
                    if (varName2 == varName) {
                        varsOfNewPrimimplikante.push(varName);
                    }
                    else {
                        hammingDistance++;
                    }
                }
            }
        }
        var decEquivalents = this.decEquivalents.concat(primimplikante2.decEquivalents);
        if (hammingDistance == 1)
            return new Primimplikante(varsOfNewPrimimplikante, decEquivalents);
        return null;
    };
    Primimplikante.prototype.sameVar = function (varName, varName2) {
        var varN2 = __WEBPACK_IMPORTED_MODULE_0__phrase_string_methods__["a" /* StringMethods */].replaceAll(varName2, "~", "");
        var varN = __WEBPACK_IMPORTED_MODULE_0__phrase_string_methods__["a" /* StringMethods */].replaceAll(varName, "~", "");
        if (varN == varN2)
            return true;
        return false;
    };
    Primimplikante.prototype.representSameVars = function (primimplikante2) {
        for (var _i = 0, _a = this.onlyPositivars; _i < _a.length; _i++) {
            var varN = _a[_i];
            if (primimplikante2.onlyPositivars.indexOf(varN) == -1)
                return false;
        }
        return true;
    };
    Primimplikante.prototype.sortVars = function () {
        this._vars = this._vars.sort(function (n1, n2) {
            n1 = __WEBPACK_IMPORTED_MODULE_0__phrase_string_methods__["a" /* StringMethods */].replaceAll(n1, "~", "");
            n2 = __WEBPACK_IMPORTED_MODULE_0__phrase_string_methods__["a" /* StringMethods */].replaceAll(n2, "~", "");
            if (n1 > n2) {
                return 1;
            }
            if (n1 < n2) {
                return -1;
            }
            return 0;
        });
    };
    Primimplikante.prototype.genDecEquivalent = function () {
        this.sortVars();
        this._decEquivalents[0] = 0;
        var exponent = 0;
        for (var _i = 0, _a = this._vars; _i < _a.length; _i++) {
            var varName = _a[_i];
            if (varName.indexOf("~") == -1)
                this._decEquivalents[0] += Math.pow(2, exponent);
            exponent++;
        }
    };
    return Primimplikante;
}());

//# sourceMappingURL=primimplikante.js.map

/***/ }),

/***/ 179:
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

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".colMargin{\n  margin-bottom: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 24:
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
    StringMethods.cleanUpDNF = function (phrase) {
        phrase = StringMethods.replaceAll(phrase, " ", "");
        phrase = StringMethods.replaceAll(phrase, "(", "");
        phrase = StringMethods.replaceAll(phrase, ")", "");
        return phrase;
    };
    return StringMethods;
}());

//# sourceMappingURL=string-methods.js.map

/***/ }),

/***/ 240:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <br>\n  <h1>\n    {{welcomeMessage}}\n  </h1>\n  <div class=\"row\">\n    <div class=\"col colMargin\">\n      <app-logic-input\n        #logicInput\n        [kvDiagramCom]=\"kvDiagramCom\"\n        [basicLogicPhraseInfoCom]=\"basicLogicPhraseInfoCom\"\n        [qmcVisualizerCom]=\"qcmvisualizercom\">\n      </app-logic-input>\n    </div>\n    <div class=\"col colMargin\"><app-basic-logic-phrase-info #basicLogicPhraseInfoCom></app-basic-logic-phrase-info></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12 colMargin\"><app-kvdiagramm #kvDiagramCom> </app-kvdiagramm></div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12 colMargin\"><app-qmcvisualizer #qcmvisualizercom> </app-qmcvisualizer></div>\n  </div>\n</div>\n"

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"card\">\n    <div class=\"card-block\">\n      <h4 class=\"card-title\">Information</h4>\n      <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th>Key</th>\n            <th>Data</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <th scope=\"row\">Phrase</th>\n            <td>{{logicPhrase.phrase}}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Länge</th>\n            <td>{{logicPhrase.lengh}}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">VarNames</th>\n            <td>{{logicPhrase.varNames.toString()}}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">DF</th>\n            <td>{{logicRootExpressionInDF.phraseToStringWithoutBreakets()}}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">DNF</th>\n            <td>{{logicRootExpressionInDNF.phraseToStringWithoutBreakets()}}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Parsed tree</th>\n            <td>{{logicRootExpression.phraseToString()}}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Shunting Yard</th>\n            <td>{{logicRootExpression.shuntedPhrase.toString()}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n"

/***/ }),

/***/ 242:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">KV Diagramm</h4>\n    <canvas (click)=\"cklickedCanvas($event)\" (mousemove)=\"canvasMouseMove($event)\"  (mouseenter)=\"canvasMouseEnter()\" (mouseleave)=\"canvasMouseLeave()\"\n            #kvDiagramCanvas width=\"1000\" height=\"800\">\n    </canvas>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 243:
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"card\">\n    <div class=\"card-block\">\n      <h4 class=\"card-title\">Logik input</h4>\n      <p class=\"card-text\">Trage hier die logischen Verknüpfungen ein</p>\n      <div class=\"form-group row\">\n        <label for=\"logicPhrase\" class=\"col-2 col-form-label\">Logik Phrase</label>\n        <div class=\"col-10\">\n          <textarea class=\"form-control\" [(ngModel)]=\"logicPhraseString\" type=\"textarea\" value=\"\" id=\"logicPhrase\" >\n          </textarea>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"logicPhrase\" class=\"col-2 col-form-label\">Zusätzliche Variablen</label>\n        <div class=\"col-10\">\n          <textarea class=\"form-control\" [(ngModel)]=\"logicExtraVars\" type=\"textarea\" value=\"\" id=\"logicExtraVars\">\n          </textarea>\n        </div>\n\n        <div class=\"col-12\">\n          Hier kannst du zusätzliche Variablen angeben, falls der Logische Ausdruck nicht in der DNF sondern nur in  der DF ist.\n          (Trenne über \" \")\n        </div>\n\n      </div>\n      <div class=\"row\">\n        <br>\n        <div class=\"col-4\">\n          <button type=\"button\" (click)=\"parseLogicPhrase()\"  class=\"btn btn-primary\">Parse</button>\n        </div>\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ 244:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">KV-Toolbox</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-block\">\n    <h4 class=\"card-title\">QMC</h4>\n\n    <div class=\"row\">\n      <h5 class=\"col-md-12\">Vereinfachungstabelle</h5>\n      <ng-container *ngFor= \"let table of qmc.simplificationTable; let myIndex = index\">\n        <div class=\"col-md-4\">\n          <table class=\"table table-bordered\">\n            <thead>\n              <tr scope=\"row\">\n                <th>Group</th>\n                <th>DCEq.</th>\n                <th>Prim.</th>\n                <th>Used</th>\n              </tr>\n            </thead>\n\n            <tbody>\n              <ng-container *ngFor= \"let group of table let groupIndex = index\">\n                <ng-container *ngFor= \"let primeImplicant of group\">\n                  <ng-container></ng-container>\n                  <tr class=\"{{getTableBackground(groupIndex)}}\" scope=\"row\">\n                    <th>\n                      {{groupIndex}}\n                    </th>\n                    <td>\n                      {{primeImplicant.getDcEquivalentsString()}}\n                    </td>\n                    <td>\n                      {{primeImplicant.toString()}}\n                    </td>\n                    <td>\n                      <ng-container *ngIf=\"primeImplicant._usedForCombination\">\n                        &#10004;\n                      </ng-container>\n                      <ng-container *ngIf=\"!primeImplicant._usedForCombination\">\n                        &#10008;\n                      </ng-container>\n                    </td>\n                  </tr>\n                </ng-container>\n              </ng-container>\n            </tbody>\n\n          </table>\n        </div>\n\n      </ng-container>\n    </div>\n\n    <div class=\"row\">\n      <h5 class=\"col-md-12\">Auswahl der wesentlichen Primimplikanten</h5>\n      <div class=\"col-md-4\">\n        <table class=\"table table-bordered\">\n          <thead>\n          <tr scope=\"row\">\n            <th>Prim/DCEq</th>\n            <ng-container *ngFor=\"let dcEq of qmc.existingDcEquivalebnts\">\n              <th>{{dcEq}}</th>\n            </ng-container>\n          </tr>\n          </thead>\n\n          <tbody>\n            <ng-container *ngFor=\"let prim of qmc.restMatrix; let indexI = index\">\n                <tr scope=\"row\">\n                  <td class=\"{{getEssentialPrimBackground(indexI)}}\">\n                    {{qmc.notCombinedPrimimplikanten[indexI]}}\n                  </td>\n                  <ng-container *ngFor=\"let dcEq of prim; let dcEqNumber = index\">\n                    <ng-container *ngIf=\"dcEq\">\n                      <td class=\"{{getEssentialPrimDcBackground(dcEqNumber)}}\">\n                        {{dcEq}}\n                      </td>\n                    </ng-container>\n\n                  </ng-container>\n                </tr>\n            </ng-container>\n          </tbody>\n\n        </table>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <h5 class=\"col-md-12\">Minimale Form</h5>\n      <div class=\"col-md-4\">\n        <ng-container *ngFor=\"let prim of qmc.bestCoverage; let indexI = index\">\n          {{prim.toString()}} +\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(155);


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logic_expression_abstract__ = __webpack_require__(17);
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

/***/ })

},[274]);
//# sourceMappingURL=main.bundle.js.map