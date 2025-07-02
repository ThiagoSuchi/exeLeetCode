/*
    QUESTÃO - 2629. Composição de Funções
*/

type F = (x: number) => number;

function compose(functions: F[]): F {

    return function (x) {
        if (functions.length === 0) {
            return x
        }

        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x)
        }

        return x
    }
}

const func = compose([x => 1 + x, x => 2 * x, x => x * x]);// Me retorna function(x)
console.log(func(4));// function(x = 4)
 
