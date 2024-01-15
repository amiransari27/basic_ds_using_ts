{
    function *generateNumber(): Generator<number|string>{
        yield 0
        yield 1
        yield "amir"
    }

    for(let num of generateNumber()){
        console.log(num)
    }
}
