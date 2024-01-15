{
    const obj = {
        name: "amir",
        age: "30",
        [Symbol.iterator]: function(){
            const keys = Object.keys(this)
            let length = keys.length
            let index = 0
            let done = false
            return  {
                next: () => {
                    let value = undefined
                    if (index >= length){
                        done = true
                    }else{
                         value = {[keys[index]] : this[keys[index]]}
                    }
                    const res = {
                        value: value,
                        done: done
                    }
                    index++
                    
                    return res
                }
            }
        }
    }

    for (let o of obj){
        console.log(o)
    }
}
