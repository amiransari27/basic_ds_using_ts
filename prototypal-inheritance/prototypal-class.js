class Person{
    constructor(fname, lname){
        this.fname = fname
        this.lname = lname
    }
    
    sayMyName(){
        console.log(this.fname + " "+ this.lname)
    }
}

class SuperHero extends Person{
    constructor(fname, lname){
        super(fname, lname)
        this.isSuperPower = true
    }
    
    crimeFight(){
        console.log("fighting")
    }
}

const p0 = new SuperHero("inam", "ansari")
console.log(p0)
p0.sayMyName()
p0.crimeFight()

const p1 = new Person("amir", "ansari")
console.log(p1)
p1.sayMyName()
