"use strict";
exports.__esModule = true;
var human_1 = require("./lib/human");
var ghost_1 = require("./lib/ghost");
while (true) {
    var dietoGhost = new ghost_1.Ghost();
    var findHuman = new human_1.Human();
    findHuman.CheckProfile();
    if (findHuman.CheckLocation(dietoGhost.location) && findHuman.CheckSixthSense) {
        dietoGhost.CheckProfile();
        break;
    }
}
