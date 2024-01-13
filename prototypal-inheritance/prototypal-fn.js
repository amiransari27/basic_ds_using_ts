function Person(fname, lname){
    this.fname = fname
    this.lname = lname
}
Person.prototype.getFullName = function () {
    console.log(this.fname + " " + this.lname)
}

function SuperHero(fname, lname){
    Person.call(this, fname, lname)
    this.isSuperPower = true
}
SuperHero.prototype = Object.create(Person.prototype) // to break the ref form Person.prototype
SuperHero.prototype.crimeFight = function () {console.log("fighting")}
SuperHero.prototype.constructor = SuperHero


const p1 = new SuperHero("amir", "ansari")
console.log(p1)
p1.getFullName()
p1.crimeFight()

const p2 = new Person("inam", "ansari")
console.log(p2)
p2.getFullName()
p2.crimeFight()
