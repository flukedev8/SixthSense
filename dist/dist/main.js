"use strict";
exports.__esModule = true;
var human_1 = require("./lib/human");
var temp = {
    sex: "ชาย",
    age: 20,
    sixth_sense: true,
    location: "บ้าน"
};
var SexMaster = ["ชาย", "หญิง"];
var AgeMaster = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
var Sixth_Sense = [true, false];
var Location = ["บ้านร้าง", "ตึกร้าง", "บ้านคนตาย", "ทางสามแพร่ง"];
var randomSex = SexMaster[Math.floor(Math.random() * SexMaster.length)];
var randomAge = AgeMaster[Math.floor(Math.random() * AgeMaster.length)];
var randomSixth_Sense = Sixth_Sense[Math.floor(Math.random() * Sixth_Sense.length)];
var randomLocation = Location[Math.floor(Math.random() * Location.length)];
console.log("อยากรู้: " + randomSex, randomAge, randomSixth_Sense, randomLocation);
var superHuman = new human_1.Human(temp.sex, temp.age, temp.sixth_sense, temp.location);
superHuman.CheckProfile();
var CheckCondition = superHuman.CheckCondition();
console.log("Deserve to meet : " + CheckCondition);
