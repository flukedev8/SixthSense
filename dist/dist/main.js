"use strict";
exports.__esModule = true;
var human_1 = require("./lib/human");
var ghost_1 = require("./lib/ghost");
var dietoGhost = new ghost_1.Ghost();
var year = 0;
while (true) {
    var findHuman = new human_1.Human();
    findHuman.CheckProfile();
    console.log("<-------------finding-------------->\n");
    year++;
    if (findHuman.CheckLocation(dietoGhost.location) && findHuman.CheckSixthSense()) {
        console.log("\n<--------Match------------->");
        console.log("ใช้เวลา: " + year + " ปี");
        findHuman.CheckProfile();
        dietoGhost.CheckProfile();
        break;
    }
}
