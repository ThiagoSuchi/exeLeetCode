/*
    QUESTÃO - 2666. Permitir uma chamada de função
*/

type JSONValue2 = null | boolean | number | string | JSONValue2[] | { [key: string]: JSONValue2 };
type OnceFn = (...args: JSONValue2[]) => JSONValue2 | undefined

function once(fn: Function): OnceFn {
    let called = false

    return function (...args) {
        if (called) {
            return undefined
        }

        called = true
        return fn(...args);
    };
}


let fun: OnceFn = (a, b, c) => {
    if (
        typeof a === "number" && 
        typeof b === "number" && 
        typeof c === "number"
    ) {
        return a + b + c;
    }
    return undefined;
}

let onceFn = once(fun);

console.log(onceFn(1, 2, 3));
console.log(onceFn(1, 2, 3));
