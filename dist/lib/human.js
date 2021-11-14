"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Human = void 0;
var Human = /** @class */ (function () {
    function Human() {
        var SexMaster = ["ชาย", "หญิง"];
        var AgeMaster = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
        var Sixth_Sense = [true, false];
        var Location = ["บ้านร้าง", "ตึกร้าง", "บ้านคนตาย", "ทางสามแพร่ง"];
        var randomSex = SexMaster[Math.floor(Math.random() * SexMaster.length)];
        var randomAge = AgeMaster[Math.floor(Math.random() * AgeMaster.length)];
        var randomSixth_Sense = Sixth_Sense[Math.floor(Math.random() * Sixth_Sense.length)];
        var randomLocation = Location[Math.floor(Math.random() * Location.length)];
        this.sex = randomSex;
        this.age = randomAge;
        this.sixth_sense = randomSixth_Sense;
        this.location = randomLocation;
    }
    Human.prototype.CheckSixthSense = function () {
        var status = false;
        if (this.sixth_sense === true) {
            status = true;
        }
        return status;
    };
    Human.prototype.CheckLocation = function (GhostLocation) {
        var status = false;
        if (this.location === GhostLocation) {
            status = true;
        }
        return status;
    };
    Human.prototype.CheckProfile = function () {
        console.log("<==========Human=============>");
        console.log("เขามีเพศ:" + this.sex);
        console.log("เขามีอายุ:" + this.age);
        console.log("เขามีสัมผัสที่ 6:" + this.sixth_sense);
        console.log("เขาอยู่ที่:" + this.location);
        console.log("<==========Human=============>");
    };
    return Human;
}());
exports.Human = Human;
