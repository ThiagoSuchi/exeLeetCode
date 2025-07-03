/*
    QUESTÃO - 2703. Retornar o comprimento dos argumentos passados
*/

type JSONValue = any | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    return args.length
}

console.log(argumentsLength({},false,[4,3],5,5,"Ola",5,{ "Nome": "Ana" }));
