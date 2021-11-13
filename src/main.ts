import { Human } from "./lib/human";


let SexMaster:string[] = ["ชาย","หญิง"]
let AgeMaster:number[] = [14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]
let Sixth_Sense:boolean[] = [true,false]
let Location:string[] = ["บ้านร้าง","ตึกร้าง","บ้านคนตาย","ทางสามแพร่ง"]
const randomSex:string = SexMaster[Math.floor(Math.random() * SexMaster.length)];
const randomAge:number = AgeMaster[Math.floor(Math.random() * AgeMaster.length)];
const randomSixth_Sense:boolean = Sixth_Sense[Math.floor(Math.random() * Sixth_Sense.length)];
const randomLocation:string = Location[Math.floor(Math.random() * Location.length)];
console.log("อยากรู้: " + randomSex,randomAge,randomSixth_Sense,randomLocation);


const superHuman = new Human(randomSex,randomAge,randomSixth_Sense,randomLocation);
superHuman.CheckProfile()
let CheckCondition: boolean = superHuman.CheckCondition()
console.log("Deserve to meet : "+ CheckCondition);



