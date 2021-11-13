"use strict";
exports.__esModule = true;
exports.Ghost = void 0;
var Ghost = /** @class */ (function () {
    function Ghost() {
        var SexMaster = ["ชาย", "หญิง"];
        var AgeMaster = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
        var Location = ["บ้านร้าง", "ตึกร้าง", "บ้านคนตาย", "ทางสามแพร่ง"];
        var Why_Die = ["ฆ่าตัวตาย", "ฆาตกรรม", "ป่วยตาย", "ตายโหง"];
        var randomSex = SexMaster[Math.floor(Math.random() * SexMaster.length)];
        var randomAge = AgeMaster[Math.floor(Math.random() * AgeMaster.length)];
        var randomLocation = Location[Math.floor(Math.random() * Location.length)];
        var randomWhy_Die = Why_Die[Math.floor(Math.random() * Why_Die.length)];
        this.sex = randomSex;
        this.age = randomAge;
        this.location = randomLocation;
        this.why_die = randomWhy_Die;
    }
    Ghost.prototype.CheckProfile = function () {
        console.log("<===========Ghost============>");
        console.log("เขามีเพศ:" + this.sex);
        console.log("เขามีอายุ:" + this.age);
        console.log("เขาตายได้อย่างไร:" + this.why_die);
        console.log("เขาอยู่ที่:" + this.location);
        console.log("<============Ghost===========>");
    };
    return Ghost;
}());
exports.Ghost = Ghost;
