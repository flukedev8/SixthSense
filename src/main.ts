import { Human } from "./lib/human";
import { Ghost } from "./lib/ghost";

while(true){
    const dietoGhost = new Ghost();
    const findHuman = new Human();
    findHuman.CheckProfile()
    if(findHuman.CheckLocation(dietoGhost.location) && findHuman.CheckSixthSense){
        dietoGhost.CheckProfile()
        break
    } 
}



