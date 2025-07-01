/*
    QUESTÃO - 2665. Contador II
*/

type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter2(init: number): Counter {
    let count = init

    return {
        increment: () => { return ++count },
        decrement: () => { return --count },
        reset: () => { 
            count = init
            return count
        }
    }
}

const count2 = createCounter2(3);

console.log(count2.increment());
console.log(count2.increment());
console.log(count2.decrement());
console.log(count2.reset());
