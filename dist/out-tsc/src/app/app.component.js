import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app2';
        this.actions = ['*', '+', '-'];
        this.countGoodAnswers = 0;
        this.countExercise = 0;
    }
    AppComponent.prototype.newExercise = function () {
        this.num1 = Math.floor(Math.random() * 10);
        this.num2 = Math.floor(Math.random() * 10);
        this.action = this.actions[Math.floor(Math.random() * 3)];
        this.countExercise++;
    };
    AppComponent.prototype.check = function (ans) {
        switch (this.action) {
            case '-': {
                if (ans == this.num1 - this.num2)
                    this.countGoodAnswers++;
            }
            case '*': {
                if (ans == this.num1 * this.num2)
                    this.countGoodAnswers++;
            }
            case '%': {
                if (ans == this.num1 % this.num2)
                    this.countGoodAnswers++;
            }
            case '+': {
                if (ans == this.num1 + this.num2)
                    this.countGoodAnswers++;
            }
        }
    };
    AppComponent.prototype.finish = function () {
        this.percent = Math.floor((this.countGoodAnswers / this.countExercise) * 100);
        this.countExercise = 0;
        this.countGoodAnswers = 0;
    };
    AppComponent.prototype.getColor = function () {
        if (this.percent > 80)
            return "green";
        else if (this.percent > 60)
            return "orange";
        else
            return "red";
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map