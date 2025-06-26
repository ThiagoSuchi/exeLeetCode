/*
    QUESTÃO - 2620. Contador
*/

function createCounter(n: number): () => number {
    let count = n;

    return function() {
        return count++
    }
}

let n = 254;
const count = createCounter(n);

const calls = [
    'call','call','call',
    'call','call','call',
    'call','call','call',
    'call','call','call',
    'call','call','call'
];

const result = calls.map(() => count());

console.log(result);