export class Human {
    sex: string;
    age: number;
    sixth_sense: boolean;
    location: string;

    constructor(Sex:string , Age:number, Sixth_Sense: boolean, Location:string) {
        this.sex = Sex;
        this.age = Age;
        this.sixth_sense = Sixth_Sense;
        this.location = Location;
    }

    CheckSex():boolean {
        let status:boolean = false
        if (this.sex === 'ชาย'){
            status = true
        }
        return status
    }
    CheckAge():boolean {
        let status:boolean = false
        if (this.age > 18){
            status = true
        }
        return status
    }
    CheckSixthSense():boolean {
        let status:boolean = false
        if (this.sixth_sense === true){
            status = true
        }
        return status
    }

    CheckProfile():void {
        console.log("เขามีเพศ: "+ this.sex );
        console.log("เขามีอายุ: "+ this.age +"\tผลคือ :"+this.CheckAge());
        console.log("เขามีสัมผัสที่ 6: "+ this.sixth_sense +"\tผลคือ :"+this.CheckSixthSense());
        console.log("เขาอยู่ที่: "+ this.location );
    }
    CheckCondition():boolean {
        if(this.CheckAge() && this.CheckSixthSense() ){
            return true       
        }
        else{
            return false
        }
    }
}

