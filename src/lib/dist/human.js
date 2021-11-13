"use strict";
exports.__esModule = true;
exports.Human = void 0;
var Human = /** @class */ (function () {
    function Human(Sex, Age, Sixth_Sense, Location) {
        this.sex = Sex;
        this.age = Age;
        this.sixth_sense = Sixth_Sense;
        this.location = Location;
    }
    Human.prototype.CheckSex = function () {
        var status = false;
        if (this.sex === 'ชาย') {
            status = true;
        }
        return status;
    };
    Human.prototype.CheckAge = function () {
        var status = false;
        if (this.age > 18) {
            status = true;
        }
        return status;
    };
    Human.prototype.CheckSixthSense = function () {
        var status = false;
        if (this.sixth_sense === true) {
            status = true;
        }
        return status;
    };
    Human.prototype.CheckProfile = function () {
        console.log("เขามีเพศ: " + this.sex);
        console.log("เขามีอายุ: " + this.age + "\tผลคือ :" + this.CheckAge());
        console.log("เขามีสัมผัสที่ 6: " + this.sixth_sense + "\tผลคือ :" + this.CheckSixthSense());
        console.log("เขาอยู่ที่: " + this.location);
    };
    Human.prototype.CheckCondition = function () {
        if (this.CheckAge() && this.CheckSixthSense()) {
            return true;
        }
        else {
            return false;
        }
    };
    return Human;
}());
exports.Human = Human;
