export class Human {
    sex: string;
    age: number;
    sixth_sense: boolean;
    location: string;

    constructor() {
        let SexMaster:string[] = ["ชาย","หญิง"]
        let AgeMaster:number[] = [14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]
        let Sixth_Sense:boolean[] = [true,false]
        let Location:string[] = ["บ้านร้าง","ตึกร้าง","บ้านคนตาย","ทางสามแพร่ง"]
        const randomSex:string = SexMaster[Math.floor(Math.random() * SexMaster.length)];
        const randomAge:number = AgeMaster[Math.floor(Math.random() * AgeMaster.length)];
        const randomSixth_Sense:boolean = Sixth_Sense[Math.floor(Math.random() * Sixth_Sense.length)];
        const randomLocation:string = Location[Math.floor(Math.random() * Location.length)]
        this.sex = randomSex;
        this.age = randomAge;
        this.sixth_sense = randomSixth_Sense;
        this.location = randomLocation;
    }

    CheckSixthSense():boolean {
        let status:boolean = false
        if (this.sixth_sense === true){
            status = true
        }
        return status
    }
    CheckLocation(GhostLocation:string):boolean {
        let status:boolean = false
        if (this.location === GhostLocation){
            status = true
        }
        return status
    }


    CheckProfile():void {
        console.log("<==========Human=============>");
        console.log("เขามีเพศ:"+ this.sex );
        console.log("เขามีอายุ:"+ this.age );
        console.log("เขามีสัมผัสที่ 6:"+ this.sixth_sense );
        console.log("เขาอยู่ที่:"+ this.location );
        console.log("<==========Human=============>");
    }

}

