/*
    QUESTÃO - 2629. Composição de Funções
*/

type F = (x: number) => number;

function compose(functions: F[]): F {

    return function (x) {
        if (functions.length === 0) return x

        return functions.reduceRight((acc, fn) => fn(acc), x)// Como o valor inicial é x = 4, o acc sera
    }
}

const func = compose([x => 1 + x, x => 2 * x]);// Me retorna function(x)
console.log(func(4));// function(x = 4)
 
