/*
    QUESTÃO - 2634. Elementos de filtro da matriz
*/


type Fn = (n: number, i: number) => any;

function filter(arr: number[], fn: Fn): number[] {
    let filteredArr: number[] = [];

    for (let i in arr) {
        if (fn(arr[i], Number(i))) {
            filteredArr.push(arr[i]);
        }
    }

    return filteredArr;
}

let arr: number[] = [22, 34, 50, 10];
let fn2: Fn = (n, i) => n > 40 ; // Aqui tem um retorno implícito

console.log(filter(arr, fn2));
