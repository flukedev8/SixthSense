import { Human } from "./lib/human";
import { Ghost } from "./lib/ghost";


const dietoGhost = new Ghost();
let year:number = 0 ; 

while(true){
    const findHuman = new Human();
    findHuman.CheckProfile();
    console.log("<-------------finding-------------->\n");
    year++ 
    if(findHuman.CheckLocation(dietoGhost.location) && findHuman.CheckSixthSense()){
        console.log("\n<-------- Match and Open Data ------------->");
        console.log("ใช้เวลา: "+year+" ปี")
        findHuman.CheckProfile(); 
        dietoGhost.CheckProfile();
        break
    } 
}



