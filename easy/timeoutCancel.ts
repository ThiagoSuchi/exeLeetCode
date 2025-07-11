/*
    QUESTÃO - 2715. Timeout cancellation
*/

type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

type Fn =  (...args: JSONValue[]) => void;

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
    const time = setTimeout(() => fn(...args), t);

    const timeClear = () => {
        clearTimeout(time);
    };

    return timeClear;
}

let result: Object[] = [];

const fn = (x: number) => x * 2;
const args = [8], time = 20, cancelTimeMs = 50;

const start = performance.now();

const log = (...argsArr: JSONValue[]) => {
    const diff = Math.floor(performance.now() - start);
    result.push({ "time": diff, "returned": fn(...argsArr as [number]) })
}

const cancel = cancellable(log, args, time);
const maxT = Math.max(time, cancelTimeMs);
          
setTimeout(cancel, cancelTimeMs);

setTimeout(() => {
    console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15)
