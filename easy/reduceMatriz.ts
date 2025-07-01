/*
    QUESTÃO - 2626. Array Reduce Transformation
*/


type Fn2 = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn2, init: number): number {
    let result: number = 0;

    if (nums.length === 0) return init
    
    for (let i in nums) {    
        result = fn(init, nums[i]);
        init = result
    }

    return result
}

let arrNums: Array<number> = [];
let fn3: Fn2 = function soma(accum, curr) { return accum + curr * curr }

let result = reduce(arrNums, fn3, 100);

console.log(result);
