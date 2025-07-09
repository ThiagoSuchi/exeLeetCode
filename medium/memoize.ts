/*
    QUESTÃO - 2623. Memoize
*/

type Fun2 = (...params: number[]) => number

function memoize(fn: Fun2): Fun2 {
    const cache: Map<string, number> = new Map();
    
    return function(...args) {
        let key = JSON.stringify(args)

        if (cache.has(key)) {
            return cache.get(key)!
        }
        
        const response = fn(...args)// a, b
        cache.set(key, response)// key: a, b value: a + b
        return response
    }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});

memoizedFn(2, 3)
memoizedFn(2, 3)
memoizedFn(2, 10)
memoizedFn(4, 3)

console.log(callCount); // 1 
