/*
    QUESTÃO - 2635. Aplicar transformação sobre cada elemento da matriz
*/

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    let array: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        array.push(fn(arr[i], i))
    }

    return array
}

let array = [2,3,4]
let fn = function plusOn(n: number, i: number) { return n + i }

console.log(map(array, fn));
