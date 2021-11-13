export class Ghost {
    sex: string;
    age: number;
    location: string;
    why_die: string;

    constructor() {
        let SexMaster:string[] = ["ชาย","หญิง"]
        let AgeMaster:number[] = [14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]
        let Location:string[] = ["บ้านร้าง","ตึกร้าง","บ้านคนตาย","ทางสามแพร่ง"]
        let Why_Die:string[] = ["ฆ่าตัวตาย","ฆาตกรรม","ป่วยตาย","ตายโหง"]
        const randomSex:string = SexMaster[Math.floor(Math.random() * SexMaster.length)];
        const randomAge:number = AgeMaster[Math.floor(Math.random() * AgeMaster.length)];
        const randomLocation:string = Location[Math.floor(Math.random() * Location.length)]
        const randomWhy_Die:string = Why_Die[Math.floor(Math.random() * Why_Die.length)]
        this.sex = randomSex;
        this.age = randomAge;
        this.location = randomLocation;
        this.why_die = randomWhy_Die;
    }

    CheckProfile():void {
        console.log("<===========Ghost============>");
        console.log("เขามีเพศ:"+ this.sex );
        console.log("เขามีอายุ:"+ this.age );
        console.log("เขาตายได้อย่างไร:"+ this.why_die );
        console.log("เขาอยู่ที่:"+ this.location );
        console.log("<============Ghost===========>");
    }
    
}

